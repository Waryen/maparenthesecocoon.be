import { Outlet } from '@remix-run/react';
import { AdminLayout } from '~/components/AdminLayout';
import { useAuth } from '~/context/AuthContext';

export default function Index() {
  const { signOut } = useAuth();

  return (
    <AdminLayout shouleBeLogged>
      <h1>Dashboard</h1>
      <button onClick={() => signOut()}>Se déconnecter</button>
      <Outlet />
    </AdminLayout>
  );
}
