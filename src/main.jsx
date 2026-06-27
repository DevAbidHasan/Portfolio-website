import { createRoot } from "react-dom/client";
import "./index.css";
import "./App.css";
import "aos/dist/aos.css";

import { RouterProvider } from "react-router";
import { router } from "./router/Router.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <RouterProvider router={router} />
  </ThemeProvider>
);
