import { Link } from "react-router-dom";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";

// Placeholder cases - real data would come from CMS/database
const cases = [
  {
    id: "case-1",
    category: "Лендинг",
    industry: "Услуги",
    title: "Корпоративный сайт для юридической компании",
    metrics: [
      { label: "PageSpeed", value: "94" },
      { label: "Конверсия", value: "4.2%" },
    ],
  },
  {
    id: "case-2",
    category: "Telegram-бот",
    industry: "Ритейл",
    title: "Бот для автоматизации записи клиентов",
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
    metrics: [
      { label: "PageSpeed", value: "91" },
      { label: "Рост заявок", value: "+45%" },
    ],
  },
];

export const CasesPreviewSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeader
            badge="Портфолио"
            title="Наши проекты"
            description="Примеры выполненных работ с измеримыми результатами"
          />
          <Button variant="gold-outline" asChild className="mt-4 md:mt-0">
            <Link to="/portfolio">
              Все кейсы
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((caseItem, index) => (
            <Link
              key={caseItem.id}
              to={`/portfolio/${caseItem.id}`}
              className="card-noir group overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Placeholder image */}
              <div className="aspect-video bg-secondary rounded-lg mb-4 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-muted-foreground text-body-sm">Превью проекта</span>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-3">
                <span className="text-body-sm text-primary">{caseItem.category}</span>
                <span className="text-muted-foreground">•</span>
                <span className="text-body-sm text-muted-foreground">{caseItem.industry}</span>
              </div>

              <h3 className="text-h4 mb-4 group-hover:text-primary transition-colors">
                {caseItem.title}
              </h3>

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
  );
};
