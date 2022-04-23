import { Link } from '@remix-run/react';
import React, { useRef } from 'react';
import { useModal } from '~/context/ModalContext';
import { Nav } from './Nav';

const Header = () => {
  const headerRef = useRef<HTMLElement>(null);
  const { toggleModal, isModalOpen } = useModal();

  return (
    <header
      className={
        'sticky top-0 bg-grey-100 bg-opacity-50 backdrop-filter backdrop-blur-sm flex justify-between items-center lg:px-32 px-8 z-40'
      }
      ref={headerRef}
    >
      <h1>
        <Link to="/">
          <img
            src="https://res.cloudinary.com/waryen/image/upload/v1646589064/maparenthesecocoon.be/logo/logo-black_mgwmzn.svg"
            alt="Logo de ma parenthèse cocoon"
            width={125}
            height={125}
            className="my-4"
          />
        </Link>
      </h1>
      <div>
        <button
          aria-label="Ouvrir le menu de navigation"
          className="flex flex-col items-end p-2 rounded-full hover:bg-vertdeau focus:bg-vertdeau"
          onClick={() => toggleModal()}
        >
          <div aria-hidden="true" className="w-8 h-0.5 bg-black my-1" />
          <div aria-hidden="true" className="w-8 h-0.5 bg-black my-1" />
          <div aria-hidden="true" className="w-5 h-0.5 bg-black my-1" />
        </button>
      </div>
      {isModalOpen && <Nav />}
    </header>
  );
};

export default Header;
