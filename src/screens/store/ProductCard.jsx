import { useNavigate } from 'react-router-dom';
import { StarIcon } from '../../components/Icons';

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      onClick={() => navigate(`/store/item/${product.id}`)}
      className="bg-white rounded-lg shadow-card overflow-hidden text-left flex flex-col"
    >
      <img src={product.image} alt={product.name} className="w-full aspect-square object-cover" />
      <div className="p-3">
        <p className="text-xs font-medium text-ink leading-snug line-clamp-2 min-h-[32px]">{product.name}</p>
        <div className="flex items-center gap-1 mt-1.5">
          <StarIcon className="size-3 text-primary" />
          <span className="text-[10px] text-muted">
            {product.rating} ({product.reviews})
          </span>
        </div>
        <p className="text-sm font-medium text-primary mt-1.5">${product.price.toFixed(2)}</p>
      </div>
    </button>
  );
}
