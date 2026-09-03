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
  },
} as const satisfies Record<Locale, typeof en | Record<string, unknown>>;

export type Messages = typeof en | (typeof messages)["zh-TW"] | (typeof messages)["zh-CN"];

export function getMessages(locale: Locale): Messages {
  return messages[locale];
}
