import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { SectionHeader } from "@/components/shared/SectionHeader";

import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Eye, Clock, BarChart3, Shield, Palette, Headphones, Send } from "lucide-react";

const principles = [
  {
    icon: Eye,
    title: "Прозрачность",
    description: "Доступы к хостингу, коду и аналитике — ваши. Никаких зависимостей от подрядчика.",
  },
  {
    icon: Clock,
    title: "Соблюдение сроков",
    description: "Фиксируем сроки в договоре и придерживаемся их. Типовой проект — 2-4 недели.",
  },
  {
    icon: BarChart3,
    title: "Аналитика",
    description: "Настраиваем цели и события с первого дня. Вы видите, откуда приходят заявки.",
  },
  {
    icon: Shield,
    title: "Контроль качества",
    description: "Тестирование на всех устройствах, проверка скорости, SEO-аудит перед запуском.",
  },
  {
    icon: Palette,
    title: "Продающий дизайн",
    description: "Не просто красиво, а конверсионно. Структура под продажи, понятный путь до заявки.",
  },
  {
    icon: Headphones,
    title: "Постоянная связь",
    description: "Отвечаем в течение 2 часов. Регулярные статусы, никаких сюрпризов.",
  },
];

const guarantees = [
  "Гарантийный багфикс 14-30 дней",
  "Поэтапная сдача с утверждением",
  "Регламент правок в договоре",
  "Возможность подключить поддержку",
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>О студии NOIRDIG — Премиальная digital-студия</title>
        <meta
          name="description"
          content="NOIRDIG — премиальная digital-студия. Создаём сайты и Telegram-боты для малого бизнеса и B2B. Работаем по всей России."
        />
        <link rel="canonical" href="https://noirdig.ru/about/" />
      </Helmet>

      <Layout>
        {/* Hero */}
        <section className="section-padding">
          <div className="container-wide">
            <Breadcrumbs items={[{ label: "О студии", href: "/about" }]} />

            <div className="max-w-3xl">
              <h1 className="text-h1 md:text-display mb-6">
                Премиальная digital-студия <span className="text-gradient">под ключ</span>
              </h1>
              <p className="text-body-lg text-muted-foreground mb-8">
                Мы — NOIRDIG. Помогаем бизнесу привлекать клиентов и увеличивать продажи 
                в онлайне. Создаём сайты и Telegram-ботов, которые работают на результат.
              </p>
              <p className="text-body-lg text-muted-foreground">
                Фокус на продажи, аналитику и скорость. Не просто красивые картинки, 
                а инструменты для роста вашего бизнеса.
              </p>
            </div>
          </div>
        </section>

        {/* Principles */}
        <section className="section-padding bg-secondary/30">
          <div className="container-wide">
            <SectionHeader badge="Принципы" title="Как мы работаем" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {principles.map((principle) => (
                <div key={principle.title} className="card-noir">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <principle.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{principle.title}</h3>
                  <p className="text-muted-foreground text-body-sm">{principle.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What we need from client */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <SectionHeader badge="Клиенту" title="Что нужно от вас" />
                <div className="space-y-4">
                  {[
                    "Информация о компании, продукте/услуге и целевой аудитории",
                    "Фото/видео материалы (если есть)",
                    "Примеры сайтов, которые нравятся",
                    "Доступы к домену и хостингу (если уже есть)",
                    "Обратная связь на каждом этапе",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <SectionHeader badge="Гарантии" title="Что гарантируем" />
                <div className="space-y-4">
                  {guarantees.map((item) => (
                    <div key={item} className="flex items-start gap-3 card-noir">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-secondary/30">
          <div className="container-wide text-center">
            <h2 className="text-h2 mb-4">Готовы начать?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Расскажите о вашем проекте — подготовим предложение
            </p>
            <Button variant="gold" size="lg" asChild>
              <a
                href="https://t.me/noirdig"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Send className="h-5 w-5" />
                Написать в Telegram
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default About;
