import { Link } from '@remix-run/react';
import { useLocation } from '@remix-run/react';
import { useCallback, useEffect } from 'react';
import { ExternalLinkIcon } from '@radix-ui/react-icons';
import { FocusTrap } from '@headlessui/react';
import { useModal } from '~/context/ModalContext';

const path = {
  home: '/',
  about: '/about',
  contact: '/contact',
  services: '/services',
};

const Nav = () => {
  const { closeModal } = useModal();

  const location = useLocation();

  const closeModalOnEscape = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    },
    [closeModal]
  );

  useEffect(() => {
    const homeLink = document.querySelector('#nav-home') as HTMLAnchorElement;
    const aboutLink = document.querySelector('#nav-about') as HTMLAnchorElement;
    const contactLink = document.querySelector(
      '#nav-contact'
    ) as HTMLAnchorElement;
    const servicesLink = document.querySelector(
      '#nav-services'
    ) as HTMLAnchorElement;

    if (location.pathname === path.home) {
      homeLink.focus();
    } else if (location.pathname === path.about) {
      aboutLink.focus();
    } else if (location.pathname === path.contact) {
      contactLink.focus();
    } else if (location.pathname === path.services) {
      servicesLink.focus();
    }
  }, [location.pathname]);

  useEffect(() => {
    document.addEventListener('keydown', closeModalOnEscape);

    return () => document.removeEventListener('keydown', closeModalOnEscape);
  }, [closeModalOnEscape]);

  return (
    <FocusTrap>
      <nav
        id="nav"
        className="fixed z-50 md:px-36 md:py-16 p-8 top-0 left-0 w-full h-screen bg-gray-100 grid grid-cols-2 grid-rows-2"
      >
        {/** nav menu */}
        <div className="col-span-1 md:self-end md:row-start-1 md:row-end-3 row-start-1 row-end-1">
          <ul className="md:text-5xl text-2xl" role="navigation">
            <li
              className={`md:mb-10 mb-6 ${
                location.pathname != path.home
                  ? 'transition-transform duration-150 ease-in-out transform-gpu hover:translate-x-4 focus:translate-x-4'
                  : null
              }`}
            >
              <Link
                to={'/'}
                className={`${
                  location.pathname == path.home ? 'font-black' : 'font-normal'
                } hover:text-darkVertdeau focus:text-darkVertdeau tracking-wider text-gray-800`}
                id="nav-home"
                onClick={() => closeModal()}
              >
                {location.pathname == path.home ? (
                  <span className="text-xs relative bottom-6">01</span>
                ) : null}{' '}
                Accueil
              </Link>
            </li>
            <li
              className={`md:mb-10 mb-6 ${
                location.pathname != path.about
                  ? 'transition-transform duration-150 ease-in-out transform-gpu hover:translate-x-4 focus:translate-x-4'
                  : null
              }`}
            >
              <Link
                to={'/about'}
                className={`${
                  location.pathname == path.about
                    ? 'font-black'
                    : 'font-extralight'
                } hover:text-darkVertdeau focus:text-darkVertdeau tracking-wider text-gray-800`}
                id="nav-about"
                onClick={() => closeModal()}
              >
                {location.pathname == path.about ? (
                  <span className="text-xs relative bottom-6">02</span>
                ) : null}{' '}
                A propos
              </Link>
            </li>
            <li
              className={`md:mb-10 mb-6 ${
                location.pathname != path.contact
                  ? 'transition-transform duration-150 ease-in-out transform-gpu hover:translate-x-4 focus:translate-x-4'
                  : null
              }`}
            >
              <Link
                to={'/contact'}
                className={`${
                  location.pathname == path.contact
                    ? 'font-black'
                    : 'font-extralight'
                } hover:text-darkVertdeau focus:text-darkVertdeau tracking-wider text-gray-800`}
                id="nav-contact"
                onClick={() => closeModal()}
              >
                {location.pathname == path.contact ? (
                  <span className="text-xs relative bottom-6">03</span>
                ) : null}{' '}
                Contact
              </Link>
            </li>
            <li
              className={
                location.pathname != path.services
                  ? 'transition-transform duration-150 ease-in-out transform-gpu hover:translate-x-4 focus:translate-x-4'
                  : ''
              }
            >
              <Link
                to={'/services'}
                className={`${
                  location.pathname == path.services
                    ? 'font-black'
                    : 'font-extralight'
                } hover:text-darkVertdeau focus:text-darkVertdeau tracking-wider text-gray-800`}
                id="nav-services"
                onClick={() => closeModal()}
              >
                {location.pathname == path.services ? (
                  <span className="text-xs relative bottom-6">04</span>
                ) : null}{' '}
                Services
              </Link>
            </li>
          </ul>
        </div>
        {/** close menu button */}
        <div className="col-span-1 justify-self-end self-top row-start-1 row-end-1">
          <div className={'relative md:-top-7 top-5'}>
            <button
              aria-label="Fermer le menu"
              id="nav-close"
              className="h-12 w-12 flex rounded-full hover:bg-vertdeau focus:bg-vertdeau"
              onClick={() => closeModal()}
            >
              <span
                aria-hidden
                className={
                  'absolute w-8 h-0.5 bg-black transform-gpu rotate-45'
                }
                style={{ left: 8, top: 22 }}
              />
              <span
                aria-hidden
                className={
                  'absolute w-8 h-0.5 bg-black transform-gpu -rotate-45'
                }
                style={{ left: 8, top: 22 }}
              />
            </button>
          </div>
        </div>
        {/** take an appointment */}
        <div className="sm:mb-0 mb-28 md:col-span-1 col-span-2 md:self-end md:justify-self-end self-end row-start-2 row-end-2">
          <div>
            <h3 className="text-xl">Prendre rendez-vous</h3>
            <div className="md:mb-8 mb-4 w-auto h-0.5 bg-vertdeau" />
            <div className="md:mb-8 mb-4 flex flex-col leading-6">
              <a
                href="mailto:maparenthesecocoon@gmail.be"
                id="nav-mail"
                className="hover:text-darkVertdeau focus:text-darkVertdeau w-max"
              >
                maparenthesecocoon@gmail.com
              </a>
              <a
                href="tel:+32494041494"
                id="nav-phone"
                className="hover:text-darkVertdeau focus:text-darkVertdeau w-max"
              >
                +32 494/04.14.94
              </a>
            </div>
            <div className="flex flex-col leading-6">
              <a
                href="https://www.facebook.com/maparenthesecocoonsandrine/"
                target="_blank"
                rel="noreferrer"
                id="nav-fb"
                className="hover:text-darkVertdeau focus:text-darkVertdeau w-max flex items-center"
              >
                Facebook{' '}
                <ExternalLinkIcon className={'ml-1'} width={20} height={20} />
              </a>
              <a
                href="https://www.instagram.com/maparenthesecocoon/"
                target="_blank"
                rel="noreferrer"
                id="nav-insta"
                className="hover:text-darkVertdeau focus:text-darkVertdeau w-max flex items-center"
              >
                Instagram{' '}
                <ExternalLinkIcon className={'ml-1'} width={20} height={20} />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </FocusTrap>
  );
};

export { Nav };
