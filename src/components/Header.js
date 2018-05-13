import React from 'react';

// Stateless Functional Component
const Header = (props) => {
  return (
    <div className='text-center mt-3'>
      <h1>{props.title}</h1>
      <p className='text-muted'>{props.subtitle}</p>
    </div>
  );
}

export default Header;