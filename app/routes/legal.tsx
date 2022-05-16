import { ExternalLinkIcon } from '@radix-ui/react-icons';
import { Link } from '@remix-run/react';
import Layout from '~/components/Layout';
import { PageTitle } from '../components/PageTitle';

export default function Legal() {
  return (
    <Layout>
      <main>
        <div className={'lg:grid grid-cols-12 lg:mx-32 mx-4'}>
          <div className={'col-span-4'}>
            <PageTitle title={'Mentions légales'} />
          </div>
          <div className={'col-span-8 md:mt-24 mt-8'}>
            <div className={'mb-8'}>
              <h3 className={'text-2xl text-darkVertdeau mb-4'}>
                Droits d&apos;auteurs
              </h3>
              <p className={'ml-4'}>
                Le site&nbsp;
                <Link
                  to={'/'}
                  className={'hover:text-darkVertdeau focus:text-darkVertdeau'}
                >
                  maparenthesecocoon.be
                </Link>
                &nbsp;constitue une création protégée par le droit
                d&apos;auteur. Tous les éléments du site, les textes, les photos
                et autres éléments sont protégés par le droit d&apos;auteur.
                Toute tentative de copie, traduction et autres exploitations est
                strictement interdite sans mon autorisation préalable. Toute
                infraction à ces droits entrainera des poursuites civiles ou
                pénales.
              </p>
            </div>
            <div className={'mb-8'}>
              <h3 className={'text-2xl text-darkVertdeau mb-4'}>Coordonnées</h3>
              <p className={'ml-4'}>
                <span>Sandrine Gomand</span>
                <br />
                <a
                  href="mailto:maparenthesecocoon@gmail.com"
                  className={'hover:text-darkVertdeau focus:text-darkVertdeau'}
                >
                  maparenthesecocoon@gmail.com
                </a>
                <br />
                <a
                  href="tel:+32494041494"
                  className={'hover:text-darkVertdeau focus:text-darkVertdeau'}
                >
                  +32 494/04.14.94
                </a>
                <br />
                <span>TVA BE 0644.399.803</span>
                <a
                  href="https://www.facebook.com/maparenthesecocoonsandrine/"
                  target={'_blank'}
                  rel="noreferrer"
                  className={
                    'hover:text-darkVertdeau focus:text-darkVertdeau flex items-center'
                  }
                >
                  Facebook{' '}
                  <ExternalLinkIcon className={'ml-1'} width={20} height={20} />
                </a>
                <a
                  href="https://www.instagram.com/maparenthesecocoon/"
                  target={'_blank'}
                  rel="noreferrer"
                  className={
                    'hover:text-darkVertdeau focus:text-darkVertdeau flex items-center'
                  }
                >
                  Instagram{' '}
                  <ExternalLinkIcon className={'ml-1'} width={20} height={20} />
                </a>
              </p>
            </div>
            <div className={'mb-8'}>
              <h3 className={'text-2xl text-darkVertdeau mb-4'}>Cookies</h3>
              <p className={'ml-4'}>
                Un cookie est un petit fichier stocké par un serveur dans le
                terminal (ordinateur, téléphone, etc.) d’un utilisateur et
                associé à un domaine web (c’est à dire dans la majorité des cas
                à l’ensemble des pages d’un même site web). Ce fichier est
                automatiquement renvoyé lors de contacts ultérieurs avec le même
                domaine.
              </p>
              <p className={'ml-4 mt-4'}>
                Mon site ne dépose aucun cookies sur votre appareil hormis ceux
                qui sont nécessaires au fonctionnement du site. Ces cookies en
                question ne trace pas votre activité sur le web.
              </p>
            </div>
            <div className={'mb-8'}>
              <h3 className={'text-2xl text-darkVertdeau mb-4'}>Vos données</h3>
              <p className={'ml-4'}>
                Vos données personnelles que vous m&apos;envoyées via le
                formulaire de contact du site web ne servent uniquement
                qu&apos;à me permettre de vous contacter en retour. Lorsque vous
                utilisez le formulaire de contact, un e-mail m&apos;est envoyé
                sur ma boîte e-mail de contact professionnel. En aucuns cas vos
                données sont transmises ou vendues à des tiers.
              </p>
              <p className={'ml-4 mt-4'}>
                Si vous désirez en savoir plus sur l&apos;exploitation de vos
                données, n&apos;hésitez pas à m&apos;envoyer un e-mail à
                l&apos;adresse suivante:{' '}
                <a
                  className={'hover:text-darkVertdeau focus:text-darkVertdeau'}
                  href="mailto:maparenthesecocoon@gmail.be"
                >
                  maparenthesecocoon@gmail.com
                </a>
                .
              </p>
              <p className={'ml-4 mt-4'}>
                Pour plus d&apos;informations je vous invite également à
                consulter le site web de{' '}
                <a
                  href="https://www.autoriteprotectiondonnees.be/citoyen/vie-privee/qu-est-ce-que-c-est-"
                  target={'_blank'}
                  rel={'noreferrer'}
                  className={
                    'hover:text-darkVertdeau focus:text-darkVertdeau flex items-center'
                  }
                >
                  L&apos;autorité de protection des données{' '}
                  <ExternalLinkIcon className={'ml-1'} width={20} height={20} />
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
