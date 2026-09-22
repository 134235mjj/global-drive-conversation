const test=require('node:test'),assert=require('node:assert/strict'),fs=require('fs'),vm=require('vm');
const C=require('../core.js');const context={window:{}};vm.createContext(context);vm.runInContext(fs.readFileSync('data.js','utf8'),context);const D=context.window.GD_DATA;
test('32 complete, distinct, locally recorded questions with usable per-topic replies',()=>{
 assert.equal(D.questions.length,32);assert.equal(new Set(D.questions.map(q=>q.id)).size,32);assert.equal(new Set(D.questions.map(q=>q.script)).size,32);
 for(const q of D.questions){assert.equal(q.facts.length,6);assert.equal(q.topics.length,6);assert.ok(q.facts.some(f=>!f.correct));assert.ok(q.facts.every(f=>f.evidence));assert.ok(q.topics.every(t=>t.reply&&t.groups.length===2&&t.example));const buf=fs.readFileSync(q.audio);assert.equal(buf.toString('ascii',0,4),'RIFF');assert.ok(buf.length>10000);}
});
test('every scene: all recordings are unique across four rounds, then drawing stops',()=>{
 let used=[];
 for(let scene=0;scene<4;scene++){const seen=[];for(let i=0;i<4;i++){assert.equal(C.remaining(D.questions,scene,used),4-i);const pair=C.draw(D.questions,scene,used);const qs=pair.map(x=>D.questions.find(q=>q.id===x.id));assert.equal(qs[0].customer.country,'TH');assert.notEqual(qs[1].customer.country,'TH');assert.ok(pair.every(p=>!used.includes(p.id)));for(const p of pair){assert.equal(new Set(p.factOrder).size,6);assert.equal(new Set(p.topicOrder).size,6)}seen.push(...qs);used.push(...pair.map(x=>x.id));}assert.equal(new Set(seen.map(q=>q.script)).size,8);assert.equal(new Set(seen.map(q=>q.audio)).size,8);assert.equal(C.remaining(D.questions,scene,used),0);assert.throws(()=>C.draw(D.questions,scene,used),/已全部练习/);}
});
test('scenario scripts, facts and inquiry topics follow each selling stage',()=>{
 const expected=[
  {words:['welcoming','comparing'],topics:['passengers','use']},
  {words:['recommend','practical benefits','test drive'],topics:['testdrive']},
  {words:['concern','warranty','after-sales support'],topics:['compare','service','warranty']},
  {words:['contract','payment arrangements','delivery time'],topics:['decision','payment','delivery','contract']}
 ];
 for(const q of D.questions){const spec=expected[q.scene],script=q.script.toLowerCase();for(const word of spec.words)assert.ok(script.includes(word),`${q.id}: ${word}`);for(const topic of spec.topics)assert.ok(q.topics.some(t=>t.id===topic),`${q.id}: ${topic}`);assert.ok(q.translation.length>30);assert.equal(q.facts.filter(f=>f.correct).length,4);}
 const models={'务实家庭型':'Family E','科技先锋型':'Smart E','商务精英型':'Comfort E'};
 for(const q of D.questions.filter(q=>q.scene===1||q.scene===3)){assert.equal(q.recommendedModel,models[q.persona],q.id);assert.ok(q.context.includes(q.persona)&&q.context.includes(q.recommendedModel),q.id);}
});
test('correct objective selections score 50, all six cannot obtain full marks',()=>{
 for(const q of D.questions){const t=q.topics.find(t=>t.status==='open'),good=q.facts.filter(f=>f.correct).map(f=>f.id);assert.equal(C.score(q,good,t.id,t.example).known,50);assert.equal(C.score(q,q.facts.map(f=>f.id),t.id,t.example).known,25);assert.equal(C.score(q,[],t.id,t.example).known,0);assert.equal(C.score(q,[...good,...good],t.id,t.example).known,50);}
});
test('every authored open-topic example is recognized and scores 50',()=>{
 for(const q of D.questions)for(const t of q.topics.filter(t=>t.status==='open')){const r=C.score(q,[],t.id,t.example);assert.equal(r.ask,50,`${q.id}/${t.id}: ${r.notes}`);assert.equal(r.reply,t.reply);}
});
const q=D.questions[0];
test('portrait clients leave passenger details for students to clarify',()=>{
 for(const item of D.questions.filter(x=>x.scene===0)){
  assert.doesNotMatch(item.script,/have not (?:explained|told|shared).*(?:travel|family|passenger)/i,item.id);
  assert.doesNotMatch(item.translation,/没有说明通常和谁|还没有说明通常和谁/,item.id);
  assert.ok(item.facts.some(f=>f.correct&&f.text==='仍在比较电动汽车'),item.id);
 }
});
test('listening scripts do not announce omitted routine or competitor details',()=>{
 for(const item of D.questions.filter(x=>x.scene===1))assert.doesNotMatch(item.script,/not told you all the details/i,item.id);
 for(const item of D.questions.filter(x=>x.scene===2))assert.doesNotMatch(item.script,/not shared which model/i,item.id);
});
test('synonyms accepted; statement/keyword salad/wrong-topic/negative request do not reveal hidden answer',()=>{
 for(const text of ['What is your daily mileage?','Could you tell me how many kilometres you drive per day?','Hello! How far do you drive on a typical day?'])assert.equal(C.score(q,[],'distance',text).ask,50,text);
 for(const text of ['daily mileage','mileage distance each day car','What car daily mileage please?','I know your daily mileage.','What budget do you have in mind?','Please do not tell me your daily mileage.','aaaaaaa'])assert.equal(C.score(q,[],'distance',text).recognized,false,text);
});
test('known topic and identified grammar errors receive reductions; empty response zero',()=>{
 const known=q.topics.find(t=>t.status==='known');assert.ok(C.score(q,[],known.id,known.example).ask<50);assert.ok(C.score(q,[],'passengers','How much people usually travel with you?').ask<50);assert.ok(C.score(q,[],'charging','Can you to charge the car at home?').ask<50);assert.equal(C.score(q,[],'budget','').ask,0);
});
test('rude language produces polite boundary reply and loses effectiveness',()=>{
 const r=C.score(q,[],'budget','Hurry up. What budget do you have in mind?');assert.equal(r.parts[3],0);assert.match(r.reply,/polite/);
});
test('client replies to the actual question even when the selected topic or phrasing differs',()=>{
 const daily=C.score(q,[],'budget','Could you tell me how far you usually drive each day?');
 assert.equal(daily.reply,q.replyBank.distance);assert.ok(daily.ask<50);
 assert.equal(C.score(q,[],'passengers','Who usually travels with you?').reply,q.replyBank.passengers);
 assert.equal(C.score(q,[],'budget','What is the price of the car?').reply,q.replyBank.price);
 assert.equal(C.score(q,[],'distance','Hello, welcome! What is your budget?').reply,q.replyBank.budget);
 const unknown=C.score(q,[],'budget','Could you explain the blue paint?').reply;
 assert.match(unknown,/blue paint/);assert.notEqual(unknown,q.replyBank.budget);
 assert.match(C.score(q,[],'budget','Could you tell me more about it?').reply,/more about it/);
 const other=D.questions.find(x=>x.id==='portrait-pim');
 assert.notEqual(C.score(q,[],'budget','What budget do you have in mind?').reply,C.score(other,[],'budget','What budget do you have in mind?').reply);
 for(const item of D.questions)assert.ok(Object.values(item.replyBank).every(reply=>typeof reply==='string'&&reply.length>10),item.id);
});
