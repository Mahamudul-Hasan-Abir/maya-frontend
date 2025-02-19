"use client";
import React, { useEffect, useState, ComponentType } from "react";
import AuthComponent from "@/components/AuthComponent/AuthComponent";

// Define the expected props type for WrappedComponent
type WithAuthProps = object; // You can extend this if the wrapped component has specific props

const withAuth = <P extends WithAuthProps>(
  WrappedComponent: ComponentType<P>
) => {
  const PrivateRoute: React.FC<P> = (props) => {
    const [showLoginDialog, setShowLoginDialog] = useState(false);

    useEffect(() => {
      const authToken = localStorage.getItem("authToken");
      if (!authToken) {
        setShowLoginDialog(true);
      }
    }, []);

    if (showLoginDialog) {
      return (
        <AuthComponent
          isOpen={showLoginDialog}
          onClose={() => setShowLoginDialog(false)}
        />
      );
    }

    return <WrappedComponent {...props} />;
  };

  return PrivateRoute;
};

export default withAuth;
