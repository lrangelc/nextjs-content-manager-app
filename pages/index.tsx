import Layout from '../components/Layout';
import ResourceHightlight from '../components/ResourceHighlight';
import Newsletter from '../components/Newsletter';
import ResourceList from '../components/ResourceList';
import Footer from '../components/Footer';
import { resources } from '../api/data';

function Home() {
  return (
    <>
      <Layout>
        <ResourceHightlight resources={resources} />

        <Newsletter />

        <ResourceList resources={resources} />

        {JSON.stringify(resources)}
        <Footer />
      </Layout>
    </>
  );
}

export default Home;
