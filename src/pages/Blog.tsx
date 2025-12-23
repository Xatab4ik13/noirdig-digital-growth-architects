import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const articles = [
  {
    slug: "kak-sozdat-prodayushchiy-lending",
    title: "Как создать продающий лендинг: 10 принципов конверсии",
    excerpt: "Разбираем ключевые элементы высококонверсионного лендинга и частые ошибки, которые снижают продажи.",
    category: "Сайты",
    date: "2024-12-15",
    readTime: "7 мин",
  },
  {
    slug: "telegram-bot-dlya-biznesa",
    title: "Telegram-бот для бизнеса: 5 сценариев автоматизации",
    excerpt: "Какие задачи можно автоматизировать с помощью Telegram-бота и сколько это экономит времени.",
    category: "Telegram-боты",
    date: "2024-12-10",
    readTime: "5 мин",
  },
  {
    slug: "seo-osnovy-dlya-novogo-sayta",
    title: "SEO-основы для нового сайта: что сделать до запуска",
    excerpt: "Чек-лист технической SEO-оптимизации, которую нужно заложить на этапе разработки.",
    category: "SEO",
    date: "2024-12-05",
    readTime: "8 мин",
  },
  {
    slug: "pagespeed-optimizatsiya",
    title: "Как достичь PageSpeed 90+ на любом сайте",
    excerpt: "Практические шаги по оптимизации скорости загрузки: изображения, шрифты, код.",
    category: "Разработка",
    date: "2024-12-01",
    readTime: "10 мин",
  },
  {
    slug: "integratsiya-crm-s-saytom",
    title: "Интеграция CRM с сайтом: зачем и как настроить",
    excerpt: "Как автоматически передавать заявки в CRM и не терять клиентов.",
    category: "Интеграции",
    date: "2024-11-25",
    readTime: "6 мин",
  },
  {
    slug: "yandex-metrika-nastroyka-tseley",
    title: "Настройка целей в Яндекс.Метрике: полный гайд",
    excerpt: "Какие цели отслеживать на сайте и как правильно их настроить для аналитики.",
    category: "Аналитика",
    date: "2024-11-20",
    readTime: "9 мин",
  },
];

const categories = ["Все", "Сайты", "Telegram-боты", "SEO", "Разработка", "Аналитика", "Интеграции"];

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Блог NOIRDIG — Статьи о разработке и digital-маркетинге</title>
        <meta
          name="description"
          content="Полезные статьи о создании сайтов, Telegram-ботов, SEO-оптимизации и digital-маркетинге для бизнеса."
        />
        <link rel="canonical" href="https://noirdig.ru/blog/" />
      </Helmet>

      <Layout>
        <section className="section-padding">
          <div className="container-wide">
            <Breadcrumbs items={[{ label: "Блог", href: "/blog" }]} />

            <SectionHeader
              badge="Блог"
              title="Полезные статьи"
              description="Делимся опытом и знаниями о разработке, продвижении и автоматизации"
            />

            {/* Categories */}
            <div className="flex flex-wrap gap-2 mb-12">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "Все" ? "gold" : "outline"}
                  size="sm"
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Articles grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article) => (
                <Link
                  key={article.slug}
                  to={`/blog/${article.slug}`}
                  className="card-noir group"
                >
                  <div className="aspect-video bg-secondary rounded-lg mb-4 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
                  </div>

                  <div className="flex items-center gap-2 mb-3 text-body-sm">
                    <span className="text-primary">{article.category}</span>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-muted-foreground">{article.readTime}</span>
                  </div>

                  <h3 className="text-h4 mb-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-body-sm text-muted-foreground mb-4">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center gap-2 text-body-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {new Date(article.date).toLocaleDateString("ru-RU", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-secondary/30">
          <div className="container-wide text-center">
            <h2 className="text-h2 mb-4">Нужна помощь с проектом?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Обсудим ваши задачи и предложим решение
            </p>
            <Button variant="gold" size="lg" asChild>
              <Link to="/contacts">
                Связаться
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Blog;
