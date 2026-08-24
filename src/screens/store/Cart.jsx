import { useNavigate } from 'react-router-dom';
import Screen from '../../components/Screen';
import ScreenHeader from '../../components/ScreenHeader';
import { MinusIcon, PlusIcon, TrashIcon } from '../../components/Icons';
import { orderSummary } from '../../data/mockData';
import { useAppState } from '../../context/AppState';

export default function Cart() {
  const navigate = useNavigate();
  const { cartItems, updateQty, removeFromCart, cartTotal } = useAppState();
  const total = cartTotal + (cartItems.length ? orderSummary.deliveryFee : 0);

  return (
    <Screen nav={false}>
      <ScreenHeader title="Cart" size="md" onBack={() => navigate('/store')} />

      {cartItems.length === 0 ? (
        <div className="flex-1 flex flex-col items-center justify-center px-6 py-20 text-center">
          <p className="text-4xl mb-3">🛒</p>
          <p className="text-sm font-medium text-ink">Your cart is empty</p>
          <button
            type="button"
            onClick={() => navigate('/store')}
            className="mt-4 px-5 py-2.5 rounded-lg bg-primary text-white text-xs font-medium"
          >
            Browse Store
          </button>
        </div>
      ) : (
        <div className="px-6 pb-4 flex flex-col gap-3">
          {cartItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-card p-3 flex gap-3">
              <img src={item.image} alt={item.name} className="size-16 rounded-lg object-cover shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <p className="text-xs font-medium text-ink line-clamp-2">{item.name}</p>
                  <button type="button" onClick={() => removeFromCart(item.id)} className="text-muted shrink-0">
                    <TrashIcon className="size-4" />
                  </button>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-sm font-medium text-primary">${(item.price * item.qty).toFixed(2)}</p>
                  <div className="flex items-center gap-3 bg-surface-alt rounded-md px-2 py-1">
                    <button type="button" onClick={() => updateQty(item.id, item.qty - 1)} className="text-ink">
                      <MinusIcon className="size-3.5" />
                    </button>
                    <span className="text-xs font-medium text-ink w-3 text-center">{item.qty}</span>
                    <button type="button" onClick={() => updateQty(item.id, item.qty + 1)} className="text-ink">
                      <PlusIcon className="size-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="bg-white rounded-lg shadow-card p-4 mt-2 flex flex-col gap-2">
            <div className="flex items-center justify-between text-xs text-ink">
              <span>Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between text-xs text-ink">
              <span>Delivery Fee</span>
              <span>${orderSummary.deliveryFee.toFixed(2)}</span>
            </div>
            <div className="border-t border-surface-alt my-1" />
            <div className="flex items-center justify-between text-sm font-medium text-ink">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <button
            type="button"
            className="w-full h-[50px] rounded-lg bg-primary text-white text-base font-medium shadow-[var(--shadow-button)] mt-2"
          >
            Checkout
          </button>
        </div>
      )}
    </Screen>
  );
}
