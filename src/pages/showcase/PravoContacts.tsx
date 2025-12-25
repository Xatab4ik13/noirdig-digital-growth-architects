import { Scale, Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";

const PravoContacts = () => {
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
            <a href="#" className="text-[#c9a227]">Контакты</a>
          </nav>
          <button className="bg-[#c9a227] text-[#0a1628] px-5 py-2.5 rounded font-medium text-sm">
            Консультация
          </button>
        </div>
      </header>

      {/* Content */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <span className="text-[#c9a227] text-sm font-medium uppercase tracking-wider">Контакты</span>
          <h1 className="text-4xl font-bold mt-2 mb-12">Свяжитесь с нами</h1>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <div className="space-y-8">
              <div className="bg-[#0d1e36] border border-[#1e3a5f] rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-6">Контактная информация</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#c9a227]/10 rounded-lg flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-[#c9a227]" />
                    </div>
                    <div>
                      <div className="text-sm text-white/50 mb-1">Телефон</div>
                      <div className="font-medium">+7 (495) 123-45-67</div>
                      <div className="text-sm text-white/60">+7 (495) 123-45-68</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#c9a227]/10 rounded-lg flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-[#c9a227]" />
                    </div>
                    <div>
                      <div className="text-sm text-white/50 mb-1">Email</div>
                      <div className="font-medium">info@pravo-partners.ru</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#c9a227]/10 rounded-lg flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-[#c9a227]" />
                    </div>
                    <div>
                      <div className="text-sm text-white/50 mb-1">Адрес</div>
                      <div className="font-medium">г. Москва, ул. Тверская, д. 12</div>
                      <div className="text-sm text-white/60">БЦ «Тверская Плаза», офис 501</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#c9a227]/10 rounded-lg flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-[#c9a227]" />
                    </div>
                    <div>
                      <div className="text-sm text-white/50 mb-1">Время работы</div>
                      <div className="font-medium">Пн-Пт: 9:00 — 19:00</div>
                      <div className="text-sm text-white/60">Сб: по записи</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="bg-[#0d1e36] border border-[#1e3a5f] rounded-xl overflow-hidden h-64">
                <img 
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&h=300&fit=crop"
                  alt="Карта офиса"
                  className="w-full h-full object-cover opacity-60"
                />
              </div>
            </div>

            {/* Form */}
            <div className="bg-[#0d1e36] border border-[#1e3a5f] rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-2">Записаться на консультацию</h3>
              <p className="text-white/60 text-sm mb-6">Оставьте заявку — свяжемся в течение 30 минут</p>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-sm text-white/70 mb-2">Имя *</label>
                  <input 
                    type="text" 
                    className="w-full bg-[#0a1628] border border-[#1e3a5f] rounded-lg px-4 py-3 text-white placeholder-white/40 focus:border-[#c9a227] outline-none transition-colors"
                    placeholder="Иван Петров"
                  />
                </div>
                <div>
                  <label className="block text-sm text-white/70 mb-2">Телефон *</label>
                  <input 
                    type="tel" 
                    className="w-full bg-[#0a1628] border border-[#1e3a5f] rounded-lg px-4 py-3 text-white placeholder-white/40 focus:border-[#c9a227] outline-none transition-colors"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
                <div>
                  <label className="block text-sm text-white/70 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-[#0a1628] border border-[#1e3a5f] rounded-lg px-4 py-3 text-white placeholder-white/40 focus:border-[#c9a227] outline-none transition-colors"
                    placeholder="email@example.ru"
                  />
                </div>
                <div>
                  <label className="block text-sm text-white/70 mb-2">Опишите ситуацию</label>
                  <textarea 
                    className="w-full bg-[#0a1628] border border-[#1e3a5f] rounded-lg px-4 py-3 text-white placeholder-white/40 focus:border-[#c9a227] outline-none transition-colors h-28 resize-none"
                    placeholder="Кратко опишите вашу ситуацию..."
                  />
                </div>
                <button 
                  type="button"
                  className="w-full bg-[#c9a227] text-[#0a1628] py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-[#d4af37] transition-colors"
                >
                  <Send className="w-4 h-4" />
                  Отправить заявку
                </button>
                <div className="text-center">
                  <span className="text-white/40 text-sm">или напишите в </span>
                  <button type="button" className="text-[#c9a227] text-sm inline-flex items-center gap-1 hover:underline">
                    <MessageCircle className="w-4 h-4" />
                    Telegram
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#061020] py-8 px-6 text-center text-white/40 text-sm mt-8">
        © 2024 Право и Партнёры. Все права защищены.
      </footer>
    </div>
  );
};

export default PravoContacts;
