import { useNavigate, useParams } from 'react-router-dom';
import Screen from '../../components/Screen';
import { ChevronRightIcon, ClipboardIcon, SyringeIcon, ScissorsIcon, PillIcon } from '../../components/Icons';
import { pets, appointments, medicalHistory } from '../../data/mockData';

export default function PetDashboard() {
  const navigate = useNavigate();
  const { petId } = useParams();
  const pet = pets.find((p) => p.id === petId) || pets[0];
  const history = medicalHistory[pet.id];
  const petAppointments = appointments.filter((a) => a.petId === pet.id && a.type !== 'walk');

  return (
    <Screen>
      <div className="px-6 pt-4 flex items-center justify-between">
        <h1 className="text-xl font-medium text-ink">Pet Profile</h1>
        <button type="button" onClick={() => navigate('/settings')} className="text-ink" aria-label="Settings">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.7">
            <circle cx="12" cy="12" r="3.2" />
            <path d="M19.4 13.5a7.6 7.6 0 0 0 0-3l1.9-1.5-2-3.4-2.3.7a7.6 7.6 0 0 0-2.6-1.5L14 2.5h-4l-.4 2.3a7.6 7.6 0 0 0-2.6 1.5l-2.3-.7-2 3.4L4.6 10.5a7.6 7.6 0 0 0 0 3l-1.9 1.5 2 3.4 2.3-.7a7.6 7.6 0 0 0 2.6 1.5l.4 2.3h4l.4-2.3a7.6 7.6 0 0 0 2.6-1.5l2.3.7 2-3.4-1.9-1.5Z" />
          </svg>
        </button>
      </div>

      <div className="flex flex-col items-center mt-4">
        <img src={pet.avatar} alt={pet.name} className="size-24 rounded-full object-cover ring-4 ring-primary-tint" />
        <h2 className="text-lg font-medium text-ink mt-3">{pet.name}</h2>
        <p className="text-xs text-muted">{pet.breed}</p>
      </div>

      <div className="flex items-center justify-center gap-2 mt-4">
        {pets.map((p) => (
          <button
            key={p.id}
            type="button"
            onClick={() => navigate(`/profile/${p.id}`)}
            className={p.id === pet.id ? 'opacity-100' : 'opacity-50'}
          >
            <img src={p.avatar} alt={p.name} className={`size-9 rounded-full object-cover ${p.id === pet.id ? 'ring-2 ring-primary' : ''}`} />
          </button>
        ))}
      </div>

      <div className="px-6 mt-6 grid grid-cols-3 gap-3">
        {[
          ['Age', pet.age],
          ['Weight', pet.weight],
          ['Species', pet.species],
        ].map(([label, value]) => (
          <div key={label} className="bg-white rounded-lg shadow-card py-3 text-center">
            <p className="text-sm font-medium text-ink">{value}</p>
            <p className="text-[10px] text-muted mt-0.5">{label}</p>
          </div>
        ))}
      </div>

      <div className="px-6 mt-6">
        <h3 className="text-base font-medium text-ink mb-3">Quick Actions</h3>
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => navigate(`/profile/${pet.id}/medical`)}
            className="bg-white rounded-lg shadow-card p-4 flex items-center gap-3 text-left"
          >
            <span className="size-9 rounded-full bg-primary-tint text-primary flex items-center justify-center shrink-0">
              <ClipboardIcon className="size-4.5" />
            </span>
            <span className="text-xs font-medium text-ink">Medical History</span>
          </button>
          <button
            type="button"
            onClick={() => navigate('/care/vet')}
            className="bg-white rounded-lg shadow-card p-4 flex items-center gap-3 text-left"
          >
            <span className="size-9 rounded-full bg-primary-tint text-primary flex items-center justify-center shrink-0">
              <SyringeIcon className="size-4.5" />
            </span>
            <span className="text-xs font-medium text-ink">Book Vet</span>
          </button>
          <button
            type="button"
            onClick={() => navigate('/care/grooming')}
            className="bg-white rounded-lg shadow-card p-4 flex items-center gap-3 text-left"
          >
            <span className="size-9 rounded-full bg-primary-tint text-primary flex items-center justify-center shrink-0">
              <ScissorsIcon className="size-4.5" />
            </span>
            <span className="text-xs font-medium text-ink">Book Grooming</span>
          </button>
          <button
            type="button"
            onClick={() => navigate('/calendar')}
            className="bg-white rounded-lg shadow-card p-4 flex items-center gap-3 text-left"
          >
            <span className="size-9 rounded-full bg-primary-tint text-primary flex items-center justify-center shrink-0">
              <PillIcon className="size-4.5" />
            </span>
            <span className="text-xs font-medium text-ink">Reminders</span>
          </button>
        </div>
      </div>

      <div className="px-6 mt-6 pb-4">
        <h3 className="text-base font-medium text-ink mb-3">Upcoming for {pet.name}</h3>
        <div className="flex flex-col gap-2">
          {petAppointments.length === 0 && <p className="text-xs text-muted">No upcoming appointments.</p>}
          {petAppointments.map((appt) => (
            <button
              key={appt.id}
              type="button"
              onClick={() => navigate('/care/upcoming')}
              className="w-full bg-white rounded-lg shadow-card p-3 flex items-center justify-between text-left"
            >
              <div>
                <p className="text-xs font-medium text-ink">{appt.title}</p>
                <p className="text-[10px] text-muted mt-0.5">{appt.day}</p>
              </div>
              <ChevronRightIcon className="size-4 text-muted" />
            </button>
          ))}
        </div>
        {history?.conditions?.[0] && history.conditions[0] !== 'None' && (
          <p className="text-[10px] text-muted mt-3">
            Known condition: {history.conditions.join(', ')}
          </p>
        )}
      </div>
    </Screen>
  );
}
