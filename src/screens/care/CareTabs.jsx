import { useNavigate, useLocation } from 'react-router-dom';

const tabs = [
  { label: 'Overview', to: '/care' },
  { label: 'Vet', to: '/care/vet' },
  { label: 'Grooming', to: '/care/grooming' },
];

export default function CareTabs() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="flex gap-2.5 px-6 mt-4">
      {tabs.map((tab) => {
        const active = location.pathname === tab.to;
        return (
          <button
            key={tab.to}
            type="button"
            onClick={() => navigate(tab.to)}
            className={`flex-1 h-11 rounded-lg text-sm font-medium shadow-card ${
              active ? 'bg-primary-tint border border-primary text-ink' : 'bg-white text-ink'
            }`}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
