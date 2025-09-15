import './App.css'
import { CallSchedulerProvider } from './context/CallSchedulerContext';
import CallScheduler from './pages/CallScheduler'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datepicker/dist/react-datepicker.css';
import "react-loading-skeleton/dist/skeleton.css";
import { Route, Routes, Navigate } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { Toaster } from "react-hot-toast";

import FunnelLayout from './pages/funnel';
import NutritionGoals from './pages/funnel/NutritionGoals';
import InsuranceBenefits from './pages/funnel/InsuranceBenefits';
import YourState from './pages/funnel/YourState';
import Testimonial from './pages/funnel/Testimonial';
import InsurancePlan from './pages/funnel/InsurancePlan';
import Dietitian from './pages/funnel/Dietitian';
import YourBirthday from './pages/funnel/YourBirthday';
import InsuranceDetails from './pages/funnel/InsuranceDetails';
import CheckInformation from './pages/funnel/CheckInformation';
import SelectDiagnoses from './pages/funnel/SelectDiagnoses';
import SelfPay from './pages/funnel/SelfPay';
import Match from './pages/funnel/Match';
import NextSteps from './pages/funnel/NextSteps';
import ThankYou from './pages/funnel/ThankYou';
import CardInfo from './pages/funnel/CardInfo';
import DateTimeSelector from './pages/DateAndTimeSelector';
import TryLatter from "./pages/funnel/TryLatter";
import { FunnelProvider } from './context/FunnelContext';

function App() {
  return (
    <CallSchedulerProvider>
      <ScrollToTop />
      <Toaster position='top-right' />

      <Routes>
        {/* Home */}
        <Route path="/" element={<CallScheduler />} />

        {/* Funnel Routes */}
        <Route
          path="/funnel"
          element={
            <FunnelProvider>
              <FunnelLayout />
            </FunnelProvider>
          }
        >
          <Route index element={<Navigate to="nutrition-goals" replace />} />
          <Route path="nutrition-goals" element={<NutritionGoals />} />
          <Route path="insurance-benefits" element={<InsuranceBenefits />} />
          <Route path="your-state" element={<YourState />} />
          <Route path="testimonial" element={<Testimonial />} />
          <Route path="insurance-plan" element={<InsurancePlan />} />
          <Route path="dietitian" element={<Dietitian />} />
          <Route path="your-birthday" element={<YourBirthday />} />
          <Route path="insurance-details" element={<InsuranceDetails />} />
          <Route path="check-information" element={<CheckInformation />} />
          <Route path="diagnoses" element={<SelectDiagnoses />} />
          <Route path="self-pay" element={<SelfPay />} />
          <Route path="match" element={<Match />} />
          <Route path="scheduled-call" element={<DateTimeSelector isFromFunnel={true} />} />
          <Route path="card-info" element={<CardInfo />} />
          <Route path="thank-you" element={<ThankYou />} />
          <Route path="next-steps" element={<NextSteps />} />
          <Route path="TryLatter" element={<TryLatter />} />
        </Route>
      </Routes>
    </CallSchedulerProvider>
  )
}

export default App;