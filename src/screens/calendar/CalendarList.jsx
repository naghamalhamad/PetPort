import { useState } from 'react';
import Screen from '../../components/Screen';
import { CalendarTitleRow, MonthDropdown, WeekStrip } from './CalendarChrome';
import { PlusIcon, CheckIcon } from '../../components/Icons';
import { dayEvents, eventTypeStyles, weekDays } from '../../data/calendarEvents';

export default function CalendarList() {
  const [selected, setSelected] = useState(3);

  return (
    <Screen
      fab={
        <button
          type="button"
          className="size-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg"
        >
          <PlusIcon className="size-5" />
        </button>
      }
    >
      <CalendarTitleRow />
      <MonthDropdown />
      <WeekStrip selected={selected} onSelect={setSelected} />

      <div className="px-6 mt-5 flex flex-col gap-5 pb-4">
        {weekDays.map(({ day, date }) => {
          const events = dayEvents.filter((e) => e.date === date);
          return (
            <div key={date} className="flex gap-4">
              <div className="flex flex-col items-center gap-1.5 w-[30px] shrink-0">
                <span className="text-xs font-medium text-muted">{day}</span>
                <span
                  className={`size-[30px] rounded-lg flex items-center justify-center text-xs font-medium shadow-card ${
                    date === selected ? 'bg-primary text-white font-bold' : 'bg-primary-tint text-ink'
                  }`}
                >
                  {date}
                </span>
              </div>
              <div className="flex-1 flex flex-col gap-2.5 pt-0.5">
                {events.length === 0 && <div className="h-1" />}
                {events.map((event) => {
                  const style = eventTypeStyles[event.type];
                  return (
                    <div
                      key={event.id}
                      className="rounded-lg px-3 py-2.5 flex items-center gap-1.5"
                      style={{ background: style.bg }}
                    >
                      {event.type === 'walk' && (
                        <span className="size-2.5 rounded-sm border border-primary-tint bg-white flex items-center justify-center shrink-0">
                          {event.done && <CheckIcon className="size-2 text-ink" />}
                        </span>
                      )}
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium text-ink truncate">{event.title}</p>
                      </div>
                      <span className="text-[10px] text-ink shrink-0">{event.time}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </Screen>
  );
}
