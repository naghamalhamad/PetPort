import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Screen from '../components/Screen';
import ScreenHeader from '../components/ScreenHeader';
import {
  BellIcon,
  LockIcon,
  UserIcon,
  HelpIcon,
  LogoutIcon,
  MoonIcon,
  GlobeIcon,
  ChevronRightIcon,
} from '../components/Icons';
import { pets } from '../data/mockData';

function Toggle({ checked, onChange }) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className={`w-10 h-6 rounded-full relative transition-colors ${checked ? 'bg-primary' : 'bg-surface-alt'}`}
    >
      <span
        className={`absolute top-0.5 size-5 rounded-full bg-white shadow transition-transform ${
          checked ? 'translate-x-[18px]' : 'translate-x-0.5'
        }`}
      />
    </button>
  );
}

function Row({ icon: Icon, label, right, onClick }) {
  return (
    <div
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onClick={onClick}
      onKeyDown={onClick ? (e) => (e.key === 'Enter' || e.key === ' ') && onClick() : undefined}
      className={`w-full flex items-center gap-3 bg-white rounded-lg shadow-card px-4 py-3.5 text-left ${onClick ? 'cursor-pointer' : ''}`}
    >
      <span className="size-9 rounded-full bg-primary-tint text-primary flex items-center justify-center shrink-0">
        <Icon className="size-4.5" />
      </span>
      <span className="flex-1 text-sm font-medium text-ink">{label}</span>
      {right}
    </div>
  );
}

export default function Settings() {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const pet = pets[0];

  return (
    <Screen nav={false}>
      <ScreenHeader title="Settings" size="md" />

      <div className="px-6 pb-4">
        <div className="flex items-center gap-3 bg-white rounded-lg shadow-card p-4">
          <img src={pet.avatar} alt="Owner" className="size-14 rounded-full object-cover" />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-ink">Pet Owner</p>
            <p className="text-xs text-muted truncate">owner@petport.app</p>
          </div>
          <ChevronRightIcon className="size-4 text-muted shrink-0" />
        </div>

        <p className="text-xs font-medium text-muted mt-6 mb-2 px-1">Preferences</p>
        <div className="flex flex-col gap-2.5">
          <Row icon={BellIcon} label="Notifications" right={<Toggle checked={notifications} onChange={setNotifications} />} />
          <Row icon={MoonIcon} label="Dark Mode" right={<Toggle checked={darkMode} onChange={setDarkMode} />} />
          <Row icon={GlobeIcon} label="Language" right={<span className="text-xs text-muted">English</span>} />
        </div>

        <p className="text-xs font-medium text-muted mt-6 mb-2 px-1">Account</p>
        <div className="flex flex-col gap-2.5">
          <Row icon={UserIcon} label="Edit Profile" right={<ChevronRightIcon className="size-4 text-muted" />} />
          <Row icon={LockIcon} label="Privacy & Security" right={<ChevronRightIcon className="size-4 text-muted" />} />
          <Row icon={HelpIcon} label="Help & Support" right={<ChevronRightIcon className="size-4 text-muted" />} />
        </div>

        <button
          type="button"
          onClick={() => navigate('/onboarding')}
          className="w-full flex items-center justify-center gap-2 mt-6 text-danger text-sm font-medium bg-white rounded-lg shadow-card px-4 py-3.5"
        >
          <LogoutIcon className="size-4.5" />
          Log Out
        </button>
      </div>
    </Screen>
  );
}
