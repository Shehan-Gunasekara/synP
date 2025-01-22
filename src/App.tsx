import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Navigation } from "./components/layout/Navigation/Navigation";
import { Footer } from "./components/layout/Footer";
import { GalleryPage } from "./features/gallery";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import { PurchasePage } from "./pages/PurchasePage/PurchasePage";
import { AuthPage } from "./pages/AuthPage/AuthPage";
import SuccessPage from "./pages/PurchasePage/components/SuccessPage";
import CancelPage from "./pages/PurchasePage/components/CancelPage";
import ImageGenerator from "./features/generator/components/VideoGenerator";
import ImageToVideoGenerator from "./features/generator/components/ImageToVideoGenerator";
import { Privacy } from "./pages/StaticPages/Privacy";
import { Contact } from "./pages/StaticPages/Contact";
import MaintenancePage from "./pages/StaticPages/MaintenancePage";
import { Terms } from "./pages/StaticPages/Terms";
import { AuthProvider } from "./features/auth/context/AuthProvider";
import BugReport from "./pages/StaticPages/BugReport";
import DemoVideoGenerator from "./features/demo/DemoGenerator";

const Layout: React.FC<{
  children: React.ReactNode;
  showNav?: boolean;
}> = ({ children, showNav = true }) => (
  <AuthProvider>
    <div className="min-h-screen bg-gradient-to-br from-white via-white to-black/5 flex flex-col">
      {showNav && <Navigation />}
      {children}
      <Footer />
    </div>{" "}
  </AuthProvider>
);

const App: React.FC = () => {
  // Read maintenance mode from the environment
  const isMaintenanceMode = import.meta.env.VITE_MAINTENANCE_MODE;

  if (isMaintenanceMode == "true") {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<MaintenancePage />} />
        </Routes>
      </BrowserRouter>
    );
  } else {
    return (
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout showNav={false}>
                <LandingPage />
              </Layout>
            }
          />
          <Route
            path="/auth"
            element={
              <Layout showNav={false}>
                <AuthPage />
              </Layout>
            }
          />
          <Route
            path="/demo"
            element={
              <Layout showNav={true}>
                <DemoVideoGenerator />
              </Layout>
            }
          />
          <Route
            path="/gallery"
            element={
              <Layout showNav={true}>
                <GalleryPage />
              </Layout>
            }
          />
          <Route
            path="/ugc-actor"
            element={
              <Layout showNav={true}>
                <ImageGenerator />
              </Layout>
            }
          />
          <Route
            path="/consistent-actor"
            element={
              <Layout showNav={true}>
                <ImageToVideoGenerator />
              </Layout>
            }
          />
          <Route
            path="/purchase"
            element={
              <Layout showNav={true}>
                <PurchasePage />
              </Layout>
            }
          />
          <Route
            path="/success"
            element={
              <Layout showNav={false}>
                <SuccessPage />
              </Layout>
            }
          />
          <Route
            path="/cancel"
            element={
              <Layout showNav={false}>
                <CancelPage />
              </Layout>
            }
          />
          <Route
            path="/privacy"
            element={
              <Layout showNav={true}>
                <Privacy />
              </Layout>
            }
          />
          <Route
            path="/terms"
            element={
              <Layout showNav={true}>
                <Terms />
              </Layout>
            }
          />
          <Route
            path="/contact"
            element={
              <Layout showNav={true}>
                <Contact />
              </Layout>
            }
          />
          <Route
            path="/report"
            element={
              <Layout showNav={true}>
                <BugReport />
              </Layout>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    );
  }
};

export default App;
