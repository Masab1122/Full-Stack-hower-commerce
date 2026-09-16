import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Topbar from "./components/layout/Topbar";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import StickyMobileActions from "./components/layout/StickyMobileActions";

import HomePage from "./pages/HomePage";
import CoursesPage from "./pages/CoursesPage";
import CourseDetailPage from "./pages/CourseDetailPage";
import ServicesPage from "./pages/ServicesPage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsPage from "./pages/TermsPage";
import NotFoundPage from "./pages/NotFoundPage";

// Utility component to scroll window to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        {/* Top Header Contact Bar */}
        <Topbar />

        {/* Sticky Main Navigation */}
        <Navbar />

        {/* Main Content Viewport */}
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/courses/:slug" element={<CourseDetailPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:slug" element={<ServiceDetailPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:slug" element={<ProjectDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-and-conditions" element={<TermsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* Rich Footer */}
        <Footer />

        {/* Fixed Mobile Action Bar */}
        <StickyMobileActions />
      </div>
    </BrowserRouter>
  );
}
