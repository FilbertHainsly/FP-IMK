import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';

export type UserRole = 'tunanetra' | 'relawan';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  isVerified: boolean;
  avatar?: string;
  joinedDate?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string, role: UserRole) => Promise<void>;
  logout: () => void;
  setUserRole: (role: UserRole) => void;
  setVerified: (verified: boolean) => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    const stored = localStorage.getItem('temannetra_user');
    return stored ? JSON.parse(stored) : null;
  });
  const [isLoading, setIsLoading] = useState(false);

  const persistUser = (u: User | null) => {
    setUser(u);
    if (u) {
      localStorage.setItem('temannetra_user', JSON.stringify(u));
    } else {
      localStorage.removeItem('temannetra_user');
    }
  };

  const login = useCallback(async (email: string, _password: string) => {
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    const mockUser: User = {
      id: '1',
      name: 'User TemanNetra',
      email,
      role: 'tunanetra',
      isVerified: true,
      joinedDate: 'Mar 2024',
    };
    persistUser(mockUser);
    setIsLoading(false);
  }, []);

  const register = useCallback(async (name: string, email: string, _password: string, role: UserRole) => {
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    const mockUser: User = {
      id: '2',
      name,
      email,
      role,
      isVerified: false,
      joinedDate: 'Jun 2026',
    };
    persistUser(mockUser);
    setIsLoading(false);
  }, []);

  const logout = useCallback(() => {
    persistUser(null);
  }, []);

  const setUserRole = useCallback((role: UserRole) => {
    setUser((prev) => {
      if (!prev) return prev;
      const updated = { ...prev, role };
      localStorage.setItem('temannetra_user', JSON.stringify(updated));
      return updated;
    });
  }, []);

  const setVerified = useCallback((verified: boolean) => {
    setUser((prev) => {
      if (!prev) return prev;
      const updated = { ...prev, isVerified: verified };
      localStorage.setItem('temannetra_user', JSON.stringify(updated));
      return updated;
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        register,
        logout,
        setUserRole,
        setVerified,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
