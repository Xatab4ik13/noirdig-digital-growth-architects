import { Scissors, Clock, Star, MessageCircle, Phone, MapPin, Instagram } from "lucide-react";

const BarberHome = () => (
  <div className="min-h-screen bg-[#1c1917] text-[#faf5f0] font-serif">
    <header className="border-b border-[#44403c]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold tracking-wide">BARBER <span className="text-[#d4a574]">CRAFT</span></div>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#" className="text-[#faf5f0]/70 hover:text-[#d4a574]">Услуги</a>
          <a href="#" className="text-[#faf5f0]/70 hover:text-[#d4a574]">Мастера</a>
          <a href="#" className="text-[#faf5f0]/70 hover:text-[#d4a574]">Прайс</a>
          <a href="#" className="text-[#faf5f0]/70 hover:text-[#d4a574]">Контакты</a>
        </nav>
        <button className="bg-[#d4a574] text-[#1c1917] px-5 py-2.5 font-medium flex items-center gap-2 text-sm">
          <MessageCircle className="w-4 h-4"/>Записаться в Telegram
        </button>
      </div>
    </header>
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-[#d4a574] text-sm uppercase tracking-widest">Барбершоп в центре Москвы</span>
          <h1 className="text-5xl font-bold mt-4 mb-6">Мужские стрижки<br/>и уход за бородой</h1>
          <p className="text-[#faf5f0]/60 mb-8">Традиции классического барберинга в современном исполнении. Записывайтесь онлайн через Telegram — без звонков и ожидания.</p>
          <div className="flex gap-4">
            <button className="bg-[#d4a574] text-[#1c1917] px-6 py-3 font-medium flex items-center gap-2"><MessageCircle className="w-4 h-4"/>Записаться в Telegram</button>
            <button className="border border-[#44403c] px-6 py-3 font-medium hover:border-[#d4a574]">Наш прайс</button>
          </div>
        </div>
        <div className="relative">
          <img src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&h=700&fit=crop" alt="Барбершоп интерьер" className="rounded-lg"/>
        </div>
      </div>
    </section>
    <section className="py-16 px-6 bg-[#292524]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Популярные услуги</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[{title:"Мужская стрижка",price:"1 500 ₽",time:"45 мин"},{title:"Стрижка бороды",price:"800 ₽",time:"30 мин"},{title:"Комплекс",price:"2 000 ₽",time:"1 час 15 мин"}].map((s,i)=>(
            <div key={i} className="bg-[#1c1917] border border-[#44403c] p-6 rounded-lg hover:border-[#d4a574] transition-colors">
              <div className="w-12 h-12 bg-[#d4a574]/10 rounded-lg flex items-center justify-center mb-4"><Scissors className="w-6 h-6 text-[#d4a574]"/></div>
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <div className="flex items-center gap-4 text-sm text-[#faf5f0]/60 mb-4"><Clock className="w-4 h-4"/>{s.time}</div>
              <div className="text-2xl font-bold text-[#d4a574]">{s.price}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <footer className="py-12 px-6 border-t border-[#44403c]">
      <div className="max-w-7xl mx-auto text-center text-[#faf5f0]/40 text-sm">© 2024 Barber Craft. Москва, ул. Покровка, 12</div>
    </footer>
  </div>
);
export default BarberHome;
