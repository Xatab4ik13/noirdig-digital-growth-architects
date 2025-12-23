import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { TelegramCTA } from "@/components/shared/TelegramCTA";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight, Check } from "lucide-react";

const forWhom = [
  "Малый бизнес, который хочет выйти в онлайн",
  "Компании, которым нужен современный корпоративный сайт",
  "Интернет-магазины любого масштаба",
  "Стартапы и новые проекты",
  "B2B-компании для лидогенерации",
];

const included = [
  "Анализ конкурентов и ЦА",
  "Прототипирование и UX-структура",
  "Уникальный дизайн по вашему брендбуку",
  "Адаптивная вёрстка (mobile-first)",
  "Программирование и интеграции",
  "CMS для управления контентом",
  "SEO-оптимизация структуры",
  "Настройка аналитики (Метрика, GA4)",
  "Оптимизация скорости (PageSpeed 90+)",
  "SSL-сертификат и безопасность",
  "Тестирование на всех устройствах",
  "Перенос на боевой сервер",
  "Обучение работе с CMS",
  "Гарантийная поддержка",
];

const packages = [
  {
    name: "Start",
    description: "Лендинг для быстрого старта",
    price: "от 15 000 ₽",
    timeline: "2-3 недели",
    features: [
      "До 5 экранов",
      "Адаптив под мобильные",
      "Форма заявки",
      "Базовая SEO-настройка",
      "Яндекс.Метрика",
    ],
  },
  {
    name: "Pro",
    description: "Корпоративный сайт",
    price: "от 40 000 ₽",
    timeline: "3-4 недели",
    features: [
      "До 15 страниц",
      "CMS для управления",
      "Блог / новости",
      "Интеграции (CRM, формы)",
      "Полная SEO-оптимизация",
      "PageSpeed 90+",
    ],
    popular: true,
  },
  {
    name: "Max",
    description: "Интернет-магазин",
    price: "от 80 000 ₽",
    timeline: "4-8 недель",
    features: [
      "Каталог товаров",
      "Корзина и оплата",
      "Личный кабинет",
      "Интеграция с 1С/МойСклад",
      "Фильтры и поиск",
      "Полная SEO-оптимизация",
    ],
  },
];

const faqs = [
  {
    question: "Какие технологии используете для разработки?",
    answer: "Зависит от проекта. Для лендингов — React или статика на Next.js. Для корпоративных сайтов — Headless CMS (Strapi, Payload). Для магазинов — 1C-Bitrix, WooCommerce или кастомные решения. Выбираем технологию под ваши задачи.",
  },
  {
    question: "Можете сделать дизайн по нашему брендбуку?",
    answer: "Да, работаем по готовому брендбуку или разрабатываем дизайн с нуля. Все макеты согласовываем до начала вёрстки.",
  },
  {
    question: "Что входит в SEO-оптимизацию?",
    answer: "Техническая SEO-основа: ЧПУ, мета-теги, schema.org, sitemap.xml, robots.txt, перелинковка, оптимизация скорости. Это фундамент для дальнейшего продвижения.",
  },
  {
    question: "Предоставляете ли доступы к сайту?",
    answer: "Да, все доступы ваши: хостинг, домен, CMS, FTP, Git-репозиторий (если нужно). Никакой зависимости от нас.",
  },
  {
    question: "Как происходит оплата?",
    answer: "Стандартная схема: 50% предоплата, 50% после сдачи. Для крупных проектов возможна поэтапная оплата. Работаем по договору.",
  },
  {
    question: "Есть ли гарантия?",
    answer: "Да, гарантийный период 14-30 дней. Бесплатно исправляем баги и недочёты. Также предлагаем услуги постоянной поддержки.",
  },
  {
    question: "Можете перенести сайт с другой платформы?",
    answer: "Да, переносим сайты с любых CMS и конструкторов. Сохраняем контент, URL-структуру и SEO-позиции.",
  },
];

const Websites = () => {
  return (
    <>
      <Helmet>
        <title>Создание сайтов под ключ — NOIRDIG</title>
        <meta
          name="description"
          content="Разработка лендингов, корпоративных сайтов и интернет-магазинов. Современный дизайн, PageSpeed 90+, SEO-оптимизация. От 15 000 ₽."
        />
        <link rel="canonical" href="https://noirdig.ru/services/websites/" />
      </Helmet>

      <Layout>
        {/* Hero */}
        <section className="section-padding">
          <div className="container-wide">
            <Breadcrumbs
              items={[
                { label: "Услуги", href: "/services" },
                { label: "Сайты под ключ", href: "/services/websites" },
              ]}
            />

            <div className="max-w-3xl">
              <h1 className="text-h1 md:text-display mb-6">
                Создание сайтов <span className="text-gradient">под ключ</span>
              </h1>
              <p className="text-body-lg text-muted-foreground mb-8">
                Разрабатываем лендинги, корпоративные сайты и интернет-магазины, 
                которые привлекают клиентов и увеличивают продажи. Современный дизайн, 
                высокая скорость, SEO-оптимизация с первого дня.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="gold" size="lg" asChild>
                  <Link to="/contacts">
                    Обсудить проект
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/portfolio">Смотреть портфолио</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* For whom */}
        <section className="section-padding bg-secondary/30">
          <div className="container-wide">
            <SectionHeader badge="Для кого" title="Кому подходит" />
            <div className="grid md:grid-cols-2 gap-4">
              {forWhom.map((item) => (
                <div key={item} className="flex items-center gap-3 card-noir">
                  <Check className="h-5 w-5 text-primary shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's included */}
        <section className="section-padding">
          <div className="container-wide">
            <SectionHeader badge="Что входит" title="Состав работ" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {included.map((item, index) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="w-6 h-6 bg-primary/10 rounded text-primary text-sm flex items-center justify-center">
                    {index + 1}
                  </span>
                  <span className="text-body-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Packages */}
        <section className="section-padding bg-card">
          <div className="container-wide">
            <SectionHeader
              badge="Пакеты"
              title="Выберите подходящий вариант"
              align="center"
            />
            <div className="grid md:grid-cols-3 gap-6">
              {packages.map((pkg) => (
                <div
                  key={pkg.name}
                  className={`card-noir relative ${
                    pkg.popular ? "border-primary" : ""
                  }`}
                >
                  {pkg.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full">
                      Популярный
                    </span>
                  )}
                  <h3 className="text-h3 mb-1">{pkg.name}</h3>
                  <p className="text-muted-foreground text-body-sm mb-4">
                    {pkg.description}
                  </p>
                  <div className="text-h2 text-primary mb-1">{pkg.price}</div>
                  <p className="text-body-sm text-muted-foreground mb-6">
                    {pkg.timeline}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-body-sm">
                        <Check className="h-4 w-4 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant={pkg.popular ? "gold" : "outline"}
                    className="w-full"
                    asChild
                  >
                    <Link to="/contacts">Выбрать</Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding">
          <div className="container-wide">
            <SectionHeader badge="FAQ" title="Вопросы по разработке сайтов" />
            <div className="max-w-3xl">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="card-noir border-none"
                  >
                    <AccordionTrigger className="text-left hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        <section className="section-padding bg-secondary/30">
          <div className="container-wide">
            <div className="max-w-2xl mx-auto">
              <TelegramCTA
                title="Обсудим ваш сайт?"
                subtitle="Напишите нам — подготовим коммерческое предложение"
              />
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Websites;
