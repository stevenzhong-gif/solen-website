import { PageIntro, PageShell } from "@/components/page-shell";
import { getPageContext, getPageMetadata, type RouteParams } from "@/i18n/page-context";

export const generateMetadata = (props: RouteParams) => getPageMetadata(props, "design");

export default async function DesignPage(props: RouteParams) {
  const { locale, messages } = await getPageContext(props);
  const page = messages.pages.design;

  return <PageShell locale={locale} messages={messages}>
    <PageIntro eyebrow={page.eyebrow} title={page.title} intro={page.intro} />
    <section className="material-study" aria-hidden="true"><div /><div /><p>SOLEN / FORM &amp; MATERIAL</p></section>
    <section className="principles" aria-label={page.title}>
      {page.principles.map((principle, index) => <article className="principle" key={principle.title}>
        <p className="principle__number" aria-hidden="true">0{index + 1}</p>
        <h2>{principle.title}</h2><p className="principle__lead">{principle.copy}</p><p>{principle.detail}</p>
      </article>)}
    </section>
  </PageShell>;
}
