import Layout from '../../components/Layout';

const ResourceDetail = (props) => {
  const resource = props.resource;

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

export async function getServerSideProps(context) {
  const dataRes = await fetch(`http://localhost:3001/api/resources/${context.params.id}`);
  const data = await dataRes.json();

  return {
    props: {
      resource: data,
    },
  };
}

export default ResourceDetail;