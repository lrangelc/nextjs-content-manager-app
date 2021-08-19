import Layout from '../components/Layout';
import ResourceHightlight from '../components/ResourceHighlight';
import Newsletter from '../components/Newsletter';
import ResourceList from '../components/ResourceList';
import Footer from '../components/Footer';
import { useEffect } from 'react';

// import dataStatic from './api/data.json';
// import resources from './api/data.json';

function Home({ resources }) {
  console.log('calling Home');

  // useEffect(() => {
  //   fetch('http://localhost:3001/api/resources');
  // }, []);

  return (
    <Layout>
      <ResourceHightlight resources={resources.slice(0, 2)} />

      <Newsletter />

      <ResourceList resources={resources.slice(2)} />

      {JSON.stringify(resources)}
      <Footer />
    </Layout>
  );
}

// is called every time you will visit the page
// function is executed on the server
// data are always fresh
export async function getServerSideProps() {
  const resData = await fetch('http://localhost:3001/api/resources');
  const data = await resData.json();
  // console.log('***calling getServerSideProps***');
  console.log(
    data.map((resource) => {
      return {
        params: { id: resource.id },
      };
    })
  );

  return {
    props: {
      resources: data,
    },
  };
}

// is called at the build time, and it's called only once
// export async function getStaticProps() {
//   // const resData = await fetch('http://localhost:3000/api/resources');
//   // const data = await resData.json();
//   console.log('***calling getStaticProps***');

//   return {
//     props: {
//       resources: dataStatic,
//     },
//   };
// }

export default Home;
