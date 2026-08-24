import { useNavigate } from 'react-router-dom';
import Screen from '../../components/Screen';
import ProductCard from './ProductCard';
import { CartIcon, SearchIcon, ChevronRightIcon } from '../../components/Icons';
import { productCategories, products } from '../../data/mockData';
import { useAppState } from '../../context/AppState';

export default function StoreHome() {
  const navigate = useNavigate();
  const { cartCount } = useAppState();
  const featured = products.slice(0, 6);

  return (
    <Screen>
      <div className="px-6 pt-4 flex items-center justify-between">
        <h1 className="text-xl font-medium text-ink">Store</h1>
        <button type="button" onClick={() => navigate('/cart')} className="relative text-ink" aria-label="Cart">
          <CartIcon className="size-6" />
          {cartCount > 0 && (
            <span className="absolute -top-1.5 -right-2 min-w-[16px] h-4 px-1 rounded-full bg-primary text-white text-[9px] font-semibold flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </button>
      </div>

      <div className="px-6 mt-4">
        <div className="flex items-center gap-2 bg-white rounded-lg shadow-card px-3.5 py-2.5">
          <SearchIcon className="size-4 text-muted" />
          <input
            type="text"
            placeholder="Search products"
            className="flex-1 text-xs text-ink outline-none bg-transparent placeholder:text-muted"
          />
        </div>
      </div>

      <div className="mt-4 px-6 flex gap-2 overflow-x-auto no-scrollbar">
        {productCategories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => navigate('/store/categories', { state: { category: cat } })}
            className="shrink-0 text-xs font-medium text-ink bg-white shadow-card rounded-full px-4 py-2"
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="px-6 mt-5 flex items-center justify-between">
        <h2 className="text-base font-medium text-ink">Popular Products</h2>
        <button
          type="button"
          onClick={() => navigate('/store/categories')}
          className="flex items-center gap-0.5 text-xs font-medium text-primary"
        >
          See All
          <ChevronRightIcon className="size-3" />
        </button>
      </div>

      <div className="px-6 mt-3 pb-4 grid grid-cols-2 gap-3">
        {featured.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Screen>
  );
}
