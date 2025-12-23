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
import { ArrowRight, Check, Bot, ShoppingCart, Calendar, MessageSquare, CreditCard, BarChart3 } from "lucide-react";

const useCases = [
  { icon: ShoppingCart, title: "Воронки продаж", description: "Автоматизация продаж с квалификацией лидов" },
  { icon: Calendar, title: "Запись клиентов", description: "Онлайн-бронирование и напоминания" },
  { icon: MessageSquare, title: "Поддержка 24/7", description: "Ответы на частые вопросы, тикеты" },
  { icon: CreditCard, title: "Приём оплаты", description: "Интеграция с платёжными системами" },
  { icon: BarChart3, title: "Аналитика", description: "Статистика и отчёты в Telegram" },
  { icon: Bot, title: "Интеграции", description: "CRM, 1С, Google Sheets, любые API" },
];

const packages = [
  {
    name: "Start",
    description: "Простой бот для базовых задач",
    price: "от 10 000 ₽",
    timeline: "1-2 недели",
    features: [
      "До 5 сценариев",
      "Форма сбора заявок",
      "Уведомления в Telegram",
      "Админ-панель",
    ],
  },
  {
    name: "Pro",
    description: "Бот с интеграциями",
    price: "от 25 000 ₽",
    timeline: "2-3 недели",
    features: [
      "До 15 сценариев",
      "Интеграция с CRM",
      "Приём оплаты",
      "Запись клиентов",
      "Аналитика и отчёты",
    ],
    popular: true,
  },
  {
    name: "Max",
    description: "Сложная автоматизация",
    price: "от 50 000 ₽",
    timeline: "3-5 недель",
    features: [
      "Неограниченные сценарии",
      "Любые интеграции",
      "Личный кабинет клиента",
      "AI-функции (GPT)",
      "Выделенный сервер",
    ],
  },
];

const faqs = [
  {
    question: "Какие боты вы разрабатываете?",
    answer: "Любые: воронки продаж, запись клиентов, поддержка, каталоги товаров, приём оплаты, рассылки, интеграции с CRM и внешними сервисами. Всё, что можно автоматизировать.",
  },
  {
    question: "Можно интегрировать бота с CRM?",
    answer: "Да, интегрируем с Bitrix24, amoCRM, RetailCRM, 1C и любыми системами с API. Заявки из бота автоматически попадают в вашу CRM.",
  },
  {
    question: "Как принимать оплату в боте?",
    answer: "Интегрируем ЮKassa, Tinkoff, CloudPayments и другие платёжные системы. Клиент оплачивает прямо в боте, вы получаете уведомление.",
  },
  {
    question: "Нужен ли свой сервер?",
    answer: "Для большинства проектов — нет. Хостим ботов на нашей инфраструктуре. Для высоконагруженных проектов рекомендуем выделенный сервер.",
  },
  {
    question: "Сколько времени занимает разработка?",
    answer: "Простой бот — 1-2 недели. Бот с интеграциями — 2-3 недели. Сложная автоматизация — 3-5 недель. Сроки зависят от объёма функционала.",
  },
  {
    question: "Как вносить изменения после запуска?",
    answer: "Предоставляем админ-панель для изменения текстов, кнопок, ответов без участия разработчика. Для изменений логики — услуги поддержки.",
  },
  {
    question: "Даёте ли гарантию?",
    answer: "Да, 14-30 дней гарантии. Исправляем баги бесплатно. Также предлагаем услуги поддержки и доработки.",
  },
];

const TelegramBots = () => {
  return (
    <>
      <Helmet>
        <title>Разработка Telegram-ботов — NOIRDIG</title>
        <meta
          name="description"
          content="Создание Telegram-ботов для бизнеса: воронки продаж, запись клиентов, интеграции с CRM, приём оплаты. От 10 000 ₽."
        />
        <link rel="canonical" href="https://noirdig.ru/services/telegram-bots/" />
      </Helmet>

      <Layout>
        {/* Hero */}
        <section className="section-padding">
          <div className="container-wide">
            <Breadcrumbs
              items={[
                { label: "Услуги", href: "/services" },
                { label: "Telegram-боты", href: "/services/telegram-bots" },
              ]}
            />

            <div className="max-w-3xl">
              <h1 className="text-h1 md:text-display mb-6">
                Разработка <span className="text-gradient">Telegram-ботов</span>
              </h1>
              <p className="text-body-lg text-muted-foreground mb-8">
                Автоматизируем продажи, поддержку и запись клиентов. Боты работают 24/7, 
                снижают нагрузку на менеджеров и увеличивают конверсию.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="gold" size="lg" asChild>
                  <Link to="/contacts">
                    Обсудить бота
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/portfolio">Примеры ботов</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Use cases */}
        <section className="section-padding bg-secondary/30">
          <div className="container-wide">
            <SectionHeader badge="Возможности" title="Что умеют наши боты" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {useCases.map((useCase) => (
                <div key={useCase.title} className="card-noir">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <useCase.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{useCase.title}</h3>
                  <p className="text-muted-foreground text-body-sm">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Packages */}
        <section className="section-padding bg-card">
          <div className="container-wide">
            <SectionHeader badge="Пакеты" title="Выберите вариант" align="center" />
            <div className="grid md:grid-cols-3 gap-6">
              {packages.map((pkg) => (
                <div
                  key={pkg.name}
                  className={`card-noir relative ${pkg.popular ? "border-primary" : ""}`}
                >
                  {pkg.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full">
                      Популярный
                    </span>
                  )}
                  <h3 className="text-h3 mb-1">{pkg.name}</h3>
                  <p className="text-muted-foreground text-body-sm mb-4">{pkg.description}</p>
                  <div className="text-h2 text-primary mb-1">{pkg.price}</div>
                  <p className="text-body-sm text-muted-foreground mb-6">{pkg.timeline}</p>
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-body-sm">
                        <Check className="h-4 w-4 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant={pkg.popular ? "gold" : "outline"} className="w-full" asChild>
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
            <SectionHeader badge="FAQ" title="Вопросы по Telegram-ботам" />
            <div className="max-w-3xl">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="card-noir border-none">
                    <AccordionTrigger className="text-left hover:no-underline">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
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
                title="Обсудим вашего бота?"
                subtitle="Напишите нам — предложим решение"
              />
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default TelegramBots;
