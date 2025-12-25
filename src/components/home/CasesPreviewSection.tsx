import { Link } from "react-router-dom";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { portfolioCases } from "@/data/portfolioCases";

export const CasesPreviewSection = () => {
  const previewCases = portfolioCases.slice(0, 3);

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
          {previewCases.map((caseItem, index) => (
            <Link
              key={caseItem.id}
              to={`/portfolio/${caseItem.id}`}
              className="card-noir group overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-video bg-secondary rounded-lg mb-4 overflow-hidden relative border border-border">
                <iframe 
                  src={caseItem.showcaseUrl}
                  title={caseItem.title}
                  className="w-full h-full pointer-events-none scale-[0.5] origin-top-left"
                  style={{ width: '200%', height: '200%' }}
                />
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
