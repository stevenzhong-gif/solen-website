import { PageShell } from "@/components/page-shell";
import { SupportFaq, SupportHelp, SupportHero, SupportProducts, SupportTopics } from "@/components/support-page";
import { getPageContext, getPageMetadata, type RouteParams } from "@/i18n/page-context";

export const generateMetadata = (props: RouteParams) => getPageMetadata(props, "support");

export default async function SupportPage(props: RouteParams) {
  const { locale, messages } = await getPageContext(props);
  const page = messages.pages.support;

  return <PageShell locale={locale} messages={messages}>
    <article className="support-page">
      <SupportHero content={page} />
      <SupportProducts locale={locale} content={page.products} messages={messages} />
      <SupportTopics content={page.topics} />
      <SupportFaq content={page.faq} />
      <SupportHelp locale={locale} content={page.help} />
    </article>
  </PageShell>;
}
