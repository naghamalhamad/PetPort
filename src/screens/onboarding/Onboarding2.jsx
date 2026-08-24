import { useNavigate } from 'react-router-dom';
import OnboardingLayout from './OnboardingLayout';
import { RemindersIllustration } from './illustrations';

export default function Onboarding2() {
  const navigate = useNavigate();
  return (
    <OnboardingLayout
      illustration={<RemindersIllustration />}
      title="Smart Reminders & Routines"
      subtitle="Stay on top of feeding, walks, and grooming."
      dotIndex={1}
      primaryLabel="Next"
      onPrimary={() => navigate('/onboarding/3')}
      secondaryLabel="Skip"
      onSecondary={() => navigate('/home')}
    />
  );
}
