import { SectionHeader } from "@/components/shared/SectionHeader";
import { useInView } from "@/hooks/useInView";

const steps = [
  {
    number: "01",
    title: "Бриф и анализ",
    description: "Выясняем задачи бизнеса, изучаем конкурентов, определяем целевую аудиторию и ключевые метрики успеха.",
  },
  {
    number: "02",
    title: "Прототип",
    description: "Создаём структуру и логику сайта. Вы видите расположение блоков и путь пользователя до заявки.",
  },
  {
    number: "03",
    title: "Дизайн",
    description: "Разрабатываем уникальный дизайн в соответствии с вашим брендом. Итерации до полного утверждения.",
  },
  {
    number: "04",
    title: "Разработка",
    description: "Верстаем, программируем, настраиваем CMS. Адаптивность, скорость, SEO-оптимизация.",
  },
  {
    number: "05",
    title: "Контент",
    description: "Помогаем подготовить тексты и изображения. При необходимости привлекаем копирайтера.",
  },
  {
    number: "06",
    title: "Тестирование",
    description: "Проверяем на всех устройствах и браузерах. Настраиваем аналитику, формы, интеграции.",
  },
  {
    number: "07",
    title: "Запуск и поддержка",
    description: "Переносим на боевой сервер, настраиваем бэкапы. Гарантийная поддержка 14-30 дней.",
  },
];

export const ProcessSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section className="section-padding">
      <div className="container-wide" ref={ref}>
        <SectionHeader
          badge="Процесс"
          title="Как мы работаем"
          description="7 понятных этапов от идеи до запуска"
          align="center"
        />

        <div className="relative">
          {/* Timeline line with animation */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border hidden md:block overflow-hidden">
            <div 
              className={`w-full bg-gradient-to-b from-primary via-primary to-primary/20 transition-all duration-[2000ms] ease-out ${
                isInView ? "h-full" : "h-0"
              }`}
            />
          </div>

          <div className="space-y-8 md:space-y-0">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`relative md:flex md:items-center md:gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div 
                  className={`md:w-1/2 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"} transition-all duration-700 ${
                    isInView ? "opacity-100 translate-x-0" : index % 2 === 0 ? "opacity-0 -translate-x-12" : "opacity-0 translate-x-12"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="card-noir hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                    <span className="text-primary font-bold text-lg">{step.number}</span>
                    <h3 className="text-h4 my-2">{step.title}</h3>
                    <p className="text-muted-foreground text-body-sm">{step.description}</p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div 
                  className={`absolute left-0 md:left-1/2 top-6 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 hidden md:block transition-all duration-500 ${
                    isInView ? "opacity-100 scale-100" : "opacity-0 scale-0"
                  }`}
                  style={{ transitionDelay: `${index * 200 + 100}ms` }}
                >
                  <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg shadow-primary/30" />
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
