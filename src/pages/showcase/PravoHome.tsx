import { Scale, Users, Building, Award, Phone, Mail, MapPin, ArrowRight, Shield, FileText, Gavel } from "lucide-react";

const PravoHome = () => {
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
            <a href="#" className="text-white/80 hover:text-[#c9a227] transition-colors">Услуги</a>
            <a href="#" className="text-white/80 hover:text-[#c9a227] transition-colors">Команда</a>
            <a href="#" className="text-white/80 hover:text-[#c9a227] transition-colors">Кейсы</a>
            <a href="#" className="text-white/80 hover:text-[#c9a227] transition-colors">Контакты</a>
          </nav>
          <button className="bg-[#c9a227] text-[#0a1628] px-5 py-2.5 rounded font-medium text-sm hover:bg-[#d4af37] transition-colors">
            Консультация
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#c9a227]/10 border border-[#c9a227]/30 rounded-full px-4 py-1.5 mb-6">
              <Award className="w-4 h-4 text-[#c9a227]" />
              <span className="text-sm text-[#c9a227]">15 лет успешной практики</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Юридическая защита <span className="text-[#c9a227]">бизнеса</span> в Москве
            </h1>
            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              Комплексное правовое сопровождение для компаний любого масштаба. 
              Арбитражные споры, банкротство, корпоративное право.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#c9a227] text-[#0a1628] px-6 py-3 rounded font-medium flex items-center gap-2 hover:bg-[#d4af37] transition-colors">
                Получить консультацию
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="border border-white/20 px-6 py-3 rounded font-medium hover:bg-white/5 transition-colors">
                Наши кейсы
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-[#1e3a5f] to-[#0a1628] rounded-2xl p-8 border border-[#1e3a5f]">
              <img 
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop" 
                alt="Офис юридической компании"
                className="w-full h-64 object-cover rounded-xl"
              />
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-[#0a1628] p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-[#c9a227]">200+</div>
                  <div className="text-sm text-white/60">Выигранных дел</div>
                </div>
                <div className="bg-[#0a1628] p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-[#c9a227]">98%</div>
                  <div className="text-sm text-white/60">Успешных исходов</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-6 bg-[#0d1e36]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#c9a227] text-sm font-medium uppercase tracking-wider">Практики</span>
            <h2 className="text-3xl font-bold mt-2">Направления работы</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Gavel, title: "Арбитражные споры", desc: "Защита интересов в арбитражных судах всех инстанций" },
              { icon: FileText, title: "Банкротство", desc: "Сопровождение процедур банкротства юридических лиц" },
              { icon: Building, title: "Корпоративное право", desc: "Структурирование сделок, M&A, due diligence" },
            ].map((service, i) => (
              <div key={i} className="bg-[#0a1628] border border-[#1e3a5f] rounded-xl p-6 hover:border-[#c9a227]/50 transition-colors group">
                <div className="w-12 h-12 bg-[#c9a227]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#c9a227]/20 transition-colors">
                  <service.icon className="w-6 h-6 text-[#c9a227]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-white/60">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="py-12 px-6 border-t border-[#1e3a5f]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "15 лет", label: "На рынке" },
              { value: "200+", label: "Клиентов" },
              { value: "₽2 млрд", label: "Сохранено клиентам" },
              { value: "12", label: "Юристов в команде" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-2xl font-bold text-[#c9a227]">{stat.value}</div>
                <div className="text-sm text-white/60 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#061020] py-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-[#c9a227] rounded flex items-center justify-center">
                <Scale className="w-5 h-5 text-[#0a1628]" />
              </div>
              <span className="font-bold">ПРАВО & ПАРТНЁРЫ</span>
            </div>
            <p className="text-white/60 text-sm">Юридическая компания с 2009 года</p>
          </div>
          <div className="space-y-3 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#c9a227]" />
              +7 (495) 123-45-67
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#c9a227]" />
              info@pravo-partners.ru
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#c9a227]" />
              Москва, ул. Тверская, 12
            </div>
          </div>
          <div className="text-sm text-white/40">
            © 2024 Право и Партнёры. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PravoHome;
