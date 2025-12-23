import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Bot, Wrench, Target } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Сайты под ключ",
    description: "Лендинги, корпоративные сайты, интернет-магазины любой сложности. Современный дизайн, высокая скорость загрузки, SEO-оптимизация.",
    href: "/services/websites",
    features: ["Лендинги от 2 дней", "Корпоративные сайты", "Интернет-магазины", "CMS под ваши задачи"],
    price: "от 15 000 ₽",
  },
  {
    icon: Bot,
    title: "Telegram-боты",
    description: "Автоматизация продаж, записи клиентов, поддержки. Интеграция с CRM, платёжными системами, уведомлениями.",
    href: "/services/telegram-bots",
    features: ["Воронки продаж", "Запись клиентов", "Интеграции с CRM", "Оплата в боте"],
    price: "от 10 000 ₽",
  },
  {
    icon: Wrench,
    title: "Поддержка и развитие",
    description: "Техническая поддержка, обновления, доработки функционала. Мониторинг, бэкапы, оперативное решение проблем.",
    href: "/services/support",
    features: ["24/7 мониторинг", "Быстрые правки", "Регулярные бэкапы", "Обновление контента"],
    price: "от 5 000 ₽/мес",
  },
  {
    icon: Target,
    title: "Контекстная реклама",
    description: "Настройка и ведение рекламы в Яндекс Директ. Приводим целевых клиентов на ваш сайт с измеримым результатом.",
    href: "/services/ads",
    features: ["Яндекс Директ", "A/B тестирование", "Ежемесячные отчёты", "Оптимизация CPL"],
    price: "от 10 000 ₽/мес",
  },
];

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Услуги — NOIRDIG | Сайты, боты, реклама, поддержка</title>
        <meta
          name="description"
          content="Полный цикл digital-услуг: создание сайтов под ключ, Telegram-боты, контекстная реклама, техподдержка. Работаем по всей России."
        />
        <link rel="canonical" href="https://noirdig.ru/services/" />
      </Helmet>

      <Layout>
        <section className="section-padding">
          <div className="container-wide">
            <Breadcrumbs items={[{ label: "Услуги", href: "/services" }]} />

            <SectionHeader
              badge="Услуги"
              title="Что мы делаем"
              description="Полный цикл digital-услуг для роста вашего бизнеса в онлайне. От разработки до продвижения."
            />

            <div className="space-y-8">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="card-noir grid md:grid-cols-3 gap-6 items-center"
                >
                  <div className="md:col-span-2">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <service.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h2 className="text-h3">{service.title}</h2>
                    </div>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature) => (
                        <span
                          key={feature}
                          className="text-body-sm bg-secondary px-3 py-1 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-center md:text-right">
                    <div className="text-h3 text-primary mb-2">{service.price}</div>
                    <Button variant="gold" asChild>
                      <Link to={service.href}>
                        Подробнее
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Services;
