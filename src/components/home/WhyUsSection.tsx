import { SectionHeader } from "@/components/shared/SectionHeader";
import {
  Clock,
  BarChart3,
  Eye,
  Palette,
  Search,
  Headphones,
  FileCheck,
} from "lucide-react";

const advantages = [
  {
    icon: FileCheck,
    title: "Прозрачный процесс",
    description: "Пошаговая разработка с утверждением каждого этапа. Вы всегда знаете, на каком этапе проект.",
  },
  {
    icon: Clock,
    title: "Соблюдение сроков",
    description: "Фиксируем сроки в договоре и придерживаемся их. Типовой проект — 2-4 недели.",
  },
  {
    icon: BarChart3,
    title: "Аналитика с первого дня",
    description: "Настраиваем цели и события в Яндекс.Метрике. Вы видите, откуда приходят заявки.",
  },
  {
    icon: Eye,
    title: "Полная прозрачность",
    description: "Доступы к хостингу, коду и аналитике — ваши. Никаких зависимостей от подрядчика.",
  },
  {
    icon: Palette,
    title: "Продающий дизайн",
    description: "Не просто красиво, а конверсионно. Структура под продажи, сильные CTA, понятный путь до заявки.",
  },
  {
    icon: Search,
    title: "SEO-скелет",
    description: "ЧПУ, мета-теги, перелинковка, schema.org — всё готово для продвижения с первого дня.",
  },
  {
    icon: Headphones,
    title: "Поддержка после запуска",
    description: "Гарантийный период 14-30 дней. Возможность подключить постоянную поддержку.",
  },
];

const standards = [
  {
    metric: "90+",
    label: "PageSpeed",
    description: "Скорость загрузки на мобильных",
  },
  {
    metric: "3-6%",
    label: "Конверсия",
    description: "Целевой показатель для B2B",
  },
  {
    metric: "100%",
    label: "Индексация",
    description: "Всех ключевых страниц",
  },
];

export const WhyUsSection = () => {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <SectionHeader
          badge="Почему NOIRDIG"
          title="7 причин работать с нами"
          description="Мы не просто делаем сайты — мы создаём инструменты для роста вашего бизнеса"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {advantages.map((advantage, index) => (
            <div
              key={advantage.title}
              className="card-noir"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <advantage.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-h4 mb-2">{advantage.title}</h3>
              <p className="text-muted-foreground text-body-sm">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>

        {/* Standards */}
        <div className="bg-card border border-border rounded-xl p-8 md:p-12">
          <h3 className="text-h3 mb-8 text-center">Наши стандарты качества</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {standards.map((standard) => (
              <div key={standard.label} className="text-center">
                <div className="text-display text-primary mb-2">{standard.metric}</div>
                <div className="font-semibold mb-1">{standard.label}</div>
                <div className="text-body-sm text-muted-foreground">
                  {standard.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
