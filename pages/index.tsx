import Layout from '../components/Layout';
import ResourceHightlight from '../components/ResourceHighlight';
import Newsletter from '../components/Newsletter';
import ResourceList from '../components/ResourceList';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Layout>
        <ResourceHightlight />

        <Newsletter />

        <ResourceList />

        <Footer />
      </Layout>
    </>
  );
}

export default Home;
