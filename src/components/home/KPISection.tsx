import { SectionHeader } from "@/components/shared/SectionHeader";
import { Gauge, MousePointerClick, Search, Target } from "lucide-react";

const kpiCategories = [
  {
    icon: Gauge,
    title: "Core Web Vitals",
    description: "Скорость и качество загрузки",
    metrics: [
      { label: "LCP", value: "≤ 2.0 сек", description: "Largest Contentful Paint" },
      { label: "CLS", value: "≤ 0.10", description: "Cumulative Layout Shift" },
      { label: "INP", value: "≤ 200 мс", description: "Interaction to Next Paint" },
      { label: "PageSpeed", value: "90+", description: "Mobile score" },
    ],
  },
  {
    icon: MousePointerClick,
    title: "Конверсия",
    description: "Эффективность воронки",
    metrics: [
      { label: "CR сайта", value: "3-6%", description: "Для услуг и B2B" },
      { label: "Рост заявок", value: "+20-60%", description: "После оптимизации" },
      { label: "CR рекламы", value: "3-8%", description: "Клик → заявка" },
    ],
  },
  {
    icon: Search,
    title: "SEO",
    description: "Органический рост",
    metrics: [
      { label: "Индексация", value: "100%", description: "Ключевых страниц" },
      { label: "Рост органики", value: "+30-120%", description: "За 3-4 месяца" },
    ],
  },
  {
    icon: Target,
    title: "Telegram-боты",
    description: "Автоматизация",
    metrics: [
      { label: "CR в действие", value: "15-35%", description: "Заявка/запись/заказ" },
      { label: "Снижение нагрузки", value: "-20-40%", description: "На менеджера" },
    ],
  },
];

export const KPISection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container-wide">
        <SectionHeader
          badge="KPI и измерения"
          title="Стандарты NOIRDIG"
          description="Мы не просто обещаем — мы измеряем. Каждый проект оценивается по конкретным метрикам"
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {kpiCategories.map((category) => (
            <div key={category.title} className="bg-background border border-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
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
                    <span className="text-primary font-semibold">{metric.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* How we measure */}
        <div className="mt-12 text-center">
          <h4 className="font-semibold mb-4">Как измеряем</h4>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Яндекс.Метрика: цели + события",
              "UTM-разметка источников",
              "Отчёты по воронке",
              "PageSpeed Insights",
            ].map((item) => (
              <span
                key={item}
                className="bg-secondary px-4 py-2 rounded-full text-body-sm"
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
