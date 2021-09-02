import axios from 'axios';
import router from 'next/router';
import Layout from '../../../components/Layout';
import ResourceForm from '../../../components/ResourceForm';

const ResourceEdit = (props) => {
  const resource = props.resource;

  const updateResource = async (formData) => {
    try {
      const resp = await axios.post('/api/resources', formData);
      console.log(resp);
      router.push('/');
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <Layout>
      <div className='container'>
        <div className='columns'>
          <div className='column is-8 is-offset-2'>
            <ResourceForm initialData={resource} onFormSubmit={updateResource} />I am edit page {resource.title}
          </div>
        </div>
      </div>
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

export default ResourceEdit;
