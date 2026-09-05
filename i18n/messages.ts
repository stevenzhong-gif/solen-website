import type { Locale } from "./config";
import type { LocaleMessages } from "./types";
import { en } from "./messages/en";
import { zhCN } from "./messages/zh-CN";
import { zhTW } from "./messages/zh-TW";

const messages: Record<Locale, LocaleMessages> = {
  en,
  "zh-TW": zhTW,
  "zh-CN": zhCN,
};

export type Messages = LocaleMessages;

export function getMessages(locale: Locale): LocaleMessages {
  return messages[locale];
}
