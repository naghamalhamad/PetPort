import Screen from '../../components/Screen';
import ScreenHeader from '../../components/ScreenHeader';
import AppointmentCard from './AppointmentCard';
import { appointments } from '../../data/mockData';

export default function CareUpcomingAppointments() {
  const upcoming = appointments.filter((a) => a.type !== 'walk');

  return (
    <Screen>
      <ScreenHeader title="Upcoming Appointments" size="md" />
      <div className="px-6 mt-2 pb-4 flex flex-col gap-3">
        {upcoming.map((appt) => (
          <AppointmentCard key={appt.id} appointment={appt} />
        ))}
      </div>
    </Screen>
  );
}
