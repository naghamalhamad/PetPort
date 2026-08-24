import { useNavigate, useParams } from 'react-router-dom';
import Screen from '../../components/Screen';
import ScreenHeader from '../../components/ScreenHeader';
import { CallIcon, ChevronRightIcon, StarIcon, PhotosIcon } from '../../components/Icons';
import { salons } from '../../data/mockData';

export default function SalonDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const salon = salons.find((s) => s.id === id) || salons[0];

  return (
    <Screen>
      <ScreenHeader title={salon.name} size="md" />

      <div className="px-6 pb-6">
        <img src={salon.image} alt={salon.name} className="w-full h-[180px] rounded-lg object-cover" />

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-1.5">
            <StarIcon className="size-4 text-primary" />
            <span className="text-sm font-medium text-ink">{salon.rating}</span>
            <span className="text-xs text-muted">({salon.reviews} reviews)</span>
          </div>
          <button
            type="button"
            onClick={() => navigate(`/grooming/salons/${salon.id}/photos`)}
            className="flex items-center gap-1 text-xs font-medium text-primary"
          >
            <PhotosIcon className="size-4" />
            View Photos
            <ChevronRightIcon className="size-3" />
          </button>
        </div>

        <div className="mt-4 flex flex-col gap-1.5 text-xs text-ink">
          <p>
            <span className="font-medium">Address: </span>
            {salon.address}
          </p>
          <p>
            <span className="font-medium">Phone: </span>
            {salon.phone}
          </p>
          <p>
            <span className="font-medium">Hours: </span>
            {salon.hours}
          </p>
        </div>

        <div className="mt-5">
          <h2 className="text-base font-medium text-ink mb-2">About</h2>
          <p className="text-xs text-ink leading-relaxed">{salon.about}</p>
        </div>

        <div className="mt-5">
          <h2 className="text-base font-medium text-ink mb-3">Services</h2>
          <div className="flex flex-col gap-2">
            {salon.services.map((service) => (
              <div key={service.name} className="flex items-center justify-between bg-white rounded-lg shadow-card px-4 py-3">
                <span className="text-xs font-medium text-ink">{service.name}</span>
                <span className="text-xs font-medium text-primary">{service.price}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3 mt-6">
          <button type="button" className="flex-1 h-12 rounded-lg bg-primary text-white text-sm font-medium shadow-[var(--shadow-button)]">
            Book Appointment
          </button>
          <button type="button" className="size-12 rounded-lg bg-primary-tint text-primary flex items-center justify-center shrink-0">
            <CallIcon className="size-5" />
          </button>
        </div>
      </div>
    </Screen>
  );
}
