import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { TelegramCTA } from "@/components/shared/TelegramCTA";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Target, BarChart3, Settings, TrendingUp } from "lucide-react";

const services = [
  { icon: Target, title: "Настройка Яндекс Директ", description: "Создание кампаний, подбор ключевых слов, написание объявлений" },
  { icon: Settings, title: "Оптимизация", description: "A/B тестирование, минус-слова, корректировка ставок" },
  { icon: BarChart3, title: "Аналитика", description: "Отслеживание конверсий, CPL, ROI" },
  { icon: TrendingUp, title: "Масштабирование", description: "Увеличение бюджета при сохранении эффективности" },
];

const packages = [
  {
    name: "Start",
    price: "10 000 ₽/мес",
    adBudget: "до 50 000 ₽/мес",
    features: [
      "Настройка 1 кампании",
      "Еженедельные отчёты",
      "Базовая оптимизация",
    ],
  },
  {
    name: "Pro",
    price: "20 000 ₽/мес",
    adBudget: "до 150 000 ₽/мес",
    features: [
      "До 3 кампаний",
      "A/B тестирование",
      "Еженедельные созвоны",
      "Рекомендации по сайту",
    ],
    popular: true,
  },
  {
    name: "Max",
    price: "от 35 000 ₽/мес",
    adBudget: "от 150 000 ₽/мес",
    features: [
      "Неограниченные кампании",
      "Мультиканальная аналитика",
      "Выделенный менеджер",
      "Стратегические сессии",
    ],
  },
];

const Ads = () => {
  return (
    <>
      <Helmet>
        <title>Контекстная реклама Яндекс Директ — NOIRDIG</title>
        <meta
          name="description"
          content="Настройка и ведение контекстной рекламы в Яндекс Директ. Приводим целевых клиентов с измеримым результатом."
        />
        <link rel="canonical" href="https://noirdig.ru/services/ads/" />
      </Helmet>

      <Layout>
        <section className="section-padding">
          <div className="container-wide">
            <Breadcrumbs
              items={[
                { label: "Услуги", href: "/services" },
                { label: "Контекстная реклама", href: "/services/ads" },
              ]}
            />

            <div className="max-w-3xl">
              <h1 className="text-h1 md:text-display mb-6">
                Контекстная <span className="text-gradient">реклама</span>
              </h1>
              <p className="text-body-lg text-muted-foreground mb-8">
                Настраиваем и ведём рекламу в Яндекс Директ. Приводим целевых клиентов 
                на ваш сайт с измеримым результатом и прозрачной отчётностью.
              </p>
              <Button variant="gold" size="lg" asChild>
                <Link to="/contacts">
                  Обсудить рекламу
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="section-padding bg-secondary/30">
          <div className="container-wide">
            <SectionHeader badge="Что делаем" title="Услуги по рекламе" />
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service) => (
                <div key={service.title} className="card-noir flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <service.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{service.title}</h3>
                    <p className="text-muted-foreground text-body-sm">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-card">
          <div className="container-wide">
            <SectionHeader badge="Тарифы" title="Пакеты ведения рекламы" align="center" />
            <div className="grid md:grid-cols-3 gap-6">
              {packages.map((pkg) => (
                <div key={pkg.name} className={`card-noir ${pkg.popular ? "border-primary" : ""}`}>
                  {pkg.popular && (
                    <span className="inline-block bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full mb-4">
                      Популярный
                    </span>
                  )}
                  <h3 className="text-h3 mb-1">{pkg.name}</h3>
                  <div className="text-h2 text-primary mb-1">{pkg.price}</div>
                  <p className="text-body-sm text-muted-foreground mb-6">
                    Рекл. бюджет: {pkg.adBudget}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-body-sm">
                        <Check className="h-4 w-4 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant={pkg.popular ? "gold" : "outline"} className="w-full" asChild>
                    <a href="https://t.me/noirdig" target="_blank" rel="noopener noreferrer">Подключить</a>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-wide">
            <div className="max-w-3xl">
              <TelegramCTA title="Остались вопросы?" subtitle="Напишите нам — расскажите о задачах" />
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Ads;
