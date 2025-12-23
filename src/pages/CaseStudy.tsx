import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { ContactForm } from "@/components/shared/ContactForm";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Gauge, MousePointerClick, Search, ExternalLink } from "lucide-react";

// This would typically come from a CMS/database
const caseData = {
  "case-1": {
    title: "Корпоративный сайт для юридической компании",
    category: "Лендинг",
    industry: "Юридические услуги",
    stack: ["React", "Next.js", "Tailwind CSS", "Headless CMS"],
    timeline: "3 недели",
  },
};

const CaseStudy = () => {
  const { caseId } = useParams();

  return (
    <>
      <Helmet>
        <title>Кейс: Корпоративный сайт — NOIRDIG</title>
        <meta name="description" content="Кейс разработки корпоративного сайта с измеримыми результатами." />
      </Helmet>

      <Layout>
        <section className="section-padding">
          <div className="container-wide">
            <Breadcrumbs
              items={[
                { label: "Портфолио", href: "/portfolio" },
                { label: "Кейс", href: `/portfolio/${caseId}` },
              ]}
            />

            {/* Hero */}
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-primary text-body-sm">Лендинг</span>
                  <span className="text-muted-foreground">•</span>
                  <span className="text-body-sm text-muted-foreground">Юридические услуги</span>
                </div>
                <h1 className="text-h1 mb-6">Корпоративный сайт для юридической компании</h1>
                <p className="text-body-lg text-muted-foreground mb-6">
                  Разработка сайта с продающей структурой и формой записи на консультацию. 
                  Цель — увеличить количество заявок и укрепить доверие к компании.
                </p>
                <div className="flex flex-wrap gap-4 text-body-sm">
                  <div>
                    <span className="text-muted-foreground">Сроки:</span>{" "}
                    <span className="font-medium">3 недели</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Стек:</span>{" "}
                    <span className="font-medium">React, Next.js, Tailwind</span>
                  </div>
                </div>
              </div>
              <div className="aspect-video bg-secondary rounded-xl relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-xl" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-muted-foreground">Главный экран сайта</span>
                </div>
              </div>
            </div>

            {/* What we did */}
            <div className="mb-16">
              <h2 className="text-h2 mb-8">Что сделали</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Упаковали оффер: структура под продажи, сильные CTA, понятный путь до заявки",
                  "Собрали прототип → дизайн → разработка → тесты → запуск",
                  "Настроили аналитику и события: заявки, клики в мессенджер, звонки",
                  "Оптимизировали скорость: изображения, шрифты, критический CSS, lazy-load",
                  "Подготовили SEO-скелет: ЧПУ, мета-теги, перелинковка, schema.org",
                  "Интегрировали формы с Telegram-уведомлениями",
                ].map((item) => (
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
                    {[
                      { label: "LCP", value: "≤ 2.0 сек" },
                      { label: "CLS", value: "≤ 0.10" },
                      { label: "INP", value: "≤ 200 мс" },
                      { label: "PageSpeed Mobile", value: "90+" },
                    ].map((item) => (
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
                    {[
                      { label: "Целевой CR", value: "3-6%" },
                      { label: "Рост заявок после оптимизации", value: "+20-60%" },
                    ].map((item) => (
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

            {/* Gallery placeholder */}
            <div className="mb-16">
              <h2 className="text-h2 mb-8">Галерея проекта</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-video bg-secondary rounded-lg relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-muted-foreground">Экран {i}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Similar cases */}
            <div className="mb-16">
              <h2 className="text-h2 mb-8">Похожие кейсы</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <Link key={i} to={`/portfolio/case-${i}`} className="card-noir group">
                    <div className="aspect-video bg-secondary rounded-lg mb-4" />
                    <h3 className="font-semibold group-hover:text-primary transition-colors">
                      Похожий проект {i}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-secondary/30">
          <div className="container-wide">
            <div className="max-w-2xl mx-auto">
              <ContactForm
                title="Хотите такой же результат?"
                subtitle="Обсудим ваш проект"
              />
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default CaseStudy;
