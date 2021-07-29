// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import React, { useState, useEffect } from 'react';

const ArrowFunction = () => {
  console.log('logging from arrow function');
  return (
    <>
      <h1>I am arrow function</h1>
    </>
  );
};

function CompA(props) {
  useEffect(() => {
    console.log('CompoA useEffect props.myProp1');
  }, [props.myProp1]);

  return (
    <>
      <ArrowFunction />
      <h1>CompA</h1>
      <p>Hello Comp A</p>
      <div>My Prop1: {props.myProp1}</div>
      <div>My Prop2: {props.myProp2}</div>
      <div>My Prop3: {props.myProp3.toString()}</div>
      <div>My Prop4: {<props.myProp4 />}</div>
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
class CompC extends React.Component<{ myProp1; MyProp2 }, { [key: string]: any }> {
  // state = {
  //   myValue: 10,
  // };

  constructor(props) {
    super(props);
    this.state = {
      myValue: 10,
    };
  }

  changeState(incrementor) {
    this.setState({
      myValue: incrementor,
    });
    console.log(incrementor);
  }

  render() {
    // const myValue = this.state.myValue;
    const { myValue } = this.state;
    const { myProp1, MyProp2 } = this.props;

    console.log(`I am re-executed`);

    return (
      <>
        <h1>Hello CompC</h1>
        Current Value: <h1>{myValue}</h1>
        <button onClick={() => this.changeState(myValue + 1)}>+</button>
        <button onClick={() => this.changeState(myValue - 1)}>-</button>
        <h2>Props myProp1: {this.props.myProp1}</h2>
        <h2>Props myProp1: {myProp1}</h2>
        <MyProp2 />
      </>
    );
  }
}

class CompD extends React.Component {
  render() {
    return React.createElement('h1', null, 'Hello CompD');
  }
}

function MyComponent() {
  return <h1>My Component!</h1>;
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
  const [myOtherValue, setOtherValue] = useState(100);

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

  useEffect(() => {
    console.log('Use Effect called! myOtherValue');
  }, [myOtherValue]);

  useEffect(() => {
    console.log('Use Effect called! myValue');
  }, [myValue]);

  return (
    <>
      Current Value: <h1>{myValue}</h1>
      <button onClick={incrementValue}>+</button>
      <button onClick={decrementValue}>-</button>
      <hr />
      Other Value: <h1>{myOtherValue}</h1>
      <button onClick={() => setOtherValue(myOtherValue + 1)}>+</button>
      <button onClick={() => setOtherValue(myOtherValue - 1)}>-</button>
      <CompB />
      <button onClick={() => changeValue(+1)}>+</button>
      <button onClick={() => changeValue(-1)}>-</button>
      <h1>Hello World! HomePage</h1>
      <CompA myProp1={myValue} myProp2='My Custom Value' myProp3={true} myProp4={() => <div>My NEW JSX!</div>} />
      <CompC myProp1={myValue} MyProp2={MyComponent} />
      <CompD />
    </>
  );
}

export default Home;
