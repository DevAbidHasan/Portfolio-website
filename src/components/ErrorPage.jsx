import React from "react";
import { useNavigate } from "react-router";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6" style={{ background: "var(--bg)" }}>
      <p className="font-display text-8xl font-bold opacity-10" style={{ color: "var(--text)" }}>404</p>
      <h1 className="font-display text-2xl font-semibold mt-2" style={{ color: "var(--text)" }}>Page not found</h1>
      <p className="mt-3 max-w-sm" style={{ color: "var(--text-muted)" }}>
        The page you requested doesn&apos;t exist or has been moved.
      </p>
      <button type="button" onClick={() => navigate("/")} className="btn-primary mt-8">
        Return home
      </button>
    </div>
  );
};

export default ErrorPage;
