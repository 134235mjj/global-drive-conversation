# 地域英语录音题库制作指南

本模块采用“本地地域音色优先、标准英语自动兜底”。32 段 MP3 是各客户所在国家的合成音色朗读英语文本，属于近似演示；泰、马来、印尼和越南音色以当地语言为主要语种，并非经人工认证的自然英语口音。教师应逐段核听英语可懂度与台词准确性，必要时用有授权的真人英语录音替换。菲律宾采用 `en-PH` 英语音色。

## 免费制作流程

1. 用 `http://localhost` 或 HTTPS 打开 `recording-studio.html`。
2. 邀请熟悉对应英语变体的自愿说话者，说明课堂与公网使用范围并取得许可。
3. 选择国家和题目，按屏幕台词自然录制；试听确认无截断、噪声小、内容准确。
4. 下载 WAV，放入 `audio/regional/国家代码/题目ID.wav`。
5. 在 `regional-audio.js` 的 `recordings` 中登记，例如：

```js
'portrait-narin': {
  src: 'audio/regional/TH/portrait-narin.wav',
  reviewed: true,
  speaker: 'TH-S01',
  consent: '2026-09-21'
}
```

6. 运行 `node scripts/verify-regional-audio.cjs`。发布前由英语教师再完整核听一次。

录音应真实、自然、可理解，不要求夸张模仿口音。台词中的评分事实不能增删。推荐安静房间、耳麦、单声道 PCM WAV，每段约 20–35 秒。不要把说话者真实姓名或身份证明放进公开仓库。
