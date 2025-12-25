import { Scale, Gavel, FileText, Building, Users, Shield, ArrowRight, Check, Phone } from "lucide-react";

const PravoServices = () => {
  const services = [
    {
      icon: Gavel,
      title: "Арбитражные споры",
      price: "от 150 000 ₽",
      features: [
        "Анализ судебной перспективы",
        "Подготовка процессуальных документов",
        "Представительство в суде",
        "Работа с доказательной базой",
        "Исполнительное производство"
      ]
    },
    {
      icon: FileText,
      title: "Банкротство",
      price: "от 300 000 ₽",
      features: [
        "Инициирование банкротства",
        "Защита от субсидиарной ответственности",
        "Оспаривание сделок",
        "Работа с кредиторами",
        "Реструктуризация долгов"
      ]
    },
    {
      icon: Building,
      title: "Корпоративное право",
      price: "от 100 000 ₽",
      features: [
        "Структурирование сделок",
        "Due diligence",
        "M&A сопровождение",
        "Корпоративные конфликты",
        "Регистрация изменений"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a1628] text-white font-sans">
      {/* Header */}
      <header className="border-b border-[#1e3a5f]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#c9a227] rounded flex items-center justify-center">
              <Scale className="w-6 h-6 text-[#0a1628]" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight">ПРАВО</span>
              <span className="text-xl font-light text-[#c9a227]"> & ПАРТНЁРЫ</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#" className="text-[#c9a227]">Услуги</a>
            <a href="#" className="text-white/80 hover:text-[#c9a227] transition-colors">Команда</a>
            <a href="#" className="text-white/80 hover:text-[#c9a227] transition-colors">Кейсы</a>
            <a href="#" className="text-white/80 hover:text-[#c9a227] transition-colors">Контакты</a>
          </nav>
          <button className="bg-[#c9a227] text-[#0a1628] px-5 py-2.5 rounded font-medium text-sm">
            Консультация
          </button>
        </div>
      </header>

      {/* Page header */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <span className="text-[#c9a227] text-sm font-medium uppercase tracking-wider">Услуги</span>
          <h1 className="text-4xl font-bold mt-2 mb-4">Направления практики</h1>
          <p className="text-white/60 max-w-2xl">
            Комплексное правовое сопровождение бизнеса. Работаем с компаниями любого масштаба — 
            от стартапов до крупных холдингов.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="pb-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div key={i} className="bg-[#0d1e36] border border-[#1e3a5f] rounded-xl p-6 hover:border-[#c9a227]/50 transition-colors">
              <div className="w-14 h-14 bg-[#c9a227]/10 rounded-xl flex items-center justify-center mb-6">
                <service.icon className="w-7 h-7 text-[#c9a227]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <div className="text-2xl font-bold text-[#c9a227] mb-6">{service.price}</div>
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-white/70">
                    <Check className="w-4 h-4 text-[#c9a227] mt-0.5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-[#c9a227]/10 text-[#c9a227] py-3 rounded-lg font-medium hover:bg-[#c9a227]/20 transition-colors flex items-center justify-center gap-2">
                Подробнее
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-[#0d1e36] border-t border-[#1e3a5f]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Нужна консультация?</h2>
          <p className="text-white/60 mb-8">
            Оставьте заявку — свяжемся в течение 30 минут в рабочее время
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#c9a227] text-[#0a1628] px-8 py-3 rounded font-medium flex items-center justify-center gap-2">
              <Phone className="w-4 h-4" />
              +7 (495) 123-45-67
            </button>
            <button className="border border-[#c9a227] text-[#c9a227] px-8 py-3 rounded font-medium">
              Заказать звонок
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#061020] py-8 px-6 text-center text-white/40 text-sm">
        © 2024 Право и Партнёры. Все права защищены.
      </footer>
    </div>
  );
};

export default PravoServices;
