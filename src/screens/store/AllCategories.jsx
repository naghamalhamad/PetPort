import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Screen from '../../components/Screen';
import ScreenHeader from '../../components/ScreenHeader';
import ProductCard from './ProductCard';
import { CartIcon } from '../../components/Icons';
import { productCategories, products } from '../../data/mockData';
import { useAppState } from '../../context/AppState';

export default function AllCategories() {
  const navigate = useNavigate();
  const location = useLocation();
  const { cartCount } = useAppState();
  const [category, setCategory] = useState(location.state?.category || 'All');

  const filtered = category === 'All' ? products : products.filter((p) => p.category === category);

  return (
    <Screen>
      <ScreenHeader
        title="All Categories"
        size="md"
        right={
          <button type="button" onClick={() => navigate('/cart')} className="relative text-ink" aria-label="Cart">
            <CartIcon className="size-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-2 min-w-[14px] h-3.5 px-1 rounded-full bg-primary text-white text-[8px] font-semibold flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        }
      />

      <div className="px-6 mt-1 flex gap-2 overflow-x-auto no-scrollbar">
        {productCategories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setCategory(cat)}
            className={`shrink-0 text-xs font-medium rounded-full px-4 py-2 ${
              category === cat ? 'bg-primary text-white' : 'bg-white text-ink shadow-card'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="px-6 mt-4 pb-4 grid grid-cols-2 gap-3">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        {filtered.length === 0 && <p className="col-span-2 text-xs text-muted text-center mt-6">No products in this category yet.</p>}
      </div>
    </Screen>
  );
}
