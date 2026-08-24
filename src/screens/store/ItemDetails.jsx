import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Screen from '../../components/Screen';
import ScreenHeader from '../../components/ScreenHeader';
import { StarIcon, MinusIcon, PlusIcon, CartIcon } from '../../components/Icons';
import { products } from '../../data/mockData';
import { useAppState } from '../../context/AppState';

export default function ItemDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { addToCart, cartCount } = useAppState();
  const product = products.find((p) => p.id === id) || products[0];
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart(product.id, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <Screen>
      <ScreenHeader
        title=""
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

      <div className="px-6 pb-4">
        <img src={product.image} alt={product.name} className="w-full aspect-square rounded-lg object-cover" />

        <h1 className="text-lg font-medium text-ink mt-4">{product.name}</h1>
        <div className="flex items-center gap-1.5 mt-1.5">
          <StarIcon className="size-3.5 text-primary" />
          <span className="text-xs text-muted">
            {product.rating} ({product.reviews} reviews)
          </span>
        </div>
        <p className="text-xl font-medium text-primary mt-2">${product.price.toFixed(2)}</p>

        <div className="mt-4">
          <h2 className="text-sm font-medium text-ink mb-1.5">Description</h2>
          <p className="text-xs text-ink leading-relaxed">{product.description}</p>
        </div>

        <div className="flex items-center justify-between mt-6">
          <span className="text-sm font-medium text-ink">Quantity</span>
          <div className="flex items-center gap-4 bg-white rounded-lg shadow-card px-3 py-2">
            <button type="button" onClick={() => setQty((q) => Math.max(1, q - 1))} className="text-ink">
              <MinusIcon className="size-4" />
            </button>
            <span className="text-sm font-medium text-ink w-4 text-center">{qty}</span>
            <button type="button" onClick={() => setQty((q) => q + 1)} className="text-ink">
              <PlusIcon className="size-4" />
            </button>
          </div>
        </div>

        <button
          type="button"
          onClick={handleAdd}
          className="w-full h-[50px] rounded-lg bg-primary text-white text-base font-medium shadow-[var(--shadow-button)] mt-6"
        >
          {added ? 'Added to Cart ✓' : 'Add to Cart'}
        </button>
      </div>
    </Screen>
  );
}
