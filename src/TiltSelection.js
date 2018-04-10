import React from 'react';
import Tilt from 'react-tilt';

const TiltSelection = (props) => {
  return (
    <div className='list-container text-center'>
    {
      props.data.map((data, index) => {
        const colors = ['red', 'blue', 'green', 'black'];

          return (
            <Tilt key={index} className='tilt' options={{ max : 25 }}>
              <div className='tilt-inner' onClick={() => props.onPress(data)}>
                <div className={`overlay ${colors[index%4]}`} />
                <p className='tilt-text text-center'>{data}</p>
              </div>
            </Tilt>
          );
      })
    }
  </div>
  )
};

export default TiltSelection;