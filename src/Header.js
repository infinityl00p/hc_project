import React from 'react';

const Header = (props) => {
  return (
    <div className='text-center header'>
      <h1 className='text-heavy text-large'>{props.mainHeader}</h1>
      <h2 className='text-light text-medium'>{props.subHeader}</h2>
    </div>
  );
}

export default Header;