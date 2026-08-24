import { useNavigate } from 'react-router-dom';
import OnboardingLayout from './OnboardingLayout';
import { VetIllustration } from './illustrations';

export default function Onboarding1() {
  const navigate = useNavigate();
  return (
    <OnboardingLayout
      illustration={<VetIllustration />}
      title="Complete Pet Care, Simplified"
      subtitle="Vet visits, vaccines, meds & health tracking in one place."
      dotIndex={0}
      primaryLabel="Next"
      onPrimary={() => navigate('/onboarding/2')}
      secondaryLabel="Skip"
      onSecondary={() => navigate('/home')}
    />
  );
}
