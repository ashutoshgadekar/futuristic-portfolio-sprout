
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="glass p-10 rounded-xl max-w-md w-full text-center">
        <h1 className="text-7xl font-bold text-gradient-blue mb-6">404</h1>
        <p className="text-xl text-foreground/80 mb-8">Page not found</p>
        <p className="text-muted-foreground mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-neon-blue text-black font-medium rounded-md hover:bg-opacity-90 transition-all-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
