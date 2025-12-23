import { Link } from "react-router-dom";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Bot, Wrench, Target } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Сайты под ключ",
    description:
      "Лендинги, корпоративные сайты, интернет-магазины. Современный дизайн, высокая скорость, SEO-оптимизация с первого дня.",
    href: "/services/websites",
    features: ["Адаптивный дизайн", "PageSpeed 90+", "SEO-структура"],
  },
  {
    icon: Bot,
    title: "Telegram-боты",
    description:
      "Автоматизация продаж, поддержки и записи клиентов. Интеграция с CRM, оплатой и уведомлениями.",
    href: "/services/telegram-bots",
    features: ["Воронки продаж", "Интеграции", "Аналитика"],
  },
  {
    icon: Wrench,
    title: "Поддержка и развитие",
    description:
      "Техническая поддержка, обновления, доработки. Мониторинг работоспособности и регулярные бэкапы.",
    href: "/services/support",
    features: ["24/7 мониторинг", "Быстрые правки", "Бэкапы"],
  },
  {
    icon: Target,
    title: "Контекстная реклама",
    description:
      "Настройка и ведение рекламы в Яндекс Директ. Приводим целевых клиентов на ваш сайт.",
    href: "/services/ads",
    features: ["Яндекс Директ", "Аналитика", "Оптимизация"],
  },
];

export const ServicesSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-wide">
        <SectionHeader
          badge="Услуги"
          title="Что мы делаем"
          description="Полный цикл digital-услуг для роста вашего бизнеса в онлайне"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to={service.href}
              className="card-noir group hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-h4 mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-body-sm mb-4">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="text-body-sm bg-secondary px-2 py-1 rounded"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-primary text-body-sm font-medium">
                    Подробнее
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
