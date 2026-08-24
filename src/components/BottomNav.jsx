import { NavLink, useLocation } from 'react-router-dom';
import { HomeIcon, CalendarIcon, HeartIcon, StoreIcon, PawIcon } from './Icons';
import { useAppState } from '../context/AppState';
import HomeIndicator from './HomeIndicator';

const tabs = [
  { to: '/home', label: 'Home', Icon: HomeIcon, match: (p) => p === '/home' },
  { to: '/calendar', label: 'Calendar', Icon: CalendarIcon, match: (p) => p.startsWith('/calendar') },
  { to: '/care', label: 'Care', Icon: HeartIcon, match: (p) => p.startsWith('/care') || p.startsWith('/grooming') },
  { to: '/store', label: 'Store', Icon: StoreIcon, match: (p) => p.startsWith('/store') || p.startsWith('/cart') },
  { to: '/profile', label: 'Profile', Icon: PawIcon, match: (p) => p.startsWith('/profile') || p.startsWith('/settings') },
];

export default function BottomNav() {
  const { cartCount } = useAppState();
  const location = useLocation();

  return (
    <div className="shrink-0 bg-white">
      <div className="flex items-center px-3.5 py-2.5">
        {tabs.map(({ to, label, Icon, match }) => (
          <NavLink key={to} to={to} className="flex-1 flex flex-col items-center gap-1">
            {() => {
              const active = match(location.pathname);
              return (
                <>
                  <div className="relative">
                    <Icon className={`size-6 ${active ? 'text-primary' : 'text-muted'}`} />
                    {label === 'Store' && cartCount > 0 && (
                      <span className="absolute -top-1.5 -right-2 min-w-[16px] h-4 px-1 rounded-full bg-primary text-white text-[9px] font-semibold flex items-center justify-center">
                        {cartCount}
                      </span>
                    )}
                  </div>
                  <span className={`text-xs font-medium ${active ? 'text-primary' : 'text-muted'}`}>{label}</span>
                </>
              );
            }}
          </NavLink>
        ))}
      </div>
      <HomeIndicator light />
    </div>
  );
}
