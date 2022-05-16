import { useNavigate } from '@remix-run/react';
import hash from 'hash.js';
import type { ReactNode } from 'react';
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { clearIdentity, getIdentity, setIdentity } from '~/const';
import { ROUTES } from '~/routes';

export type AuthProps = {
  isLogged: boolean;
  signIn: (values: { email: string; password: string }) => boolean;
  signOut: () => void;
  checkAuth: () => boolean;
};

export const AuthContext = createContext<null | AuthProps>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLogged, setIsLogged] = useState(false);
  const navigate = useNavigate();

  const signIn = useCallback((values: { email: string; password: string }) => {
    if (
      values.email === 'test@mail.com' &&
      values.password === '!Password123'
    ) {
      setIsLogged(true);
      setIdentity(hash.sha256().update(values.email).digest('hex'));
      return true;
    } else {
      return false;
    }
  }, []);

  const signOut = useCallback(() => {
    setIsLogged(false);
    clearIdentity();
    navigate(`${ROUTES.ADMIN}`, { replace: true });
  }, [navigate]);

  const checkAuth = useCallback(() => {
    const identity = getIdentity();
    if (identity) {
      return true;
    } else {
      return false;
    }
  }, []);

  const value = useMemo(() => {
    return {
      isLogged,
      signIn,
      signOut,
      checkAuth,
    };
  }, [checkAuth, isLogged, signIn, signOut]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context)
    throw new Error(`useAuth must be used within a AuthContext provider.`);
  return context;
};
