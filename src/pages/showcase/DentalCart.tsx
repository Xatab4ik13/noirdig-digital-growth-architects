import { Search, ShoppingCart, User, Heart, Minus, Plus, Trash2, ArrowLeft, CreditCard, Truck } from "lucide-react";

const DentalCart = () => {
  const cartItems = [
    { id: 1, name: "Электрическая зубная щётка Oral-B Pro 3", price: 4990, qty: 1, img: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=100&h=100&fit=crop" },
    { id: 2, name: "Ирригатор Waterpik Aquarius", price: 8990, qty: 1, img: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=100&h=100&fit=crop" },
    { id: 3, name: "Набор зубных паст Splat (3 шт)", price: 890, qty: 2, img: "https://images.unsplash.com/photo-1571942676516-bcab84649e44?w=100&h=100&fit=crop" },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const delivery = subtotal >= 3000 ? 0 : 299;
  const total = subtotal + delivery;

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
              <button className="flex flex-col items-center text-gray-600">
                <Heart className="w-6 h-6" />
              </button>
              <button className="flex flex-col items-center text-[#0891b2] relative">
                <ShoppingCart className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#f97316] text-white text-xs rounded-full flex items-center justify-center">3</span>
              </button>
              <button className="flex flex-col items-center text-gray-600">
                <User className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <button className="flex items-center gap-2 text-gray-500 hover:text-[#0891b2] mb-6">
          <ArrowLeft className="w-4 h-4" />
          Продолжить покупки
        </button>

        <h1 className="text-2xl font-bold text-gray-800 mb-8">Корзина</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart items */}
          <div className="flex-1">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-4 bg-gray-50 border-b text-sm text-gray-500 hidden md:grid grid-cols-12 gap-4">
                <div className="col-span-6">Товар</div>
                <div className="col-span-2 text-center">Цена</div>
                <div className="col-span-2 text-center">Количество</div>
                <div className="col-span-2 text-right">Итого</div>
              </div>

              {cartItems.map((item) => (
                <div key={item.id} className="p-4 border-b last:border-0 grid grid-cols-12 gap-4 items-center">
                  <div className="col-span-12 md:col-span-6 flex items-center gap-4">
                    <img src={item.img} alt={item.name} className="w-20 h-20 object-cover rounded-lg bg-gray-100" />
                    <div>
                      <h3 className="text-sm text-gray-800 font-medium">{item.name}</h3>
                      <button className="text-xs text-red-500 mt-2 flex items-center gap-1 hover:underline">
                        <Trash2 className="w-3 h-3" />
                        Удалить
                      </button>
                    </div>
                  </div>
                  <div className="col-span-4 md:col-span-2 text-center text-gray-800">
                    {item.price.toLocaleString()} ₽
                  </div>
                  <div className="col-span-4 md:col-span-2 flex justify-center">
                    <div className="flex items-center border rounded-lg">
                      <button className="p-2 hover:bg-gray-100">
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="px-3 text-sm">{item.qty}</span>
                      <button className="p-2 hover:bg-gray-100">
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="col-span-4 md:col-span-2 text-right font-semibold text-gray-900">
                    {(item.price * item.qty).toLocaleString()} ₽
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order summary */}
          <div className="lg:w-80">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="font-semibold text-gray-800 mb-4">Итого</h2>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Товары ({cartItems.length})</span>
                  <span className="text-gray-800">{subtotal.toLocaleString()} ₽</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Доставка</span>
                  <span className={delivery === 0 ? "text-green-600" : "text-gray-800"}>
                    {delivery === 0 ? "Бесплатно" : `${delivery} ₽`}
                  </span>
                </div>
                {delivery > 0 && (
                  <div className="text-xs text-[#0891b2] bg-[#0891b2]/5 p-2 rounded">
                    До бесплатной доставки: {(3000 - subtotal).toLocaleString()} ₽
                  </div>
                )}
              </div>

              <div className="border-t my-4 pt-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-800">К оплате</span>
                  <span className="text-xl font-bold text-gray-900">{total.toLocaleString()} ₽</span>
                </div>
              </div>

              <button className="w-full bg-[#0891b2] text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-[#0e7490] transition-colors">
                <CreditCard className="w-5 h-5" />
                Оформить заказ
              </button>

              <div className="mt-4 flex items-center gap-2 text-xs text-gray-500 justify-center">
                <Truck className="w-4 h-4" />
                Доставка по всей России
              </div>
            </div>

            {/* Promo code */}
            <div className="bg-white rounded-xl shadow-sm p-4 mt-4">
              <label className="text-sm text-gray-600 block mb-2">Промокод</label>
              <div className="flex gap-2">
                <input 
                  type="text" 
                  placeholder="Введите код"
                  className="flex-1 border rounded-lg px-3 py-2 text-sm focus:border-[#0891b2] outline-none"
                />
                <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200">
                  Применить
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-6 mt-12">
        <div className="max-w-7xl mx-auto text-center text-gray-400 text-sm">
          © 2024 DentalCare. Интернет-магазин товаров для гигиены полости рта.
        </div>
      </footer>
    </div>
  );
};

export default DentalCart;
