# 交流互动台集成说明

## 推荐：作为独立静态模块嵌入

将交付目录放入原系统 conversation/ 子目录，通过同源 iframe 集成。使用 ?embed=1 隐藏模块的独立侧栏与顶栏，保留原系统导航。样式与脚本隔离在 iframe 内，不覆盖同事的 CSS。

```html
<iframe id="conversation"
  src="./conversation/index.html?embed=1#scenes"
  title="交流互动台"
  allow="microphone"
  style="width:100%;height:calc(100dvh - 100px);border:0">
</iframe>
```

父页面和 iframe 必须满足浏览器麦克风安全上下文及权限策略。不需要语音输入时可去掉 allow。跨域嵌入的语音兼容性需要单独验证，首版推荐同源。

## 对接学习档案

练习完成时，在模块自身 window 上触发 gd:conversation-complete。同源父系统可在 iframe load 后绑定事件：

```js
const frame = document.getElementById('conversation');
frame.addEventListener('load', () => {
  frame.contentWindow.addEventListener('gd:conversation-complete', event => {
    const result = event.detail;
    // 在此调用原系统已有的学习档案接口。
    // 以 result.id 去重；学生身份由原系统提供。
    console.log(result);
  });
});
```

也可在模块 app.js 加载前提供配置：

```js
window.GDConversationConfig = {
  embedded: true,
  onComplete(result) { /* 由宿主保存 */ }
};
```

事件不是跨域 postMessage；首版没有向任意父页面广播学生作答。跨域集成时需要另行设计明确的来源校验。

## 完成数据

```text
id             本轮唯一标识，可用于去重
scene          0~3，按场景卡片顺序
startedAt      ISO 时间
completedAt    ISO 时间
total          两题平均并四舍五入后的 0~100 分
title          场景称号
ruleVersion    评分版本
results[]      2 条首次提交
  questionId   题目 ID
  selection    选择的事实 ID
  topic        追问主题 ID
  choice       画像题的客户类型或推介题的教学模拟车型（其余场景为空）
  answer       学生英语输入（最多 400 字符）
  assisted     是否使用音频故障后的文字辅助
  score        known/ask/total/parts/notes/reply/example/recognized
```

不会在改写检查或重看历史时再次发送完成事件。事件不等同于防篡改成绩：所有规则、答案及记录都在客户端。

## 文件与运行要求

运行必需：index.html、styles.css、app-extra.css、feedback.css、regional-audio.css、data.js、core.js、regional-audio.js、app.js、assets/、audio/。

HTML 脚本顺序为 data.js → core.js → regional-audio.js → app.js。无需构建工具或在线字体，无第三方 CDN。UTF-8、HTML5、现代浏览器即可运行主要功能。dialog 与可选 SpeechRecognition 在旧 WebView 中需要真实设备测试。

当前脚本使用全局 document 查询并绑定 #app，不应直接拼接到另一页面的 DOM；请优先采用 iframe，或由前端同事进一步组件化。

预览服务器仅监听 127.0.0.1，支持音频 Range 请求；它仅用于本机验证，不是公网服务。
