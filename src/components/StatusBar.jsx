export default function StatusBar() {
  return (
    <div className="flex items-center justify-between h-11 px-5 shrink-0 select-none">
      <span className="font-medium text-sm text-black">9:41</span>
      <div className="flex items-center gap-1.5 text-black">
        <svg width="18" height="12" viewBox="0 0 18 12" fill="currentColor">
          <rect x="0" y="7" width="3" height="5" rx="0.5" />
          <rect x="5" y="5" width="3" height="7" rx="0.5" />
          <rect x="10" y="3" width="3" height="9" rx="0.5" />
          <rect x="15" y="0" width="3" height="12" rx="0.5" />
        </svg>
        <svg width="16" height="12" viewBox="0 0 16 12" fill="currentColor">
          <path d="M8 10.5a1.3 1.3 0 1 1 0-2.6 1.3 1.3 0 0 1 0 2.6Zm-3.6-3.9a5.1 5.1 0 0 1 7.2 0l-1.1 1.1a3.5 3.5 0 0 0-5 0L4.4 6.6Zm-2.6-2.6a8.8 8.8 0 0 1 12.4 0l-1.1 1.1a7.2 7.2 0 0 0-10.2 0L1.8 4Z" />
        </svg>
        <svg width="25" height="12" viewBox="0 0 25 12" fill="none">
          <rect x="0.5" y="0.5" width="21" height="11" rx="2.5" stroke="black" />
          <rect x="2" y="2" width="18" height="8" rx="1.5" fill="black" />
          <rect x="22.5" y="4" width="1.5" height="4" rx="0.7" fill="black" />
        </svg>
      </div>
    </div>
  );
}
