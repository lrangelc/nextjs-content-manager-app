import Layout from '../../components/Layout';

const ResourceCreate = () => {
  return (
    <Layout>
      <div className='container'>
        <div className='columns'>
          <div className='column is-8 is-offset-2'>
            <div className='resource-form'>
              <h1 className='title'>Add New Resource</h1>
              <form>
                <div className='field'>
                  <label className='label'>Name</label>
                  <div className='control'>
                    <input className='input' type='text' placeholder='Text input' />
                  </div>
                </div>

                <div className='field is-grouped'>
                  <div className='control'>
                    <button className='button is-link'>Submit</button>
                  </div>
                  <div className='control'>
                    <button className='button is-link is-light'>Cancel</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ResourceCreate;
