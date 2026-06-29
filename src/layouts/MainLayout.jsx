import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import CustomCursor from '../components/CustomCursor';
import Loader from '../components/Loader';
import { Toaster } from 'react-hot-toast';
import { useTheme } from '../context/ThemeContext';
import { initScrollReveal } from '../utils/scrollReveal';

const EXIT_MS = 680;

const MainLayout = () => {
  const [phase, setPhase] = useState('loading');
  const { theme } = useTheme();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const minDelay = new Promise((resolve) => setTimeout(resolve, 1500));
    const pageReady = new Promise((resolve) => {
      if (document.readyState === 'complete') resolve();
      else window.addEventListener('load', resolve, { once: true });
    });

    let exitTimer;

    Promise.all([minDelay, pageReady]).then(() => {
      setPhase('exiting');
      exitTimer = setTimeout(() => setPhase('done'), EXIT_MS);
    });

    return () => clearTimeout(exitTimer);
  }, []);

  useEffect(() => {
    if (phase !== 'done') return;

    initScrollReveal();

    const refreshTimer = requestAnimationFrame(() => {
      requestAnimationFrame(() => initScrollReveal());
    });

    return () => cancelAnimationFrame(refreshTimer);
  }, [phase, pathname]);

  if (phase !== 'done') {
    return <Loader exiting={phase === 'exiting'} />;
  }

  return (
    <div className="min-h-screen overflow-x-clip" style={{ background: "var(--bg)" }}>
      <CustomCursor />
      <Navbar />
      <Toaster
        position="bottom-center"
        toastOptions={{
          style: {
            background: theme === "dark" ? "#18181b" : "#fff",
            color: theme === "dark" ? "#fafafa" : "#0f0f12",
            border: `1px solid ${theme === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)"}`,
            borderRadius: "12px",
            fontSize: "14px",
          },
        }}
      />
      <ScrollToTop />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
