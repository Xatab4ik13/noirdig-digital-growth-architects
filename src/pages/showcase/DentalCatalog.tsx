import { Search, ShoppingCart, User, Heart, Filter, ChevronDown, Star, Grid, List } from "lucide-react";

const DentalCatalog = () => {
  const products = [
    { name: "Электрическая зубная щётка Oral-B Pro 3", price: 4990, oldPrice: 6990, rating: 4.8, reviews: 124, img: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=300&h=300&fit=crop" },
    { name: "Электрическая зубная щётка Philips Sonicare", price: 7490, oldPrice: null, rating: 4.9, reviews: 89, img: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=300&h=300&fit=crop" },
    { name: "Детская щётка Oral-B Kids", price: 2990, oldPrice: 3490, rating: 4.7, reviews: 67, img: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=300&h=300&fit=crop" },
    { name: "Звуковая щётка Xiaomi Mi", price: 1990, oldPrice: null, rating: 4.5, reviews: 234, img: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=300&h=300&fit=crop" },
    { name: "Oral-B Vitality 100", price: 2490, oldPrice: 2990, rating: 4.6, reviews: 156, img: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=300&h=300&fit=crop" },
    { name: "Philips Sonicare DiamondClean", price: 12990, oldPrice: null, rating: 4.9, reviews: 45, img: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=300&h=300&fit=crop" },
  ];

  const filters = [
    { name: "Бренд", options: ["Oral-B", "Philips", "Xiaomi", "Colgate"] },
    { name: "Цена", options: ["До 3000 ₽", "3000 - 7000 ₽", "От 7000 ₽"] },
    { name: "Тип", options: ["Электрические", "Звуковые", "Ультразвуковые"] },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
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
              </button>
              <button className="flex flex-col items-center text-gray-600 hover:text-[#0891b2] relative">
                <ShoppingCart className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#f97316] text-white text-xs rounded-full flex items-center justify-center">3</span>
              </button>
              <button className="flex flex-col items-center text-gray-600 hover:text-[#0891b2]">
                <User className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="text-sm text-gray-500">
          <a href="#" className="hover:text-[#0891b2]">Главная</a>
          <span className="mx-2">/</span>
          <span className="text-gray-800">Зубные щётки</span>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 pb-12">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Зубные щётки</h1>
          <span className="text-gray-500 text-sm">{products.length} товаров</span>
        </div>

        <div className="flex gap-8">
          {/* Filters sidebar */}
          <aside className="w-64 shrink-0 hidden lg:block">
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <Filter className="w-5 h-5 text-[#0891b2]" />
                <span className="font-semibold">Фильтры</span>
              </div>
              
              {filters.map((filter, i) => (
                <div key={i} className="border-t border-gray-100 py-4">
                  <button className="flex items-center justify-between w-full text-left">
                    <span className="font-medium text-gray-800">{filter.name}</span>
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  </button>
                  <div className="mt-3 space-y-2">
                    {filter.options.map((opt, j) => (
                      <label key={j} className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 text-[#0891b2] rounded border-gray-300" />
                        {opt}
                      </label>
                    ))}
                  </div>
                </div>
              ))}

              <button className="w-full mt-4 bg-[#0891b2] text-white py-2.5 rounded-lg text-sm font-medium">
                Применить
              </button>
            </div>
          </aside>

          {/* Products grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-4 bg-white rounded-lg p-3">
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-500">Сортировка:</span>
                <select className="text-sm border-0 bg-transparent focus:outline-none">
                  <option>По популярности</option>
                  <option>Сначала дешёвые</option>
                  <option>Сначала дорогие</option>
                  <option>По рейтингу</option>
                </select>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 bg-[#0891b2] text-white rounded">
                  <Grid className="w-4 h-4" />
                </button>
                <button className="p-2 text-gray-400 hover:text-gray-600">
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
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
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-6">
        <div className="max-w-7xl mx-auto text-center text-gray-400 text-sm">
          © 2024 DentalCare. Интернет-магазин товаров для гигиены полости рта.
        </div>
      </footer>
    </div>
  );
};

export default DentalCatalog;
