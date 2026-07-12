import { notFound } from "next/navigation";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { ArrowLeft, ArrowRight, MessageCircle } from "lucide-react";
import Layout from "@/components/Layout";
import ExploreOtherProducts from "@/components/ExploreOtherProducts";
import ProductDiagram from "@/components/ProductDiagram";
import LeadFunnelDialog from "@/components/LeadFunnelDialog";
import {
  getTecnovapProduct,
  getTecnovapProducts,
  getTecnovapSlugs,
} from "@/lib/tecnovap-products";

export function generateStaticParams() {
  return getTecnovapSlugs().map((slug) => ({ slug }));
}

export default async function TecnovapProductPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("ProductDetail");
  const product = getTecnovapProduct(slug, locale);
  if (!product) notFound();

  // Split name for the system-style title (first word bold + rest lighter)
  const [titleFirst, ...titleRest] = product.name.split(" ");
  const titleTail = titleRest.join(" ");

  return (
    <Layout>
      <article>
        {/* ====================== HERO ====================== */}
        <section className="bg-background pt-28 pb-12 md:pt-32 md:pb-16">
          <div className="container mx-auto px-6">
            <Link
              href="/tecnovap"
              className="inline-flex items-center gap-1.5 font-heading text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft size={14} />
              {t("backTo", { brand: "Tecnovap" })}
            </Link>

            <div className="mt-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Image (or annotated diagram if `parts` exist) */}
              <div className="order-2 lg:order-1">
                {product.parts && product.parts.length > 0 ? (
                  <ProductDiagram
                    image={product.image}
                    alt={product.imageAlt ?? product.name}
                    parts={product.parts}
                    imageWidth={product.imageWidth}
                    imageHeight={product.imageHeight}
                  />
                ) : (
                  <div className="relative mx-auto aspect-square w-full max-w-md lg:max-w-lg">
                    <Image
                      src={product.image}
                      alt={product.imageAlt ?? product.name}
                      fill
                      priority
                      className="object-contain drop-shadow-[0_24px_50px_rgba(0,0,0,0.18)]"
                      sizes="(max-width: 1024px) 90vw, 45vw"
                    />
                  </div>
                )}
              </div>

              {/* Title + spec + description */}
              <div className="order-1 lg:order-2">
                <p className="mb-3 font-heading text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                  {product.category}
                </p>

                <div className="flex items-center gap-4 md:gap-5">
                  <span
                    aria-hidden
                    className="h-px w-10 shrink-0 bg-foreground/25 md:w-16"
                  />
                  <h1 className="font-display text-3xl uppercase leading-none tracking-tight text-foreground md:text-4xl lg:text-5xl xl:text-6xl">
                    <span className="font-bold">{titleFirst}</span>
                    {titleTail && (
                      <>
                        {" "}
                        <span className="font-light text-foreground/40">
                          {titleTail}
                        </span>
                      </>
                    )}
                  </h1>
                </div>

                {product.spec && (
                  <p className="mt-2 font-heading text-base font-medium text-muted-foreground md:text-lg">
                    {product.spec}
                  </p>
                )}

                <div className="mt-5 h-px w-full max-w-sm bg-gradient-to-r from-border via-border to-transparent" />

                <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/85 md:text-lg">
                  {product.description}
                </p>

                {product.features.length > 0 && (
                  <ul className="mt-5 flex max-w-xl flex-col gap-2.5">
                    {product.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-3 text-sm leading-relaxed text-foreground/85 md:text-base"
                      >
                        <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {f}
                      </li>
                    ))}
                  </ul>
                )}

                {/* CTA — opens the in-page lead-capture funnel, submitted to the Interlink CRM */}
                <LeadFunnelDialog productName={product.name}>
                  <button
                    type="button"
                    className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-8 py-3.5 font-heading text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:gap-3 hover:bg-accent"
                  >
                    <MessageCircle size={16} />
                    {t("talkToExpert", { brand: "Tecnovap" })}
                    <ArrowRight size={15} />
                  </button>
                </LeadFunnelDialog>
              </div>
            </div>
          </div>
        </section>

        {/* ====================== YOUTUBE VIDEO ====================== */}
        {product.video && (
          <section className="border-t border-border bg-background py-14 md:py-20">
            <div className="container mx-auto px-6">
              <p className="mb-6 text-center font-heading text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
                {t("seeItInAction")}
              </p>
              <div className="mx-auto aspect-video w-full max-w-4xl overflow-hidden rounded-2xl border border-border shadow-2xl shadow-black/15">
                <iframe
                  src={product.video}
                  title={t("videoTitle", { name: product.name })}
                  className="h-full w-full"
                  style={{ border: "none" }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          </section>
        )}

        {/* ====================== MAIN FEATURES ====================== */}
        {product.mainFeatures.length > 0 && (
          <section className="border-t border-border bg-background py-14 md:py-16">
            <div className="container mx-auto px-6">
              <p className="mb-6 text-center font-heading text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
                {t("mainFeatures")}
              </p>
              <ul className="mx-auto flex max-w-5xl flex-wrap items-start justify-center gap-x-8 gap-y-5">
                {product.mainFeatures.map(({ icon: Icon, label, value }) => (
                  <li key={label} className="flex items-center gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon size={18} strokeWidth={1.6} />
                    </span>
                    <div className="leading-tight">
                      <p className="font-heading text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                        {label}
                      </p>
                      <p className="mt-0.5 font-heading text-sm font-semibold text-primary md:text-base">
                        {value}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* ====================== FULL SPECIFICATIONS ====================== */}
        {product.specifications.length > 0 && (
          <section className="border-t border-border section-alt py-20 md:py-24">
            <div className="container mx-auto px-6">
              <div className="mx-auto max-w-3xl text-center">
                <p className="mb-3 font-heading text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
                  {t("technicalSpecifications")}
                </p>
                <h2 className="font-display text-3xl text-foreground md:text-4xl">
                  {t("specHeadingLead")}{" "}
                  <span className="italic text-primary">
                    {t("specHeadingAccent")}
                  </span>
                </h2>
              </div>

              <div className="mx-auto mt-12 flex max-w-3xl flex-col gap-8">
                {product.specifications.map((group) => (
                  <div key={group.title}>
                    <p className="mb-3 font-heading text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
                      {group.title}
                    </p>
                    <div className="overflow-hidden rounded-xl border border-border bg-card">
                      <table className="w-full text-sm">
                        <tbody>
                          {group.rows.map((row, i) => (
                            <tr
                              key={`${row.label}-${i}`}
                              className={
                                i % 2 === 0 ? "bg-secondary/40" : "bg-transparent"
                              }
                            >
                              <td className="w-[44%] px-4 py-3 align-top text-foreground/85">
                                <div>{row.label}</div>
                                {row.note && (
                                  <div className="mt-0.5 text-xs text-muted-foreground">
                                    {row.note}
                                  </div>
                                )}
                              </td>
                              <td className="w-[36%] px-4 py-3 align-top text-left font-heading font-semibold text-primary">
                                {row.value}
                              </td>
                              <td className="w-[20%] py-3 pr-4 align-top text-left text-xs uppercase tracking-wider text-muted-foreground">
                                {row.unit ?? ""}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ====================== EXPLORE OTHER PRODUCTS ====================== */}
        <section className="border-t border-border bg-background py-16">
          <div className="container mx-auto px-6">
            <p className="mb-6 text-center font-heading text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
              {t("exploreOther", { brand: "Tecnovap" })}
            </p>
            <ExploreOtherProducts
              products={getTecnovapProducts(locale)
                .filter((p) => p.slug !== product.slug)
                .map((p) => ({
                  slug: p.slug,
                  name: p.name,
                  image: p.image,
                  imageAlt: p.imageAlt,
                }))}
              brandSlug="tecnovap"
            />
          </div>
        </section>
      </article>
    </Layout>
  );
}
