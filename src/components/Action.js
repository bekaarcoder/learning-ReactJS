import React from 'react';

// Stateless functional component
const Action = (props) => {
  return (
    <div className='text-center mb-3'>
      <button className='btn btn-success btn-sm' onClick={props.handlePick} disabled={!props.hasOptions}>What should I do next?</button>
    </div>
  );
}

export default Action;