import type { LinksFunction, MetaFunction } from '@remix-run/node';
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import Header from './components/Header';
import Footer from './components/Footer';
import tailwindcss from './styles/tailwind.css';
import { ModalProvider } from './context/ModalContext';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Ma Parenthèse Cocoon',
  description:
    'Développement personnel via des techniques telles que la kinésiologie, le Reiki ou encore des massages.',
  viewport: 'width=device-width,initial-scale=1',
});

export const links: LinksFunction = () => {
  return [
    {
      rel: 'stylesheet',
      href: tailwindcss,
    },
  ];
};

export default function App() {
  return (
    <html lang="fr">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <ModalProvider>
          <Header />
          <Outlet />
          <Footer />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </ModalProvider>
      </body>
    </html>
  );
}

export function CatchBoundary() {
  return (
    <html lang="fr">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <ModalProvider>
          <Header />
          <main className="flex flex-col items-center justify-center">
            <p className="text-3xl">Erreur 404</p>
            <p role={'alert'} className="text-xl mb-4">
              Whoops! Cette page n&apos;existe pas.
            </p>
            <Link to={'/'} className="button button--calypso">
              <span>Accueil</span>
            </Link>
          </main>
          <Footer />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </ModalProvider>
      </body>
    </html>
  );
}
