import { useParams } from 'react-router-dom';
import Screen from '../../components/Screen';
import ScreenHeader from '../../components/ScreenHeader';
import { salons } from '../../data/mockData';

export default function SalonPhotos() {
  const { id } = useParams();
  const salon = salons.find((s) => s.id === id) || salons[0];

  return (
    <Screen>
      <ScreenHeader title="Photos" size="md" />
      <p className="px-6 -mt-1 text-xs text-muted">{salon.name}</p>
      <div className="px-6 mt-4 pb-4 grid grid-cols-2 gap-3">
        {salon.photos.map((photo, i) => (
          <img key={i} src={photo} alt={`${salon.name} photo ${i + 1}`} className="w-full aspect-square rounded-lg object-cover" />
        ))}
      </div>
    </Screen>
  );
}
