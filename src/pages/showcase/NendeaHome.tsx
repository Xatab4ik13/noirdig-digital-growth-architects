import { Camera, Instagram, Phone, Mail, MapPin, Star, Calendar, ChevronRight } from "lucide-react";

const NendeaHome = () => (
  <div className="min-h-screen bg-[#1a1a1a] text-white font-sans">
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a1a]/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-light tracking-widest">NENDEA <span className="text-[#c9a87c]">STUDIO</span></div>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#" className="text-white/70 hover:text-[#c9a87c]">Портфолио</a>
          <a href="#" className="text-white/70 hover:text-[#c9a87c]">Услуги</a>
          <a href="#" className="text-white/70 hover:text-[#c9a87c]">Цены</a>
          <a href="#" className="text-white/70 hover:text-[#c9a87c]">Контакты</a>
        </nav>
        <button className="bg-[#c9a87c] text-[#1a1a1a] px-5 py-2 text-sm font-medium">Забронировать</button>
      </div>
    </header>
    <section className="h-screen relative flex items-center justify-center">
      <img src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&h=1080&fit=crop" alt="Свадебная фотосессия" className="absolute inset-0 w-full h-full object-cover opacity-50"/>
      <div className="relative text-center px-6">
        <p className="text-[#c9a87c] text-sm tracking-widest mb-4">ФОТОСТУДИЯ В МОСКВЕ</p>
        <h1 className="text-5xl md:text-7xl font-light mb-6">Фотосессии в студии<br/>и на выезде</h1>
        <p className="text-white/60 max-w-lg mx-auto mb-8">Портретная, свадебная и предметная съёмка. Создаём визуальные истории, которые останутся с вами навсегда.</p>
        <button className="bg-[#c9a87c] text-[#1a1a1a] px-8 py-3 font-medium flex items-center gap-2 mx-auto"><Calendar className="w-4 h-4"/>Забронировать дату</button>
      </div>
    </section>
    <section className="py-20 px-6 bg-[#141414]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-light text-center mb-12">Направления съёмки</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[{title:"Портретная съёмка",price:"от 8 000 ₽",img:"https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=500&fit=crop"},{title:"Свадебная съёмка",price:"от 35 000 ₽",img:"https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=500&fit=crop"},{title:"Предметная съёмка",price:"от 5 000 ₽",img:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=500&fit=crop"}].map((s,i)=>(
            <div key={i} className="group relative overflow-hidden">
              <img src={s.img} alt={s.title} className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-medium">{s.title}</h3>
                <p className="text-[#c9a87c]">{s.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <footer className="py-12 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-xl font-light tracking-widest">NENDEA STUDIO</div>
        <div className="flex items-center gap-6 text-sm text-white/60">
          <span>+7 (495) 789-01-23</span>
          <span>info@nendea.ru</span>
        </div>
        <div className="text-white/40 text-sm">© 2024</div>
      </div>
    </footer>
  </div>
);
export default NendeaHome;
