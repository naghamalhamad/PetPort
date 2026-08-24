import { useState } from 'react';
import Screen from '../../components/Screen';
import { CalendarTitleRow, MonthDropdown, WeekStrip } from './CalendarChrome';
import { PlusIcon } from '../../components/Icons';
import { eventTypeStyles, monthTags } from '../../data/calendarEvents';

const grid = [
  [{ d: 27, muted: true }, { d: 28, muted: true }, { d: 29, muted: true }, { d: 30, muted: true }, { d: 31, muted: true }, { d: 1 }, { d: 2 }],
  [{ d: 3 }, { d: 4 }, { d: 5 }, { d: 6 }, { d: 7 }, { d: 8 }, { d: 9 }],
  [{ d: 10 }, { d: 11 }, { d: 12 }, { d: 13 }, { d: 14 }, { d: 15 }, { d: 16 }],
  [{ d: 17 }, { d: 18 }, { d: 19 }, { d: 20 }, { d: 21 }, { d: 22 }, { d: 23 }],
  [{ d: 24 }, { d: 25 }, { d: 26 }, { d: 27 }, { d: 28 }, { d: 29 }, { d: 30 }],
];

export default function CalendarMonth() {
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

      <div className="px-4 mt-2 pb-4">
        {grid.map((row, ri) => (
          <div key={ri} className="grid grid-cols-7 border-b border-surface-alt py-1.5">
            {row.map(({ d, muted }, ci) => {
              const tags = monthTags.filter((t) => t.date === d && ri > 0);
              return (
                <button
                  key={ci}
                  type="button"
                  onClick={() => !muted && setSelected(d)}
                  className="flex flex-col items-center gap-1 py-1 min-h-[52px]"
                >
                  <span className={`text-[10px] font-medium ${muted ? 'text-muted' : 'text-ink'}`}>{d}</span>
                  <div className="flex flex-col gap-0.5 w-full px-0.5">
                    {tags.map((tag, ti) => (
                      <span
                        key={ti}
                        className="text-[8px] font-medium text-ink rounded-sm px-0.5 leading-tight truncate"
                        style={{ background: eventTypeStyles[tag.type].bg }}
                      >
                        {eventTypeStyles[tag.type].label}
                      </span>
                    ))}
                  </div>
                </button>
              );
            })}
          </div>
        ))}
      </div>
    </Screen>
  );
}
