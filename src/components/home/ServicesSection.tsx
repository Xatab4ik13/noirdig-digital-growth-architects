import { Link } from "react-router-dom";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ArrowRight, Globe, Bot, Wrench, Target } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { useRef, useState } from "react";

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

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

const TiltCard = ({ children, className = "" }: TiltCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("");

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`);
  };

  const handleMouseLeave = () => {
    setTransform("");
  };

  return (
    <div
      ref={cardRef}
      className={className}
      style={{ transform, transition: "transform 0.3s ease" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};

export const ServicesSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-wide" ref={ref}>
        <SectionHeader
          badge="Услуги"
          title="Что мы делаем"
          description="Полный цикл digital-услуг для роста вашего бизнеса в онлайне"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <TiltCard
              key={service.title}
              className={`transition-all duration-700 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
            >
              <Link
                to={service.href}
                className="card-noir group hover:shadow-lg hover:shadow-primary/10 block h-full"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-all duration-300 ${
                    isInView ? "animate-bounce-in" : ""
                  }`} style={{ animationDelay: `${index * 150 + 300}ms` }}>
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
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};
