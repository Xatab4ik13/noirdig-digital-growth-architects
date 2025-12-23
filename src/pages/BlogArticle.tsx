import { Helmet } from "react-helmet-async";
import { Link, useParams, Navigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { TelegramCTA } from "@/components/shared/TelegramCTA";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock, ArrowLeft } from "lucide-react";
import { getPostBySlug, getRelatedPosts } from "@/data/blogPosts";

const BlogArticle = () => {
  const { articleSlug } = useParams();
  const post = articleSlug ? getPostBySlug(articleSlug) : undefined;

  // Если пост не найден — редирект на 404
  if (!post) {
    return <Navigate to="/404" replace />;
  }

  const relatedPosts = post.relatedSlugs ? getRelatedPosts(post.relatedSlugs) : [];

  // Structured data for article (JSON-LD)
  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "datePublished": post.date,
    "dateModified": post.date,
    "author": {
      "@type": "Organization",
      "name": post.author,
      "url": "https://noirdig.ru"
    },
    "publisher": {
      "@type": "Organization",
      "name": "NOIRDIG",
      "url": "https://noirdig.ru",
      "logo": {
        "@type": "ImageObject",
        "url": "https://noirdig.ru/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://noirdig.ru/blog/${post.slug}/`
    },
    "image": post.image || "https://noirdig.ru/og-image.jpg",
    "articleSection": post.category,
    "wordCount": post.content.split(/\s+/).length
  };

  // FAQ Schema for rich snippets
  const faqStructuredData = post.faq && post.faq.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": post.faq.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  } : null;

  const formattedDate = new Date(post.date).toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <Helmet>
        <title>{post.title} — Блог NOIRDIG</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={`https://noirdig.ru/blog/${post.slug}/`} />
        
        {/* Open Graph */}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://noirdig.ru/blog/${post.slug}/`} />
        {post.image && <meta property="og:image" content={post.image} />}
        <meta property="article:published_time" content={post.date} />
        <meta property="article:section" content={post.category} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        
        {/* Structured Data - Article */}
        <script type="application/ld+json">
          {JSON.stringify(articleStructuredData)}
        </script>
        
        {/* Structured Data - FAQ for rich snippets */}
        {faqStructuredData && (
          <script type="application/ld+json">
            {JSON.stringify(faqStructuredData)}
          </script>
        )}
      </Helmet>

      <Layout>
        <article className="section-padding">
          <div className="container-narrow">
            <Breadcrumbs
              items={[
                { label: "Блог", href: "/blog" },
                { label: post.title, href: `/blog/${post.slug}` },
              ]}
            />

            {/* Article header */}
            <header className="mb-12">
              <div className="flex items-center gap-3 mb-4 text-body-sm">
                <span className="text-primary">{post.category}</span>
                <span className="text-muted-foreground">•</span>
                <span className="text-muted-foreground flex items-center gap-1">
                  <Clock className="h-4 w-4" /> {post.readTime}
                </span>
                <span className="text-muted-foreground">•</span>
                <time dateTime={post.date} className="text-muted-foreground flex items-center gap-1">
                  <Calendar className="h-4 w-4" /> {formattedDate}
                </time>
              </div>

              <h1 className="text-h1 md:text-display mb-6">
                {post.title}
              </h1>

              <p className="text-body-lg text-muted-foreground">
                {post.excerpt}
              </p>
            </header>

            {/* Featured image */}
            {post.image && (
              <div className="aspect-video bg-secondary rounded-xl mb-8 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Article content */}
            <div 
              className="prose prose-lg max-w-none mb-12 
                prose-headings:text-foreground prose-headings:font-semibold
                prose-h2:text-h3 prose-h2:mt-12 prose-h2:mb-6
                prose-h3:text-h4 prose-h3:mt-8 prose-h3:mb-4
                prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-5
                prose-ul:text-muted-foreground prose-ul:my-5 prose-ul:space-y-2
                prose-ol:text-muted-foreground prose-ol:my-5 prose-ol:space-y-2
                prose-li:my-0
                prose-strong:text-foreground
                prose-blockquote:my-6
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />


            {/* Related articles */}
            {relatedPosts.length > 0 && (
              <div className="border-t border-border pt-12 mb-12">
                <h3 className="text-h3 mb-6">Читайте также</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {relatedPosts.map((article) => (
                    <Link
                      key={article.slug}
                      to={`/blog/${article.slug}`}
                      className="card-noir group"
                    >
                      <span className="text-body-sm text-primary mb-2 block">
                        {article.category}
                      </span>
                      <h4 className="font-semibold group-hover:text-primary transition-colors">
                        {article.title}
                      </h4>
                    </Link>
                  ))}
                </div>
              </div>
            )}

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
      </Layout>
    </>
  );
};

export default BlogArticle;
