import { DesignChapter, DesignHero, DesignPrinciples, DesignProductConnection, MaterialLanguage } from "@/components/design-page";
import { PageShell } from "@/components/page-shell";
import { getPageContext, getPageMetadata, type RouteParams } from "@/i18n/page-context";

export const generateMetadata = (props: RouteParams) => getPageMetadata(props, "design");

export default async function DesignPage(props: RouteParams) {
  const { locale, messages } = await getPageContext(props);
  const page = messages.pages.design;

  return <PageShell locale={locale} messages={messages}>
    <div className="design-page">
      <DesignHero content={page} />
      <DesignChapter content={page.form} chapter="form" index="01" />
      <MaterialLanguage content={page.material} />
      <DesignChapter content={page.space} chapter="space" index="03" />
      <DesignChapter content={page.restraint} chapter="restraint" index="04" />
      <DesignChapter content={page.everyday} chapter="everyday" index="05" />
      <DesignPrinciples content={page.principles} />
      <DesignProductConnection locale={locale} content={page.products} messages={messages} />
    </div>
  </PageShell>;
}
