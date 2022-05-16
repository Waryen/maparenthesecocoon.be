import { PageTitle } from '../components/PageTitle';
import { BottomBanner } from '../components/BottomBanner';
import { Accordion } from '@radix-ui/react-accordion';
import { AccordionEls } from '../components/AccordionEls';
import { useState } from 'react';
import { Link } from '@remix-run/react';
import { useWindowSize } from '@reach/window-size';
import Layout from '~/components/Layout';

export default function Services() {
  const [current, setCurrent] = useState(0);
  const { width } = useWindowSize();

  return (
    <Layout>
      <main>
        {/*Soins de soi*/}
        <div className={'grid lg:grid-cols-12 grid-cols-1 lg:mx-32 mx-4'}>
          <div className={'col-span-4'}>
            <PageTitle
              title={'Soins de soi'}
              subtitle={'Équilibre corps... âmes... esprit'}
            />
          </div>
          <div className={'col-span-8'}>
            <Accordion type={'single'} collapsible>
              <AccordionEls
                id={'item-1'}
                num={'1.'}
                value={'item-1'}
                header={'Séance sonothérapique'}
                current={current}
                setCurrent={setCurrent}
              >
                <div className={'flex justify-center mb-4'}>
                  <img
                    src={
                      'https://res.cloudinary.com/waryen/image/upload/v1646588932/maparenthesecocoon.be/about/sonotherapie_1_lbmn5b.jpg'
                    }
                    alt={'Séance sonothérapique'}
                    width={width ? 250 : 300}
                    height={width ? 250 : 300}
                  />
                </div>
                <div>
                  <p>
                    Ce soin sonore aux bols tibétains vous plonge dans un état
                    de relaxation profonde. Les sons et les vibrations agissent
                    sur le corps physique, émotionnel, mental et spirituel.
                    Notre corps étant composé d&apos;environ 60 % d&apos;eau, en
                    diffusant les vibrations des bols dans celui-ci, les sons
                    purifient l&apos;eau présente dans notre organisme, elles
                    ressourcent et harmonisent nos cellules. Bienfaits:
                    apaisement psycho-sensoriel et relaxation puissante (
                    burn-out, stress, épuisement ...). Amélioration du sommeil.
                    Favorise la mémorisation et la concentration. Evacuation
                    d&apos;émotions bloquées.Diminution de douleurs physiques.
                    Pour les enfants, adolescents et adultes.
                  </p>
                </div>
                <div className={'mt-4 border-t-2 pt-2'}>
                  <p>Durée variable de 50 minutes à 1h.</p>
                  <p>Prix 75 €.</p>
                </div>
              </AccordionEls>
              <AccordionEls
                id={'item-2'}
                num={'2.'}
                value={'item-2'}
                header={'Soin lahochi'}
                current={current}
                setCurrent={setCurrent}
              >
                <div className={'flex justify-center mb-4'}>
                  <img
                    src={
                      'https://res.cloudinary.com/waryen/image/upload/v1646589204/maparenthesecocoon.be/services/lahochi_2_yr3jvx.jpg'
                    }
                    alt={'Soin lahochi'}
                    width={width ? 250 : 300}
                    height={width ? 250 : 300}
                  />
                </div>
                <div>
                  <p className={'mb-2'}>
                    Il s&apos;agit d&apos;une technique de soin énergétique par
                    imposition des mains au travers le vêtements ou à distance,
                    différente du reiki. c&apos;est une énergie au taux
                    vibratoire très élevé. Le &quot; la &quot; fait référence à
                    la lumière, le &quot; ho &quot; au mouvement et le &quot;
                    chi &quot; à l&apos;énergie.{' '}
                  </p>
                  <p className={'mb-2'}>
                    Bienfaits: Ouvre et nettoie le système des chakras.
                    Réaligne, revitalise les structures du corps. Relaxation
                    profonde et lâcher prise. Diminution du stress.{' '}
                  </p>
                  <p>Pour les enfants, adolescents et adultes. </p>
                </div>
                <div className={'mt-4 border-t-2 pt-2'}>
                  <p>Durée variable de 50 à 55 minutes.</p>
                  <p>Prix: 65 € en présentiel, 40 € à distance.</p>
                </div>
              </AccordionEls>
              <AccordionEls
                id={'item-3'}
                num={'3.'}
                value={'item-3'}
                header={'Soin reiki'}
                current={current}
                setCurrent={setCurrent}
              >
                <div className={'flex justify-center mb-4'}>
                  <img
                    src={
                      'https://res.cloudinary.com/waryen/image/upload/v1646589204/maparenthesecocoon.be/services/reiki_1_hwvdnm.jpg'
                    }
                    alt={'Soin reiki'}
                    width={width ? 250 : 300}
                    height={width ? 250 : 300}
                  />
                </div>
                <div>
                  <p className={'mb-2'}>
                    Le reiki est une technique de soin énergétique japonaise par
                    imposition des mains, au travers des vêtements ou à distance
                    la conscience supérieure et ki signifie la force vitale. En
                    tant que Maître Reiki, vous recevez un soin puissant à
                    l&apos;aide des symboles et des cristaux.
                  </p>
                  <p className={'mb-2'}>
                    Bienfaits: Dissout le blocages énergétiques. Travaille sur
                    les symptômes et leurs causes. Equilibration des chakras.
                    Libération d&apos;émotions réprimées. Abaisse le niveau de
                    stress et d&apos;anxiété. Burn-out. Accompagne dans le
                    développement personnel. Relaxation profonde et lâcher
                    prise.
                  </p>
                  <p>Pour les enfants, adolescents et adultes.</p>
                </div>
                <div className="mt-4 border-t-2 pt-2">
                  <p>Durée variable de 50 minutes à 1 heure.</p>
                  <p>Prix: 65 € en présentiel, 40 € à distance.</p>
                </div>
              </AccordionEls>
              <AccordionEls
                id={'item-4'}
                num={'4.'}
                value={'item-4'}
                header={'Soin harmonisation énergétique de la personne'}
                current={current}
                setCurrent={setCurrent}
              >
                <div className={'flex justify-center mb-4'}>
                  <img
                    src={
                      'https://res.cloudinary.com/waryen/image/upload/v1646589204/maparenthesecocoon.be/services/harmonisation_energetique_de_la_personne_1_g3w86q.jpg'
                    }
                    alt={'placeholder'}
                    width={width ? 250 : 300}
                    height={width ? 250 : 300}
                  />
                </div>
                <div className={'mb-4'}>
                  <p className={'mb-2'}>
                    Ce soin consiste, dans un premier temps à tester la présence
                    sur la personne de certains phénomènes ( entités, magies,
                    mémoires ...) et de proposer ensuite le dégagement. Dans un
                    deuxième temps et si nécessaire, il est possible
                    d&apos;approfondir le travail en déprogrammant les schémas
                    anciens liés à ces mémoires. Le test se fait à l&apos;aide
                    de mon pendule. La séance se déroule dans le respect des
                    émotions de la personne et en toute bienveillance.
                  </p>
                  <p>Pour les enfants, adolescents et adultes.</p>
                </div>
                <div className={'border-t-2 pt-2'}>
                  <p>Durée variable, jusqu&apos;à 1 heure.</p>
                  <p>Prix: 75 € ( en présentiel, ou à distance ).</p>
                </div>
              </AccordionEls>
              <AccordionEls
                id={'item-5'}
                num={'5.'}
                value={'item-5'}
                header={'Chamanisme'}
                current={current}
                setCurrent={setCurrent}
              >
                <div>En cours de formation</div>
              </AccordionEls>
              <AccordionEls
                id={'item-6'}
                num={'6.'}
                value={'item-6'}
                header={'Séance Coaching de vie'}
                current={current}
                setCurrent={setCurrent}
              >
                <div>En cours de formation</div>
              </AccordionEls>{' '}
              <AccordionEls
                id={'item-7'}
                num={'7.'}
                value={'item-7'}
                header={'Séance en Kinésiologie'}
                current={current}
                setCurrent={setCurrent}
              >
                <div className={'flex justify-center mb-4'}>
                  <img
                    src={
                      'https://res.cloudinary.com/waryen/image/upload/v1646589204/maparenthesecocoon.be/services/kinesiologie_1_vdhm1p.jpg'
                    }
                    alt={'placeholder'}
                    width={width ? 250 : 300}
                    height={width ? 250 : 300}
                  />
                </div>
                <div className="mb-4">
                  <p className="mb-2">
                    La kinésiologie est une technique de ré équilibrage
                    psycho-émotionnelle. Elle s&apos;attache au bien être global
                    de la personne en tenant compte des aspects physique,
                    émotionnel et mental de la personne. Détecter et lever les
                    déséquilibres et éveiller le potentiel de l&apos;individu.
                    Formée à deux techniques Three In One Concepts et Touch For
                    Healt, j&apos;utilise le test musculaire afin d&apos;établir
                    un dialogue direct avec le corps. Il permet d&apos;accéder à
                    la mémoire du corps, d&apos;identifier les facteurs
                    contribuant aux blocages et la nature des corrections
                    nécessaires pour les lever. Je m&apos;aide également des
                    Fleurs de Bach.
                  </p>
                  <p className="mb-2">
                    Bienfaits: Aide sur des problématiques physiques: douleurs,
                    maladie... et psycho-émotionnelles: stress, peurs, phobies,
                    anxiété, difficultés d&apos;apprentissage, sommeil,
                    alimentation...
                  </p>
                  <p className="mb-2">
                    Elle améliore la gestion du stress, la communication avec
                    soi et l&apos;autre, l&apos;estime de soi, la prise de
                    décisions. Aide à comprendre les cause du mal être, trouver
                    des réponses, des solutions et atteindre ses objectifs.
                  </p>
                  <p>Pour les enfants, adolescents et adultes.</p>
                </div>
                <div className={'border-t-2 pt-2'}>
                  <p>Durée variable.</p>
                  <p>Prix: 75 €.</p>
                </div>
              </AccordionEls>
              <AccordionEls
                id={'item-8'}
                num={'8.'}
                value={'item-8'}
                header={'Massage harmonisant'}
                current={current}
                setCurrent={setCurrent}
              >
                <div className={'flex justify-center mb-4'}>
                  <img
                    src={
                      'https://res.cloudinary.com/waryen/image/upload/v1646589041/maparenthesecocoon.be/home/accueil_massage_1_lrfajx.jpg'
                    }
                    alt={'Massage harmonisant'}
                    width={width ? 250 : 300}
                    height={width ? 250 : 300}
                  />
                </div>
                <div className={'mb-4'}>
                  <p className="mb-2">
                    Il s&apos;agit d&apos;un massage global traditionnel et
                    holistique, harmonisant aux huiles végétales bio, accompagné
                    d&apos;une formule aux huiles essentielles personnalisée (
                    sauf si allergie). Alliant plusieurs techniques de
                    mouvements pour vous apporter une détente profonde du corps
                    et de l&apos;esprit, lâcher prise.
                  </p>
                  <p className="mb-2">
                    Bienfaits: effet apaisant psycho-sédatif, la nervosité et
                    l&apos;anxiété s&apos;estompent. Se débarrasser du poids
                    intérieur. Détente des muscles et diminution des tensions.
                    Stimulation de la circulation sanguine et lymphatique.
                    Fibromyalgie.
                  </p>
                  <p>Pour les adolescents et adultes</p>
                </div>
                <div className={'border-t-2 pt-2'}>
                  <p>Durée: 55 minutes ( de massage réel ).</p>
                  <p>Prix: 65 €.</p>
                </div>
              </AccordionEls>
              <AccordionEls
                id={'item-9'}
                num={'9.'}
                value={'item-9'}
                header={'Massage spécial dos'}
                current={current}
                setCurrent={setCurrent}
              >
                <div className={'flex justify-center mb-4'}>
                  <img
                    src={
                      'https://res.cloudinary.com/waryen/image/upload/v1646589042/maparenthesecocoon.be/home/accueil_massage_2_e4xut3.jpg'
                    }
                    alt={'placeholder'}
                    width={width ? 250 : 300}
                    height={width ? 250 : 300}
                  />
                </div>
                <div className="mb-4">
                  <p className="mb-2">
                    Il s&apos;agit d&apos;un massage qui recherche le
                    relâchement des muscles et des fascias ( membranes entourant
                    les muscles ) dans la zone dos, nuque et épaule. Le but
                    étant de donner plus d&apos;espace aux muscles et provoquer
                    une réduction notable de la douleur. Se pratique à
                    l&apos;aide de beurre de karité permettant d&apos;agripper
                    et d&apos;étirer les muscles et huiles essentielles anti
                    inflammatoires si nécessaire.
                  </p>
                  <p className="mb-2">
                    Bienfaits: réduction de l&apos;inflammation. Décongestion
                    des tissus. Augmente l&apos;amplitude de mouvements.
                    Diminution de la douleur, détente et apaisement.{' '}
                  </p>
                  <p>Pour les adolescents et adultes.</p>
                </div>
                <div className={'border-t-2 pt-2'}>
                  <p>Durée: 55 minutes ( de massage réel ).</p>
                  <p>Prix: 65 €.</p>
                </div>
              </AccordionEls>
              <AccordionEls
                num={'10.'}
                value={'item-10'}
                header={'Massage aux pierres chaudes'}
                id={'item-10'}
                current={current}
                setCurrent={setCurrent}
              >
                <div className={'flex justify-center mb-4'}>
                  <img
                    src={
                      'https://res.cloudinary.com/waryen/image/upload/v1646589204/maparenthesecocoon.be/services/massage_pierres_chaudes_3_hoocm8.jpg'
                    }
                    alt={'placeholder'}
                    width={width ? 250 : 300}
                    height={width ? 250 : 300}
                  />
                </div>
                <div>
                  <p className={'mb-2'}>
                    Cette technique de massage alterne une série de mouvements
                    manuels avec les pierres de basaltes chauffées qui vous
                    enveloppe d&apos;une chaleur douce et saine; celles ci vous
                    apportent une relaxation profonde, détente musculaire.
                    Harmonisation du corps et de l&apos;esprit.
                  </p>
                  <p className="mb-2">
                    Bienfaits: diminution des tensions musculaire. Fibromyalgie.
                    Arthrose. Rhumatisme. Relaxation et lâcher prise.
                  </p>
                  <p>Pour les adolescents et adultes.</p>
                </div>
                <div className="mt-4 border-t-2 pt-2">
                  <p>Durée: 55 minutes ( de massage réel ).</p>
                  <p>Prix: 65 €.</p>
                </div>
              </AccordionEls>
              <AccordionEls
                num={'11.'}
                value={'item-11'}
                header={'Massage duo'}
                id={'item-11'}
                current={current}
                setCurrent={setCurrent}
              >
                <div className={'flex justify-center mb-4'}>
                  <img
                    src={
                      'https://res.cloudinary.com/waryen/image/upload/v1646589204/maparenthesecocoon.be/services/massage_duo_g68aoq.jpg'
                    }
                    alt={'placeholder'}
                    width={width ? 250 : 300}
                    height={width ? 250 : 300}
                  />
                </div>
                <div>
                  <p>
                    Le massage duo est une massage global aux huiles végétales
                    pour deux personnes, en couple ou ami (e)s effectué dans la
                    même séance. Les deux personnes profitent d&apos;un moment
                    de détente ensemble, chacun dans sa bulle de bien être. Ce
                    soin vous est proposé avec une collègue massothérapeute
                    certifiée. Pour les adolescents et adultes.
                  </p>
                </div>
                <div className="mt-4 border-t-2 pt-2">
                  <p>Durée: 50 minutes ( de massage réel ).</p>
                  <p>Prix: 67,50 € par personne.</p>
                </div>
              </AccordionEls>
            </Accordion>
            <div className={'mt-8 text-sm'}>
              <p>
                Mes différents soins ne dispensent en aucun cas d&apos;une
                consultation médicale, ils en sont le complément.
              </p>
              <p className={'mt-4'}>
                Lors d&apos;un soin à distance, dans un premier temps nous
                fixons un rendez vous téléphonique afin de vous expliquer les
                modalités du soin choisi et ensuite trouver le moment qui
                convient le mieux pour recevoir ce soin.
              </p>
              <p className="mt-4">
                Vous désirez faire plaisir ou offrir, toutes mes prestations
                sont dipsonibles sous forme de chèques cadeaux.
              </p>
            </div>
          </div>
        </div>
        {/*Soins du foyer*/}
        <div className={'grid lg:grid-cols-12 grid-cols-1 lg:mx-32 mx-4 mt-24'}>
          <div className={'col-span-4'}>
            <PageTitle
              title={'Soins du foyer'}
              subtitle={'Équilibre et confort dans son habitat.'}
            />
          </div>
          <div className={'col-span-8'}>
            <Accordion type={'single'} collapsible>
              <AccordionEls
                id={'item-1'}
                num={'1.'}
                value={'item-1'}
                header={'Home organising'}
                current={current}
                setCurrent={setCurrent}
              >
                <div className={'flex justify-center mb-4'}>
                  <img
                    src={
                      'https://res.cloudinary.com/waryen/image/upload/v1646589204/maparenthesecocoon.be/services/home_organising_2_fo0p4w.jpg'
                    }
                    alt={"Harmonisation de l'habitation"}
                    width={width ? 250 : 300}
                    height={width ? 250 : 300}
                  />
                </div>
                Qu&apos;est ce que le Home organising ? Il ne s&apos;agit pas de
                &quot;simplement&quot; ranger son habitation... C&apos;est une
                méthode de désencombrement et d&apos;organisation de votre
                logement... vous permettant, à terme, de récupérer du temps ( si
                précieux ) pour vous, votre famille, vos loisirs... d&apos;en
                finir avec le yoyo mental, de retrouver votre énergie vitale,
                d&apos;enfin trier/ranger vos papiers. Mais c&apos;est aussi une
                nouvelle façon de penser son quotidien, son mode de vie...
                Formée à la méthode d&apos; Elodie Wéry je vous propose une
                analyse complète de votre profil et des solutions
                personnalisées.
              </AccordionEls>
              <AccordionEls
                id={'item-2'}
                num={'2.'}
                value={'item-2'}
                header={"Harmonisation de l'habitation"}
                current={current}
                setCurrent={setCurrent}
              >
                <div className={'flex justify-center mb-4'}>
                  <img
                    src={
                      'https://res.cloudinary.com/waryen/image/upload/v1646589869/maparenthesecocoon.be/services/home_organising_1_rkny5e.jpg'
                    }
                    alt={"Harmonisation de l'habitation"}
                    width={width ? 250 : 300}
                    height={width ? 250 : 300}
                  />
                </div>
                Qu&apos;est ce que l&apos;harmonisation de la maison ? Dans ce
                cas il s&apos;agit d&apos;éliminer toute forme d&apos;entité
                négative ( par exemple une mémoire des lieux ) de votre
                habitation via une technique de libération énergétique afin de
                retrouver un équilibre sain dans votre logement.
              </AccordionEls>
            </Accordion>
          </div>
        </div>
        <BottomBanner
          direction={'left'}
          title={'Formation'}
          link={"Plus d'informations"}
          imgUrl="https://res.cloudinary.com/waryen/image/upload/v1646589204/maparenthesecocoon.be/services/massage_pierres_chaudes_2_oluxa4.jpg"
        >
          <p>
            Je vous propose de vous initier aux techniques de soins Reiki et
            LaHoChi et des nouveautés, pour connaître les modalités des
            formations merci de vous référer à la partie événement sur ma page{' '}
            <a
              href="https://www.facebook.com/maparenthesecocoonsandrine/"
              rel="noreferrer"
              target="_blank"
              className="hover:underline focus:underline"
            >
              Facebook
            </a>{' '}
            et/ou{' '}
            <a
              href="https://www.instagram.com/maparenthesecocoon/"
              target="_blank"
              rel="noreferrer"
              className="hover:underline focus:underline"
            >
              Instagram
            </a>{' '}
            ou me contacter par{' '}
            {
              <Link to={'/contact'} className="hover:underline focus:underline">
                mail
              </Link>
            }
            .
          </p>
          <p className="mt-4">
            Je vous propose différents ateliers sur le développement personnel,
            dans différents thèmes comme le féminin sacré, les blessures de
            l&apos;âme, initiation au pendule, soin collectif relaxation et
            également des nouveautés. Pour connaître les modalités merci de vous
            référer à la partie événement sur ma page{' '}
            <a
              href="https://www.facebook.com/maparenthesecocoonsandrine/"
              rel="noreferrer"
              target="_blank"
              className="hover:underline focus:underline"
            >
              Facebook
            </a>{' '}
            et/ou{' '}
            <a
              href="https://www.instagram.com/maparenthesecocoon/"
              target="_blank"
              rel="noreferrer"
              className="hover:underline focus:underline"
            >
              Instagram
            </a>{' '}
            ou me contacter par{' '}
            {
              <Link to={'/contact'} className="hover:underline focus:underline">
                mail
              </Link>
            }
            .
          </p>
        </BottomBanner>
      </main>
    </Layout>
  );
}
