import { CallIcon, PlusIcon } from '../../components/Icons';

export function FeaturedProviderCard({ provider, phone }) {
  return (
    <div className="bg-primary-tint rounded-lg shadow-card p-3 flex gap-3">
      <img src={provider.image} alt={provider.name} className="size-[97px] rounded-lg object-cover shrink-0" />
      <div className="flex-1 min-w-0 py-1">
        <p className="text-xs font-medium text-ink truncate">{provider.name}</p>
        {phone && <p className="text-[10px] font-medium text-ink mt-1">{provider.phone}</p>}
        <p className="text-[10px] font-medium text-ink mt-1">{provider.address}</p>
        <div className="flex items-center gap-2 mt-3">
          <button type="button" className="bg-primary text-white text-[10px] font-medium rounded px-3 py-1.5">
            Book Appointemet
          </button>
          <button
            type="button"
            className="bg-primary text-white text-[10px] font-medium rounded px-2 py-1.5 flex items-center gap-1"
          >
            <CallIcon className="size-3" />
            Call
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ProviderCard({ provider, onClick }) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onClick?.()}
      className="w-full bg-white rounded-lg shadow-card p-3 flex gap-3 text-left cursor-pointer"
    >
      <img src={provider.image} alt={provider.name} className="size-[97px] rounded-lg object-cover shrink-0" />
      <div className="flex-1 min-w-0 py-1">
        <p className="text-xs font-medium text-ink truncate">{provider.name}</p>
        <p className="text-[10px] font-medium text-ink mt-1 leading-snug">{provider.address}</p>
        {provider.status && (
          <p
            className="text-[10px] font-medium mt-1"
            style={{ color: provider.statusColor === 'success' ? 'var(--color-success)' : 'var(--color-danger)' }}
          >
            {provider.status}
          </p>
        )}
        <div className="flex items-center gap-2 mt-3">
          <button
            type="button"
            onClick={(e) => e.stopPropagation()}
            className="bg-primary text-white text-[10px] font-medium rounded px-3 py-1.5"
          >
            Book Appointemet
          </button>
          <span className="size-5 rounded-full bg-primary-tint text-primary flex items-center justify-center shrink-0">
            <PlusIcon className="size-3" />
          </span>
        </div>
      </div>
    </div>
  );
}
