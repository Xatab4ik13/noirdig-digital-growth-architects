import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Portfolio images
import lawFirmImg from "@/assets/portfolio/law-firm-site.jpg";
import dentalShopImg from "@/assets/portfolio/dental-shop.jpg";
import photoStudioImg from "@/assets/portfolio/photo-studio.jpg";
import barbershopImg from "@/assets/portfolio/barbershop.jpg";
import banyaConstructionImg from "@/assets/portfolio/banya-construction.jpg";
import groomingSalonImg from "@/assets/portfolio/grooming-salon.jpg";

const cases = [
  {
    id: "case-1",
    category: "Корпоративный сайт",
    industry: "Юридические услуги",
    title: "Право и Партнёры — юридическая компания",
    description: "Разработали премиальный корпоративный сайт с продающей структурой, формой записи на консультацию и интеграцией с CRM. Сайт полностью оптимизирован для SEO.",
    image: lawFirmImg,
    imageAlt: "Корпоративный сайт юридической компании Право и Партнёры с тёмно-синим дизайном и золотыми акцентами",
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
    description: "Создали современный интернет-магазин с каталогом 500+ товаров, интеграцией оплаты и доставки. Минималистичный дизайн в мятных тонах подчёркивает свежесть бренда.",
    image: dentalShopImg,
    imageAlt: "Интернет-магазин товаров для гигиены полости рта DentalCare с минималистичным светлым дизайном",
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
    description: "Разработали креативный сайт для фотостудии с галереей работ, системой бронирования и тёмным дизайном, который подчёркивает художественность фотографий.",
    image: photoStudioImg,
    imageAlt: "Сайт фотостудии Nendea Studio с тёмным креативным дизайном и галереей работ",
    metrics: [
      { label: "PageSpeed", value: "96" },
      { label: "Бронирования", value: "+120%" },
    ],
  },
  {
    id: "case-4",
    category: "Лендинг + Telegram-бот",
    industry: "Бьюти",
    title: "Baber Craft — барбершоп",
    description: "Создали стильный сайт в винтажном стиле и интегрировали Telegram-бот для онлайн-записи. Клиенты могут записаться к мастеру прямо в мессенджере без звонков.",
    image: barbershopImg,
    imageAlt: "Сайт барбершопа Baber Craft с тёмным винтажным дизайном в коричневых тонах",
    metrics: [
      { label: "Конверсия в запись", value: "32%" },
      { label: "Снижение нагрузки", value: "-45%" },
    ],
  },
  {
    id: "case-5",
    category: "Корпоративный сайт",
    industry: "Строительство",
    title: "БаняМастер — строительство банных комплексов",
    description: "Разработали сайт для строительной компании с каталогом проектов, калькулятором стоимости и портфолио выполненных работ. Тёплые деревянные тона передают атмосферу бани.",
    image: banyaConstructionImg,
    imageAlt: "Сайт компании БаняМастер по строительству бань с деревянным тёплым дизайном",
    metrics: [
      { label: "PageSpeed", value: "91" },
      { label: "Рост заявок", value: "+85%" },
    ],
  },
  {
    id: "case-6",
    category: "Лендинг",
    industry: "Груминг",
    title: "Fluffy Paws — груминг-салон в Москве",
    description: "Создали яркий и дружелюбный сайт для груминг-салона с онлайн-записью, галереей работ и прайс-листом. Пастельные тона и милые фото питомцев привлекают клиентов.",
    image: groomingSalonImg,
    imageAlt: "Сайт груминг-салона Fluffy Paws в Москве с пастельным дизайном и фотографиями питомцев",
    metrics: [
      { label: "PageSpeed", value: "95" },
      { label: "Конверсия", value: "5.8%" },
    ],
  },
];

const Portfolio = () => {
  return (
    <>
      <Helmet>
        <title>Портфолио — NOIRDIG | Примеры работ</title>
        <meta
          name="description"
          content="Портфолио NOIRDIG: примеры сайтов, интернет-магазинов и Telegram-ботов с измеримыми результатами."
        />
        <link rel="canonical" href="https://noirdig.ru/portfolio/" />
      </Helmet>

      <Layout>
        <section className="section-padding">
          <div className="container-wide">
            <Breadcrumbs items={[{ label: "Портфолио", href: "/portfolio" }]} />

            <SectionHeader
              badge="Портфолио"
              title="Наши проекты"
              description="Примеры выполненных работ с измеримыми результатами"
            />

            {/* Cases grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cases.map((caseItem) => (
                <Link
                  key={caseItem.id}
                  to={`/portfolio/${caseItem.id}`}
                  className="card-noir group"
                >
                  <div className="aspect-video bg-secondary rounded-lg mb-4 relative overflow-hidden">
                    <img 
                      src={caseItem.image} 
                      alt={caseItem.imageAlt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-body-sm text-primary">{caseItem.category}</span>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-body-sm text-muted-foreground">{caseItem.industry}</span>
                  </div>

                  <h3 className="text-h4 mb-2 group-hover:text-primary transition-colors">
                    {caseItem.title}
                  </h3>
                  <p className="text-body-sm text-muted-foreground mb-4">
                    {caseItem.description}
                  </p>

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

        {/* CTA */}
        <section className="section-padding bg-secondary/30">
          <div className="container-wide text-center">
            <h2 className="text-h2 mb-4">Хотите такой же результат?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Обсудим ваш проект и покажем, как можем помочь
            </p>
            <Button variant="gold" size="lg" asChild>
              <a href="https://t.me/noirdig_bot" target="_blank" rel="noopener noreferrer">
                Обсудить проект
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Portfolio;
