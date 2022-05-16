import { useNavigate } from '@remix-run/react';
import type { ReactNode } from 'react';
import { useEffect } from 'react';
import { useAuth } from '~/context/AuthContext';
import { ROUTES } from '~/routes';

type AdminLayoutProps = {
  children: ReactNode;
  shouleBeLogged?: boolean;
};

export const AdminLayout = ({ children, shouleBeLogged }: AdminLayoutProps) => {
  const { checkAuth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (shouleBeLogged && !checkAuth()) {
      navigate(`${ROUTES.ADMIN}`, { replace: true });
    }
  }, [checkAuth, navigate, shouleBeLogged]);

  return <>{children}</>;
};
