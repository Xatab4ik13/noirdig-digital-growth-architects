import { Helmet } from "react-helmet-async";
import { useParams, Navigate, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { TelegramCTA } from "@/components/shared/TelegramCTA";
import { Check, Gauge, MousePointerClick, ExternalLink } from "lucide-react";
import { getCaseById } from "@/data/portfolioCases";
import { useState } from "react";

const CaseStudy = () => {
  const { caseId } = useParams();
  const caseData = getCaseById(caseId || "");
  const [activeScreen, setActiveScreen] = useState(0);

  if (!caseData) {
    return <Navigate to="/portfolio" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{`Кейс: ${caseData.title} — NOIRDIG`}</title>
        <meta 
          name="description" 
          content={`${caseData.description} Результаты: ${caseData.metrics.map(m => `${m.label} ${m.value}`).join(", ")}.`} 
        />
        <link rel="canonical" href={`https://noirdig.ru/portfolio/${caseData.id}/`} />
      </Helmet>

      <Layout>
        <section className="section-padding">
          <div className="container-wide">
            <Breadcrumbs
              items={[
                { label: "Портфолио", href: "/portfolio" },
                { label: caseData.title, href: `/portfolio/${caseData.id}` },
              ]}
            />

            {/* Hero */}
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-primary text-body-sm">{caseData.category}</span>
                  <span className="text-muted-foreground">•</span>
                  <span className="text-body-sm text-muted-foreground">{caseData.industry}</span>
                </div>
                <h1 className="text-h1 mb-6">{caseData.title}</h1>
                <p className="text-body-lg text-muted-foreground mb-6">
                  {caseData.fullDescription}
                </p>
                <div className="flex flex-wrap gap-4 text-body-sm">
                  <div>
                    <span className="text-muted-foreground">Сроки:</span>{" "}
                    <span className="font-medium">{caseData.timeline}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Стек:</span>{" "}
                    <span className="font-medium">{caseData.stack.join(", ")}</span>
                  </div>
                </div>
              </div>
              <div className="aspect-video bg-secondary rounded-xl relative overflow-hidden border border-border">
                <iframe 
                  src={caseData.showcaseUrl}
                  title={`Превью: ${caseData.title}`}
                  className="w-full h-full scale-[0.5] origin-top-left"
                  style={{ width: '200%', height: '200%' }}
                />
                <Link 
                  to={caseData.showcaseUrl}
                  target="_blank"
                  className="absolute bottom-3 right-3 bg-primary text-primary-foreground px-3 py-1.5 rounded-lg text-sm flex items-center gap-1.5 hover:bg-primary/90 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Открыть сайт
                </Link>
              </div>
            </div>

            {/* What we did */}
            <div className="mb-16">
              <h2 className="text-h2 mb-8">Что сделали</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {caseData.tasks.map((item) => (
                  <div key={item} className="flex items-start gap-3 card-noir">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* KPI Block */}
            <div className="bg-card border border-border rounded-xl p-8 md:p-12 mb-16">
              <h2 className="text-h2 mb-4 text-center">Результаты и KPI проекта</h2>
              <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
                Сделать быстрый и конверсионный сайт/воронку, которая стабильно приводит заявки и масштабируется через SEO и рекламу.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* Core Web Vitals */}
                <div className="bg-background border border-border rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Gauge className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Core Web Vitals</h3>
                      <p className="text-body-sm text-muted-foreground">Скорость и качество</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {caseData.kpiDetails.vitals.map((item) => (
                      <div key={item.label} className="flex justify-between py-2 border-b border-border last:border-0">
                        <span>{item.label}</span>
                        <span className="text-primary font-semibold">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Conversion */}
                <div className="bg-background border border-border rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MousePointerClick className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Конверсия и лиды</h3>
                      <p className="text-body-sm text-muted-foreground">Эффективность воронки</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {caseData.kpiDetails.conversion.map((item) => (
                      <div key={item.label} className="flex justify-between py-2 border-b border-border last:border-0">
                        <span>{item.label}</span>
                        <span className="text-primary font-semibold">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* How we measure */}
              <div>
                <h4 className="font-semibold mb-4 text-center">Как измеряем</h4>
                <div className="flex flex-wrap justify-center gap-3">
                  {[
                    "Яндекс.Метрика: цели + события",
                    "UTM-разметка источников",
                    "Отчёты по воронке",
                  ].map((item) => (
                    <span key={item} className="bg-secondary px-4 py-2 rounded-full text-body-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Gallery - Interactive screens */}
            <div className="mb-16">
              <h2 className="text-h2 mb-8">Экраны проекта</h2>
              
              {/* Screen tabs */}
              <div className="flex flex-wrap gap-2 mb-6">
                {caseData.gallery.map((screen, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveScreen(index)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      activeScreen === index
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {screen.title}
                  </button>
                ))}
              </div>

              {/* Active screen preview */}
              <div className="bg-secondary rounded-xl border border-border overflow-hidden">
                <div className="bg-card border-b border-border px-4 py-2 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex-1 text-center text-sm text-muted-foreground">
                    {caseData.gallery[activeScreen]?.title}
                  </div>
                  <Link 
                    to={caseData.gallery[activeScreen]?.url || "#"}
                    target="_blank"
                    className="text-primary hover:underline text-sm flex items-center gap-1"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Открыть
                  </Link>
                </div>
                <div className="aspect-[16/10] relative">
                  <iframe 
                    src={caseData.gallery[activeScreen]?.url}
                    title={caseData.gallery[activeScreen]?.title}
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="max-w-3xl">
              <TelegramCTA title="Хотите такой же результат?" subtitle="Напишите нам — обсудим ваш проект" />
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default CaseStudy;
