import Image from 'next/image';

const firstPostPic = '/images/first-post.png';

const ResourceHightlight = (props) => {
  return (
    <>
      <section className='hero'>
        <div className='hero-body'>
          <div className='container'>
            <div className='columns'>
              <div className='column is-8 is-offset-2'>
                <Image priority src={firstPostPic} alt='Logo' width={300} height={300} />
              </div>
            </div>
            {props.resources.map((resource) => {
              return (
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
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ResourceHightlight;
