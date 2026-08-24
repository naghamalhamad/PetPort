import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppStateProvider } from './context/AppState';
import PhoneFrame from './components/PhoneFrame';

import Onboarding1 from './screens/onboarding/Onboarding1';
import Onboarding2 from './screens/onboarding/Onboarding2';
import Onboarding3 from './screens/onboarding/Onboarding3';
import Dashboard from './screens/Dashboard';
import CalendarDaily from './screens/calendar/CalendarDaily';
import CalendarList from './screens/calendar/CalendarList';
import CalendarMonth from './screens/calendar/CalendarMonth';
import CareOverview from './screens/care/CareOverview';
import CareVet from './screens/care/CareVet';
import CareGrooming from './screens/care/CareGrooming';
import CareUpcomingAppointments from './screens/care/CareUpcomingAppointments';
import NearbySalons from './screens/grooming/NearbySalons';
import SalonDetails from './screens/grooming/SalonDetails';
import SalonPhotos from './screens/grooming/SalonPhotos';
import PetDashboard from './screens/profile/PetDashboard';
import MedicalHistory from './screens/profile/MedicalHistory';
import StoreHome from './screens/store/StoreHome';
import AllCategories from './screens/store/AllCategories';
import ItemDetails from './screens/store/ItemDetails';
import Cart from './screens/store/Cart';
import Settings from './screens/Settings';

export default function App() {
  return (
    <AppStateProvider>
      <HashRouter>
        <PhoneFrame>
          <Routes>
            <Route path="/" element={<Onboarding1 />} />
            <Route path="/onboarding" element={<Onboarding1 />} />
            <Route path="/onboarding/2" element={<Onboarding2 />} />
            <Route path="/onboarding/3" element={<Onboarding3 />} />

            <Route path="/home" element={<Dashboard />} />

            <Route path="/calendar" element={<CalendarDaily />} />
            <Route path="/calendar/list" element={<CalendarList />} />
            <Route path="/calendar/month" element={<CalendarMonth />} />

            <Route path="/care" element={<CareOverview />} />
            <Route path="/care/vet" element={<CareVet />} />
            <Route path="/care/grooming" element={<CareGrooming />} />
            <Route path="/care/upcoming" element={<CareUpcomingAppointments />} />

            <Route path="/grooming/salons" element={<NearbySalons />} />
            <Route path="/grooming/salons/:id" element={<SalonDetails />} />
            <Route path="/grooming/salons/:id/photos" element={<SalonPhotos />} />

            <Route path="/profile" element={<Navigate to="/profile/max" replace />} />
            <Route path="/profile/:petId" element={<PetDashboard />} />
            <Route path="/profile/:petId/medical" element={<MedicalHistory />} />

            <Route path="/store" element={<StoreHome />} />
            <Route path="/store/categories" element={<AllCategories />} />
            <Route path="/store/item/:id" element={<ItemDetails />} />
            <Route path="/cart" element={<Cart />} />

            <Route path="/settings" element={<Settings />} />

            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
        </PhoneFrame>
      </HashRouter>
    </AppStateProvider>
  );
}
