import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ContactForm } from "@/components/shared/ContactForm";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";

const faqCategories = [
  {
    title: "Общие вопросы",
    faqs: [
      {
        question: "Сколько стоит разработка сайта?",
        answer: "Стоимость зависит от типа проекта. Лендинг — от 50 000 ₽, корпоративный сайт — от 120 000 ₽, интернет-магазин — от 200 000 ₽. Точную стоимость назовём после брифа.",
      },
      {
        question: "Какие сроки разработки?",
        answer: "Лендинг — 2-3 недели, корпоративный сайт — 3-4 недели, интернет-магазин — 4-8 недель. Сроки фиксируем в договоре.",
      },
      {
        question: "Как происходит оплата?",
        answer: "Работаем по договору. Стандартная схема: 50% предоплата, 50% после сдачи. Для крупных проектов возможна поэтапная оплата.",
      },
    ],
  },
  {
    title: "Процесс работы",
    faqs: [
      {
        question: "Что нужно от клиента для начала работы?",
        answer: "Информация о компании, продукте/услуге, целевой аудитории. Фото/видео материалы (если есть). Примеры сайтов, которые нравятся. Остальное поможем подготовить.",
      },
      {
        question: "Сколько правок включено в стоимость?",
        answer: "На каждом этапе — 2 раунда правок. Дополнительные правки оплачиваются по часовой ставке. Регламент фиксируется в договоре.",
      },
      {
        question: "Можете ли вы помочь с контентом?",
        answer: "Да, готовим структуру текстов и помогаем с редактурой. При необходимости привлекаем профессионального копирайтера за отдельную плату.",
      },
    ],
  },
  {
    title: "Технические вопросы",
    faqs: [
      {
        question: "Нужен ли мне свой домен и хостинг?",
        answer: "Если у вас уже есть домен и хостинг — работаем с ними. Если нет — поможем выбрать и настроить. Рекомендуем регистрировать домен на ваше имя.",
      },
      {
        question: "Предоставляете ли доступы к сайту?",
        answer: "Да, все доступы ваши: хостинг, домен, CMS, FTP, Git-репозиторий (если нужно). Никакой зависимости от нас.",
      },
      {
        question: "Можете перенести сайт с другой платформы?",
        answer: "Да, переносим сайты с любых CMS и конструкторов. Сохраняем контент, URL-структуру и SEO-позиции.",
      },
    ],
  },
  {
    title: "SEO и продвижение",
    faqs: [
      {
        question: "Что входит в SEO-оптимизацию?",
        answer: "Техническая SEO-основа: ЧПУ, мета-теги, schema.org, sitemap.xml, robots.txt, перелинковка, оптимизация скорости. Это фундамент для продвижения.",
      },
      {
        question: "Занимаетесь ли вы продвижением сайтов?",
        answer: "Мы закладываем SEO-основу при разработке. Полноценное продвижение (контент, ссылки, семантика) — отдельная услуга или рекомендуем партнёров.",
      },
    ],
  },
  {
    title: "Telegram-боты",
    faqs: [
      {
        question: "Какие боты вы разрабатываете?",
        answer: "Любые: воронки продаж, запись клиентов, поддержка, каталоги, приём оплаты, рассылки, интеграции с CRM. Всё, что можно автоматизировать.",
      },
      {
        question: "Можно интегрировать бота с CRM?",
        answer: "Да, интегрируем с Bitrix24, amoCRM, RetailCRM, 1C и любыми системами с API.",
      },
      {
        question: "Нужен ли свой сервер для бота?",
        answer: "Для большинства проектов — нет. Хостим ботов на нашей инфраструктуре. Для высоконагруженных проектов рекомендуем выделенный сервер.",
      },
    ],
  },
  {
    title: "Гарантии и поддержка",
    faqs: [
      {
        question: "Есть ли гарантия на работу?",
        answer: "Да, гарантийный период 14-30 дней. Бесплатно исправляем баги и недочёты. Также предлагаем услуги постоянной поддержки.",
      },
      {
        question: "Что входит в поддержку после запуска?",
        answer: "Мониторинг, бэкапы, обновления, мелкие правки. Пакеты от 15 000 ₽/мес. Подробнее на странице поддержки.",
      },
      {
        question: "Работаете ли по договору?",
        answer: "Да, обязательно. Договор включает ТЗ, сроки, этапы оплаты, регламент правок, гарантии.",
      },
    ],
  },
];

const FAQ = () => {
  return (
    <>
      <Helmet>
        <title>FAQ — Часто задаваемые вопросы | NOIRDIG</title>
        <meta
          name="description"
          content="Ответы на частые вопросы о разработке сайтов, Telegram-ботов, сроках, ценах и процессе работы с NOIRDIG."
        />
        <link rel="canonical" href="https://noirdig.ru/faq/" />
      </Helmet>

      <Layout>
        <section className="section-padding">
          <div className="container-wide">
            <Breadcrumbs items={[{ label: "FAQ", href: "/faq" }]} />

            <SectionHeader
              badge="FAQ"
              title="Часто задаваемые вопросы"
              description="Ответы на популярные вопросы о нашей работе"
            />

            <div className="space-y-12">
              {faqCategories.map((category, categoryIndex) => (
                <div key={category.title}>
                  <h2 className="text-h3 mb-6">{category.title}</h2>
                  <Accordion type="single" collapsible className="space-y-4">
                    {category.faqs.map((faq, faqIndex) => (
                      <AccordionItem
                        key={faqIndex}
                        value={`${categoryIndex}-${faqIndex}`}
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
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-secondary/30">
          <div className="container-wide">
            <div className="text-center mb-12">
              <h2 className="text-h2 mb-4">Не нашли ответ?</h2>
              <p className="text-muted-foreground">
                Напишите нам — ответим в течение 2 часов
              </p>
            </div>
            <div className="max-w-2xl mx-auto">
              <ContactForm compact />
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default FAQ;
