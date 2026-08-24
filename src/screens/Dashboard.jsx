import { useNavigate } from 'react-router-dom';
import Screen from '../components/Screen';
import { BellIcon, SyringeIcon, PillIcon, ScissorsIcon, PlusIcon } from '../components/Icons';
import { pets, appointments, reminders, dailyActivity, lastOrder } from '../data/mockData';
import { useAppState } from '../context/AppState';

export default function Dashboard() {
  const navigate = useNavigate();
  const { setSelectedPetId, addToCart } = useAppState();
  const nextAppointment = appointments[0];

  return (
    <Screen>
      <div className="px-6 pt-2 pb-6">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-medium text-ink">Hi pets owner 🐶</h1>
          <button type="button" className="text-ink">
            <BellIcon className="size-6" />
          </button>
        </div>

        <div className="flex items-center gap-4 mt-6">
          {pets.map((pet) => (
            <button
              key={pet.id}
              type="button"
              onClick={() => {
                setSelectedPetId(pet.id);
                navigate(`/profile/${pet.id}`);
              }}
              className="shrink-0"
            >
              <img
                src={pet.avatar}
                alt={pet.name}
                className="size-12 rounded-full object-cover ring-2 ring-primary"
              />
            </button>
          ))}
          <button
            type="button"
            onClick={() => navigate('/profile')}
            className="size-5 flex items-center justify-center text-primary"
          >
            <PlusIcon className="size-5" />
          </button>
        </div>

        <section className="mt-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-base font-medium text-ink">Upcoming Appointments</h2>
            <button type="button" onClick={() => navigate('/care/upcoming')} className="text-xs font-medium text-primary">
              See All
            </button>
          </div>
          <button
            type="button"
            onClick={() => navigate('/care/upcoming')}
            className="w-full bg-primary rounded-lg shadow-card p-4 flex items-center justify-between text-left"
          >
            <div>
              <div className="flex items-center gap-2 text-white">
                <span className="size-6 rounded-full bg-white/30 flex items-center justify-center shrink-0">
                  <SyringeIcon className="size-3.5" />
                </span>
                <span className="text-sm font-medium">{nextAppointment.title}</span>
              </div>
              <p className="text-xs text-white mt-2">
                {nextAppointment.time}-{nextAppointment.date}
              </p>
            </div>
            <SyringeIcon className="size-8 text-white/60" />
          </button>
        </section>

        <section className="mt-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-base font-medium text-ink">Today's Reminders</h2>
            <button type="button" onClick={() => navigate('/calendar')} className="text-xs font-medium text-primary">
              See All
            </button>
          </div>
          <div className="flex flex-col gap-3">
            {reminders.map((reminder) => {
              const Icon = reminder.type === 'medication' ? PillIcon : ScissorsIcon;
              return (
                <button
                  key={reminder.id}
                  type="button"
                  onClick={() => navigate('/calendar')}
                  className="w-full bg-white rounded-lg shadow-card p-4 flex items-center gap-3 text-left"
                >
                  <span className="size-6 rounded-full bg-primary-tint flex items-center justify-center text-primary shrink-0">
                    <Icon className="size-3.5" />
                  </span>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-ink">{reminder.title}</p>
                    <p className="text-xs text-ink">{reminder.time}</p>
                  </div>
                  <span className="text-primary-soft text-2xl leading-none">
                    {reminder.type === 'medication' ? '💊' : '🦆'}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        <section className="mt-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-base font-medium text-ink">Last Order</h2>
            <button type="button" onClick={() => navigate('/store')} className="text-xs font-medium text-primary">
              Go store
            </button>
          </div>
          <div className="w-full bg-white rounded-lg shadow-card p-4 flex items-center gap-3">
            <span className="size-6 rounded-full bg-primary-tint flex items-center justify-center text-primary shrink-0 text-sm">
              🦴
            </span>
            <div className="flex-1">
              <p className="text-sm font-medium text-ink">{lastOrder.title}</p>
              <p className="text-xs text-ink">{lastOrder.subtitle}</p>
            </div>
            <button
              type="button"
              onClick={() => addToCart('dry-dog-food')}
              className="text-xs font-medium text-primary"
            >
              Order Again
            </button>
          </div>
        </section>

        <section className="mt-6">
          <h2 className="text-base font-medium text-ink mb-3">Daily Activity</h2>
          <div className="flex flex-col gap-3">
            {dailyActivity.map((activity) => (
              <div key={activity.id} className="flex items-center gap-3">
                <div className="w-11 text-center text-sm font-medium text-ink shrink-0">
                  <div>{activity.time}</div>
                  <div className="text-xs">{activity.period}</div>
                </div>
                <div className="flex-1 bg-primary-tint rounded-lg shadow-card px-4 py-3">
                  <p className="text-sm font-medium text-ink">{activity.title}</p>
                  <p className="text-xs text-ink">{activity.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Screen>
  );
}
