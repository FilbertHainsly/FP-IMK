import { Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireVerified?: boolean;
}

export default function ProtectedRoute({ children, requireVerified = false }: ProtectedRouteProps) {
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (requireVerified && user && !user.isVerified) {
    return <Navigate to="/menunggu-verifikasi" replace />;
  }

  return <>{children}</>;
}
