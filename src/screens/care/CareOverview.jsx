import { useNavigate } from 'react-router-dom';
import Screen from '../../components/Screen';
import CareTabs from './CareTabs';
import AppointmentCard from './AppointmentCard';
import { ChevronRightIcon, SyringeIcon, ScissorsIcon } from '../../components/Icons';
import { appointments, appointmentsHistory } from '../../data/mockData';

export default function CareOverview() {
  const navigate = useNavigate();
  const upcoming = appointments.filter((a) => a.type === 'vet' || a.type === 'grooming').slice(0, 2);

  return (
    <Screen>
      <div className="px-6 pt-4">
        <h1 className="text-xl font-medium text-ink">Care</h1>
      </div>
      <CareTabs />

      <div className="px-6 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-base font-medium text-ink">Upcoming Appointments</h2>
          <button
            type="button"
            onClick={() => navigate('/care/upcoming')}
            className="flex items-center gap-0.5 text-[10px] font-medium text-primary"
          >
            View All
            <ChevronRightIcon className="size-3" />
          </button>
        </div>

        <div className="flex flex-col gap-3">
          {upcoming.map((appt) => (
            <AppointmentCard key={appt.id} appointment={appt} onClick={() => navigate('/care/upcoming')} />
          ))}
        </div>
      </div>

      <div className="px-6 mt-6 pb-4">
        <h2 className="text-base font-medium text-ink mb-3">Appointments History</h2>
        <div className="flex flex-col gap-3">
          {appointmentsHistory.map((item) => {
            const Icon = item.type === 'vet' ? SyringeIcon : ScissorsIcon;
            return (
              <div key={item.id} className="w-full bg-white rounded-lg shadow-card p-4 flex items-center gap-3">
                <span className="size-6 rounded-full bg-primary-tint flex items-center justify-center text-primary shrink-0">
                  <Icon className="size-3.5" />
                </span>
                <div className="flex-1">
                  <p className="text-xs font-medium text-ink">{item.title}</p>
                  <p className="text-[10px] text-ink">{item.clinic}</p>
                </div>
                <div className="text-right shrink-0">
                  <button
                    type="button"
                    onClick={() => navigate('/care/upcoming')}
                    className="flex items-center gap-0.5 text-[10px] font-medium text-primary"
                  >
                    View Details
                    <ChevronRightIcon className="size-3" />
                  </button>
                  <p className="text-[10px] text-ink mt-1">{item.date}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Screen>
  );
}
