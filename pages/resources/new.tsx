import Layout from '../../components/Layout';
import ResourceForm from '../../components/ResourceForm';
import axios from 'axios';
import { useRouter } from 'next/router';

const ResourceCreate = () => {
  const router = useRouter();

  const createResource = async (formData) => {
    try {
      const resp = await axios.post('/api/resources', formData);
      console.log(resp);
      router.push('/');
    } catch (err) {
      console.error(err.response.data);
    }
    // axios
    //   .post('/api/resources', form)
    //   .then(() => {})
    //   .catch((err) => {
    //     console.error(err.response.data);
    //   });
  };

  return (
    <Layout>
      <div className='container'>
        <div className='columns'>
          <div className='column is-8 is-offset-2'>
            <ResourceForm onFormSubmit={createResource}></ResourceForm>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ResourceCreate;
