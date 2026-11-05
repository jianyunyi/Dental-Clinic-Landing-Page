# ✨ LUMINA Dental & Aesthetics Studio（诺雅高端齿科与微创美学中心）

<div align="center">

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.4.5-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4.19-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.18.2-0055FF?logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Antigravity Skill](https://img.shields.io/badge/Antigravity-Universal_Skill-0F766E?logo=google&logoColor=white)](./SKILL.md)
[![License](https://img.shields.io/badge/License-MIT-teal.svg)](./LICENSE)

**现代化医疗健康与高端齿科美学落地页 · Jiro Build 1:1 高保真复刻 · 通用 Antigravity 设计 Skill**

*Where Surgical Science Meets Timeless Facial Artistry · 当精工医学遇上永恒的面部美学*

[🌟 查看组件架构](./references/components.md) • [🎨 定制化开发指南](./references/customization.md) • [🤖 Skill 规范文件](./SKILL.md)

</div>

---

## 📖 目录

- [🌟 样式网站与品牌亮点](#-样式网站与品牌亮点)
- [💎 10 大核心特色板块](#-10-大核心特色板块)
- [⚡ 核心技术与动效创新](#-核心技术与动效创新)
- [🚀 快速开始与本地预览](#-快速开始与本地预览)
- [🤖 作为通用 Skill 安装与使用](#-作为通用-skill-安装与使用)
- [🛠️ 定制化指南](#️-定制化指南)
- [📁 仓库目录结构](#-仓库目录结构)
- [📄 开源协议](#-开源协议)

---

## 🌟 样式网站与品牌亮点

**LUMINA Dental & Aesthetics Studio（诺雅高端齿科与微创美学中心）** 是基于本 Skill 深度定制打造的现代化高奢医疗美学展示网站。整体视觉融合了深度医疗薄荷绿（`#0F766E`）、温和柔白（`#F0FDFA`）与奢华衬线字体（`Instrument Serif`），传达严谨精工的医学科技感与如沐春风的水疗舒缓体验。

- **1:1 原生还原**：完全对齐 Jiro Build 官方原版模板的版式结构、响应式断点与微动效。
- **双向手势对比滑块**：内置真实可交互的冷光美白/超薄瓷贴面 Before/After 拖拽对比滑块。
- **免环境单文件即开即看**：内置独立自包含的 [`standalone.html`](./templates/standalone.html)，打包全部 CSS/JS，双击任意浏览器即可离线无损体验。
- **模块化可复用 Skill**：封装标准 Antigravity 脚手架脚本，支持秒级克隆生成任意诊所/医疗落地页。

---

## 💎 10 大核心特色板块

| 序号 | 板块名称 | 设计与交互细节 |
| :---: | :--- | :--- |
| **01** | **Header & Hero（导航与首屏）** | 磨砂毛玻璃悬浮导航、移动端全屏折叠抽屉、18年医学积淀、12,000+ 蜕变案例好评徽章与常春藤名校团队背书 |
| **02** | **The Studio（关于我们）** | 水疗级静音舒缓诊室体系介绍、全数字化 3D 口腔断层扫描与温和无痛诊疗数字指标展示 |
| **03** | **Aesthetic Services（核心服务）** | 瑞士超声气动洁牙、单次显微根管治疗、3D 仿生全瓷即刻种植、隐适美隐形正畸等 6 大核心卡片悬浮提升动效 |
| **04** | **The Lumina Distinction（核心优势）** | 零焦虑就诊承诺、常春藤名师专家阵容、超低辐射 HD 数字化全景断层扫描、终身全瓷修复品质保障 |
| **05** | **Our Specialists（专家团队）** | **Dr. Elena Vance**（笑线美学主治医生）、**Dr. Marcus Chen**（颌面外科主任）、**Dr. Sophia Laurent**（隐适美正畸专家）、**Dr. Julian Hayes**（显微修复专家） |
| **06** | **Real Transformations（美白对比滑块）** | **核心亮点**：真实支持触控手势与鼠标左右拖拽的对比滑块，实时呈现术前术后真实临床对比 |
| **07** | **Transparent Concierge Plans（透明套餐）** | 基础预防体检套包（$169）、Lumina 激光美白套包（$699）、DSD 数码微笑全瓷定制套包（$2,800 起） |
| **08** | **Patient Transformations（口碑案例）** | 时尚总监、建筑设计师、科技高管等真实就诊体验反馈与 5 星推荐评价卡片 |
| **09** | **FAQ Accordion（常见问题）** | 无痛注射技术、隐形矫正周期、商业医疗保险直赔申报流程等手风琴平滑展开/折叠动效 |
| **10** | **Lumina Footer（门诊页脚）** | 曼哈顿派克大街旗舰中心营业时间表、24/7 VIP 急诊专线、地理位置导航与版权信息 |

---

## ⚡ 核心技术与动效创新

### 1. 真实触控 Before & After 牙齿美白对比滑块
```jsx
// 动态 inset 切割与百分比位置夹取算法
const handlePointerMove = (clientX, rect) => {
  const percentage = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
  setSliderPosition(percentage);
};

// 实时 clip-path 遮罩
<img 
  src="/before.png" 
  style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }} 
/>
```
- 支持桌面端高精度指针捕获与移动端原生 Touch 事件。
- 动态 SVG 双向箭头手柄跟随与视觉拖拽提示。

### 2. Framer Motion 11 弹簧阻尼与动态入场
- 所有卡片与文字进入视口时触发 `useInView` 或 `IntersectionObserver` 渐进式淡入与弹性位移。
- 手风琴 FAQ 采用 `AnimatePresence` 保持自然的折叠与伸展高度过渡。

---

## 🚀 快速开始与本地预览

### 方式 1：免任何运行环境，双击直接查看（推荐）
在本地文件管理器中，直接双击打开单文件网页：
👉 **[`templates/standalone.html`](./templates/standalone.html)**
- 已经将全部 JavaScript、CSS、SVG 与动画内联打包为单一文件，双击即可直接在浏览器无缝体验全部交互与对比滑块！

### 方式 2：Windows 一键启动本地热重载开发服务器
双击运行：
👉 **[`templates/start-site.bat`](./templates/start-site.bat)**
- 脚本将自动检测依赖并调起浏览器打开 `http://localhost:3000`，支持代码实时修改热更新！

### 方式 3：命令行手动启动
```bash
# 进入模板或项目目录
cd templates

# 1. 安装项目依赖
pnpm install

# 2. 启动 Vite 开发服务器
pnpm run dev

# 3. 生产环境构建打包
pnpm run build
```

---

## 🤖 作为通用 Skill 安装与使用

本仓库同时是一个符合 Antigravity / Agentic 标准的通用 Skill 包。

### 1. 全局安装为 Skill
将本仓库克隆至你的 Antigravity / Gemini Skills 目录：
```bash
git clone https://github.com/jianyunyi/Dental-Clinic-Landing-Page.git ~/.gemini/config/skills/dental-clinic-landing-page
```

### 2. 一键脚手架生成新诊所网站
安装后，可随时通过内置脚手架在任意目录生成新的牙科/医疗项目：
```bash
node ~/.gemini/config/skills/dental-clinic-landing-page/scripts/scaffold.js "目标路径/my-dental-clinic" --name "my-dental-clinic"
```

*生成后进入目录执行 `pnpm install && pnpm run dev` 即可立即启动全新站点！*

---

## 🛠️ 定制化指南

您可以根据目标诊所或医疗品牌的实际情况进行极简定制：

1. **品牌文案与联系方式**：
   - 诊所名称与导航项：修改 `src/components/Header.jsx`
   - 地址、电话与营业时间：修改 `src/components/Footer.jsx`
2. **牙齿美白对比照片更换**：
   - 打开 `src/components/BeforeAfter.jsx`，替换 `before.png` 与 `after.png` 图片地址（建议保持相同比例以实现无缝对比）。
3. **专家医师阵容**：
   - 打开 `src/components/OurDoctors.jsx`，修改医生姓名、资历、照片与主治领域。
4. **服务与收费套餐**：
   - 修改 `src/components/OurServices.jsx` 与 `src/components/Pricing.jsx` 中的项目和价格。
5. **主题色彩调整**：
   - 核心色盘定义在 `tailwind.config.js`，可自由切换主色调（如雅致金、克莱因蓝或现代灰）。

---

## 📁 仓库目录结构

```text
Dental-Clinic-Landing-Page/
├── README.md                  # 样式网站展示与完整使用文档
├── SKILL.md                   # Antigravity 通用 Skill 定义文件
├── LICENSE                    # MIT 开源协议
├── scripts/
│   └── scaffold.js            # 自动化项目脚手架生成脚本
├── references/
│   ├── components.md          # 10 大组件架构与动效解析
│   └── customization.md       # 定制化二次开发指南
└── templates/                 # 完整可运行代码模板
    ├── index.html             # HTML 模版
    ├── package.json           # 项目依赖定义
    ├── vite.config.js         # Vite 配置文件
    ├── tailwind.config.js     # Tailwind CSS 配置
    ├── postcss.config.js      # PostCSS 插件配置
    ├── start-site.bat         # Windows 一键启动脚本
    ├── standalone.html        # 单文件双击即看离线包
    ├── public/                # 静态图标与资源
    └── src/
        ├── App.jsx            # 根组件（按序串联 10 大板块）
        ├── main.jsx           # React 入口文件
        ├── index.css          # 全局样式与字体引用
        └── components/        # 10 大独立组件
            ├── Header.jsx
            ├── AboutUs.jsx
            ├── OurServices.jsx
            ├── WhyChooseUs.jsx
            ├── OurDoctors.jsx
            ├── BeforeAfter.jsx
            ├── Pricing.jsx
            ├── Testimonial.jsx
            ├── FAQ.jsx
            └── Footer.jsx
```

---

## 📄 开源协议

本项目采用 [MIT 许可证](./LICENSE) 开源，欢迎自由用于商业诊所落地页开发、个人学习与二次创作。
