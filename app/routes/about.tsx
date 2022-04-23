import { PageTitle } from '../components/PageTitle';
import { Link } from '@remix-run/react';
import { BottomBanner } from '../components/BottomBanner';

export default function About() {
  return (
    <>
      <main>
        <div className="lg:grid grid-cols-12 lg:mx-32 mx-4">
          <div className={'col-span-4'}>
            <PageTitle title={'Qui suis-je ?'} />
          </div>
          <div className="w-full col-span-8 lg:mt-8">
            <h3
              className={'uppercase text-lg text-gray-700 tracking-wide mb-8'}
            >
              Sandrine Gomand
            </h3>
            <div className={'text-gray-700'}>
              <p className={'mb-8'}>
                Depuis toute petite je me sens connectée à ce monde subtil qui
                nous entoure. Ayant exercée longtemps dans le domaine médical,
                je me suis rendue compte très vite que soigner le corps
                physique, uniquement, n&apos;est pas suffisant. Dés lors, je me
                suis intéressée aux thérapies alternatives, médecines douces,
                massages, soins énergétiques afin d&apos;accompagner l&apos;être
                dans sa globalité corps...âmes...esprit.
              </p>
              <p></p>
              <p className={'mb-8'}>
                Forte de mes diverses formations, lectures, rencontres,
                expériences personnelles...Je quitte donc ce job nourissier pour
                me tourner vers ce métier passion, en rassemblant mes
                compétences afin de vous guider dans votre propre cheminement
                personnel, et évoluer dans votre vie qui vous correspond.
              </p>
              <Link to={'/services'} className={'button button--calypso'}>
                <span>Découvrir</span>
              </Link>
            </div>
          </div>
        </div>
        <BottomBanner
          direction={'right'}
          title={'Une question ?'}
          subtitle={
            "N'hésitez pas à me contacter pour tout renseignement supplémentaire sur les soins proposés, les formations ou sur mon parcours personnel, c'est avec plaisir que j'y répondrai."
          }
          link={'Contactez-moi'}
          imgUrl={
            'https://res.cloudinary.com/waryen/image/upload/v1646588932/maparenthesecocoon.be/about/sonotherapie_1_lbmn5b.jpg'
          }
        />
      </main>
    </>
  );
}
