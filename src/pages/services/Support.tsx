import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { TelegramCTA } from "@/components/shared/TelegramCTA";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Shield, Clock, Wrench, Database, RefreshCw, Headphones } from "lucide-react";

const services = [
  { icon: Shield, title: "Мониторинг 24/7", description: "Следим за работоспособностью и оперативно реагируем на сбои" },
  { icon: Database, title: "Регулярные бэкапы", description: "Ежедневное резервное копирование базы и файлов" },
  { icon: RefreshCw, title: "Обновления", description: "Обновление CMS, плагинов, устранение уязвимостей" },
  { icon: Wrench, title: "Доработки", description: "Добавление функционала, изменение дизайна, новые страницы" },
  { icon: Clock, title: "Быстрые правки", description: "Мелкие изменения контента, текстов, изображений" },
  { icon: Headphones, title: "Консультации", description: "Помогаем разобраться с сайтом и аналитикой" },
];

const packages = [
  {
    name: "Базовый",
    price: "5 000 ₽/мес",
    features: [
      "Мониторинг работоспособности",
      "Ежедневные бэкапы",
      "До 2 часов работ в месяц",
      "Время реакции до 24 часов",
      "Отчёт раз в месяц",
    ],
  },
  {
    name: "Стандарт",
    price: "15 000 ₽/мес",
    features: [
      "Всё из Базового",
      "До 5 часов работ в месяц",
      "Время реакции до 4 часов",
      "Обновление контента",
      "Приоритетная поддержка",
    ],
    popular: true,
  },
  {
    name: "Премиум",
    price: "от 30 000 ₽/мес",
    features: [
      "Всё из Стандарта",
      "До 15 часов работ в месяц",
      "Время реакции до 1 часа",
      "Выделенный менеджер",
      "A/B тестирование",
      "Рекомендации по улучшению",
    ],
  },
];

const Support = () => {
  return (
    <>
      <Helmet>
        <title>Техподдержка и развитие сайтов — NOIRDIG</title>
        <meta
          name="description"
          content="Техническая поддержка сайтов: мониторинг, бэкапы, обновления, доработки. Работаем оперативно, отчитываемся ежемесячно."
        />
        <link rel="canonical" href="https://noirdig.ru/services/support/" />
      </Helmet>

      <Layout>
        <section className="section-padding">
          <div className="container-wide">
            <Breadcrumbs
              items={[
                { label: "Услуги", href: "/services" },
                { label: "Поддержка и развитие", href: "/services/support" },
              ]}
            />

            <div className="max-w-3xl">
              <h1 className="text-h1 md:text-display mb-6">
                Поддержка и <span className="text-gradient">развитие</span>
              </h1>
              <p className="text-body-lg text-muted-foreground mb-8">
                Берём на себя техническую заботу о вашем сайте. Мониторинг, бэкапы, 
                обновления, доработки — вы занимаетесь бизнесом, мы следим за сайтом.
              </p>
              <Button variant="gold" size="lg" asChild>
                <a href="https://t.me/nicksavin" target="_blank" rel="noopener noreferrer">
                  Подключить поддержку
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        <section className="section-padding bg-secondary/30">
          <div className="container-wide">
            <SectionHeader badge="Что входит" title="Услуги поддержки" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <div key={service.title} className="card-noir">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-body-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-card">
          <div className="container-wide">
            <SectionHeader badge="Тарифы" title="Пакеты поддержки" align="center" />
            <div className="grid md:grid-cols-3 gap-6">
              {packages.map((pkg) => (
                <div key={pkg.name} className={`card-noir ${pkg.popular ? "border-primary" : ""}`}>
                  {pkg.popular && (
                    <span className="inline-block bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full mb-4">
                      Популярный
                    </span>
                  )}
                  <h3 className="text-h3 mb-2">{pkg.name}</h3>
                  <div className="text-h2 text-primary mb-6">{pkg.price}</div>
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

      </Layout>
    </>
  );
};

export default Support;
