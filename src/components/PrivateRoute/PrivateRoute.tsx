"use client";
import { useEffect, useState } from "react";

import AuthComponent from "../AuthComponent/AuthComponent";
// Import your login modal

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [showAuthModal, setShowAuthModal] = useState(false);

  const [isAuthOpen, setIsAuthOpen] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (!token) {
      setShowAuthModal(true);
    } else {
      setIsAuthenticated(true);
    }
  }, []);

  if (!isAuthenticated) {
    return <AuthComponent isOpen={isAuthOpen} onClose={setIsAuthOpen} />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
