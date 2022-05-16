import Layout from '~/components/Layout';
import { Form } from '../components/Form';
import { PageTitle } from '../components/PageTitle';

export default function Contact() {
  return (
    <Layout>
      <main className="lg:grid grid-cols-12 lg:mx-32 mx-4 mb-12">
        <div className={'col-span-4'}>
          <PageTitle title={'Ecrivez-moi'} />
        </div>
        <div className="w-full col-span-8 lg:mt-12">
          {/* <FormContact /> */}
          <Form />
        </div>
      </main>
    </Layout>
  );
}
