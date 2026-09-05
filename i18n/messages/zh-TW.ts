import type { LocaleMessages } from "../types";

export const zhTW = {
  metadata: { title: "SOLEN — 科技，自然融入生活。", description: "用心設計的科技，自然融入你的空間。" },
  accessibility: { home: "SOLEN 首頁", primaryNav: "主要導覽", footerNav: "頁尾導覽", mobileNav: "行動版導覽", openMenu: "開啟導覽選單", closeMenu: "關閉導覽選單", language: "選擇語言", learnAbout: "進一步了解", skipToContent: "跳至主要內容", conceptModel: "SOLEN 概念 3D 模型" },
  nav: { products: "產品", design: "設計", about: "關於", support: "支援" },
  hero: { eyebrow: "SOLEN / 智慧桌面擴充底座", title: "科技，自然融入生活。", copy: "用心設計的科技，\n自然融入你的空間。", cta: "探索產品", imageAlt: "暖銀色 SOLEN 智慧桌面擴充底座" },
  philosophy: { eyebrow: "品牌理念", title: "為你的空間而設計。", copy: "科技不應佔據生活，而應自然融入日常工作與生活環境。" },
  collection: { eyebrow: "產品系列", title: "為彼此協作而生。", copy: "三件用心構思的產品，讓工作空間更從容、更順暢地連結。", learnMore: "了解更多", viewAll: "瀏覽所有產品" },
  products: {
    "smart-dock": { name: "Smart Dock", description: "一次連接，\n讓工作空間更簡單。", overview: "經過細緻思考的桌面連接核心，整合常用裝置，讓工作空間保持從容有序。" },
    "wireless-charger": { name: "Wireless Charger", description: "告別雜亂，\n輕鬆充電。", overview: "低調而溫潤的充電表面，讓電力隨手可得，同時維持空間的寧靜感受。" },
    "desktop-hub": { name: "Desktop Hub", description: "連接所有裝置，\n操作依然簡單。", overview: "精巧的桌面連接中樞，整理每日所需工具，不為桌面增添多餘的視覺干擾。" },
  },
  productDetails: {
    "smart-dock": {
      metadata: { title: "Smart Dock — SOLEN", description: "探索 SOLEN Smart Dock 概念產品，以及它為從容工作空間而形成的設計方向。" },
      eyebrow: "SOLEN / Smart Dock", statement: "一次連接，讓工作空間更簡單。", conceptNotice: "Smart Dock 為概念產品；圖片用於傳達設計方向，不代表已確認的工程規格。",
      intro: { eyebrow: "更安靜的連結", title: "工作空間中，經過思考的核心。", copy: "Smart Dock 被構想為日常工作物件之間從容的連結中心。它的角色很簡單：讓工作空間整合為一體，卻不成為視覺焦點。" },
      form: { eyebrow: "形態", title: "低矮輪廓，安靜存在。", copy: "柔和圓角幾何與克制細節，讓 Smart Dock 以貼近桌面的建築感姿態存在。它的形態與空間中原有的工具從容共處。" },
      material: { eyebrow: "材質方向", title: "溫暖銀色，細膩呈現。", copy: "拉絲鋁材與柔和觸感表面，構成精準卻不顯冰冷的材質語言。", labels: ["拉絲鋁材", "暖銀色", "柔和觸感表面"] },
      workspace: { eyebrow: "融入空間", title: "科技應支援周遭空間。", copy: "Smart Dock 呼應 SOLEN 的信念：實用科技可以自然共享工作空間，需要時在場，其餘時刻保持視覺安靜。" },
      family: { eyebrow: "SOLEN 產品家族", title: "作為用心整體的一部分。", collection: "瀏覽所有產品" }
    },
    "wireless-charger": {
      metadata: { title: "Wireless Charger — SOLEN", description: "Wireless Charger 是 SOLEN 概念產品家族的一員。" }, eyebrow: "SOLEN / Wireless Charger", statement: "告別雜亂，輕鬆充電。", conceptNotice: "Wireless Charger 為概念產品；圖片不代表已確認的工程規格。",
      intro: { eyebrow: "清楚目的", title: "為日常電力而設的從容表面。", copy: "Wireless Charger 被構想為一個明確的位置，讓每日相伴的物件自然放下。充電融入桌面的使用節奏，減少視覺上的打擾。" },
      form: { eyebrow: "擺放", title: "安靜存在，恰如其分。", copy: "低矮輪廓與柔和幾何，讓物件自然安放於周遭環境。克制的存在感，將視覺焦點留給整體工作空間。" },
      material: { eyebrow: "表面語言", title: "柔和幾何，溫潤呈現。", copy: "暖銀色與柔和觸感表面，賦予充電物件從容而可親的材質感受，同時不超出概念設計方向。", labels: ["低矮輪廓", "暖銀色", "柔和觸感表面"] },
      workspace: { eyebrow: "減法思考", title: "讓電力成為桌面的一部分。", copy: "為充電留下一個清楚位置，概念上減少視覺雜亂，也讓每日動作更自然地融入桌面。" },
      family: { eyebrow: "SOLEN 產品家族", title: "在用心整體中，安靜成為一部分。", collection: "瀏覽所有產品" }
    },
    "desktop-hub": {
      metadata: { title: "Desktop Hub — SOLEN", description: "Desktop Hub 是 SOLEN 概念產品家族的一員。" }, eyebrow: "SOLEN / Desktop Hub", statement: "連接所有裝置，操作依然簡單。", conceptNotice: "Desktop Hub 為概念產品；圖片不代表已確認的工程規格。",
      intro: { eyebrow: "垂直組織", title: "桌面上從容的連結中心。", copy: "Desktop Hub 被構想為直立於桌面的物件，將連結的概念收整於清楚、帶有建築感的形態中。它為繁忙的工作空間帶來視覺秩序，卻不宣稱這些連結的運作方式。" },
      form: { eyebrow: "建築感", title: "更小的佔用，建立更清楚的秩序。", copy: "直立姿態以高度取代橫向延伸。圓潤邊角與克制比例，讓形態在周遭物件之間顯得明確而不突兀。" },
      material: { eyebrow: "材質方向", title: "精準輪廓，也有溫潤感受。", copy: "拉絲鋁材與暖銀色，讓建築感形態延續 SOLEN 一致的材質語言。", labels: ["垂直形態", "拉絲鋁材", "暖銀色"] },
      workspace: { eyebrow: "視覺秩序", title: "將連結，收整為用心形態。", copy: "Desktop Hub 探索機能物件如何參與工作空間的結構：清楚存在、表現精巧，並在視覺上保持從容。" },
      family: { eyebrow: "SOLEN 產品家族", title: "從容系統中的建築感元素。", collection: "瀏覽所有產品" }
    }
  },
  design: { eyebrow: "用心設計", title: "溫暖材質，\n細膩科技。", copy: "將材質、形態與機能融為安靜而有目的的整體。", cta: "探索設計理念", material: "拉絲鋁材 / 柔和觸感表面" },
  footer: { slogan: "科技，自然融入生活。", note: "為從容生活而設計。", groups: { products: "產品", discover: "探索", support: "支援", language: "語言" } },
  pages: {
    products: { metadata: { title: "產品 — SOLEN", description: "讓周遭空間更簡單的科技設計。" }, eyebrow: "SOLEN 產品", title: "讓周遭空間更簡單的科技設計。" },
    design: {
      metadata: { title: "設計 — SOLEN", description: "探索 SOLEN 的設計理念：從容形態、溫暖材質方向、空間意識與日常克制。" },
      eyebrow: "SOLEN 設計", title: "為融入空間而設計。",
      intro: "每一項 SOLEN 概念都從周遭空間出發：物件帶來的感受、安靜存在的方式，以及如何自然成為日常的一部分。",
      thesis: "將形態、材質與空間，思考為一種安靜的關係。",
      form: { eyebrow: "形態", title: "從容幾何，目的清楚。", lead: "形態應先建立秩序，再吸引目光。", copy: "柔和幾何、平衡比例與克制細節，構成帶有建築感的從容物件。設計不是為了消失，而是自然安放於空間之中。" },
      material: { eyebrow: "材質", title: "溫潤，而不冰冷。", lead: "用材質語言，為科技帶來從容感受。", copy: "鋁材、暖銀色與柔和觸感表面，構成 SOLEN 的概念方向。每一種表達都保持克制，讓色調、觸感與形態共同形成安靜整體。", terms: ["鋁材", "暖銀色", "柔和觸感表面", "克制材質表達"] },
      space: { eyebrow: "空間", title: "先看見空間，再放入物件。", lead: "一件物件所屬的，不只有自身輪廓。", copy: "SOLEN 將桌面、周遭物件與整體環境一併納入設計思考。科技被構想為進入空間後的一段關係，而不是孤立存在的視覺中心。" },
      restraint: { eyebrow: "克制", title: "減少干擾，專注更從容。", lead: "減法，是決定哪些元素真正值得被看見。", copy: "放下不必要的視覺複雜，讓比例、材質與目的清楚呈現。克制為每個元素留下空間，也為身處其中的人留下餘裕。" },
      everyday: { eyebrow: "日常科技", title: "需要時在場，平時也安靜。", lead: "真正實用的物件，能自然進入每日節奏。", copy: "SOLEN 構想支援日常片刻的科技，不讓每次互動都成為視覺事件。使用時經過思考，退居背景時依然從容。" },
      principles: { eyebrow: "設計原則", title: "一套安靜的判斷方式。", items: [
        { title: "從空間開始。", copy: "先理解房間、表面，以及原本就在其中的物件。" },
        { title: "讓形態有其目的。", copy: "以幾何與比例建立清楚秩序，不刻意製造戲劇感。" },
        { title: "克制地表達材質。", copy: "讓溫度、色調與觸感共同支援整體。" },
        { title: "減少視覺干擾。", copy: "移除不必要地爭奪注意力的元素。" },
        { title: "讓科技自然融入。", copy: "為日常存在而設計，而非主導視線。" },
      ] },
      products: { eyebrow: "設計進入情境", title: "同一理念，形成三種不同形態。", copy: "探索 SOLEN 共通的設計方向，如何在三項概念產品中各自成形。", conceptNotice: "三項皆為概念產品；圖片用於傳達設計方向，不代表已確認的工程規格。", cta: "探索所有產品" },
    },
    about: {
      metadata: { title: "關於 — SOLEN", description: "認識 SOLEN：以從容、用心的日常空間為出發點的概念科技品牌。" },
      eyebrow: "關於 SOLEN", title: "科技，自然融入生活。", intro: "SOLEN 從一個簡單想法出發：科技應支援日常環境，而非主導生活。", thesis: "讓物件、人與空間，建立更從容的關係。",
      idea: { eyebrow: "核心想法", title: "科技可以存在，而不必爭取目光。", copy: "SOLEN 將實用物件想像為空間的一部分。它們透過清楚與輕鬆展現價值，而不是增加視覺干擾。" },
      relationship: { eyebrow: "共同關係", title: "科技與空間，融入生活。", items: [
        { title: "科技", copy: "被思考為支援日常節奏的安靜工具。" },
        { title: "空間", copy: "本身就是設計的一部分，而不只是背景。" },
        { title: "生活", copy: "始終位於每項概念與互動的中心。" },
      ] },
      approach: { eyebrow: "我們的方法", title: "從真正需要的開始。", lead: "清楚，來自理解一件物件需要成為什麼，以及不需要成為什麼。", copy: "SOLEN 在形態、材質方向與日常目的之間尋找平衡。每項概念都以容易理解、安定從容，並能自然存在於現代空間為方向。" },
      principles: { eyebrow: "引導我們的原則", title: "安靜原則，清楚意圖。", items: [
        { title: "思考整體空間。", copy: "看見產品與房間，以及身處其中的人之間的關係。" },
        { title: "減少視覺干擾。", copy: "以層次與比例，取代不必要的複雜。" },
        { title: "讓科技容易親近。", copy: "以溫度、清楚與從容存在，塑造每項概念。" },
        { title: "支援真實日常。", copy: "專注於用心物件能自然融入的平常片刻。" },
      ] },
      closing: { eyebrow: "SOLEN / 概念品牌", title: "為科技周圍的生活而設計。", copy: "SOLEN 以一項共同信念連結概念產品家族：當科技能融入周遭環境，便更顯用心。", conceptNotice: "SOLEN 是虛構概念品牌；產品與圖片用於表達設計方向，不代表已確認的商業或工程規格。", designCta: "探索設計理念", productsCta: "瀏覽產品系列" },
    },
    support: {
      metadata: { title: "支援 — SOLEN", description: "瀏覽 SOLEN 概念產品家族目前提供的資訊。" },
      eyebrow: "SOLEN 支援", title: "需要協助，從這裡開始。", intro: "探索產品家族、了解目前提供的資訊範圍，並找到關於此概念網站的清楚說明。", conceptNotice: "SOLEN 是虛構概念品牌，目前未提供即時支援、服務申請或產品文件。",
      products: { eyebrow: "選擇產品", title: "探索產品家族。", copy: "每個產品頁呈現已核准的概念故事、設計方向，以及它與 SOLEN 家族的關係。", cta: "查看概念" },
      topics: { eyebrow: "目前提供的資訊", title: "清楚界定目前的資訊範圍。", items: [
        { title: "產品概覽", copy: "探索目前為每項概念產品建立的用途與設計敘事。" },
        { title: "設計方向", copy: "了解形態、材質表達與工作空間之間的共同視覺語言。" },
        { title: "設定與規格", copy: "目前尚未定義設定說明、相容性或工程規格。" },
        { title: "服務與保養", copy: "目前尚未建立保固條款、維修服務或正式保養方案。" },
      ] },
      faq: { eyebrow: "常見問題", title: "關於此概念網站。", items: [
        { question: "可以購買 SOLEN 產品嗎？", answer: "目前未提供購買、價格、發表或供貨資訊。SOLEN 與其產品皆以虛構概念形式呈現。" },
        { question: "產品圖片是技術參考嗎？", answer: "不是。核准圖片用於表達產品與視覺設計方向，不代表已確認的連接埠、尺寸、材質或效能。" },
        { question: "可以在哪裡找到產品規格？", answer: "這些概念產品目前尚未定義工程規格與相容性資訊。" },
        { question: "目前提供客戶支援嗎？", answer: "目前未提供即時聯絡管道、保固服務或支援申請系統。" },
      ] },
      help: { eyebrow: "關於這項計畫", title: "想了解更多背景？", copy: "認識 SOLEN 背後的想法，以及它所構想的科技與日常空間關係。", cta: "關於 SOLEN" },
    },
  },
} satisfies LocaleMessages;
