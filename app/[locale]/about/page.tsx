import { AboutApproach, AboutClosing, AboutHero, AboutIdea, AboutPrinciples, AboutRelationship } from "@/components/about-page";
import { PageShell } from "@/components/page-shell";
import { getPageContext, getPageMetadata, type RouteParams } from "@/i18n/page-context";

export const generateMetadata = (props: RouteParams) => getPageMetadata(props, "about");

export default async function AboutPage(props: RouteParams) {
  const { locale, messages } = await getPageContext(props);
  const page = messages.pages.about;

  return <PageShell locale={locale} messages={messages}>
    <article className="about-page">
      <AboutHero content={page} />
      <AboutIdea content={page.idea} />
      <AboutRelationship content={page.relationship} />
      <AboutApproach content={page.approach} />
      <AboutPrinciples content={page.principles} />
      <AboutClosing locale={locale} content={page.closing} />
    </article>
  </PageShell>;
}
