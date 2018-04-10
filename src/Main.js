import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const Main = () => {
  return (
    <div className='main'>
      <Header
        mainHeader={'PHIL THE THRILL WANTS YOU'}
        subHeader={'to get your puck on'}
      />
      <div className='text-center btn-container'>
        <Link to='/signup'>
          <button className='btn-ghost' type='button'>
            sign me up coach
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Main;