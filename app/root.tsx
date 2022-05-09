import type { LinksFunction, MetaFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import { SnackbarProvider } from 'notistack';
import Footer from './components/Footer';
import Header from './components/Header';
import { ModalProvider } from './context/ModalContext';
import tailwindcss from './styles/tailwind.css';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Ma Parenthèse Cocoon',
  description:
    'Développement personnel via des techniques telles que la kinésiologie, le Reiki ou encore des massages.',
  viewport: 'width=device-width,initial-scale=1',
  'og:title': 'Ma Parenthèse Cocoon',
  'og:description':
    'Développement personnel via des techniques telles que la kinésiologie, le Reiki ou encore des massages.',
  'og:url': 'https://maparenthesecocoon.be',
  'og:type': 'website',
  'og:image':
    'https://res.cloudinary.com/waryen/image/upload/v1646589064/maparenthesecocoon.be/logo/logo-black_mgwmzn.svg',
});

export const links: LinksFunction = () => {
  return [
    {
      rel: 'stylesheet',
      href: tailwindcss,
    },
    {
      rel: 'canonical',
      href: 'https://maparenthesecocoon.be',
    },
  ];
};

export default function App() {
  return (
    <html lang="fr">
      <head>
        <Meta />
        <Links />
        <script
          defer
          data-domain="maparenthesecocoon.be"
          src="https://plausible.io/js/plausible.js"
        ></script>
      </head>
      <body>
        <SnackbarProvider>
          <ModalProvider>
            <Header />
            <Outlet />
            <Footer />
            <ScrollRestoration />
            <Scripts />
            <LiveReload />
          </ModalProvider>
        </SnackbarProvider>
      </body>
    </html>
  );
}
