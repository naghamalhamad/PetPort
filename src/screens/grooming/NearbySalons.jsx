import { useNavigate } from 'react-router-dom';
import Screen from '../../components/Screen';
import ScreenHeader from '../../components/ScreenHeader';
import ProviderCard from '../care/ProviderCard';
import { salons } from '../../data/mockData';

export default function NearbySalons() {
  const navigate = useNavigate();

  return (
    <Screen>
      <ScreenHeader title="Nearby Salons" size="md" onBack={() => navigate('/care/grooming')} />
      <div className="px-6 mt-2 pb-4 flex flex-col gap-3">
        {salons.map((salon) => (
          <ProviderCard key={salon.id} provider={salon} onClick={() => navigate(`/grooming/salons/${salon.id}`)} />
        ))}
      </div>
    </Screen>
  );
}
