// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import React, { useState } from 'react';

const ArrowFunction = () => {
  console.log('logging from arrow function');
  return (
    <>
      <h1>I am arrow function</h1>
    </>
  );
};

function CompA() {
  return (
    <>
      <ArrowFunction />
      <h1>CompA</h1>
      <p>Hello Comp A</p>
      <CompB />
    </>
  );

  // return React.createElement(
  //   'div',
  //   null,
  //   React.createElement('h1', null, 'CompA'),
  //   React.createElement('p', null, 'Hello Comp A'),
  //   React.createElement(CompB)
  // );
}

function CompB() {
  return (
    <>
      <h1>CompB</h1>
      <p>Hello Comp B</p>
    </>
  );

  // return (
  //   <React.Fragment>
  //     <h1>CompB</h1>
  //     <p>Hello Comp B</p>
  //   </React.Fragment>
  // );
}

// JSX - Javascript XML
class CompC extends React.Component {
  render() {
    return (
      <>
        <h1>CompC</h1>
      </>
    );
  }
}

class CompD extends React.Component {
  render() {
    return React.createElement('h1', null, 'Hello CompD');
  }
}

function Home() {
  // [stateValue, mutateState]
  // const valueState = useState(10);
  // const value = valueState[0];
  // const setValue = valueState[1];

  // console.log('valueState');
  // console.log(valueState);
  // console.log('valueState[0]');
  // console.log(valueState[0]);

  const [myValue, setValue] = useState(10);

  const incrementValue = () => {
    console.log(`myValue: ${myValue}`);
    setValue(myValue + 1);
    // setValue(myValue++);
    console.log(`myValue + 1: ${myValue}`);
  };

  const decrementValue = () => {
    console.log(`myValue: ${myValue}`);
    setValue(myValue - 1);
    // setValue(myValue--);
    console.log(`myValue - 1: ${myValue}`);
  };

  console.log(`myValueX: ${myValue}`);

  const changeValue = (incrementor) => {
    setValue(myValue + incrementor);
  };

  return (
    <>
      Current Value: <h1>{myValue}</h1>
      <button onClick={incrementValue}>+</button>
      <button onClick={decrementValue}>-</button>
      <CompB />
      <button onClick={() => changeValue(+1)}>+</button>
      <button onClick={() => changeValue(-1)}>-</button>
      <h1>Hello World! HomePage</h1>
      <CompA />
      <CompC />
      <CompD />
    </>
  );
}

export default Home;
