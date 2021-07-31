import Layout from '../components/Layout';

const MyTest = (props) => {
  return (
    <>
      <h1>MyTest Component!</h1>
      {props.children}
    </>
  );
};

function About() {
  return (
    <>
      <Layout>
        <h1>I am about page!</h1>
        <h2>Hello World!</h2>
        <h3>Hi there!</h3>
      </Layout>
    </>
  );
}

export default About;
