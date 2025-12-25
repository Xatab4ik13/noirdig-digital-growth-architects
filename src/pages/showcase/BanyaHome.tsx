import { TreePine, Phone, Calculator, Shield, Clock, Award, ChevronRight } from "lucide-react";

const BanyaHome = () => (
  <div className="min-h-screen bg-[#f5f0eb] font-sans text-[#3d2e1f]">
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <TreePine className="w-8 h-8 text-[#8b5a2b]"/>
          <span className="text-xl font-bold">БАНЯ<span className="text-[#8b5a2b]">МАСТЕР</span></span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#" className="hover:text-[#8b5a2b]">Проекты</a>
          <a href="#" className="hover:text-[#8b5a2b]">Технологии</a>
          <a href="#" className="hover:text-[#8b5a2b]">Портфолио</a>
          <a href="#" className="hover:text-[#8b5a2b]">Контакты</a>
        </nav>
        <button className="bg-[#8b5a2b] text-white px-5 py-2.5 rounded font-medium text-sm flex items-center gap-2"><Calculator className="w-4 h-4"/>Рассчитать стоимость</button>
      </div>
    </header>
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-[#8b5a2b] text-sm font-medium uppercase tracking-wider">Строительство бань под ключ</span>
          <h1 className="text-4xl lg:text-5xl font-bold mt-4 mb-6">Банные комплексы из сибирского кедра</h1>
          <p className="text-[#5c4a3a] mb-8">Строим традиционные русские бани по технологии «под ключ». Сроки от 30 дней, гарантия 5 лет. Работаем по всей России.</p>
          <div className="flex gap-4 flex-wrap">
            <button className="bg-[#8b5a2b] text-white px-6 py-3 rounded font-medium flex items-center gap-2"><Calculator className="w-4 h-4"/>Рассчитать стоимость</button>
            <button className="border border-[#8b5a2b] text-[#8b5a2b] px-6 py-3 rounded font-medium">Наши проекты</button>
          </div>
          <div className="grid grid-cols-3 gap-6 mt-12">
            {[{val:"15 лет",lbl:"Опыта"},{val:"200+",lbl:"Объектов"},{val:"5 лет",lbl:"Гарантия"}].map((s,i)=>(
              <div key={i}><div className="text-2xl font-bold text-[#8b5a2b]">{s.val}</div><div className="text-sm text-[#5c4a3a]">{s.lbl}</div></div>
            ))}
          </div>
        </div>
        <div><img src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=600&h=500&fit=crop" alt="Баня из кедра" className="rounded-xl shadow-lg"/></div>
      </div>
    </section>
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Популярные проекты</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[{name:"Баня «Классика»",size:"4×6 м",price:"от 890 000 ₽"},{name:"Баня «Премиум»",size:"6×8 м",price:"от 1 450 000 ₽"},{name:"Банный комплекс",size:"8×10 м",price:"от 2 100 000 ₽"}].map((p,i)=>(
            <div key={i} className="bg-[#f5f0eb] rounded-xl p-6 hover:shadow-md transition-shadow">
              <img src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=400&h=250&fit=crop" alt={p.name} className="w-full h-40 object-cover rounded-lg mb-4"/>
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <p className="text-[#5c4a3a] text-sm mb-2">{p.size}</p>
              <div className="text-xl font-bold text-[#8b5a2b]">{p.price}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <footer className="py-12 px-6 bg-[#3d2e1f] text-white/60 text-center text-sm">© 2024 БаняМастер. Строительство бань под ключ.</footer>
  </div>
);
export default BanyaHome;
