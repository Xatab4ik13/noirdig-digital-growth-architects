import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { portfolioCases } from "@/data/portfolioCases";

const Portfolio = () => {
  return (
    <>
      <Helmet>
        <title>Портфолио — NOIRDIG | Примеры работ</title>
        <meta
          name="description"
          content="Портфолио NOIRDIG: примеры сайтов, интернет-магазинов и Telegram-ботов с измеримыми результатами."
        />
        <link rel="canonical" href="https://noirdig.ru/portfolio/" />
      </Helmet>

      <Layout>
        <section className="section-padding">
          <div className="container-wide">
            <Breadcrumbs items={[{ label: "Портфолио", href: "/portfolio" }]} />

            <SectionHeader
              badge="Портфолио"
              title="Наши проекты"
              description="Примеры выполненных работ с измеримыми результатами"
            />

            {/* Cases grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioCases.map((caseItem) => (
                <Link
                  key={caseItem.id}
                  to={`/portfolio/${caseItem.id}`}
                  className="card-noir group"
                >
                  <div className="aspect-video bg-secondary rounded-lg mb-4 relative overflow-hidden border border-border">
                    <iframe 
                      src={caseItem.showcaseUrl}
                      title={caseItem.title}
                      className="w-full h-full pointer-events-none scale-[0.5] origin-top-left"
                      style={{ width: '200%', height: '200%' }}
                    />
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-body-sm text-primary">{caseItem.category}</span>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-body-sm text-muted-foreground">{caseItem.industry}</span>
                  </div>

                  <h3 className="text-h4 mb-2 group-hover:text-primary transition-colors">
                    {caseItem.title}
                  </h3>
                  <p className="text-body-sm text-muted-foreground mb-4">
                    {caseItem.description}
                  </p>

                  <div className="flex gap-4">
                    {caseItem.metrics.map((metric) => (
                      <div key={metric.label}>
                        <div className="text-lg font-semibold text-primary">{metric.value}</div>
                        <div className="text-body-sm text-muted-foreground">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-secondary/30">
          <div className="container-wide text-center">
            <h2 className="text-h2 mb-4">Хотите такой же результат?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Обсудим ваш проект и покажем, как можем помочь
            </p>
            <Button variant="gold" size="lg" asChild>
              <a href="https://t.me/noirdig_bot" target="_blank" rel="noopener noreferrer">
                Обсудить проект
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Portfolio;
