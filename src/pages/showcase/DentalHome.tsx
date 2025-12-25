import { Search, ShoppingCart, User, Heart, Truck, Shield, RefreshCw, ChevronRight, Star } from "lucide-react";

const DentalHome = () => {
  const products = [
    { name: "Электрическая зубная щётка Oral-B Pro 3", price: 4990, oldPrice: 6990, rating: 4.8, reviews: 124, img: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=300&h=300&fit=crop" },
    { name: "Ирригатор Waterpik Aquarius", price: 8990, oldPrice: null, rating: 4.9, reviews: 89, img: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=300&h=300&fit=crop" },
    { name: "Набор зубных паст Splat", price: 890, oldPrice: 1190, rating: 4.6, reviews: 256, img: "https://images.unsplash.com/photo-1571942676516-bcab84649e44?w=300&h=300&fit=crop" },
    { name: "Зубная нить Oral-B Satin (50м)", price: 290, oldPrice: null, rating: 4.7, reviews: 312, img: "https://images.unsplash.com/photo-1628359355624-855c29ea1b55?w=300&h=300&fit=crop" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e8f4f8] to-white font-sans">
      {/* Top bar */}
      <div className="bg-[#0891b2] text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span>🚚 Бесплатная доставка от 3000 ₽</span>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <span>📞 8 (800) 555-35-35</span>
            <span className="text-white/60">Пн-Вс: 9:00-21:00</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#0891b2] rounded-full flex items-center justify-center">
                <span className="text-white text-xl">🦷</span>
              </div>
              <span className="text-2xl font-bold text-[#0891b2]">DentalCare</span>
            </div>
            
            <div className="flex-1 max-w-xl hidden md:block">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Поиск товаров..." 
                  className="w-full border border-gray-200 rounded-full px-5 py-2.5 pr-12 focus:border-[#0891b2] outline-none"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#0891b2] rounded-full flex items-center justify-center">
                  <Search className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button className="flex flex-col items-center text-gray-600 hover:text-[#0891b2]">
                <Heart className="w-6 h-6" />
                <span className="text-xs mt-1 hidden md:block">Избранное</span>
              </button>
              <button className="flex flex-col items-center text-gray-600 hover:text-[#0891b2] relative">
                <ShoppingCart className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#f97316] text-white text-xs rounded-full flex items-center justify-center">3</span>
                <span className="text-xs mt-1 hidden md:block">Корзина</span>
              </button>
              <button className="flex flex-col items-center text-gray-600 hover:text-[#0891b2]">
                <User className="w-6 h-6" />
                <span className="text-xs mt-1 hidden md:block">Войти</span>
              </button>
            </div>
          </div>

          {/* Categories */}
          <nav className="flex items-center gap-6 mt-4 text-sm overflow-x-auto pb-2">
            {["Зубные щётки", "Зубные пасты", "Ирригаторы", "Ополаскиватели", "Зубная нить", "Отбеливание", "Детям", "Акции"].map((cat, i) => (
              <a key={i} href="#" className={`whitespace-nowrap ${i === 7 ? 'text-[#f97316] font-medium' : 'text-gray-600 hover:text-[#0891b2]'}`}>
                {cat}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="bg-gradient-to-r from-[#0891b2] to-[#06b6d4] rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
          <div className="max-w-lg relative z-10">
            <span className="inline-block bg-white/20 px-3 py-1 rounded-full text-sm mb-4">Новогодняя распродажа</span>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Скидки до 40% на ирригаторы</h1>
            <p className="text-white/80 mb-6">Позаботьтесь о здоровье зубов с лучшими ценами года</p>
            <button className="bg-white text-[#0891b2] px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-white/90 transition-colors">
              Смотреть каталог
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="absolute right-0 top-0 h-full w-1/2 opacity-20">
            <img 
              src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop" 
              alt="" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="max-w-7xl mx-auto px-6 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Truck, text: "Доставка по всей России" },
            { icon: Shield, text: "Гарантия качества" },
            { icon: RefreshCw, text: "Возврат 14 дней" },
            { icon: Star, text: "Более 1000 отзывов" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm">
              <div className="w-10 h-10 bg-[#0891b2]/10 rounded-full flex items-center justify-center">
                <item.icon className="w-5 h-5 text-[#0891b2]" />
              </div>
              <span className="text-sm text-gray-700">{item.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Популярные товары</h2>
          <a href="#" className="text-[#0891b2] text-sm flex items-center gap-1 hover:underline">
            Все товары <ChevronRight className="w-4 h-4" />
          </a>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {products.map((product, i) => (
            <div key={i} className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow group">
              <div className="relative mb-3">
                <img src={product.img} alt={product.name} className="w-full aspect-square object-cover rounded-lg bg-gray-100" />
                {product.oldPrice && (
                  <span className="absolute top-2 left-2 bg-[#f97316] text-white text-xs px-2 py-1 rounded-full">
                    -{Math.round((1 - product.price / product.oldPrice) * 100)}%
                  </span>
                )}
                <button className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow opacity-0 group-hover:opacity-100 transition-opacity">
                  <Heart className="w-4 h-4 text-gray-400" />
                </button>
              </div>
              <div className="flex items-center gap-1 mb-2">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <span className="text-sm text-gray-600">{product.rating}</span>
                <span className="text-sm text-gray-400">({product.reviews})</span>
              </div>
              <h3 className="text-sm text-gray-800 mb-2 line-clamp-2 min-h-[40px]">{product.name}</h3>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-lg font-bold text-gray-900">{product.price.toLocaleString()} ₽</span>
                {product.oldPrice && (
                  <span className="text-sm text-gray-400 line-through">{product.oldPrice.toLocaleString()} ₽</span>
                )}
              </div>
              <button className="w-full bg-[#0891b2] text-white py-2.5 rounded-lg text-sm font-medium hover:bg-[#0e7490] transition-colors flex items-center justify-center gap-2">
                <ShoppingCart className="w-4 h-4" />
                В корзину
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6 mt-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-[#0891b2] rounded-full flex items-center justify-center">
              <span className="text-white">🦷</span>
            </div>
            <span className="text-xl font-bold">DentalCare</span>
          </div>
          <div className="text-gray-400 text-sm">
            © 2024 DentalCare. Интернет-магазин товаров для гигиены полости рта.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DentalHome;
