/* Pure rules shared by browser and Node tests. No network or model calls. */
(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.GDCore=api;})(typeof window==='undefined'?globalThis:window,function(){
 'use strict';
 const round=n=>Math.round(n*10)/10;
 function shuffle(items,rng=Math.random){const out=items.slice();for(let i=out.length-1;i>0;i--){const j=Math.floor(rng()*(i+1));[out[i],out[j]]=[out[j],out[i]];}return out;}
 function remaining(questions,scene,used=[]){const available=questions.filter(q=>q.scene===scene&&!used.includes(q.id));return Math.min(available.filter(q=>q.customer.country==='TH').length,available.filter(q=>q.customer.country!=='TH').length);}
 function draw(questions,scene,used=[],rng=Math.random){const pool=questions.filter(q=>q.scene===scene);if(!pool.some(q=>q.customer.country==='TH')||!pool.some(q=>q.customer.country!=='TH'))throw Error('题库缺少客户分组');if(!remaining(questions,scene,used))throw Error('该场景题目已全部练习');return ['TH','OTHER'].map(country=>{const available=pool.filter(q=>(country==='TH'?q.customer.country==='TH':q.customer.country!=='TH')&&!used.includes(q.id));const q=shuffle(available,rng)[0];return {id:q.id,factOrder:shuffle(q.facts.map(f=>f.id),rng),topicOrder:shuffle(q.topics.map(t=>t.id),rng)};});}
 function normalize(s){return String(s||'').toLowerCase().replace(/[’‘]/g,"'").replace(/\b(can't|cannot)\b/g,'can not').replace(/\b(don't)\b/g,'do not').replace(/[^a-z0-9?'\s-]/g,' ').replace(/\s+/g,' ').trim();}
 function hasTerm(text,term){return new RegExp('\\b'+term.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')).test(text);}
 const replyIntents=[
  ['price',/\b(how much is|car price|vehicle price|model price|price of (?:the )?(?:car|vehicle|model)|written price|price quote|discount|quotation)\b/],
  ['range',/\b(car|vehicle|model|battery)\b.{0,24}\brange\b|\brange\b.{0,24}\b(car|vehicle|model|battery)\b/],
  ['passengers',/\b(how many|who|which)\b.{0,45}\b(people|passengers|family|children|adults|travels?|rides?)\b|\b(family members|family size|number of passengers|how many children|household members)\b/],
  ['distance',/\b(daily mileage|driving mileage|how far|how many (?:kilometres|kilometers|miles)|distance|kilometres per day|kilometers per day)\b/],
  ['charging',/\b(charg|charger|plug)\w*\b/],
  ['compare',/\b(other model|other car|another offer|competitor|comparing with|compare it with)\b/],
  ['warranty',/\b(warrant|battery cover|battery protection|guarantee)\w*\b/],
  ['service',/\b(after-sales|service support|repair support|repair centre|service centre)\b/],
  ['payment',/\b(pay|payment|deposit|instalment|installment|financing)\w*\b/],
  ['delivery',/\b(deliver|delivery|pick up|collect the car|take delivery|receive the car)\w*\b/],
  ['contract',/\b(contract|agreement|signing|terms and conditions)\b/],
  ['contact',/\b(contact|call you|email you|message you|reach you)\b/],
  ['testdrive',/\b(test drive|drive the car|try the car)\b/],
  ['assist',/\b(driv(?:ing|er) assist|parking assist|lane assist)\w*\b/],
  ['entertainment',/\b(entertainment|music|infotainment|media|in-car screen)\b/],
  ['comfort',/\b(comfort|seat|quiet cabin|long journey)\w*\b/],
  ['decision',/\b(ready to (?:buy|proceed|move forward)|purchase decision|move forward with|ready to sign)\b/],
  ['budget',/\b(budget|afford|spend|price range|comfortable paying|maximum amount)\b/],
  ['value',/\b(value|overall cost|total cost|benefit|worth the price)\w*\b/],
  ['priority',/\b(priority|priorities|most important feature|which features matter|what matters most)\b/],
  ['use',/\b(what (?:will|do|would) you (?:use|need) (?:the )?(?:car|vehicle) for|main purpose|primary use|use the car for|commute)\b/]
 ];
 function responseIntent(request,topic,q){const direct=replyIntents.find(([id,pattern])=>pattern.test(request)&&q.replyBank?.[id]);if(direct)return direct[0];const options=q.topics.map(t=>({id:t.id,hits:t.groups.filter(group=>group.some(term=>hasTerm(request,term))).length})).filter(x=>x.hits===2).sort((a,b)=>b.hits-a.hits);if(options.length===1)return options[0].id;if(topic&&options.some(x=>x.id===topic.id))return topic.id;return null;}
 function customerReply(q,request,topic,rude,negated,asks){if(rude)return 'Could we keep our conversation polite, please?';const intent=responseIntent(request,topic,q);if(intent&&!negated){if(asks)return q.replyBank[intent];return `Are you asking about ${intent.replace('testdrive','the test drive')}? Please ask me the detail you need.`;}const excerpt=request.slice(0,72).replace(/["']/g,'').trim();return negated?'I understand you do not want that detail. What would you like to ask instead?':`I heard you ask about "${excerpt||'the car'}". Could you clarify which detail you would like me to answer?`;}
 function score(q,selection,topicId,answer){
  const selected=new Set(selection),correct=q.facts.filter(f=>f.correct),hits=correct.filter(f=>selected.has(f.id)).length,wrong=q.facts.filter(f=>!f.correct&&selected.has(f.id)).length;
  const known=round(Math.max(0,50*(hits-wrong)/correct.length));const topic=q.topics.find(t=>t.id===topicId),text=normalize(answer),words=text.match(/[a-z]+/g)||[];
  // Inspect the final actual question/request, not just a keyword in an introductory statement.
  const chunks=String(answer||'').split(/[.!?\n]+/).map(normalize).filter(Boolean);
  const opener=/^(?:(?:hello|hi|thank you|thanks|please)\s+)*(?:(?:how|what|when|where|which|why)\b|(?:can|could|would|will|may|do|does|is|are|have|has)\s+(?:you|your|we|the|there)\b|(?:please\s+)?(?:tell|explain|describe|clarify)\b)/;
  const request=chunks.filter(c=>opener.test(c)).pop()||text;
  const requestWords=request.match(/[a-z]+/g)||[];
  const questionLike=opener.test(request)&&requestWords.length>=4&&/\b(you|your|we|car|vehicle|features|people|passengers|budget|details|there|it|model)\b/.test(request)&&/\b(do|does|did|is|are|can|could|would|will|may|have|has|should|tell|explain|describe|clarify|travel|ride|matter)\b/.test(request);
  const groupHits=topic?topic.groups.filter(group=>group.some(term=>hasTerm(request,term))).length:0;
  const matches=!!topic&&groupHits===topic.groups.length;
  const invalid=words.length<3||!/[a-z]{2}/i.test(answer)||/(.)\1{5}/.test(text)||new Set(words).size<3;
  const rude=/\b(stupid|idiot|shut up|hurry up|buy now|you must buy)\b/.test(text);
  const errors=[];
  if(/\bhow (?:much|many) (?:people|passengers|children|adults)\b/.test(request)&&/\bhow much\b/.test(request))errors.push('人数通常使用 how many，而不是 how much。');
  if(/\bdoes you\b|\bdo you (?:drives|wants|needs|prefers)\b/.test(request))errors.push('检查 do/does 与主语搭配；do you 后通常使用动词原形。');
  if(/\bcan you to\b|\bcould you to\b|\bwould you to\b/.test(request))errors.push('情态动词后接动词原形，此处不需要 to。');
  const negated=/\b(?:do not|not|never) (?:tell|ask|explain|want to know)\b/.test(request);
  const valid=!invalid&&questionLike&&!negated;
  const topicScore=invalid||!topic?0:topic.status==='open'?10:topic.status==='secondary'?5:0;
  const precision=invalid||!questionLike||negated?0:matches?20:groupHits?10:0;
  const structure=valid?Math.max(0,10-errors.length*5):0;
  const effectiveness=valid&&matches&&!rude?(topic.status==='open'?10:topic.status==='secondary'?5:0):0;
  const ask=topicScore+precision+structure+effectiveness;
  const notes=[topic?topic.reason:'尚未选择追问主题。'];
  if(invalid)notes.push('输入内容不足以形成可评价的英语表达。');
  else if(!questionLike||negated)notes.push('未识别到完整的英语问句或请求。请把主题词组织成一个具体问题；也可能是当前规则未覆盖此表达。');
  else if(!matches)notes.push('未完整识别所选主题的必要信息要素，请确认提问与所选主题一致。');
  else notes.push('已识别到与所选主题匹配的具体追问。');
  if(rude)notes.push('请避免催促或冒犯表达，以礼貌方式沟通。');notes.push(...errors);
  const asks=opener.test(request)||String(answer||'').trim().endsWith('?');
  const reply=customerReply(q,request,topic,rude,negated,asks);
  return {known,ask,total:round(known+ask),hits,wrong,parts:[topicScore,precision,structure,effectiveness],notes,reply,example:topic?.example||'',recognized:valid&&matches,ruleVersion:2};
 }
 function title(scene,total){return total>=90?scene.rank:total>=80?'沟通进阶能手':total>=60?'销售沟通学员':'沟通起步学员';}
 return {draw,remaining,shuffle,score,title,normalize};
});
