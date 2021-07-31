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
        <ResourceHightlight />

        <Newsletter />

        <ResourceList />

        {JSON.stringify(resources)}
        <Footer />
      </Layout>
    </>
  );
}

export default Home;
