// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import './app.css'
// import App from './App.jsx'
// import { RouterProvider } from 'react-router'
// import { router } from './router/Router.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//       <RouterProvider router={router}> </RouterProvider>
//   </StrictMode>,
// )

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./app.css";

import { RouterProvider } from "react-router";
import { router } from "./router/Router.jsx";

import AOS from "aos";
import "aos/dist/aos.css";


AOS.init({
  duration: 1000,       // animation duration
  once: true,           // animate only once
  easing: "ease-in-out",
  offset: 80,           // trigger animation slightly earlier
});

createRoot(document.getElementById("root")).render(
  
    <RouterProvider router={router} />
  
);