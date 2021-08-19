import Layout from '../../components/Layout';
import { useRouter } from 'next/router';

const ResourceDetail = (props) => {
  const resource = props.resource;
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading Data!</div>;
  }

  return (
    <Layout>
      <section className='hero'>
        <div className='hero-body'>
          <div className='container'>
            <section className='section' key={resource.id}>
              <div className='columns'>
                <div className='column is-8 is-offset-2'>
                  <div className='content is-medium'>
                    <h2 className='subtitle is-4'>{resource.createdAt}</h2>
                    <h1 className='title'>{resource.title}</h1>
                    <p>{resource.description}</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </Layout>
  );
};

// ResourceDetail.getInitialProps = async (context) => {
//   const dataRes = await fetch(`http://localhost:3001/api/resources/${context.query.id}`);
//   const data = await dataRes.json();
//   console.log('getInitialProps has been called');
//   return {
//     resource: data,
//   };
// };

// export async function getServerSideProps(context) {
//   const dataRes = await fetch(`http://localhost:3001/api/resources/${context.params.id}`);
//   const data = await dataRes.json();

//   return {
//     props: {
//       resource: data,
//     },
//   };
// }

export async function getStaticPaths() {
  const resData = await fetch('http://localhost:3001/api/resources');
  const data = await resData.json();

  const paths = data.map((resource) => {
    return {
      params: { id: resource.id },
    };
  });

  return {
    paths,
    // means that other routes should resolve into 404 page
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const dataRes = await fetch(`http://localhost:3001/api/resources/${context.params.id}`);
  const data = await dataRes.json();

  return {
    props: {
      resource: data,
    },
    revalidate: 1,
  };
}

export default ResourceDetail;
