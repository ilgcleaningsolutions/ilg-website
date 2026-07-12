import { notFound } from "next/navigation";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2, Leaf, MessageCircle } from "lucide-react";
import Layout from "@/components/Layout";
import ExploreOtherProducts from "@/components/ExploreOtherProducts";
import LeadFunnelDialog from "@/components/LeadFunnelDialog";
import {
  getKlinmakProduct,
  getKlinmakProducts,
  klinmakProducts,
} from "@/lib/klinmak-products";

export function generateStaticParams() {
  return klinmakProducts
    .filter((p) => p.detail)
    .map((p) => ({ slug: p.slug }));
}

export default async function KlinmakProductPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("ProductDetail");
  const product = getKlinmakProduct(slug, locale);
  if (!product || !product.detail) notFound();
  const d = product.detail;

  // Split "Joker 5070" → "Joker" + highlighted "5070"
  const [titleFirst, ...titleRest] = product.name.split(" ");
  const titleTail = titleRest.join(" ");

  return (
    <Layout>
      <article>
        {/* ====================== HERO ====================== */}
        <section className="bg-background pt-28 pb-10 md:pt-32 md:pb-14">
          <div className="container mx-auto px-6">
            <Link
              href="/klinmak"
              className="inline-flex items-center gap-1.5 font-heading text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft size={14} />
              {t("backTo", { brand: "Klinmak" })}
            </Link>

            {/* Flat grid so mobile flows title → image → description, while desktop
               keeps the image in the left column and the copy on the right. */}
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-[3fr_2fr] lg:items-center lg:gap-x-14">
              {/* Category */}
              <p className="mb-3 font-heading text-xs font-semibold uppercase tracking-[0.22em] text-primary lg:col-start-2 lg:row-start-1">
                {product.category}
              </p>

              {/* Title */}
              <h1 className="font-display text-4xl leading-none tracking-tight text-foreground md:text-5xl lg:col-start-2 lg:row-start-2 lg:text-6xl">
                {titleFirst}
                {titleTail && (
                  <>
                    {" "}
                    <span className="italic text-ilg-blue-light">{titleTail}</span>
                  </>
                )}
              </h1>

              {/* Product image — below the title on mobile, left column on desktop, no box */}
              <div className="my-8 lg:my-0 lg:col-start-1 lg:row-start-1 lg:row-span-6 lg:self-center">
                <div className="relative mx-auto aspect-[5/4] w-full max-w-xl sm:max-w-2xl lg:max-w-none">
                  <Image
                    src={product.image}
                    alt={product.imageAlt ?? product.name}
                    fill
                    priority
                    className="object-contain drop-shadow-[0_28px_55px_rgba(0,0,0,0.2)]"
                    sizes="(max-width: 1024px) 90vw, 45vw"
                  />
                </div>
              </div>

              {/* Lede */}
              <p className="font-display text-xl leading-snug text-foreground/90 md:text-2xl lg:col-start-2 lg:row-start-3 lg:mt-5">
                {d.lede}
              </p>

              {/* Intro */}
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground lg:col-start-2 lg:row-start-4">
                {d.intro}
              </p>

              {/* Highlights */}
              <ul className="mt-6 flex flex-col gap-3 lg:col-start-2 lg:row-start-5">
                {d.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-center gap-3 text-sm text-foreground/85 md:text-base"
                  >
                    <CheckCircle2
                      size={18}
                      className="shrink-0 text-ilg-blue-light"
                    />
                    {h}
                  </li>
                ))}
              </ul>

              {/* CTA — opens the in-page lead-capture funnel, submitted to the Interlink CRM */}
              <LeadFunnelDialog productName={product.name}>
                <button
                  type="button"
                  className="mt-8 inline-flex w-fit items-center gap-2 justify-self-start rounded-full bg-primary px-8 py-3.5 font-heading text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:gap-3 hover:bg-accent lg:col-start-2 lg:row-start-6"
                >
                  <MessageCircle size={16} />
                  {t("talkToExpert", { brand: "KlinMak" })}
                  <ArrowRight size={15} />
                </button>
              </LeadFunnelDialog>
            </div>
          </div>
        </section>

        {/* ====================== IDEAL FOR ====================== */}
        <section className="border-t border-border section-alt py-8 md:py-10">
          <div className="container mx-auto px-6 text-center">
            <p className="mb-5 font-heading text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
              {t("idealFor")}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-3">
              {d.idealFor.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-card px-4 py-2 font-heading text-sm font-medium text-foreground/80"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ====================== FEATURE SECTIONS (alternating) ====================== */}
        {d.featureSections.map((s, i) => (
          <section
            key={s.title}
            className={`border-t border-border py-10 md:py-14 ${
              i % 2 === 1 ? "section-alt" : "bg-background"
            }`}
          >
            <div className="container mx-auto px-6">
              <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-5 lg:gap-12">
                {/* Image — takes the larger 3/5 track; alternates side on lg, no box (section 01 = right) */}
                <div className={`lg:col-span-3 ${i % 2 === 0 ? "lg:order-2" : ""}`}>
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={s.image}
                      alt={s.imageAlt}
                      fill
                      className="object-contain"
                      sizes="(max-width: 1024px) 92vw, 56vw"
                    />
                  </div>
                </div>
                {/* Text */}
                <div className={`lg:col-span-2 ${i % 2 === 0 ? "lg:order-1" : ""}`}>
                  <p className="mb-2 font-heading text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h2 className="font-display text-2xl text-foreground md:text-3xl lg:text-4xl">
                    <span className="italic text-ilg-blue-light">{s.title}</span>
                  </h2>
                  <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
                    {s.body}
                  </p>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* ====================== KEY FEATURES GRID ====================== */}
        <section className="border-t border-border bg-background py-12 md:py-16">
          <div className="container mx-auto max-w-5xl px-6">
            <p className="mb-10 text-center font-heading text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
              {t("keyFeatures")}
            </p>
            <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {d.keyFeatures.map(({ icon: Icon, title, description }) => (
                <div key={title}>
                  <Icon
                    size={26}
                    strokeWidth={1.6}
                    className="mb-3 text-primary"
                  />
                  <h3 className="font-heading text-base font-bold text-foreground mb-1.5">
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ====================== TECHNICAL SPECIFICATIONS ====================== */}
        <section className="border-t border-border section-alt py-14 md:py-16">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-3 font-heading text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
                {t("technicalSpecifications")}
              </p>
              <h2 className="font-display text-3xl text-foreground md:text-4xl">
                {t("specHeadingLead")}{" "}
                <span className="italic text-ilg-blue-light">
                  {t("specHeadingAccent")}
                </span>
              </h2>
            </div>

            <div className="mx-auto mt-12 max-w-5xl overflow-x-auto rounded-xl border border-border bg-card">
              <table className="w-full min-w-[720px] text-sm">
                <thead>
                  <tr className="border-b border-border bg-primary text-primary-foreground">
                    <th className="px-4 py-3 text-left font-heading text-xs font-semibold uppercase tracking-wider">
                      {t("specificationColumn")}
                    </th>
                    {d.specVariants.map((v) => (
                      <th
                        key={v}
                        className="px-4 py-3 text-left font-heading text-xs font-semibold uppercase tracking-wider"
                      >
                        {v}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {d.specRows.map((row, i) => (
                    <tr
                      key={`${row.label}-${i}`}
                      className={i % 2 === 0 ? "bg-secondary/40" : "bg-transparent"}
                    >
                      <td className="px-4 py-3 align-top font-medium text-foreground/85">
                        {row.label}
                      </td>
                      {row.values.map((val, j) => (
                        <td
                          key={j}
                          className="px-4 py-3 align-top font-heading font-semibold text-primary"
                        >
                          {val}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ====================== SUSTAINABILITY ====================== */}
        {d.sustainability && d.sustainability.length > 0 && (
          <section className="border-t border-border bg-background py-12 md:py-14">
            <div className="container mx-auto max-w-3xl px-6 text-center">
              <span className="mx-auto mb-5 flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Leaf size={24} strokeWidth={1.6} />
              </span>
              <h2 className="font-display text-2xl text-foreground md:text-3xl">
                {t.rich("sustainableTitle", {
                  accent: (chunks) => (
                    <span className="italic text-ilg-blue-light">{chunks}</span>
                  ),
                })}
              </h2>
              <div className="mt-6 flex flex-col gap-3">
                {d.sustainability.map((item) => (
                  <p
                    key={item}
                    className="text-base leading-relaxed text-muted-foreground"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ====================== EXPLORE OTHER PRODUCTS ====================== */}
        <section className="border-t border-border section-alt py-12">
          <div className="container mx-auto px-6">
            <p className="mb-6 text-center font-heading text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
              {t("exploreOther", { brand: "Klinmak" })}
            </p>
            <ExploreOtherProducts
              products={getKlinmakProducts(locale)
                .filter((p) => p.slug !== product.slug)
                .map((p) => ({
                  slug: p.slug,
                  name: p.name,
                  image: p.image,
                  imageAlt: p.imageAlt,
                }))}
              brandSlug="klinmak"
            />
          </div>
        </section>
      </article>
    </Layout>
  );
}
