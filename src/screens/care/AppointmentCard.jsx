import { CallIcon } from '../../components/Icons';

export default function AppointmentCard({ appointment, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full bg-white rounded-lg shadow-card overflow-hidden flex text-left"
    >
      <span className="w-1.5 bg-primary shrink-0" />
      <div className="flex-1 p-4">
        <div className="flex items-start justify-between">
          <p className="text-sm font-medium text-ink">{appointment.title}</p>
          <p className="text-xs font-medium text-ink shrink-0 ml-2">{appointment.time}</p>
        </div>
        <p className="text-xs font-medium text-ink mt-1">{appointment.clinic}</p>
        <div className="border-t border-surface-alt my-2.5" />
        <div className="flex items-center justify-between gap-2">
          <div className="text-[10px] text-ink">
            <p>{appointment.address}</p>
            <p className="mt-0.5">{appointment.day}</p>
          </div>
          <span className="shrink-0 flex items-center gap-1 bg-primary-tint text-primary text-[10px] font-medium rounded px-2 py-1">
            <CallIcon className="size-3" />
            Call
          </span>
        </div>
      </div>
    </button>
  );
}
