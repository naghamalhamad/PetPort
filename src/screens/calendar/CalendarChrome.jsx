import { useNavigate, useLocation } from 'react-router-dom';
import { weekDays } from '../../data/calendarEvents';

const views = ['/calendar', '/calendar/list', '/calendar/month'];

export function ViewToggle() {
  const navigate = useNavigate();
  const location = useLocation();

  const next = () => {
    const idx = views.indexOf(location.pathname);
    navigate(views[(idx + 1) % views.length]);
  };

  return (
    <button type="button" onClick={next} className="text-primary" aria-label="Switch calendar view">
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3.5" y="4.5" width="17" height="15" rx="2" />
        <path d="M8.5 4.5v15M14.5 4.5v15" />
      </svg>
    </button>
  );
}

export function CalendarTitleRow() {
  return (
    <div className="flex items-center justify-between px-6 pt-4">
      <h1 className="text-xl font-medium text-ink">Calendar</h1>
      <ViewToggle />
    </div>
  );
}

export function MonthDropdown({ label = 'April 2025' }) {
  return (
    <button type="button" className="flex items-center gap-1.5 px-6 mt-3 text-ink">
      <span className="text-sm font-medium">{label}</span>
      <svg viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M6 9l6 6 6-6" />
      </svg>
    </button>
  );
}

export function WeekStrip({ selected, onSelect }) {
  return (
    <div className="bg-surface shadow-card px-6 pt-3 pb-3 mt-3 flex justify-between">
      {weekDays.map(({ day, date }) => {
        const active = date === selected;
        return (
          <button
            key={date}
            type="button"
            onClick={() => onSelect?.(date)}
            className="flex flex-col items-center gap-1.5"
          >
            <span className="text-xs font-medium text-muted">{day}</span>
            <span
              className={`size-[30px] rounded-lg flex items-center justify-center text-xs font-medium shadow-card ${
                active ? 'bg-primary text-white font-bold' : 'bg-primary-tint text-ink'
              }`}
            >
              {date}
            </span>
          </button>
        );
      })}
    </div>
  );
}
