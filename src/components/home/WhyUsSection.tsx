import { SectionHeader } from "@/components/shared/SectionHeader";
import {
  Clock,
  BarChart3,
  Palette,
  Search,
  Headphones,
  FileCheck,
} from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { useCountUp } from "@/hooks/useCountUp";

const advantages = [
  {
    icon: FileCheck,
    title: "Прозрачный процесс",
    description: "Пошаговая разработка с утверждением каждого этапа. Вы всегда знаете, на каком этапе проект.",
  },
  {
    icon: Clock,
    title: "Соблюдение сроков",
    description: "Типовой проект — от 3 дней.",
  },
  {
    icon: BarChart3,
    title: "Аналитика с первого дня",
    description: "Настраиваем цели и события в Яндекс.Метрике. Вы видите, откуда приходят заявки.",
  },
  {
    icon: Palette,
    title: "Продающий дизайн",
    description: "Не просто красиво, а конверсионно. Структура под продажи, сильные CTA, понятный путь до заявки.",
  },
  {
    icon: Search,
    title: "SEO-скелет",
    description: "ЧПУ, мета-теги, перелинковка, schema.org — всё готово для продвижения с первого дня.",
  },
  {
    icon: Headphones,
    title: "Поддержка после запуска",
    description: "Гарантийный период 14-30 дней. Возможность подключить постоянную поддержку.",
  },
];

const standards = [
  {
    metric: 90,
    suffix: "+",
    label: "PageSpeed",
    description: "Скорость загрузки на мобильных",
  },
  {
    metric: 6,
    suffix: "%",
    prefix: "3-",
    label: "Конверсия",
    description: "Целевой показатель для B2B",
  },
  {
    metric: 100,
    suffix: "%",
    label: "Индексация",
    description: "Всех ключевых страниц",
  },
];

const AnimatedStandard = ({ metric, suffix, prefix, isInView }: { metric: number; suffix: string; prefix?: string; isInView: boolean }) => {
  const count = useCountUp(metric, 2000, isInView);
  return (
    <div className="text-display text-primary mb-2 tabular-nums">
      {prefix}{count}{suffix}
    </div>
  );
};

export const WhyUsSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const { ref: standardsRef, isInView: standardsInView } = useInView({ threshold: 0.3 });

  return (
    <section className="section-padding">
      <div className="container-wide" ref={ref}>
        <SectionHeader
          badge="Почему NOIRDIG"
          title="6 причин работать с нами"
          description="Мы не просто делаем сайты — мы создаём инструменты для роста вашего бизнеса"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {advantages.map((advantage, index) => (
            <div
              key={advantage.title}
              className={`card-noir group transition-all duration-700 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div 
                className={`w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all duration-300 ${
                  isInView ? "animate-bounce-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 100 + 200}ms` }}
              >
                <advantage.icon className="h-5 w-5 text-primary group-hover:animate-pulse-icon" />
              </div>
              <h3 className="text-h4 mb-2">{advantage.title}</h3>
              <p className="text-muted-foreground text-body-sm">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>

        {/* Standards */}
        <div 
          ref={standardsRef}
          className={`bg-card border border-border rounded-xl p-8 md:p-12 transition-all duration-700 ${
            standardsInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <h3 className="text-h3 mb-8 text-center">Наши стандарты качества</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {standards.map((standard, index) => (
              <div 
                key={standard.label} 
                className={`text-center transition-all duration-500 ${
                  standardsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${index * 150 + 300}ms` }}
              >
                <AnimatedStandard 
                  metric={standard.metric} 
                  suffix={standard.suffix} 
                  prefix={standard.prefix}
                  isInView={standardsInView} 
                />
                <div className="font-semibold mb-1">{standard.label}</div>
                <div className="text-body-sm text-muted-foreground">
                  {standard.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
