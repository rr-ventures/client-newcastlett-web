import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/Home";
import { TimetablePage } from "./pages/Timetable";
import { CompetitionsPage } from "./pages/Competitions";
import { LocationPage } from "./pages/Location";
import { WhatToExpectPage } from "./pages/WhatToExpect";
import { PricingPage } from "./pages/Pricing";
import { AboutPage } from "./pages/About";
import { GuidesPage } from "./pages/Guides";
import { GuideIndoorActivitiesPage } from "./pages/GuideIndoorActivities";
import { GuideMaitlandPage } from "./pages/GuideMaitland";
import { AreasWeWelcomePage } from "./pages/AreasWeWelcome";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/timetable" element={<TimetablePage />} />
        <Route path="/competitions" element={<CompetitionsPage />} />
        <Route path="/location" element={<LocationPage />} />
        <Route path="/what-to-expect" element={<WhatToExpectPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/guides" element={<GuidesPage />} />
        <Route path="/guides/indoor-activities-newcastle" element={<GuideIndoorActivitiesPage />} />
        <Route path="/guides/table-tennis-near-maitland" element={<GuideMaitlandPage />} />
        <Route path="/areas-we-welcome" element={<AreasWeWelcomePage />} />
      </Routes>
    </Layout>
  );
}

export default App;
