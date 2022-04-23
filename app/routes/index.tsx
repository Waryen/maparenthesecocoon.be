import { PageTitle } from '../components/PageTitle';
import { Link } from '@remix-run/react';
import { PlusIcon } from '@radix-ui/react-icons';
import { GalleryPhotos } from '../components/GalleryPhotos';

export default function Home() {
  const slides = [
    {
      title: 'Massage harmonisant',
      url: 'https://res.cloudinary.com/waryen/image/upload/v1646589041/maparenthesecocoon.be/home/accueil_massage_1_lrfajx.jpg',
    },
    {
      title: 'Massage spécial dos',
      url: 'https://res.cloudinary.com/waryen/image/upload/v1646589042/maparenthesecocoon.be/home/accueil_massage_2_e4xut3.jpg',
    },
    {
      title: 'Soin Reiki',
      url: 'https://res.cloudinary.com/waryen/image/upload/v1646589042/maparenthesecocoon.be/home/accueil_sonotherapie_1_mbvamy.jpg',
    },
    {
      title: 'Soin Lahochi',
      url: 'https://res.cloudinary.com/waryen/image/upload/v1646589042/maparenthesecocoon.be/home/accueil_sonotherapie_2_o33s0u.jpg',
    },
    {
      title: 'Home organising',
      url: 'https://res.cloudinary.com/waryen/image/upload/v1646589204/maparenthesecocoon.be/services/home_organising_2_fo0p4w.jpg',
    },
    {
      title: 'Séance en kinésiologie',
      url: 'https://res.cloudinary.com/waryen/image/upload/v1646589204/maparenthesecocoon.be/services/kinesiologie_1_vdhm1p.jpg',
    },
  ];

  return (
    <>
      <main>
        <div className="lg:grid grid-cols-12 gap-y-4 lg:mx-32 mx-4">
          <div className={'col-span-4'}>
            <PageTitle title={'Les Soins'} />
          </div>
          <div className="w-full col-span-8 lg:mt-8">
            <div className={'text-gray-700'}>
              <p className={'mb-8 text-2xl font-bold'}>
                Équilibre en soi et son foyer, Soins énergétiques, sonothérapie,
                massages, développement personnel, spiritualité, coaching, home
                organising.
              </p>
              <Link to={'/services'} className={'button button--calypso'}>
                <span>VOIR TOUT</span>
              </Link>
            </div>
          </div>
        </div>
        <GalleryPhotos slides={slides} />
        <div
          className={
            'bg-darkVertdeau py-36 mt-24 flex lg:flex-row flex-col items-center lg:justify-around'
          }
        >
          <h3 className={'text-2xl lg:text-4xl text-white'}>
            Vous voulez prendre <br /> rendez-vous?
          </h3>
          <div className={'flex items-center mt-12 lg:mt-0'}>
            <span className={'mr-4 text-white'}>Contactez-moi</span>
            <Link
              to={'/contact'}
              className={
                'bg-transparent border-2 border-white rounded-full w-12 h-12 flex justify-center items-center transform hover:scale-125 focus:scale-125 duration-200'
              }
            >
              <PlusIcon width={25} height={25} color="white" />
              <span className="hidden">Services</span>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
