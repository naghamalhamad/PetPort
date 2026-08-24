import { useNavigate } from 'react-router-dom';
import StatusBar from '../../components/StatusBar';
import HomeIndicator from '../../components/HomeIndicator';

export default function OnboardingLayout({
  illustration,
  title,
  subtitle,
  dotIndex,
  primaryLabel,
  onPrimary,
  secondaryLabel,
  onSecondary,
}) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full bg-surface font-sans">
      <StatusBar />
      <div className="flex-1 flex flex-col items-center px-6 pt-10">
        <div className="w-[287px] h-[287px] flex items-center justify-center">{illustration}</div>

        <h1 className="mt-10 text-xl font-bold text-primary text-center">{title}</h1>
        <p className="mt-3 text-base font-medium text-primary text-center leading-relaxed max-w-[280px]">
          {subtitle}
        </p>

        <div className="flex items-center gap-2 mt-6">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`size-2 rounded-full ${i === dotIndex ? 'bg-primary' : 'bg-primary-soft'}`}
            />
          ))}
        </div>
      </div>

      <div className="px-6 pb-2 flex flex-col gap-3">
        <button
          type="button"
          onClick={onPrimary || (() => navigate(-1))}
          className="h-[50px] rounded-lg bg-primary text-surface-alt text-base font-medium shadow-[var(--shadow-button)]"
        >
          {primaryLabel}
        </button>
        <button
          type="button"
          onClick={onSecondary}
          className="h-[50px] rounded-lg border border-primary text-primary text-base font-medium"
        >
          {secondaryLabel}
        </button>
      </div>
      <HomeIndicator />
    </div>
  );
}
