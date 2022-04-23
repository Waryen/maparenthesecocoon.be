import { Link } from "@remix-run/react";
import { useState } from "react";

const Footer = () => {
  const [date] = useState(new Date().getFullYear());

  return (
    <footer className="bg-gray-100 lg:pt-24 pt-12">
      <div className={"lg:flex lg:flex-wrap lg:mx-32 mx-4"}>
        {/* logo & social media */}
        <div className="flex flex-col lg:w-2/6 mb-6 mt-6 lg:mt-10 justify-evenly items-center lg:justify-start">
          <img
            src="https://res.cloudinary.com/waryen/image/upload/v1646589064/maparenthesecocoon.be/logo/logo-black_mgwmzn.svg"
            alt="Logo de ma parenthèse cocoon"
            width={100}
            height={100}
          />
          <ul className="mt-8">
            <li className="mb-2">
              <a
                href="https://www.instagram.com/maparenthesecocoon/"
                target="_blank"
                rel="noreferrer"
                className={
                  "bg-transparent flex p-2 rounded-full hover:bg-vertdeau focus:bg-vertdeau"
                }
              >
                <img
                  src="https://api.iconify.design/mdi:instagram.svg"
                  alt="Instagram de ma parenthèse cocoon"
                  width={20}
                  height={20}
                  id={"insta-svg"}
                />
                <span className="hidden">Instagram</span>
              </a>
            </li>
            <li className="mt-2">
              <a
                href="https://www.facebook.com/maparenthesecocoonsandrine/"
                target="_blank"
                rel="noreferrer"
                className={
                  "bg-transparent flex p-2 rounded-full hover:bg-vertdeau focus:bg-vertdeau"
                }
              >
                <img
                  src="https://api.iconify.design/mdi:facebook.svg"
                  alt="Facebook de ma parenthèse cocoon"
                  width={20}
                  height={20}
                  id={"facebook-svg"}
                />
              </a>
            </li>
          </ul>
        </div>
        {/* take an appointment & places */}
        <div className="mx-4 mb-12 lg:mt-10 lg:w-3/6 flex flex-col lg:flex-row lg:flex-wrap">
          <div className="mb-6 lg:w-full">
            <h3 className="mb-4 text-base inline-block border-b-2 border-vertdeau">
              Prendre rendez-vous
            </h3>
            <address className="flex flex-col leading-6 text-sm">
              <a
                href="mailto:maparenthesecocoon@gmail.com"
                id="nav-mail"
                className="w-max hover:text-darkVertdeau focus:text-darkVertdeau not-italic"
              >
                maparenthesecocoon@gmail.com
              </a>
              <a
                href="tel:+32494041494"
                id="nav-phone"
                className="w-max hover:text-darkVertdeau focus:text-darkVertdeau not-italic"
              >
                +32 494/04.14.94
              </a>
            </address>
          </div>
          <div className="flex flex-col lg:flex-row">
            <div className="mb-6 lg:mr-8">
              <h3 className="mb-4 inline-block border-b-2 border-vertdeau text-base">
                Mon domicile
              </h3>
              <p className="text-sm mb-2">Tous les jours</p>
              <address className="flex flex-col">
                <span className="not-italic text-sm">
                  <a
                    href="https://goo.gl/maps/W4HrsYyyrarHb4ka7"
                    target={"_blank"}
                    rel="noreferrer"
                    className="hover:text-darkVertdeau focus:text-darkVertdeau"
                  >
                    Rue du Chemin de Fer, 20
                  </a>
                </span>
                <span className="not-italic text-sm">1300 Wavre</span>
              </address>
            </div>
            <div>
              <h3 className="mb-4 inline-block border-b-2 border-vertdeau text-base">
                Centre Triskel
              </h3>
              <p className="text-sm mb-2">Tous les jours</p>
              <address className="flex flex-col">
                <span className="not-italic text-sm">
                  <a
                    href="https://goo.gl/maps/FnkZZDSkMn9Yx7m29"
                    target={"_blank"}
                    rel="noreferrer"
                    className="hover:text-darkVertdeau focus:text-darkVertdeau"
                  >
                    Rue de l&apos;Eglise, 18
                  </a>
                </span>
                <span className="not-italic text-sm">1450 Blanmont</span>
              </address>
            </div>
          </div>
        </div>
        {/** white line */}
        <div
          aria-hidden={true}
          className={"bg-gray-400 w-full"}
          style={{ height: 0.5 }}
        />
        {/** copyrights & credits */}
        <div className="mb-4 lg:mt-10 mt-8 flex flex-col lg:flex-row flex-wrap">
          <span className="w-max text-xs lg:mr-8">
            © {date} Ma Parenthèse Cocoon
          </span>
          <Link
            to={"/legal"}
            className="w-max text-xs mt-2 lg:mr-8 lg:mt-0 hover:text-darkVertdeau focus:text-darkVertdeau"
          >
            Mentions légales
          </Link>
          <span className="w-full lg:w-max mt-2 lg:mt-0 text-xs">
            Made by{" "}
            <a
              href="https://www.linkedin.com/in/jonathan-gomand/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-darkVertdeau"
            >
              @Jonathan
            </a>{" "}
            &amp;{" "}
            <a
              href="https://www.linkedin.com/in/clem-remy-8a25b4205/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-darkVertdeau"
            >
              @Clem
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
