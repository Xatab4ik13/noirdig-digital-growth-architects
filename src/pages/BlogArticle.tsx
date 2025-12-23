import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { ContactForm } from "@/components/shared/ContactForm";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock, ArrowLeft } from "lucide-react";

const BlogArticle = () => {
  const { articleSlug } = useParams();

  return (
    <>
      <Helmet>
        <title>Как создать продающий лендинг — Блог NOIRDIG</title>
        <meta
          name="description"
          content="Разбираем ключевые элементы высококонверсионного лендинга и частые ошибки."
        />
      </Helmet>

      <Layout>
        <article className="section-padding">
          <div className="container-narrow">
            <Breadcrumbs
              items={[
                { label: "Блог", href: "/blog" },
                { label: "Статья", href: `/blog/${articleSlug}` },
              ]}
            />

            {/* Article header */}
            <header className="mb-12">
              <div className="flex items-center gap-3 mb-4 text-body-sm">
                <span className="text-primary">Сайты</span>
                <span className="text-muted-foreground">•</span>
                <span className="text-muted-foreground flex items-center gap-1">
                  <Clock className="h-4 w-4" /> 7 мин
                </span>
                <span className="text-muted-foreground">•</span>
                <span className="text-muted-foreground flex items-center gap-1">
                  <Calendar className="h-4 w-4" /> 15 декабря 2024
                </span>
              </div>

              <h1 className="text-h1 md:text-display mb-6">
                Как создать продающий лендинг: 10 принципов конверсии
              </h1>

              <p className="text-body-lg text-muted-foreground">
                Разбираем ключевые элементы высококонверсионного лендинга и частые ошибки, 
                которые снижают продажи. Практические советы из опыта 50+ проектов.
              </p>
            </header>

            {/* Article content placeholder */}
            <div className="prose prose-lg max-w-none mb-12">
              <div className="aspect-video bg-secondary rounded-xl mb-8" />

              <h2>Введение</h2>
              <p className="text-muted-foreground">
                Лендинг — это не просто красивая страница, а инструмент продаж. 
                Его главная задача — конвертировать посетителей в заявки. В этой статье 
                разберём 10 принципов, которые помогут создать лендинг с конверсией 3-6%.
              </p>

              <h2>1. Сильный заголовок (H1)</h2>
              <p className="text-muted-foreground">
                Заголовок — первое, что видит посетитель. Он должен чётко отвечать на вопрос 
                «Что я получу?». Избегайте размытых формулировок типа «Лучшие решения для бизнеса».
              </p>

              <h2>2. Понятное УТП</h2>
              <p className="text-muted-foreground">
                Уникальное торговое предложение должно быть видно в первые 5 секунд. 
                Чем вы отличаетесь от конкурентов? Почему стоит выбрать именно вас?
              </p>

              <h2>3. Призыв к действию (CTA)</h2>
              <p className="text-muted-foreground">
                CTA-кнопка должна быть заметной и конкретной. «Получить расчёт» работает 
                лучше, чем «Отправить». Используйте несколько CTA на странице.
              </p>

              <div className="bg-card border border-border rounded-xl p-6 my-8">
                <h3 className="text-h4 mb-4">Хотите такой же лендинг?</h3>
                <p className="text-muted-foreground mb-4">
                  Мы создаём продающие лендинги с конверсией от 3%. Обсудим ваш проект?
                </p>
                <Button variant="gold" asChild>
                  <Link to="/services/websites">
                    Узнать подробнее
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <h2>4. Доверительные элементы</h2>
              <p className="text-muted-foreground">
                Логотипы клиентов, кейсы с результатами, гарантии — всё это повышает доверие 
                и снимает возражения.
              </p>

              <h2>Заключение</h2>
              <p className="text-muted-foreground">
                Продающий лендинг — это сочетание правильной структуры, сильного оффера 
                и технического качества. Следуйте этим принципам, и конверсия вырастет.
              </p>
            </div>

            {/* Related articles */}
            <div className="border-t border-border pt-12 mb-12">
              <h3 className="text-h3 mb-6">Читайте также</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: "SEO-основы для нового сайта", slug: "seo-osnovy" },
                  { title: "Как достичь PageSpeed 90+", slug: "pagespeed" },
                ].map((article) => (
                  <Link
                    key={article.slug}
                    to={`/blog/${article.slug}`}
                    className="card-noir group"
                  >
                    <h4 className="font-semibold group-hover:text-primary transition-colors">
                      {article.title}
                    </h4>
                  </Link>
                ))}
              </div>
            </div>

            {/* Back to blog */}
            <div className="flex justify-center">
              <Button variant="outline" asChild>
                <Link to="/blog">
                  <ArrowLeft className="h-4 w-4" />
                  Все статьи
                </Link>
              </Button>
            </div>
          </div>
        </article>

        {/* CTA */}
        <section className="section-padding bg-secondary/30">
          <div className="container-wide">
            <div className="max-w-2xl mx-auto">
              <ContactForm
                title="Нужна помощь с проектом?"
                subtitle="Обсудим ваши задачи"
              />
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default BlogArticle;
