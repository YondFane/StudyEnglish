# StudyEnglish 项目记录

## 1. 项目概述

StudyEnglish 是一个基于 Vue 3 和 Vite 的纯前端英语词汇学习网站。

项目包含两个主要使用场景：

1. **词库浏览**：分类浏览、搜索单词，并查看完整的单词详情。
2. **单词练习**：通过逐字母输入、发音、随机练习和错题记录进行记忆训练。

项目没有后端服务，词库来自仓库中的 JavaScript 文件，用户练习记录保存在当前浏览器的 `localStorage` 中。

## 2. 技术栈

- Vue 3，使用 Composition API 和 `<script setup>`
- Vite 6
- pnpm
- 原生 Web Speech API
- Canvas 粒子动画
- 浏览器 `localStorage`
- GitHub Actions 和 GitHub Pages

## 3. 主要目录

```text
StudyEnglish/
├─ data/
│  └─ words/                         # 词库文件
├─ src/
│  ├─ components/
│  │  └─ ParticleBackground.vue      # 练习页面粒子背景
│  ├─ App.vue                        # 页面、词库和练习核心逻辑
│  ├─ main.js                        # Vue 应用入口
│  └─ style.css                      # 全局页面样式
├─ .github/
│  └─ workflows/
│     └─ deploy.yml                  # GitHub Pages 自动部署
├─ index.html
├─ package.json
├─ pnpm-lock.yaml
├─ pnpm-workspace.yaml
└─ vite.config.js
```

## 4. 词库说明

当前词库位于 `data/words`：

| 页面标签 | 文件 | 当前单词数 |
| --- | --- | ---: |
| 中考单词 | `highSchoolEntranceWords.js` | 1058 |
| 高一单词 | `gradeOneWords.js` | 954 |
| 高二单词 | `gradeTwoWords.js` | 1151 |
| 高考单词 | `collegeEntranceWords.js` | 1156 |
| 常用单词 | `commonWords.js` | 7064 |

词库文件使用默认导出：

```js
const datas = [
  // 单词对象
]

export default datas
```

每个单词对象的字段定义：

| 字段 | 内容 |
| --- | --- |
| `B` | 单词 |
| `C` | 音标 |
| `D` | 中文释义 |
| `E` | 单词拆分 |
| `F` | 拆分联想 |
| `G` | 记忆提示 |
| `H` | 英文例句 |
| `I` | 例句翻译 |

新增词库时，需要：

1. 保持以上数据结构。
2. 使用 `export default datas` 导出。
3. 在 `src/App.vue` 的 `categories` 中增加对应标签和动态导入函数。
4. 文件统一使用 UTF-8 编码。

## 5. 词库浏览模式

浏览模式目前包含以下功能：

- 顶部五个词库分类标签。
- 点击标签后动态导入对应词库，避免首次加载全部数据。
- 根据单词、音标或释义进行搜索。
- 左侧显示单词列表。
- 单词列表每次渲染 120 条，可继续加载更多。
- 左侧列表拥有独立纵向滚动区域。
- 右侧显示当前单词详情：
  - 单词
  - 音标
  - 中文释义
  - 单词拆分
  - 拆分联想
  - 记忆提示
  - 英文例句
  - 例句翻译
- 支持英式和美式发音。
- 支持桌面端和移动端响应式布局。
- 顶部“开始练习”按钮用于进入练习模式。

## 6. 单词发音

发音使用浏览器原生 Web Speech API：

```js
const utterance = new SpeechSynthesisUtterance(text)
utterance.lang = 'en-US' // 美式
window.speechSynthesis.speak(utterance)
```

发音类型：

- `en-US`：美式发音
- `en-GB`：英式发音

系统会优先选择语言代码完全匹配的本地语音，朗读速度为 `0.9`。

注意：

- 不使用音频文件。
- 不请求第三方语音接口。
- 实际声音取决于浏览器和操作系统安装的语音包。

## 7. 单词练习模式

练习模式是独立的深色沉浸式页面，核心功能包括：

- 返回词库浏览页面。
- 英式和美式发音切换。
- 重新开始当前词库。
- 显示当前序号和词库总数。
- 自动朗读开关。
- 记录进度开关。
- 粒子背景开关。
- 随机练习开关。
- 错题统计开关。
- 从当前词库的本地错题记录进入错题专项练习。
- 显示单词释义、音标、拆分、联想、例句和翻译。
- 隐藏或显示当前单词。
- 播放当前单词。
- 播放当前例句。
- 按指定序号跳转。
- 底部快速切换词库。
- `Esc` 快捷键重新播放当前单词。
- `Enter` 快捷键提交答案。

### 7.1 逐字母输入

答案区域不是传统可见输入框：

- 页面根据目标单词生成等量的字母下划线。
- 使用一个不可见的原生输入控件接收键盘输入。
- 每个已输入字母独立显示在对应下划线上。
- 正确位置使用蓝色下划线。
- 错误字母立即变红并执行水平振动动画。
- 点击字母区域可以重新获取输入焦点。
- 支持键盘输入、退格和粘贴。
- 单词中的连字符、空格和其他非英文字母不会参与答案比较。

提交正确后会短暂显示成功提示，然后自动进入下一词；提交错误时会显示正确答案，并根据设置加入错题记录。

### 7.2 随机与顺序练习

- 随机练习关闭时，按词库原顺序进入下一词。
- 随机练习开启时，随机选择不同于当前单词的下一词。
- 顺序练习且“记录进度”开启时，按词库分别保存最后练习位置。
- 再次进入练习页或重新打开浏览器时，顺序练习自动恢复到最后位置。
- 浏览页默认选中的第一个单词不能覆盖已保存的顺序练习位置。
- 随机练习过程不覆盖顺序练习保存的位置。
- 从随机练习切回顺序练习时，以切换时的当前位置作为新的顺序进度。
- 跳转输入值会被限制在 `1` 到当前词库总数之间。

### 7.3 粒子背景

`src/components/ParticleBackground.vue` 使用 Canvas 绘制：

- 移动绿色节点。
- 节点间的半透明连线。
- 根据窗口大小自动调整节点数量。
- 使用 `requestAnimationFrame` 运行动画。
- 关闭粒子开关后清空画布。
- 组件卸载时取消动画并移除窗口监听器。

### 7.4 错题练习

- “错题练习”按钮显示当前词库的错题数量。
- 错题练习只使用当前词库保存在浏览器中的错题记录。
- 进入错题练习后，顶部序号和总数切换为错题队列进度。
- 答错时保留当前错题，并继续显示正确答案提示。
- 答对时立即将该单词从错题队列及浏览器本地记录中移除。
- 队列中仍有错题时，自动进入下一道错题。
- 所有错题答对后显示“错题练习完成”页面。
- 完成后当前词库的本地错题记录为空。
- 用户可以随时退出错题练习，返回普通练习进度。
- 普通“重新练习”只重置练习位置，不清空错题。
- 非错题模式下仍提供单独的“清空错题”操作。

## 8. 浏览器本地记录

练习数据保存在：

```text
localStorage key: study-english:practice-state:v2
```

保存内容：

- 当前选择的词库。
- 每个词库的当前学习位置。
- 每个词库的错题单词名称。
- 英式或美式发音偏好。
- 自动朗读设置。
- 记录进度设置。
- 粒子背景设置。
- 随机练习设置。
- 错题统计设置。
- 隐藏单词设置。
- 状态最后更新时间。

缓存结构示意：

```js
{
  version: 2,
  activeCategoryId: 'highSchoolEntrance',
  progressByCategory: {
    highSchoolEntrance: 10
  },
  wrongWordsByCategory: {
    highSchoolEntrance: ['mouth', 'clean']
  },
  settings: {
    accent: 'en-GB',
    autoRead: true,
    recordProgress: true,
    particlesEnabled: true,
    randomPractice: false,
    trackErrors: true,
    hideWord: false
  },
  updatedAt: 'ISO date string'
}
```

练习页面默认使用英式发音 `en-GB`。首次读取旧版
`study-english:practice-state:v1` 缓存时，会保留原有进度、错题和其他设置，
仅将默认发音迁移为英式并写入 v2 缓存。用户之后手动选择美式发音时，
`en-US` 偏好仍会正常保存。

记录仅存在当前浏览器和当前设备。清除站点数据、使用隐私模式或更换设备后，记录不会保留。

修改缓存结构时必须升级存储键版本或增加兼容迁移逻辑，避免旧缓存导致页面异常。

## 9. 本地开发

安装依赖：

```bash
pnpm install
```

启动开发服务器：

```bash
pnpm dev
```

默认访问地址：

```text
http://localhost:5173/StudyEnglish/
```

生产构建：

```bash
pnpm build
```

本地预览构建结果：

```bash
pnpm preview
```

### pnpm 与 esbuild

项目使用 pnpm 的依赖构建授权配置：

```yaml
allowBuilds:
  esbuild: true
onlyBuiltDependencies:
  - esbuild
```

不要把 `esbuild` 改回未授权状态，否则安装依赖或运行开发服务器时可能出现：

```text
ERR_PNPM_IGNORED_BUILDS
```

## 10. GitHub Pages 部署

`vite.config.js` 中设置了 GitHub Pages 仓库子路径：

```js
base: '/StudyEnglish/'
```

不要随意移除，否则部署后 JavaScript 和 CSS 资源可能出现 404。

部署工作流位于 `.github/workflows/deploy.yml`：

1. 推送到 `main` 分支触发工作流。
2. 使用 pnpm 10。
3. 使用 Node.js 20。
4. 执行 `pnpm install --frozen-lockfile`。
5. 执行 `pnpm run build`。
6. 上传 `dist`。
7. 部署到 GitHub Pages。

## 11. 当前性能策略

- 五个词库通过动态 `import()` 分包。
- 用户只有在点击某个标签时才加载对应数据。
- 单词列表每批渲染 120 条，避免同时创建数千个 DOM 节点。
- 常用单词词库体积较大，构建时会出现大于 500 KB 的 chunk 警告；当前属于已知警告，不影响构建成功。
- 粒子动画限制设备像素比最高为 2，避免高分辨率屏幕产生过高绘制开销。

## 12. 后续修改约束

- 保持 Vue 3 Composition API 风格。
- 不要把五个词库改成一次性静态导入。
- 不要在列表中一次性渲染全部常用单词。
- 不要同时引入 npm 和 pnpm 锁文件。
- 不要删除 GitHub Pages 的 `/StudyEnglish/` 基础路径。
- 修改练习状态字段时同步更新本地缓存结构说明。
- 修改词库字段时同步更新浏览详情和练习页面。
- 保持左侧单词列表内部滚动所需的 `min-height: 0` 和 `overflow-y: auto`。
- 新增交互按钮时必须提供可访问名称。
- 浏览器 API 不可用时应安全退出，不能阻止页面其他功能。
- 每次修改后至少运行一次 `pnpm build`。
