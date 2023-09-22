import { Route, Routes } from "react-router-dom";

import LandingLayout from "./layouts/LandingLayout";
import AppLayout from "./layouts/AppLayout";
import LandingPage from "./pages/LandingPage";
import TermsOfUsePage from "./pages/TermsOfUsePage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import AboutUsPage from "./pages/AboutUsPage";

function App() {
  return (
    <>
      <Routes>
        <Route element={<LandingLayout />}>
          <Route path="/" element={<LandingPage />} />
        </Route>
        <Route element={<AppLayout />}>
          <Route path="/terms-of-use" element={<TermsOfUsePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
