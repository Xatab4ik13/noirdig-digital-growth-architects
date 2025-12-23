import { Link } from "react-router-dom";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";

const faqs = [
  {
    question: "Сколько стоит разработка сайта?",
    answer: "Стоимость зависит от типа проекта и его сложности. Лендинг — от 50 000 ₽, корпоративный сайт — от 120 000 ₽, интернет-магазин — от 200 000 ₽. Точную стоимость назовём после брифа.",
  },
  {
    question: "Какие сроки разработки?",
    answer: "Типовой лендинг — 2-3 недели, корпоративный сайт — 3-4 недели, интернет-магазин — 4-8 недель. Сроки фиксируем в договоре.",
  },
  {
    question: "Что нужно от клиента для начала работы?",
    answer: "Информация о компании, продукте/услуге, целевой аудитории. Фото/видео материалы (если есть). Примеры сайтов, которые нравятся. Остальное поможем подготовить.",
  },
  {
    question: "Есть ли гарантия на работу?",
    answer: "Да, гарантийный период — 14-30 дней в зависимости от проекта. В течение этого времени бесплатно исправляем любые баги и недочёты.",
  },
  {
    question: "Можете ли вы помочь с контентом?",
    answer: "Да, готовим структуру текстов и помогаем с редактурой. При необходимости привлекаем профессионального копирайтера за отдельную плату.",
  },
  {
    question: "Как происходит оплата?",
    answer: "Работаем по договору. Стандартная схема: 50% предоплата, 50% после сдачи. Для крупных проектов возможна поэтапная оплата.",
  },
];

export const FAQPreviewSection = () => {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeader
            badge="FAQ"
            title="Частые вопросы"
            description="Ответы на популярные вопросы о нашей работе"
          />
          <Button variant="outline" asChild className="mt-4 md:mt-0">
            <Link to="/faq">
              Все вопросы
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="max-w-3xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="card-noir border-none"
              >
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-medium">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
