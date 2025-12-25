import { Dog, Scissors, Phone, MapPin, Clock, Star, Calendar, Heart } from "lucide-react";

const FluffyHome = () => (
  <div className="min-h-screen bg-[#fff8f0] font-sans text-[#4a3728]">
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-[#f97316] rounded-full flex items-center justify-center"><Dog className="w-6 h-6 text-white"/></div>
          <span className="text-xl font-bold text-[#f97316]">Fluffy Paws</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#" className="hover:text-[#f97316]">Услуги</a>
          <a href="#" className="hover:text-[#f97316]">Цены</a>
          <a href="#" className="hover:text-[#f97316]">Мастера</a>
          <a href="#" className="hover:text-[#f97316]">Контакты</a>
        </nav>
        <button className="bg-[#f97316] text-white px-5 py-2.5 rounded-full font-medium text-sm flex items-center gap-2"><Calendar className="w-4 h-4"/>Записаться онлайн</button>
      </div>
    </header>
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-2 bg-[#f97316]/10 text-[#f97316] px-4 py-1.5 rounded-full text-sm mb-4"><MapPin className="w-4 h-4"/>Рядом с метро Парк Культуры</span>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Груминг-салон<br/>в центре Москвы</h1>
          <p className="text-[#6b5344] mb-8">Профессиональный уход за собаками и кошками. Стрижка, мытьё, экспресс-линька, гигиенические процедуры. Работаем с любовью к каждому питомцу.</p>
          <div className="flex gap-4 flex-wrap">
            <button className="bg-[#f97316] text-white px-6 py-3 rounded-full font-medium flex items-center gap-2"><Calendar className="w-4 h-4"/>Записаться онлайн</button>
            <button className="border border-[#f97316] text-[#f97316] px-6 py-3 rounded-full font-medium flex items-center gap-2"><Phone className="w-4 h-4"/>+7 (495) 456-78-90</button>
          </div>
        </div>
        <div><img src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=500&fit=crop" alt="Счастливая собака после груминга" className="rounded-2xl shadow-lg"/></div>
      </div>
    </section>
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Наши услуги</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[{icon:Scissors,title:"Стрижка",price:"от 2 500 ₽"},{icon:Heart,title:"Мытьё и сушка",price:"от 1 500 ₽"},{icon:Dog,title:"Экспресс-линька",price:"от 2 000 ₽"},{icon:Star,title:"Комплексный уход",price:"от 4 000 ₽"}].map((s,i)=>(
            <div key={i} className="bg-[#fff8f0] rounded-xl p-6 text-center hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-[#f97316]/10 rounded-full flex items-center justify-center mx-auto mb-4"><s.icon className="w-7 h-7 text-[#f97316]"/></div>
              <h3 className="font-semibold mb-2">{s.title}</h3>
              <div className="text-lg font-bold text-[#f97316]">{s.price}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <footer className="py-12 px-6 bg-[#4a3728] text-white/60 text-center text-sm">© 2024 Fluffy Paws. Груминг-салон в Москве.</footer>
  </div>
);
export default FluffyHome;
