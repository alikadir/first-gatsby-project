import React, { useState } from 'react';
import Layout from '../components/layout';

const Sample = props => {
  const [count, setCount] = useState(0);

  return (
    <Layout>
      <button
        onClick={e => {
          setCount(count + 1);
        }}>
        increase count
      </button>
      <button
        onClick={e => {
          setCount(count - 1);
        }}>
        decrease count
      </button>
      <h2>{count}</h2>
      <p>
        <h4>incoming state</h4> {JSON.stringify(props.location.state)}
      </p>
    </Layout>
  );
};

export default Sample;
