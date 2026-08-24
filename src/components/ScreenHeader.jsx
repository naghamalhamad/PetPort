import { useNavigate } from 'react-router-dom';
import { ChevronLeftIcon } from './Icons';

export default function ScreenHeader({ title, onBack, right, size = 'lg' }) {
  const navigate = useNavigate();

  return (
    <div className="flex items-center gap-3 px-6 pt-4 pb-2 shrink-0">
      {onBack !== null && (
        <button
          type="button"
          onClick={onBack || (() => navigate(-1))}
          className="text-ink -ml-1 p-1"
          aria-label="Back"
        >
          <ChevronLeftIcon className="size-5" />
        </button>
      )}
      <h1 className={`font-medium text-ink ${size === 'lg' ? 'text-xl' : 'text-lg'}`}>{title}</h1>
      {right && <div className="ml-auto">{right}</div>}
    </div>
  );
}
