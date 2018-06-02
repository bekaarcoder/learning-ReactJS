// Higher Order Component (HOC) - A component that renders another component

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>This is the info: {props.info}</p>
  </div>
);

ReactDOM.render(<Info info="SOme Information" />, document.getElementById('app'));