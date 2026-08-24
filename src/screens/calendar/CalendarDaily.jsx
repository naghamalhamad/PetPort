import { useState } from 'react';
import Screen from '../../components/Screen';
import { CalendarTitleRow, MonthDropdown, WeekStrip } from './CalendarChrome';
import { PlusIcon, CheckIcon } from '../../components/Icons';
import { dayEvents, eventTypeStyles } from '../../data/calendarEvents';

const hours = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const ROW_H = 66;

export default function CalendarDaily() {
  const [selected, setSelected] = useState(3);
  const events = dayEvents.filter((e) => e.date === selected);

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

      <div className="relative px-6 mt-4" style={{ height: hours.length * ROW_H }}>
        {hours.map((h, i) => (
          <div
            key={h}
            className="absolute left-6 right-6 border-t border-surface-alt text-xs text-muted"
            style={{ top: i * ROW_H }}
          >
            <span className="-translate-y-1/2 inline-block bg-surface pr-2">{h} PM</span>
          </div>
        ))}

        {events.map((event) => {
          const style = eventTypeStyles[event.type];
          const top = (event.start - hours[0]) * ROW_H + 8;
          return (
            <div
              key={event.id}
              className="absolute left-14 right-0 rounded-lg px-3 py-2"
              style={{ top, height: ROW_H - 16, background: style.bg }}
            >
              <div className="flex items-center gap-1.5">
                {event.type === 'walk' && (
                  <span className="size-2.5 rounded-sm border border-primary-tint bg-white flex items-center justify-center shrink-0">
                    {event.done && <CheckIcon className="size-2 text-ink" />}
                  </span>
                )}
                <p className="text-xs font-medium text-ink">{event.title}</p>
              </div>
              {event.type !== 'walk' && <p className="text-[10px] text-ink mt-0.5">{event.time}</p>}
              {event.type === 'walk' && <span className="text-[10px] text-ink absolute right-3 top-2">{event.time}</span>}
            </div>
          );
        })}
      </div>
    </Screen>
  );
}
