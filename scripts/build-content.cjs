// Authorable teaching fixtures. All vehicles, prices and policies are fictional.
const fs = require('fs');
const scenes = [
  {id:'portrait',title:'识别客户画像',en:'BREAK THE ICE',task:'礼貌问候并欢迎客户，听辨用车场景与偏好；追问家庭成员或具体用途，初步判断务实家庭型、科技先锋型或商务精英型，注意跨文化礼仪。',rank:'客户洞察达人'},
  {id:'recommend',title:'匹配需求与汽车推介',en:'FIND THE RIGHT MATCH',task:'依据接待记录中的客户画像，选择匹配的模拟新能源汽车。针对家庭型介绍空间、续航与性价比；科技型介绍驾驶辅助与车载娱乐；商务型介绍舒适度、高端配置与品牌形象。用清楚的英语说明卖点，并追问尚未明确的适配条件。',rank:'车型推介专家'},
  {id:'negotiate',title:'价格谈判与化解顾虑',en:'BUILD TRUST',task:'耐心听清价格、配置或服务异议；礼貌澄清比较依据与保障需求，结合产品价值、售后服务和技术实际价值回应，避免直接冲突与未经证实的承诺，推动继续沟通。',rank:'谈判沟通高手'},
  {id:'close',title:'达成购车意向促成成交',en:'MAKE THE NEXT MOVE',task:'总结匹配客户需求的核心优势，再确认购买意愿；说明核对合同、付款安排及提车时间等步骤，用礼貌英语确认具体安排并结束接待。',rank:'销冠能手'}
];
const topics = {
 distance:{label:'每日行驶里程',groups:[['how far','distance','mileage','kilomet','kilometer','kilometre','miles'],['daily','each day','per day','every day','a day','typical day','usually']],example:'How far do you usually drive each day?'},
 passengers:{label:'通常乘坐人数',groups:[['how many','number of'],['people','passengers','family members','children','adults','travel with']],example:'How many people usually travel with you?'},
 charging:{label:'固定充电条件',groups:[['charg','plug'],['home','work','parking','access','available','install','where','place']],example:'Can you charge the car at home?'},
 budget:{label:'可接受的预算范围',groups:[['budget','spend','afford','price range','comfortable paying','pay for'],['what','how much','range','maximum','limit','amount']],example:'What budget do you have in mind?'},
 priority:{label:'最重视的配置',groups:[['feature','equipment','function','priority','priorities'],['important','most','prefer','matter','value','priority','priorities']],example:'Which features are most important to you?'},
 use:{label:'主要用车用途',groups:[['car','vehicle','driv'],['use','purpose','work','business','commut','trip']],example:'What will you mainly use the car for?'},
 compare:{label:'竞品比较依据',groups:[['compar','other car','other model','competitor','alternative'],['price','cost','model','offer','include','feature']],example:'Which other model are you comparing the price with?'},
 warranty:{label:'电池保障方面的顾虑',groups:[['battery','warranty','cover','guarantee'],['concern','worri','worry','important','know','matter','issue','question']],example:'What concerns do you have about battery coverage?'},
 payment:{label:'偏好的付款安排',groups:[['pay','deposit','instalment','installment','financ'],['prefer','plan','how','arrange','option','explain','would like']],example:'How would you prefer to arrange payment?'},
 delivery:{label:'希望的交付时间',groups:[['deliver','collect','pick up','receive','take delivery'],['when','date','time','soon','week','month']],example:'When would you like to take delivery?'},
 contract:{label:'需解释的合同事项',groups:[['contract','agreement','terms','sign'],['explain','clarif','question','understand','detail','know']],example:'Which contract details would you like me to explain?'},
 contact:{label:'后续联系偏好',groups:[['contact','call','email','message','reach'],['prefer','how','when','best','would like']],example:'How would you prefer us to contact you?'}
 ,service:{label:'售后服务需求',groups:[['service','support','repair','after-sales'],['need','important','expect','concern','help','prefer']],example:'What after-sales support is most important to you?'},
 testdrive:{label:'试驾体验重点',groups:[['test drive','drive','try'],['feature','check','experience','focus','like','want']],example:'Which features would you like to experience on a test drive?'},
 assist:{label:'驾驶辅助使用需求',groups:[['driving assistance','driver assistance','assist'],['feature','important','use','prefer','need']],example:'Which driving assistance features are most important to you?'},
 entertainment:{label:'车载娱乐偏好',groups:[['entertainment','music','screen','media'],['feature','prefer','use','important','want']],example:'Which in-car entertainment features would you prefer?'},
 comfort:{label:'长途舒适需求',groups:[['comfort','seat','cabin'],['important','need','prefer','journey','travel']],example:'Which comfort features matter most on your long journeys?'},
 decision:{label:'是否准备进入购车流程',groups:[['ready','proceed','move forward','decision','purchase'],['are you','would you','when','prefer','like']],example:'Would you be ready to move forward after we review the terms?'},
 value:{label:'价值比较依据',groups:[['value','price','cost','benefit'],['compare','important','matter','expect','consider']],example:'Which benefits matter most when you compare the total cost?'}
};
const customers = [
 {id:'narin',name:'Narin',country:'TH',countryName:'泰国',city:'Bangkok',persona:'务实家庭型',use:'I commute to work and take my children out on weekends.',priority:'Safety and rear-seat space matter most to me.',people:'Four people, including two children.',distance:'About sixty kilometres each day.',charge:'I have my own parking space, but no charger yet.',budget:'Around eight hundred thousand baht.',compare:'A smaller electric hatchback with fewer safety features.',warranty:'I worry about the cost of battery repairs after the warranty ends.',payment:'I prefer a deposit followed by monthly instalments.',delivery:'Before the end of next month.',contract:'I would like the deposit and cancellation terms explained.',contact:'Email is best for me.',concern:'The total price seems higher than another offer I received.'},
 {id:'pim',name:'Pim',country:'TH',countryName:'泰国',city:'Chiang Mai',persona:'科技先锋型',use:'I drive to my design studio and enjoy trying new technology.',priority:'Phone connectivity and helpful driving assistance matter most to me.',people:'Usually two adults.',distance:'About thirty kilometres on a normal day.',charge:'My building has shared chargers, but availability changes.',budget:'Around one million baht.',compare:'An electric sedan that includes connected services for a limited time.',warranty:'I want to know which battery faults are covered.',payment:'I would like to compare a full payment with instalments.',delivery:'In about six weeks.',contract:'I need to understand which connected services require a subscription.',contact:'A text message would be convenient.',concern:'I am unsure whether the technology package is worth the extra cost.'},
 {id:'anan',name:'Anan',country:'TH',countryName:'泰国',city:'Phuket',persona:'商务精英型',use:'I drive visiting business partners to meetings.',priority:'A quiet cabin and comfortable seats matter most to me.',people:'Usually three adults, including me.',distance:'Around ninety kilometres each day.',charge:'There is a charger at my office, but none at home.',budget:'Around one and a half million baht.',compare:'A larger sedan with a quieter cabin.',warranty:'I am concerned about how long battery repairs could take.',payment:'My company needs an invoice before arranging payment.',delivery:'Before a business visit in three weeks.',contract:'Please explain the company invoice and delivery terms.',contact:'Please call me in the afternoon.',concern:'I want to know whether after-sales support justifies the price.'},
 {id:'mali',name:'Mali',country:'TH',countryName:'泰国',city:'Khon Kaen',persona:'务实家庭型',use:'I take my parents to appointments and carry supplies for our shop.',priority:'Easy access and a practical luggage area matter most to me.',people:'Usually three people, including my parents.',distance:'About forty-five kilometres each day.',charge:'We use street parking, so I need public charging nearby.',budget:'Around seven hundred thousand baht.',compare:'A used electric car with a shorter warranty.',warranty:'I worry about battery health when I keep the car for many years.',payment:'I prefer to pay in full if the total cost is clear.',delivery:'Within two months.',contract:'I would like a clear list of all fees.',contact:'Please send me a message first.',concern:'I am concerned about extra fees beyond the advertised price.'},
 {id:'aina',name:'Aina',country:'MY',countryName:'马来西亚',city:'Kuala Lumpur',persona:'务实家庭型',use:'I drive to work and visit my parents outside the city.',priority:'Useful range and enough room for family luggage matter most to me.',people:'Five family members on weekend trips.',distance:'About seventy kilometres each weekday.',charge:'I can install a charger in my garage after getting approval.',budget:'Around one hundred and twenty thousand ringgit.',compare:'A hybrid with a lower starting price.',warranty:'I want to understand the battery warranty mileage limit.',payment:'I would like monthly instalments with a manageable deposit.',delivery:'Before our holiday in two months.',contract:'Please explain the finance conditions.',contact:'Email would help me keep a written record.',concern:'The monthly cost may be higher than I planned.'},
 {id:'budi',name:'Budi',country:'ID',countryName:'印度尼西亚',city:'Jakarta',persona:'科技先锋型',use:'I commute across the city and enjoy connected devices.',priority:'Clear navigation and reliable phone integration matter most to me.',people:'Usually one person, sometimes two.',distance:'About eighty kilometres per day.',charge:'My office has chargers that staff can book.',budget:'Around five hundred million rupiah.',compare:'An electric car with a larger screen but different software.',warranty:'I want to know how software updates relate to battery protection.',payment:'I would like to understand the deposit first.',delivery:'Next month, after my current lease ends.',contract:'Please explain what is included in the software package.',contact:'A message during my lunch break is best.',concern:'I do not want unexpected charges for software features.'},
 {id:'linh',name:'Linh',country:'VN',countryName:'越南',city:'Da Nang',persona:'商务精英型',use:'I visit clients and sometimes travel between cities.',priority:'Comfort on long journeys and a professional appearance matter most to me.',people:'Usually two or three adults.',distance:'Around one hundred kilometres on working days.',charge:'There is no home charger, but a public station is near my office.',budget:'Around nine hundred million dong.',compare:'A sedan with a lower price but less equipment.',warranty:'I am worried about finding an authorised repair centre when travelling.',payment:'I am considering a company purchase with full payment.',delivery:'Within six weeks.',contract:'I need the service coverage and delivery conditions explained.',contact:'Please email the details before calling.',concern:'I want to be sure the service network meets my travel needs.'},
 {id:'miguel',name:'Miguel',country:'PH',countryName:'菲律宾',city:'Cebu',persona:'务实家庭型',use:'I take my children to school and make deliveries for my small business.',priority:'Low running costs and flexible storage space matter most to me.',people:'Four people when I travel with my family.',distance:'About fifty-five kilometres each day.',charge:'I have a parking space and need advice on safe charger installation.',budget:'Around one and a half million pesos.',compare:'A petrol vehicle with more storage but higher fuel costs.',warranty:'I want to understand which maintenance requirements affect the warranty.',payment:'I prefer instalments, depending on the final monthly amount.',delivery:'Before school starts in five weeks.',contract:'Please explain the payment schedule and required documents.',contact:'A phone call in the early evening is best.',concern:'I need to compare the purchase price with long-term running costs.'}
];
const details=[
 ['工作通勤及周末带孩子出行','重视安全和后排空间','认为总价高于收到的另一份报价'],
 ['往返设计工作室并喜欢新技术','重视手机互联和驾驶辅助','不确定科技配置包是否值得额外花费'],
 ['接送商务伙伴参加会议','重视安静座舱和舒适座椅','想确认售后支持是否值得当前价格'],
 ['接送父母就医并为商店运送物资','重视上下车便利和实用行李空间','担心广告价格之外还有额外费用'],
 ['工作通勤并到城外探望父母','重视实用续航和家庭行李空间','担心每月支出超出计划'],
 ['跨城内通勤并喜欢互联设备','重视清晰导航和可靠的手机互联','不希望软件功能产生意外费用'],
 ['拜访客户并有跨城市出行','重视长途舒适性和专业形象','想确认服务网络适合出行需求'],
 ['接送孩子上学并为小生意送货','重视低使用成本和灵活储物空间','需要对比购车价格与长期使用成本']
];
customers.forEach((c,i)=>{[c.useZh,c.priorityZh,c.concernZh]=details[i]});
const profiles={
 '务实家庭型':{model:'Family E',feature:'a flexible cabin, practical range and overall value',zh:'灵活空间、实用续航和综合性价比',focus:'space, daily range and total ownership cost'},
 '科技先锋型':{model:'Smart E',feature:'driving assistance, connected controls and in-car entertainment',zh:'驾驶辅助、智能互联和车载娱乐',focus:'driving assistance and in-car entertainment'},
 '商务精英型':{model:'Comfort E',feature:'a quiet cabin, premium seating and a professional image',zh:'安静座舱、高端座椅和专业形象',focus:'comfort, premium equipment and professional image'}
};
const questions=[];
for(let si=0;si<scenes.length;si++)for(const [ci,c] of customers.entries()){
 const id=`${scenes[si].id}-${c.id}`;
 let script, translation, facts, context, chosen, known;
 const p=profiles[c.persona];
 const fact=(text,evidence,correct=true)=>({text,evidence,correct});
 if(si===0){
  script=`Good morning. Thank you for welcoming me. I live in ${c.city}. ${c.use} ${c.priority} I am still comparing electric cars. Could you help me find a suitable option?`;
  translation=`早上好，谢谢您的接待。我住在${c.city}。${c.useZh}，${c.priorityZh}。我仍在比较电动汽车。您能帮我找到合适的选择吗？`;
  facts=[fact('客户住在 '+c.city,`I live in ${c.city}.`),fact(c.useZh,c.use),fact(c.priorityZh,c.priority),fact('仍在比较电动汽车','I am still comparing electric cars.'),fact('客户已明确告知家庭乘坐人数','语音未说明通常的乘坐人数。',false),fact('客户已选定购车车型','I am still comparing electric cars.',false)];
  context=`首次接待：${c.name}刚进入展厅。先用英语礼貌问候、欢迎并表示愿意了解需求；结合用车场景和偏好推断画像，追问家庭成员或尚不明确的使用条件。不要根据国籍推断消费偏好。`;chosen=['passengers','distance','charging','budget','use','priority'];known=['use','priority'];
 } else if(si===1){
  script=`Thank you for listening to my needs. ${c.use} ${c.priority} For my next electric car, I want you to recommend a model that fits ${p.focus}. I would appreciate a clear explanation of its practical benefits. I have not arranged a test drive.`;
  translation=`谢谢您倾听我的需求。${c.useZh}，${c.priorityZh}。对于下一辆电动汽车，我希望您推荐一款符合${p.zh}需求的车型，并清楚说明实际益处。我尚未安排试驾。`;
  facts=[fact(c.useZh,c.use),fact(c.priorityZh,c.priority),fact('希望得到匹配需求的车型推荐',`I want you to recommend a model that fits ${p.focus}.`),fact('尚未安排试驾','I have not arranged a test drive.'),fact('客户已说明全部日常使用细节','语音未说明全部日常使用细节。',false),fact('客户已确认某车型的具体续航和价格','语音未确认任何具体车型参数或价格。',false)];
  context=`前序接待记录：${c.persona}。可选教学模拟车型：Family E（空间、实用续航与性价比）、Smart E（驾驶辅助、互联与娱乐）、Comfort E（舒适座舱、高端配置与商务形象）。请据画像选择车型，用易懂英语介绍卖点，再追问适配条件；没有给出的具体参数不要自行承诺。`;
  chosen=c.persona==='务实家庭型'?['distance','passengers','charging','budget','testdrive','priority']:c.persona==='科技先锋型'?['assist','entertainment','charging','testdrive','budget','priority']:['comfort','passengers','distance','testdrive','budget','priority'];known=['priority'];
 } else if(si===2){
  script=`I appreciate your explanation of ${p.feature}, but I still have a concern. ${c.concern} I have seen another offer. I also want to understand the battery warranty and after-sales support. I am open to a fair comparison if you can explain the value without pressuring me.`;
  translation=`我感谢您对${p.zh}的介绍，但仍有顾虑。${c.concernZh}。我看到过另一份报价。我也想了解电池保修和售后支持。如果您能不施压地说明产品价值，我愿意公平比较。`;
  facts=[fact(c.concernZh,c.concern),fact('已看到另一份报价','I have seen another offer.'),fact('希望了解电池保修与售后支持','I also want to understand the battery warranty and after-sales support.'),fact('愿意进行不施压的价值比较','I am open to a fair comparison if you can explain the value without pressuring me.'),fact('已说明竞品的具体车型','语音未说明另一份报价所涉及的具体车型。',false),fact('已接受所有价格与服务条件','客户仍有顾虑，并没有接受全部条件。',false)];
  context=`前序记录：${c.persona}客户考虑 ${p.model}，重视${p.zh}。先认可顾虑，询问具体比较依据或保障需求，再用价值、技术实际用途与售后资料回应；不要争辩或承诺未核实的优惠与保修政策。`;
  chosen=['compare','warranty','service','budget','value','delivery'];known=[];
 } else {
  script=`The ${p.model} seems to fit my needs. ${c.use} I value ${p.feature}. I would like to move forward if the final terms are clear. Before we agree, please explain the contract, payment arrangements and expected delivery time. I have not signed or paid a deposit yet. Could we confirm the next steps together?`;
  translation=`${p.model} 看起来符合我的需要。${c.useZh}，我重视${p.zh}。如果最终条款清楚，我愿意推进购买。达成共识前，请解释合同、付款安排和预计提车时间。我尚未签约或支付订金。我们能否一起确认后续步骤？`;
  facts=[fact('认为推荐车型符合需求',`The ${p.model} seems to fit my needs.`),fact(c.useZh,c.use),fact('希望了解合同、付款和交付','Please explain the contract, payment arrangements and expected delivery time.'),fact('尚未签约或支付订金','I have not signed or paid a deposit yet.'),fact('已经同意最终合同条款','客户表示需先明确最终条款。',false),fact('具体提车日期已经确定','客户希望了解预计交付时间，未确定日期。',false)];
  context=`前序记录：为${c.persona}客户介绍 ${p.model}，核心优势为${p.zh}，贴合${c.useZh}。先总结个性化匹配点，再确认购买意愿；清楚说明核对合同、付款和安排交付，礼貌结束接待。具体金额和日期需双方确认。`;
  chosen=['decision','payment','delivery','contract','contact','priority'];known=['priority'];
 }
 const extraReplies={service:'I would like clear repair support and an authorised service contact.',testdrive:'I would like to experience the features that matter to my daily use.',assist:'I would like help with parking and safer driving on busy roads.',entertainment:'I would like clear navigation, music and phone integration.',comfort:'I value quiet travel and supportive seats on longer journeys.',decision:'Yes, I am ready to continue once we review the written terms.',value:'I compare the total cost, useful features and service support.'};
 const topicItems=chosen.map(key=>({id:key,...topics[key],status:known.includes(key)?'known':si===2&&key==='delivery'?'secondary':'open',reply:extraReplies[key]||c[key==='passengers'?'people':key==='charging'?'charge':key],reason:known.includes(key)?'前序记录或当前语音已经表达了这一信息，建议追问尚未明确的条件。':si===2&&key==='delivery'?'可以了解，但本环节优先澄清价格比较和保障顾虑。':'该信息尚未明确，追问可以推进当前任务。'}));
 const replyBank=Object.fromEntries(Object.keys(topics).map(key=>[key,extraReplies[key]||c[key==='passengers'?'people':key==='charging'?'charge':key]]));
 replyBank.price='I would need to see the confirmed written price and the full cost breakdown before deciding.';
 replyBank.range='Could you show me the official range information and explain how it fits my driving routine?';
 questions.push({id,scene:si,persona:c.persona,recommendedModel:p.model,customer:{name:c.name,country:c.country,countryName:c.countryName,city:c.city},context,script,translation,audio:`audio/${id}.wav`,facts:facts.map((f,i)=>({...f,id:`${id}-f${i}`})),topics:topicItems,replyBank});
}
const data={version:4,scenes,questions};fs.writeFileSync('data.js','/* Local teaching question bank. Edit scripts/build-content.cjs to regenerate. */\nwindow.GD_DATA = '+JSON.stringify(data,null,2)+';\n');
fs.writeFileSync('audio-scripts.json',JSON.stringify(questions.map(q=>({file:q.id+'.wav',text:q.script})),null,2));
console.log(`Built ${questions.length} questions across ${scenes.length} scenes.`);
