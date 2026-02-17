import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {

  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let value = 0;

    const interval = setInterval(() => {
      value += 5; // controls speed
      setProgress(value);

      if (value >= 100) {
        clearInterval(interval);
        setTimeout(() => setLoading(false), 200);
      }
    }, 60); // 60ms × 50 ≈ 3 seconds

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center
      bg-gradient-to-br from-slate-900 via-black to-slate-950
      text-white">

        {/* Greeting Text */}
        <h1 className="text-3xl md:text-4xl font-semibold tracking-wide
        mb-6 text-center animate-fadeIn">
          Welcome to My Portfolio
        </h1>

        {/* Progress Bar Container */}
        <div className="w-[250px] md:w-[320px] h-2 bg-white/20 
        rounded-full overflow-hidden">

          {/* Animated Progress */}
          <div
            className="h-full bg-blue-700
            transition-all duration-100"
            style={{ width: `${progress}%` }}
          ></div>

        </div>

        {/* Percentage Text */}
        <p className="mt-3 text-sm text-zinc-400">
          Launching... {progress}%
        </p>

      </div>
    );
  }

  return (
    <div className='lg:w-[60%] md:w-[85%] w-[95%] mx-auto'>
      <Navbar />
      <Toaster/>
      <ScrollToTop/>
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
