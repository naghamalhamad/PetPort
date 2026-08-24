import StatusBar from './StatusBar';
import BottomNav from './BottomNav';
import HomeIndicator from './HomeIndicator';

export default function Screen({ children, nav = true, statusBar = true, className = '', fab = null }) {
  return (
    <div className="relative flex flex-col h-full bg-surface text-ink font-sans overflow-hidden">
      {statusBar && <StatusBar />}
      <div className={`flex-1 min-h-0 overflow-y-auto no-scrollbar ${className}`}>{children}</div>
      {fab && <div className="absolute right-6" style={{ bottom: nav ? 96 : 46 }}>{fab}</div>}
      {nav ? <BottomNav /> : <HomeIndicator />}
    </div>
  );
}
