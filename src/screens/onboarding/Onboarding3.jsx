import { useNavigate } from 'react-router-dom';
import OnboardingLayout from './OnboardingLayout';
import { SuppliesIllustration } from './illustrations';

export default function Onboarding3() {
  const navigate = useNavigate();
  return (
    <OnboardingLayout
      illustration={<SuppliesIllustration />}
      title="Everything Your Pet Needs"
      subtitle="Buy supplies, find vets & access emergency help anytime."
      dotIndex={2}
      primaryLabel="Get Started"
      onPrimary={() => navigate('/home')}
      secondaryLabel="Login"
      onSecondary={() => navigate('/home')}
    />
  );
}
