import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

const POSTS_PER_PAGE = 6;

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE);
  
  const startIndex = currentPage * POSTS_PER_PAGE;
  const visiblePosts = blogPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  const goToPrevious = () => {
    setCurrentPage((prev) => Math.max(0, prev - 1));
  };

  const goToNext = () => {
    setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1));
  };

  // Structured data for blog listing
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Блог NOIRDIG",
    "description": "Полезные статьи о создании сайтов, Telegram-ботов, SEO-оптимизации и digital-маркетинге для бизнеса.",
    "url": "https://noirdig.ru/blog/",
    "publisher": {
      "@type": "Organization",
      "name": "NOIRDIG",
      "url": "https://noirdig.ru"
    },
    "blogPost": blogPosts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "datePublished": post.date,
      "author": {
        "@type": "Organization",
        "name": post.author
      },
      "url": `https://noirdig.ru/blog/${post.slug}/`
    }))
  };

  return (
    <>
      <Helmet>
        <title>Блог NOIRDIG — Статьи о разработке и digital-маркетинге</title>
        <meta
          name="description"
          content="Полезные статьи о создании сайтов, Telegram-ботов, SEO-оптимизации и digital-маркетинге для бизнеса."
        />
        <link rel="canonical" href="https://noirdig.ru/blog/" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Блог NOIRDIG — Статьи о разработке" />
        <meta property="og:description" content="Полезные статьи о создании сайтов, Telegram-ботов, SEO-оптимизации." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://noirdig.ru/blog/" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
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

            {/* Articles grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {visiblePosts.map((article) => (
                <Link
                  key={article.slug}
                  to={`/blog/${article.slug}`}
                  className="card-noir group"
                >
                  <div className="aspect-video bg-secondary rounded-lg mb-4 relative overflow-hidden">
                    {article.image ? (
                      <img 
                        src={article.image} 
                        alt={article.imageAlt || article.title}
                        className="w-full h-full object-cover"
                        loading={startIndex === 0 && visiblePosts.indexOf(article) < 3 ? "eager" : "lazy"}
                        fetchPriority={startIndex === 0 && visiblePosts.indexOf(article) === 0 ? "high" : "auto"}
                        decoding="async"
                        width={400}
                        height={225}
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
                    )}
                  </div>

                  <div className="flex items-center gap-2 mb-3 text-body-sm">
                    <span className="text-primary">{article.category}</span>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-muted-foreground">{article.readTime}</span>
                  </div>

                  <h2 className="text-h4 mb-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-body-sm text-muted-foreground mb-4">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center gap-2 text-body-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <time dateTime={article.date}>
                      {new Date(article.date).toLocaleDateString("ru-RU", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </time>
                  </div>
                </Link>
              ))}
            </div>

            {/* Navigation arrows */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-4 mt-12">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={goToPrevious}
                  disabled={currentPage === 0}
                  className="h-12 w-12 rounded-full"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                
                <span className="text-muted-foreground text-sm min-w-[80px] text-center">
                  {currentPage + 1} / {totalPages}
                </span>
                
                <Button
                  variant="outline"
                  size="icon"
                  onClick={goToNext}
                  disabled={currentPage === totalPages - 1}
                  className="h-12 w-12 rounded-full"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            )}
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
              <a href="https://t.me/noirdig_bot" target="_blank" rel="noopener noreferrer">
                Связаться
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Blog;
