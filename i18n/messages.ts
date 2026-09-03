import type { Locale } from "./config";

const en = {
  metadata: { title: "SOLEN — Technology, naturally.", description: "Thoughtful technology, designed to belong in your space." },
  accessibility: { home: "SOLEN home", primaryNav: "Primary navigation", mobileNav: "Mobile navigation", openMenu: "Open navigation menu", language: "Select language", learnAbout: "Learn more about" },
  nav: { products: "Products", design: "Design", about: "About", support: "Support" },
  hero: { eyebrow: "SOLEN / Smart Dock", title: "Technology, naturally.", copy: "Thoughtful technology,\ndesigned to belong in your space.", cta: "Explore Products", imageAlt: "SOLEN Smart Dock in warm silver" },
  philosophy: { eyebrow: "Our philosophy", title: "Designed for your space.", copy: "Technology should naturally integrate into everyday work and living environments." },
  collection: { eyebrow: "The collection", title: "Made to work together.", learnMore: "Learn more" },
  products: [
    { name: "Smart Dock", description: "One connection.\nA simpler workspace." },
    { name: "Wireless Charger", description: "Power,\nwithout the clutter." },
    { name: "Desktop Hub", description: "Everything connected.\nNothing complicated." },
  ],
  design: { eyebrow: "Designed with intention", title: "Warm materials.\nThoughtful technology.", cta: "Discover our design", material: "Brushed aluminium / 100% recyclable" },
  footer: { slogan: "Technology, naturally.", note: "Designed for considered living." },
  pages: {
    products: {
      metadata: { title: "Products — SOLEN", description: "Technology designed to simplify the space around you." },
      eyebrow: "SOLEN Products", title: "Technology designed to simplify the space around you.",
      items: [
        { description: "A considered desktop connection point that brings essential devices together and helps your workspace feel composed." },
        { description: "An understated charging surface shaped to keep everyday power within reach while preserving a calm environment." },
        { description: "A compact connection hub that organizes the tools you use each day without adding visual noise to your desk." },
      ],
    },
    design: {
      metadata: { title: "Design — SOLEN", description: "Designed to belong through warm materials, calm form and intuitive interfaces." },
      eyebrow: "SOLEN Design", title: "Designed to belong.", intro: "Every SOLEN product begins with the space around it—how it feels, how it works and how quietly it can become part of everyday life.",
      principles: [
        { title: "Materials", copy: "Precision aluminum and soft-touch surfaces.", detail: "Warm metallic finishes balance durability with a tactile, approachable character." },
        { title: "Form", copy: "Calm geometry, rounded forms and restrained details.", detail: "Each line is resolved to feel purposeful from every angle, without demanding attention." },
        { title: "Interface", copy: "Technology should feel intuitive and visually quiet.", detail: "Controls and connections appear where they are useful, then recede into the experience." },
        { title: "Space", copy: "Products should coexist naturally with modern work and living environments.", detail: "We design objects as part of a wider room, not as isolated pieces of technology." },
      ],
    },
    about: {
      metadata: { title: "About — SOLEN", description: "SOLEN creates thoughtful technology that supports everyday environments without dominating them." },
      eyebrow: "About SOLEN", title: "Technology, naturally.", intro: "SOLEN was created around a simple idea: technology should support everyday environments without dominating them.",
      sections: [
        { title: "Our Philosophy", copy: "We believe useful technology can feel calm, considered and naturally at home. Every decision begins with how a product fits into real life." },
        { title: "Our Approach", copy: "We bring function, material and form into balance—removing unnecessary complexity while preserving the details that make an object satisfying to use." },
        { title: "Designed for Everyday Space", copy: "From focused work to unhurried living, SOLEN products are made to share your space quietly and support the routines that matter." },
      ],
    },
    support: {
      metadata: { title: "Support — SOLEN", description: "Find product guidance, setup help, service information and ways to contact SOLEN." },
      eyebrow: "SOLEN Support", title: "How can we help?", intro: "Choose a topic to find the right guidance for your SOLEN product.",
      categories: [
        { title: "Product Help", copy: "Find clear guidance for using and caring for your SOLEN products." },
        { title: "Setup & Getting Started", copy: "Follow simple introductions designed to help you begin with confidence." },
        { title: "Warranty & Service", copy: "Review service options and support information for your product." },
        { title: "Contact", copy: "Direct contact support will be available when SOLEN support services launch." },
      ],
      unavailable: "Online support coming soon", notice: "SOLEN is a fictional brand. Live support and service requests are not currently available.",
    },
  },
} as const;

const messages = {
  en,
  "zh-TW": {
    metadata: { title: "SOLEN — 科技，自然融入生活。", description: "用心設計的科技，自然融入你的空間。" },
    accessibility: { home: "SOLEN 首頁", primaryNav: "主要導覽", mobileNav: "行動版導覽", openMenu: "開啟導覽選單", language: "選擇語言", learnAbout: "進一步了解" },
    nav: { products: "產品", design: "設計", about: "關於", support: "支援" },
    hero: { eyebrow: "SOLEN / 智慧桌面擴充底座", title: "科技，自然融入生活。", copy: "用心設計的科技，\n自然融入你的空間。", cta: "探索產品", imageAlt: "暖銀色 SOLEN 智慧桌面擴充底座" },
    philosophy: { eyebrow: "品牌理念", title: "為你的空間而設計。", copy: "科技不應佔據生活，而應自然融入日常工作與生活環境。" },
    collection: { eyebrow: "產品系列", title: "為彼此協作而生。", learnMore: "了解更多" },
    products: [
      { name: "智慧桌面擴充底座", description: "一次連接，\n讓工作空間更簡單。" },
      { name: "無線充電座", description: "告別雜亂，\n輕鬆充電。" },
      { name: "桌面連接中樞", description: "連接所有裝置，\n操作依然簡單。" },
    ],
    design: { eyebrow: "用心設計", title: "溫暖材質，\n細膩科技。", cta: "探索設計理念", material: "拉絲鋁材 / 100% 可回收" },
    footer: { slogan: "科技，自然融入生活。", note: "為從容生活而設計。" },
    pages: {
      products: {
        metadata: { title: "產品 — SOLEN", description: "讓周遭空間更簡單的科技設計。" },
        eyebrow: "SOLEN 產品", title: "讓周遭空間更簡單的科技設計。",
        items: [
          { description: "經過細緻思考的桌面連接核心，整合常用裝置，讓工作空間保持從容有序。" },
          { description: "低調而溫潤的充電表面，讓電力隨手可得，同時維持空間的寧靜感受。" },
          { description: "精巧的桌面連接中樞，整理每日所需工具，不為桌面增添多餘的視覺干擾。" },
        ],
      },
      design: {
        metadata: { title: "設計 — SOLEN", description: "以溫暖材質、從容形態與直覺介面，設計能自然融入空間的科技。" },
        eyebrow: "SOLEN 設計", title: "為融入空間而設計。", intro: "每一項 SOLEN 產品都從周遭空間出發：它帶來的感受、運作方式，以及如何安靜地成為日常的一部分。",
        principles: [
          { title: "材質", copy: "精密鋁材與柔和觸感表面。", detail: "溫潤的金屬質感，在耐用機能與親切觸感之間取得平衡。" },
          { title: "形態", copy: "從容幾何、圓潤輪廓與克制細節。", detail: "每一道線條都經過推敲，從各個角度看來皆有其目的，卻不刻意吸引目光。" },
          { title: "介面", copy: "科技應直覺易用，並在視覺上保持安靜。", detail: "控制與連接只在需要時出現，之後自然退居體驗之後。" },
          { title: "空間", copy: "產品應與現代工作及生活環境自然共存。", detail: "我們將產品視為整體空間的一部分，而非孤立存在的科技物件。" },
        ],
      },
      about: {
        metadata: { title: "關於 — SOLEN", description: "SOLEN 打造用心科技，支援日常環境而不主導生活。" },
        eyebrow: "關於 SOLEN", title: "科技，自然融入生活。", intro: "SOLEN 源自一個簡單想法：科技應支援日常環境，而非主導生活。",
        sections: [
          { title: "我們的理念", copy: "我們相信，實用科技也能從容、細膩並自然融入居所。每一項決定，都從產品如何進入真實生活開始。" },
          { title: "我們的方法", copy: "我們在機能、材質與形態之間尋找平衡，去除不必要的複雜，同時保留令人愉悅的使用細節。" },
          { title: "為日常空間而設計", copy: "無論專注工作或自在生活，SOLEN 產品都安靜地與你共享空間，支援真正重要的日常節奏。" },
        ],
      },
      support: {
        metadata: { title: "支援 — SOLEN", description: "尋找產品使用、設定入門、服務資訊與聯絡 SOLEN 的方式。" },
        eyebrow: "SOLEN 支援", title: "需要什麼協助？", intro: "選擇主題，尋找適合你的 SOLEN 產品指引。",
        categories: [
          { title: "產品協助", copy: "查看 SOLEN 產品使用與日常保養的清楚指引。" },
          { title: "設定與開始使用", copy: "透過簡明步驟，安心開始使用你的產品。" },
          { title: "保固與服務", copy: "查看產品服務選項與相關支援資訊。" },
          { title: "聯絡我們", copy: "SOLEN 支援服務上線後，將提供直接聯絡管道。" },
        ],
        unavailable: "線上支援即將推出", notice: "SOLEN 為虛構品牌，目前尚未提供即時支援與服務申請。",
      },
    },
  },
  "zh-CN": {
    metadata: { title: "SOLEN — 科技，自然融入生活。", description: "用心设计的科技，自然融入你的空间。" },
    accessibility: { home: "SOLEN 首页", primaryNav: "主要导航", mobileNav: "移动端导航", openMenu: "打开导航菜单", language: "选择语言", learnAbout: "进一步了解" },
    nav: { products: "产品", design: "设计", about: "关于", support: "支持" },
    hero: { eyebrow: "SOLEN / 智能桌面扩展底座", title: "科技，自然融入生活。", copy: "用心设计的科技，\n自然融入你的空间。", cta: "探索产品", imageAlt: "暖银色 SOLEN 智能桌面扩展底座" },
    philosophy: { eyebrow: "品牌理念", title: "为你的空间而设计。", copy: "科技不应占据生活，而应自然融入日常工作与生活环境。" },
    collection: { eyebrow: "产品系列", title: "为彼此协作而生。", learnMore: "了解更多" },
    products: [
      { name: "智能桌面扩展底座", description: "一次连接，\n让工作空间更简单。" },
      { name: "无线充电座", description: "告别杂乱，\n轻松充电。" },
      { name: "桌面连接中枢", description: "连接所有设备，\n操作依然简单。" },
    ],
    design: { eyebrow: "用心设计", title: "温暖材质，\n细腻科技。", cta: "探索设计理念", material: "拉丝铝材 / 100% 可回收" },
    footer: { slogan: "科技，自然融入生活。", note: "为从容生活而设计。" },
    pages: {
      products: {
        metadata: { title: "产品 — SOLEN", description: "让周围空间更简单的科技设计。" },
        eyebrow: "SOLEN 产品", title: "让周围空间更简单的科技设计。",
        items: [
          { description: "经过细致思考的桌面连接核心，整合常用设备，让工作空间保持从容有序。" },
          { description: "低调而温润的充电表面，让电力触手可及，同时保持空间的宁静感受。" },
          { description: "精巧的桌面连接中枢，整理每日所需工具，不为桌面增添多余的视觉干扰。" },
        ],
      },
      design: {
        metadata: { title: "设计 — SOLEN", description: "以温暖材质、从容形态与直觉界面，设计能自然融入空间的科技。" },
        eyebrow: "SOLEN 设计", title: "为融入空间而设计。", intro: "每一件 SOLEN 产品都从周围空间出发：它带来的感受、运作方式，以及如何安静地成为日常的一部分。",
        principles: [
          { title: "材质", copy: "精密铝材与柔和触感表面。", detail: "温润的金属质感，在耐用功能与亲切触感之间取得平衡。" },
          { title: "形态", copy: "从容几何、圆润轮廓与克制细节。", detail: "每一道线条都经过推敲，从各个角度看来皆有其目的，却不刻意吸引目光。" },
          { title: "界面", copy: "科技应直觉易用，并在视觉上保持安静。", detail: "控制与连接只在需要时出现，之后自然退居体验之后。" },
          { title: "空间", copy: "产品应与现代工作及生活环境自然共存。", detail: "我们将产品视为整体空间的一部分，而非孤立存在的科技物件。" },
        ],
      },
      about: {
        metadata: { title: "关于 — SOLEN", description: "SOLEN 打造用心科技，支持日常环境而不主导生活。" },
        eyebrow: "关于 SOLEN", title: "科技，自然融入生活。", intro: "SOLEN 源自一个简单想法：科技应支持日常环境，而非主导生活。",
        sections: [
          { title: "我们的理念", copy: "我们相信，实用科技也能从容、细腻并自然融入居所。每一项决定，都从产品如何进入真实生活开始。" },
          { title: "我们的方法", copy: "我们在功能、材质与形态之间寻找平衡，去除不必要的复杂，同时保留令人愉悦的使用细节。" },
          { title: "为日常空间而设计", copy: "无论专注工作或自在生活，SOLEN 产品都安静地与你共享空间，支持真正重要的日常节奏。" },
        ],
      },
      support: {
        metadata: { title: "支持 — SOLEN", description: "查找产品使用、设置入门、服务信息与联系 SOLEN 的方式。" },
        eyebrow: "SOLEN 支持", title: "需要什么帮助？", intro: "选择主题，查找适合你的 SOLEN 产品指南。",
        categories: [
          { title: "产品帮助", copy: "查看 SOLEN 产品使用与日常保养的清晰指南。" },
          { title: "设置与开始使用", copy: "通过简明步骤，安心开始使用你的产品。" },
          { title: "保修与服务", copy: "查看产品服务选项与相关支持信息。" },
          { title: "联系我们", copy: "SOLEN 支持服务上线后，将提供直接联系渠道。" },
        ],
        unavailable: "在线支持即将推出", notice: "SOLEN 为虚构品牌，目前尚未提供实时支持与服务申请。",
      },
    },
  },
} as const satisfies Record<Locale, typeof en | Record<string, unknown>>;

export type Messages = typeof en | (typeof messages)["zh-TW"] | (typeof messages)["zh-CN"];

export function getMessages(locale: Locale): Messages {
  return messages[locale];
}
