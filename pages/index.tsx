import Navbar from '../components/Navbar';
import ResourceHightlight from '../components/ResourceHighlight';
import Newsletter from '../components/Newsletter';
import ResourceList from '../components/ResourceList';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Navbar />

      <ResourceHightlight />

      <Newsletter />

      <ResourceList />

      <Footer />
    </>
  );
}

export default Home;
