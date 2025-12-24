import { SectionHeader } from "@/components/shared/SectionHeader";
import { Gauge, MousePointerClick, Search, Target } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { useCountUp } from "@/hooks/useCountUp";

const kpiCategories = [
  {
    icon: Gauge,
    title: "Core Web Vitals",
    description: "Скорость и качество загрузки",
    metrics: [
      { label: "LCP", value: "≤ 2.0 сек", numValue: 2, suffix: " сек", description: "Largest Contentful Paint" },
      { label: "CLS", value: "≤ 0.10", numValue: 0.1, suffix: "", description: "Cumulative Layout Shift" },
      { label: "INP", value: "≤ 200 мс", numValue: 200, suffix: " мс", description: "Interaction to Next Paint" },
      { label: "PageSpeed", value: "90+", numValue: 90, suffix: "+", description: "Mobile score" },
    ],
  },
  {
    icon: MousePointerClick,
    title: "Конверсия",
    description: "Эффективность воронки",
    metrics: [
      { label: "CR сайта", value: "3-6%", numValue: 6, suffix: "%", description: "Для услуг и B2B" },
      { label: "Рост заявок", value: "+20-60%", numValue: 60, suffix: "%", description: "После оптимизации" },
      { label: "CR рекламы", value: "3-8%", numValue: 8, suffix: "%", description: "Клик → заявка" },
    ],
  },
  {
    icon: Search,
    title: "SEO",
    description: "Органический рост",
    metrics: [
      { label: "Индексация", value: "100%", numValue: 100, suffix: "%", description: "Ключевых страниц" },
      { label: "Рост органики", value: "+30-120%", numValue: 120, suffix: "%", description: "За 3-4 месяца" },
    ],
  },
  {
    icon: Target,
    title: "Telegram-боты",
    description: "Автоматизация",
    metrics: [
      { label: "CR в действие", value: "15-35%", numValue: 35, suffix: "%", description: "Заявка/запись/заказ" },
      { label: "Снижение нагрузки", value: "-20-40%", numValue: 40, suffix: "%", description: "На менеджера" },
    ],
  },
];

const AnimatedMetric = ({ numValue, suffix, isInView }: { numValue: number; suffix: string; isInView: boolean }) => {
  const isDecimal = numValue < 1;
  const multiplier = isDecimal ? 100 : 1;
  const count = useCountUp(numValue * multiplier, 2000, isInView);
  const displayValue = isDecimal ? (count / 100).toFixed(2) : count;
  
  return (
    <span className="text-primary font-semibold tabular-nums">
      {isDecimal ? "≤ " : ""}{displayValue}{suffix}
    </span>
  );
};

export const KPISection = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section className="section-padding bg-card">
      <div className="container-wide" ref={ref}>
        <SectionHeader
          badge="KPI и измерения"
          title="Стандарты NOIRDIG"
          description="Мы не просто обещаем — мы измеряем. Каждый проект оценивается по конкретным метрикам"
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {kpiCategories.map((category, catIndex) => (
            <div 
              key={category.title} 
              className={`bg-background border border-border rounded-xl p-6 transition-all duration-500 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${catIndex * 150}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center ${
                  isInView ? "animate-bounce-in" : "opacity-0"
                }`} style={{ animationDelay: `${catIndex * 150 + 200}ms` }}>
                  <category.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">{category.title}</h3>
                  <p className="text-body-sm text-muted-foreground">{category.description}</p>
                </div>
              </div>

              <div className="space-y-3">
                {category.metrics.map((metric) => (
                  <div key={metric.label} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                    <div>
                      <span className="font-medium">{metric.label}</span>
                      <span className="text-body-sm text-muted-foreground ml-2">
                        {metric.description}
                      </span>
                    </div>
                    <AnimatedMetric 
                      numValue={metric.numValue} 
                      suffix={metric.suffix} 
                      isInView={isInView} 
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* How we measure */}
        <div className={`mt-12 text-center transition-all duration-700 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`} style={{ transitionDelay: "600ms" }}>
          <h4 className="font-semibold mb-4">Как измеряем</h4>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Яндекс.Метрика: цели + события",
              "UTM-разметка источников",
              "Отчёты по воронке",
              "PageSpeed Insights",
            ].map((item, index) => (
              <span
                key={item}
                className={`bg-secondary px-4 py-2 rounded-full text-body-sm transition-all duration-500 ${
                  isInView ? "opacity-100 scale-100" : "opacity-0 scale-90"
                }`}
                style={{ transitionDelay: `${700 + index * 100}ms` }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
