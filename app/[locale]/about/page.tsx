import { PageIntro, PageShell } from "@/components/page-shell";
import { getPageContext, getPageMetadata, type RouteParams } from "@/i18n/page-context";

export const generateMetadata = (props: RouteParams) => getPageMetadata(props, "about");

export default async function AboutPage(props: RouteParams) {
  const { locale, messages } = await getPageContext(props);
  const page = messages.pages.about;

  return <PageShell locale={locale} messages={messages}>
    <PageIntro eyebrow={page.eyebrow} title={page.title} intro={page.intro} />
    <section className="about-statement" aria-hidden="true"><span>S</span><p>TECHNOLOGY / SPACE / LIFE</p></section>
    <section className="about-sections">
      {page.sections.map((section, index) => <article key={section.title}>
        <p className="eyebrow">0{index + 1}</p><h2>{section.title}</h2><p>{section.copy}</p>
      </article>)}
    </section>
  </PageShell>;
}
