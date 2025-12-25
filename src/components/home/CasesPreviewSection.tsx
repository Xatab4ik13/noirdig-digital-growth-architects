import { Link } from "react-router-dom";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Portfolio images
import lawFirmImg from "@/assets/portfolio/law-firm-site.jpg";
import dentalShopImg from "@/assets/portfolio/dental-shop.jpg";
import photoStudioImg from "@/assets/portfolio/photo-studio.jpg";

const cases = [
  {
    id: "case-1",
    category: "Корпоративный сайт",
    industry: "Юридические услуги",
    title: "Право и Партнёры — юридическая компания",
    image: lawFirmImg,
    imageAlt: "Корпоративный сайт юридической компании Право и Партнёры с тёмно-синим дизайном",
    metrics: [
      { label: "PageSpeed", value: "94" },
      { label: "Конверсия", value: "4.2%" },
    ],
  },
  {
    id: "case-2",
    category: "Интернет-магазин",
    industry: "E-commerce",
    title: "DentalCare — магазин товаров для гигиены полости рта",
    image: dentalShopImg,
    imageAlt: "Интернет-магазин товаров для гигиены полости рта DentalCare",
    metrics: [
      { label: "PageSpeed", value: "92" },
      { label: "Рост продаж", value: "+65%" },
    ],
  },
  {
    id: "case-3",
    category: "Сайт-портфолио",
    industry: "Фотография",
    title: "Nendea Studio — фотостудия",
    image: photoStudioImg,
    imageAlt: "Сайт фотостудии Nendea Studio с тёмным креативным дизайном",
    metrics: [
      { label: "PageSpeed", value: "96" },
      { label: "Бронирования", value: "+120%" },
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
              {/* Project image */}
              <div className="aspect-video bg-secondary rounded-lg mb-4 overflow-hidden relative">
                <img 
                  src={caseItem.image} 
                  alt={caseItem.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
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
