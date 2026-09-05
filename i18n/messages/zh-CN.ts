import type { LocaleMessages } from "../types";

export const zhCN = {
  metadata: { title: "SOLEN — 科技，自然融入生活。", description: "用心设计的科技，自然融入你的空间。" },
  accessibility: { home: "SOLEN 首页", primaryNav: "主要导航", footerNav: "页脚导航", mobileNav: "移动端导航", openMenu: "打开导航菜单", closeMenu: "关闭导航菜单", language: "选择语言", learnAbout: "进一步了解", skipToContent: "跳至主要内容" },
  nav: { products: "产品", design: "设计", about: "关于", support: "支持" },
  hero: { eyebrow: "SOLEN / 智能桌面扩展底座", title: "科技，自然融入生活。", copy: "用心设计的科技，\n自然融入你的空间。", cta: "探索产品", imageAlt: "暖银色 SOLEN 智能桌面扩展底座" },
  philosophy: { eyebrow: "品牌理念", title: "为你的空间而设计。", copy: "科技不应占据生活，而应自然融入日常工作与生活环境。" },
  collection: { eyebrow: "产品系列", title: "为彼此协作而生。", copy: "三件用心构思的产品，让工作空间更从容、更顺畅地连接。", learnMore: "了解更多", viewAll: "浏览所有产品" },
  products: {
    "smart-dock": { name: "Smart Dock", description: "一次连接，\n让工作空间更简单。", overview: "经过细致思考的桌面连接核心，整合常用设备，让工作空间保持从容有序。" },
    "wireless-charger": { name: "Wireless Charger", description: "告别杂乱，\n轻松充电。", overview: "低调而温润的充电表面，让电力触手可及，同时保持空间的宁静感受。" },
    "desktop-hub": { name: "Desktop Hub", description: "连接所有设备，\n操作依然简单。", overview: "精巧的桌面连接中枢，整理每日所需工具，不为桌面增添多余的视觉干扰。" },
  },
  productDetails: {
    "smart-dock": {
      metadata: { title: "Smart Dock — SOLEN", description: "探索 SOLEN Smart Dock 概念产品，以及它为从容工作空间而形成的设计方向。" },
      eyebrow: "SOLEN / Smart Dock", statement: "一次连接，让工作空间更简单。", conceptNotice: "Smart Dock 为概念产品；图片用于传达设计方向，不代表已确认的工程规格。",
      intro: { eyebrow: "更安静的连接", title: "工作空间中，经过思考的核心。", copy: "Smart Dock 被构想为日常工作物件之间从容的连接中心。它的角色很简单：让工作空间整合为一体，却不成为视觉焦点。" },
      form: { eyebrow: "形态", title: "低矮轮廓，安静存在。", copy: "柔和圆角几何与克制细节，让 Smart Dock 以贴近桌面的建筑感姿态存在。它的形态与空间中原有的工具从容共处。" },
      material: { eyebrow: "材质方向", title: "温暖银色，细腻呈现。", copy: "拉丝铝材与柔和触感表面，构成精准却不显冰冷的材质语言。", labels: ["拉丝铝材", "暖银色", "柔和触感表面"] },
      workspace: { eyebrow: "融入空间", title: "科技应支持周围空间。", copy: "Smart Dock 呼应 SOLEN 的信念：实用科技可以自然共享工作空间，需要时在场，其余时刻保持视觉安静。" },
      family: { eyebrow: "SOLEN 产品家族", title: "作为用心整体的一部分。", collection: "浏览所有产品" }
    },
    "wireless-charger": {
      metadata: { title: "Wireless Charger — SOLEN", description: "Wireless Charger 是 SOLEN 概念产品家族的一员。" }, eyebrow: "SOLEN / Wireless Charger", statement: "告别杂乱，轻松充电。", conceptNotice: "Wireless Charger 为概念产品；图片不代表已确认的工程规格。",
      intro: { eyebrow: "清晰目的", title: "为日常电力而设的从容表面。", copy: "Wireless Charger 被构想为一个明确的位置，让每日相伴的物件自然放下。充电融入桌面的使用节奏，减少视觉上的打扰。" },
      form: { eyebrow: "摆放", title: "安静存在，恰如其分。", copy: "低矮轮廓与柔和几何，让物件自然安放于周围环境。克制的存在感，将视觉焦点留给整体工作空间。" },
      material: { eyebrow: "表面语言", title: "柔和几何，温润呈现。", copy: "暖银色与柔和触感表面，赋予充电物件从容而亲和的材质感受，同时不超出概念设计方向。", labels: ["低矮轮廓", "暖银色", "柔和触感表面"] },
      workspace: { eyebrow: "减法思考", title: "让电力成为桌面的一部分。", copy: "为充电留下一个清晰位置，概念上减少视觉杂乱，也让每日动作更自然地融入桌面。" },
      family: { eyebrow: "SOLEN 产品家族", title: "在用心整体中，安静成为一部分。", collection: "浏览所有产品" }
    },
    "desktop-hub": {
      metadata: { title: "Desktop Hub — SOLEN", description: "Desktop Hub 是 SOLEN 概念产品家族的一员。" }, eyebrow: "SOLEN / Desktop Hub", statement: "连接所有设备，操作依然简单。", conceptNotice: "Desktop Hub 为概念产品；图片不代表已确认的工程规格。",
      intro: { eyebrow: "垂直组织", title: "桌面上从容的连接中心。", copy: "Desktop Hub 被构想为直立于桌面的物件，将连接的概念收整于清晰、富有建筑感的形态中。它为繁忙的工作空间带来视觉秩序，却不宣称这些连接的运作方式。" },
      form: { eyebrow: "建筑感", title: "更小的占用，建立更清晰的秩序。", copy: "直立姿态以高度取代横向延伸。圆润边角与克制比例，让形态在周围物件之间显得明确而不突兀。" },
      material: { eyebrow: "材质方向", title: "精准轮廓，也有温润感受。", copy: "拉丝铝材与暖银色，让建筑感形态延续 SOLEN 一致的材质语言。", labels: ["垂直形态", "拉丝铝材", "暖银色"] },
      workspace: { eyebrow: "视觉秩序", title: "将连接，收整为用心形态。", copy: "Desktop Hub 探索功能物件如何参与工作空间的结构：清晰存在、表达精巧，并在视觉上保持从容。" },
      family: { eyebrow: "SOLEN 产品家族", title: "从容系统中的建筑感元素。", collection: "浏览所有产品" }
    }
  },
  design: { eyebrow: "用心设计", title: "温暖材质，\n细腻科技。", copy: "将材质、形态与功能融为安静而有目的的整体。", cta: "探索设计理念", material: "拉丝铝材 / 柔和触感表面" },
  footer: { slogan: "科技，自然融入生活。", note: "为从容生活而设计。", groups: { products: "产品", discover: "探索", support: "支持", language: "语言" } },
  pages: {
    products: { metadata: { title: "产品 — SOLEN", description: "让周围空间更简单的科技设计。" }, eyebrow: "SOLEN 产品", title: "让周围空间更简单的科技设计。" },
    design: {
      metadata: { title: "设计 — SOLEN", description: "探索 SOLEN 的设计理念：从容形态、温暖材质方向、空间意识与日常克制。" },
      eyebrow: "SOLEN 设计", title: "为融入空间而设计。",
      intro: "每一项 SOLEN 概念都从周围空间出发：物件带来的感受、安静存在的方式，以及如何自然成为日常的一部分。",
      thesis: "将形态、材质与空间，思考为一种安静的关系。",
      form: { eyebrow: "形态", title: "从容几何，目的清晰。", lead: "形态应先建立秩序，再吸引目光。", copy: "柔和几何、平衡比例与克制细节，构成富有建筑感的从容物件。设计不是为了消失，而是自然安放于空间之中。" },
      material: { eyebrow: "材质", title: "温润，而不冰冷。", lead: "用材质语言，为科技带来从容感受。", copy: "铝材、暖银色与柔和触感表面，构成 SOLEN 的概念方向。每一种表达都保持克制，让色调、触感与形态共同形成安静整体。", terms: ["铝材", "暖银色", "柔和触感表面", "克制材质表达"] },
      space: { eyebrow: "空间", title: "先看见空间，再放入物件。", lead: "一件物件所属的，不只有自身轮廓。", copy: "SOLEN 将桌面、周围物件与整体环境一并纳入设计思考。科技被构想为进入空间后的一段关系，而不是孤立存在的视觉中心。" },
      restraint: { eyebrow: "克制", title: "减少干扰，专注更从容。", lead: "减法，是决定哪些元素真正值得被看见。", copy: "放下不必要的视觉复杂，让比例、材质与目的清晰呈现。克制为每个元素留下空间，也为身处其中的人留下余地。" },
      everyday: { eyebrow: "日常科技", title: "需要时在场，平时也安静。", lead: "真正实用的物件，能自然进入每日节奏。", copy: "SOLEN 构想支持日常片刻的科技，不让每次互动都成为视觉事件。使用时经过思考，退居背景时依然从容。" },
      principles: { eyebrow: "设计原则", title: "一套安静的判断方式。", items: [
        { title: "从空间开始。", copy: "先理解房间、表面，以及原本就在其中的物件。" },
        { title: "让形态有其目的。", copy: "以几何与比例建立清晰秩序，不刻意制造戏剧感。" },
        { title: "克制地表达材质。", copy: "让温度、色调与触感共同支持整体。" },
        { title: "减少视觉干扰。", copy: "移除不必要地争夺注意力的元素。" },
        { title: "让科技自然融入。", copy: "为日常存在而设计，而非主导视线。" },
      ] },
      products: { eyebrow: "设计进入情境", title: "同一理念，形成三种不同形态。", copy: "探索 SOLEN 共通的设计方向，如何在三项概念产品中各自成形。", conceptNotice: "三项均为概念产品；图片用于传达设计方向，不代表已确认的工程规格。", cta: "探索所有产品" },
    },
    about: {
      metadata: { title: "关于 — SOLEN", description: "认识 SOLEN：以从容、用心的日常空间为出发点的概念科技品牌。" },
      eyebrow: "关于 SOLEN", title: "科技，自然融入生活。", intro: "SOLEN 从一个简单想法出发：科技应支持日常环境，而非主导生活。", thesis: "让物件、人和空间，建立更从容的关系。",
      idea: { eyebrow: "核心想法", title: "科技可以存在，而不必争取目光。", copy: "SOLEN 将实用物件想象为空间的一部分。它们通过清晰与轻松展现价值，而不是增加视觉干扰。" },
      relationship: { eyebrow: "共同关系", title: "科技与空间，融入生活。", items: [
        { title: "科技", copy: "被思考为支持日常节奏的安静工具。" },
        { title: "空间", copy: "本身就是设计的一部分，而不只是背景。" },
        { title: "生活", copy: "始终位于每项概念与互动的中心。" },
      ] },
      approach: { eyebrow: "我们的方法", title: "从真正需要的开始。", lead: "清晰，来自理解一件物件需要成为什么，以及不需要成为什么。", copy: "SOLEN 在形态、材质方向与日常目的之间寻找平衡。每项概念都以容易理解、安定从容，并能自然存在于现代空间为方向。" },
      principles: { eyebrow: "引导我们的原则", title: "安静原则，清晰意图。", items: [
        { title: "思考整体空间。", copy: "看见产品与房间，以及身处其中的人之间的关系。" },
        { title: "减少视觉干扰。", copy: "以层次与比例，取代不必要的复杂。" },
        { title: "让科技容易亲近。", copy: "以温度、清晰与从容存在，塑造每项概念。" },
        { title: "支持真实日常。", copy: "专注于用心物件能自然融入的平常片刻。" },
      ] },
      closing: { eyebrow: "SOLEN / 概念品牌", title: "为科技周围的生活而设计。", copy: "SOLEN 以一项共同信念连接概念产品家族：当科技能融入周围环境，便更显用心。", conceptNotice: "SOLEN 是虚构概念品牌；产品与图片用于表达设计方向，不代表已确认的商业或工程规格。", designCta: "探索设计理念", productsCta: "浏览产品系列" },
    },
    support: {
      metadata: { title: "支持 — SOLEN", description: "浏览 SOLEN 概念产品家族目前提供的信息。" },
      eyebrow: "SOLEN 支持", title: "需要帮助，从这里开始。", intro: "探索产品家族、了解目前提供的信息范围，并找到关于此概念网站的清晰说明。", conceptNotice: "SOLEN 是虚构概念品牌，目前不提供实时支持、服务申请或产品文档。",
      products: { eyebrow: "选择产品", title: "探索产品家族。", copy: "每个产品页呈现已批准的概念故事、设计方向，以及它与 SOLEN 家族的关系。", cta: "查看概念" },
      topics: { eyebrow: "目前提供的信息", title: "清晰界定目前的信息范围。", items: [
        { title: "产品概览", copy: "探索目前为每项概念产品建立的用途与设计叙事。" },
        { title: "设计方向", copy: "了解形态、材质表达与工作空间之间的共同视觉语言。" },
        { title: "设置与规格", copy: "目前尚未定义设置说明、兼容性或工程规格。" },
        { title: "服务与保养", copy: "目前尚未建立保修条款、维修服务或正式保养方案。" },
      ] },
      faq: { eyebrow: "常见问题", title: "关于此概念网站。", items: [
        { question: "可以购买 SOLEN 产品吗？", answer: "目前不提供购买、价格、发布或供货信息。SOLEN 与其产品均以虚构概念形式呈现。" },
        { question: "产品图片是技术参考吗？", answer: "不是。批准图片用于表达产品与视觉设计方向，不代表已确认的端口、尺寸、材质或性能。" },
        { question: "可以在哪里找到产品规格？", answer: "这些概念产品目前尚未定义工程规格与兼容性信息。" },
        { question: "目前提供客户支持吗？", answer: "目前不提供实时联系渠道、保修服务或支持申请系统。" },
      ] },
      help: { eyebrow: "关于这项计划", title: "想了解更多背景？", copy: "认识 SOLEN 背后的想法，以及它所构想的科技与日常空间关系。", cta: "关于 SOLEN" },
    },
  },
} satisfies LocaleMessages;
