import { PageIntro, PageShell } from "@/components/page-shell";
import { getPageContext, getPageMetadata, type RouteParams } from "@/i18n/page-context";

export const generateMetadata = (props: RouteParams) => getPageMetadata(props, "support");

export default async function SupportPage(props: RouteParams) {
  const { locale, messages } = await getPageContext(props);
  const page = messages.pages.support;

  return <PageShell locale={locale} messages={messages}>
    <PageIntro eyebrow={page.eyebrow} title={page.title} intro={page.intro} />
    <section className="support-grid" aria-label={page.title}>
      {page.categories.map((category, index) => <article className="support-item" key={category.title}>
        <p className="support-item__number" aria-hidden="true">0{index + 1}</p><h2>{category.title}</h2><p>{category.copy}</p>
        <button type="button" disabled>{page.unavailable}</button>
      </article>)}
    </section>
    <p className="support-notice">{page.notice}</p>
  </PageShell>;
}
