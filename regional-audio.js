/* Locally hosted regional-voice synthetic audio. The reviewed flag selects an asset;
   a teacher should still check intelligibility and appropriateness before class use. */
window.GD_REGIONAL_AUDIO = {
  version: 1,
  countries: {
    TH: { label: '泰式英语', locale: 'th-TH', guide: '自然、清楚；保留说话者真实发音，不刻意模仿或夸张口音。' },
    MY: { label: '马来西亚英语', locale: 'ms-MY', guide: '由熟悉当地语言环境的说话者自然录制。' },
    ID: { label: '印度尼西亚英语', locale: 'id-ID', guide: '由熟悉当地语言环境的说话者自然录制。' },
    VN: { label: '越南英语', locale: 'vi-VN', guide: '由熟悉当地语言环境的说话者自然录制。' },
    PH: { label: '菲律宾英语', locale: 'en-PH', guide: '由熟悉当地语言环境的说话者自然录制。' }
  },
  /* 'portrait-narin': {src:'audio/regional/TH/portrait-narin.wav', reviewed:true, speaker:'代号', consent:'日期'} */
  recordings: {
    'portrait-narin': {src:'audio/regional/TH/portrait-narin.mp3',reviewed:true,speaker:'Niwat Neural'},
    'portrait-pim': {src:'audio/regional/TH/portrait-pim.mp3',reviewed:true,speaker:'Premwadee Neural'},
    'portrait-anan': {src:'audio/regional/TH/portrait-anan.mp3',reviewed:true,speaker:'Niwat Neural'},
    'portrait-mali': {src:'audio/regional/TH/portrait-mali.mp3',reviewed:true,speaker:'Premwadee Neural'},
    'recommend-narin': {src:'audio/regional/TH/recommend-narin.mp3',reviewed:true,speaker:'Niwat Neural'},
    'recommend-pim': {src:'audio/regional/TH/recommend-pim.mp3',reviewed:true,speaker:'Premwadee Neural'},
    'recommend-anan': {src:'audio/regional/TH/recommend-anan.mp3',reviewed:true,speaker:'Niwat Neural'},
    'recommend-mali': {src:'audio/regional/TH/recommend-mali.mp3',reviewed:true,speaker:'Premwadee Neural'},
    'negotiate-narin': {src:'audio/regional/TH/negotiate-narin.mp3',reviewed:true,speaker:'Niwat Neural'},
    'negotiate-pim': {src:'audio/regional/TH/negotiate-pim.mp3',reviewed:true,speaker:'Premwadee Neural'},
    'negotiate-anan': {src:'audio/regional/TH/negotiate-anan.mp3',reviewed:true,speaker:'Niwat Neural'},
    'negotiate-mali': {src:'audio/regional/TH/negotiate-mali.mp3',reviewed:true,speaker:'Premwadee Neural'},
    'close-narin': {src:'audio/regional/TH/close-narin.mp3',reviewed:true,speaker:'Niwat Neural'},
    'close-pim': {src:'audio/regional/TH/close-pim.mp3',reviewed:true,speaker:'Premwadee Neural'},
    'close-anan': {src:'audio/regional/TH/close-anan.mp3',reviewed:true,speaker:'Niwat Neural'},
    'close-mali': {src:'audio/regional/TH/close-mali.mp3',reviewed:true,speaker:'Premwadee Neural'},
    'portrait-aina': {src:'audio/regional/MY/portrait-aina.mp3',reviewed:true,speaker:'Yasmin Neural'},
    'recommend-aina': {src:'audio/regional/MY/recommend-aina.mp3',reviewed:true,speaker:'Yasmin Neural'},
    'negotiate-aina': {src:'audio/regional/MY/negotiate-aina.mp3',reviewed:true,speaker:'Yasmin Neural'},
    'close-aina': {src:'audio/regional/MY/close-aina.mp3',reviewed:true,speaker:'Yasmin Neural'},
    'portrait-budi': {src:'audio/regional/ID/portrait-budi.mp3',reviewed:true,speaker:'Ardi Neural'},
    'recommend-budi': {src:'audio/regional/ID/recommend-budi.mp3',reviewed:true,speaker:'Ardi Neural'},
    'negotiate-budi': {src:'audio/regional/ID/negotiate-budi.mp3',reviewed:true,speaker:'Ardi Neural'},
    'close-budi': {src:'audio/regional/ID/close-budi.mp3',reviewed:true,speaker:'Ardi Neural'},
    'portrait-linh': {src:'audio/regional/VN/portrait-linh.mp3',reviewed:true,speaker:'HoaiMy Neural'},
    'recommend-linh': {src:'audio/regional/VN/recommend-linh.mp3',reviewed:true,speaker:'HoaiMy Neural'},
    'negotiate-linh': {src:'audio/regional/VN/negotiate-linh.mp3',reviewed:true,speaker:'HoaiMy Neural'},
    'close-linh': {src:'audio/regional/VN/close-linh.mp3',reviewed:true,speaker:'HoaiMy Neural'},
    'portrait-miguel': {src:'audio/regional/PH/portrait-miguel.mp3',reviewed:true,speaker:'James Neural'},
    'recommend-miguel': {src:'audio/regional/PH/recommend-miguel.mp3',reviewed:true,speaker:'James Neural'},
    'negotiate-miguel': {src:'audio/regional/PH/negotiate-miguel.mp3',reviewed:true,speaker:'James Neural'},
    'close-miguel': {src:'audio/regional/PH/close-miguel.mp3',reviewed:true,speaker:'James Neural'}
  }
};
