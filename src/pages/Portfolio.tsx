import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const cases = [
  {
    id: "case-1",
    category: "Лендинг",
    industry: "Юридические услуги",
    title: "Корпоративный сайт для юридической компании",
    description: "Разработка сайта с продающей структурой и формой записи на консультацию",
    metrics: [
      { label: "PageSpeed", value: "94" },
      { label: "Конверсия", value: "4.2%" },
    ],
  },
  {
    id: "case-2",
    category: "Telegram-бот",
    industry: "Бьюти",
    title: "Бот для автоматизации записи клиентов",
    description: "Воронка продаж и автоматическая запись на услуги салона красоты",
    metrics: [
      { label: "Конверсия в запись", value: "28%" },
      { label: "Снижение нагрузки", value: "-35%" },
    ],
  },
  {
    id: "case-3",
    category: "Интернет-магазин",
    industry: "E-commerce",
    title: "Магазин товаров для дома с интеграцией 1С",
    description: "Каталог 5000+ товаров, синхронизация остатков и цен с 1С",
    metrics: [
      { label: "PageSpeed", value: "91" },
      { label: "Рост заявок", value: "+45%" },
    ],
  },
  {
    id: "case-4",
    category: "Корпоративный сайт",
    industry: "B2B Производство",
    title: "Сайт для производственной компании",
    description: "Многостраничный сайт с каталогом продукции и калькулятором",
    metrics: [
      { label: "PageSpeed", value: "92" },
      { label: "Органический трафик", value: "+120%" },
    ],
  },
  {
    id: "case-5",
    category: "Telegram-бот",
    industry: "Образование",
    title: "Бот для онлайн-школы",
    description: "Автоматизация продаж курсов и проверка домашних заданий",
    metrics: [
      { label: "Конверсия в покупку", value: "18%" },
      { label: "Автоматизация", value: "70%" },
    ],
  },
  {
    id: "case-6",
    category: "Лендинг",
    industry: "Услуги",
    title: "Сайт для клининговой компании",
    description: "Лендинг с калькулятором стоимости и онлайн-записью",
    metrics: [
      { label: "PageSpeed", value: "96" },
      { label: "Конверсия", value: "5.8%" },
    ],
  },
];



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
              {cases.map((caseItem) => (
                <Link
                  key={caseItem.id}
                  to={`/portfolio/${caseItem.id}`}
                  className="card-noir group"
                >
                  <div className="aspect-video bg-secondary rounded-lg mb-4 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-muted-foreground text-body-sm">Превью проекта</span>
                    </div>
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
