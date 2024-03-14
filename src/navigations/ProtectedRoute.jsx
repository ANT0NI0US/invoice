import { useNavigate } from "react-router-dom";

import { useEffect } from "react";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // 1) Load the authenticated user

  const isLoading = false;
  const isAuthenticated = true;

  // 2) if there is no authenticated user , redirect to the login page
  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      navigate("/login");
    }
  }, [isAuthenticated, isLoading, navigate]);

  // 3) While loading show a spinner
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // 4) If there is a user render the app

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
