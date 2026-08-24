import { useNavigate } from 'react-router-dom';
import Screen from '../../components/Screen';
import ScreenHeader from '../../components/ScreenHeader';
import CareTabs from './CareTabs';
import ProviderCard, { FeaturedProviderCard } from './ProviderCard';
import { ChevronRightIcon } from '../../components/Icons';
import { salons } from '../../data/mockData';

export default function CareGrooming() {
  const navigate = useNavigate();
  const [featured, ...rest] = salons;

  return (
    <Screen>
      <ScreenHeader title="Grooming" />
      <CareTabs />

      <div className="px-6 mt-6">
        <h2 className="text-base font-medium text-ink mb-3">Quick Access</h2>
        <FeaturedProviderCard provider={featured} phone />
      </div>

      <div className="px-6 mt-6 pb-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-base font-medium text-ink">Nearby Salon</h2>
          <button
            type="button"
            onClick={() => navigate('/grooming/salons')}
            className="flex items-center gap-0.5 text-[10px] font-medium text-primary"
          >
            View All
            <ChevronRightIcon className="size-3" />
          </button>
        </div>
        <div className="flex flex-col gap-3">
          {rest.map((salon) => (
            <ProviderCard key={salon.id} provider={salon} onClick={() => navigate(`/grooming/salons/${salon.id}`)} />
          ))}
        </div>
      </div>
    </Screen>
  );
}
