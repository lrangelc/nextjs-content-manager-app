// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import React from 'react';

function CompA() {
  return (
    <>
      <h1>CompA</h1>
      <p>Hello Comp A</p>
      <CompB />
    </>
  );
}

function CompB() {
  return (
    <>
      <h1>CompB</h1>
      <p>Hello Comp B</p>
    </>
  );
}

class CompC extends React.Component {
  render() {
    return (
      <>
        <h1>CompC</h1>
      </>
    );
  }
}

function Home() {
  return (
    <>
      <CompB />
      <h1>Hello World!</h1>
      <CompA />
      <CompC />
    </>
  );
}

export default Home;
