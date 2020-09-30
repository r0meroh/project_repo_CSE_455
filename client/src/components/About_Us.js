import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './About_Us.css';

const About_Us = () => {
  const data = [
    {
      name: 'About Us',
      description: 'Coded',
      photo:
        'https://www.statnews.com/wp-content/uploads/2020/02/Coronavirus-CDC-768x432.jpg',
    },
  ];

  // put image into a canvas then set parameters
  // or should we have preset
  return (
    <>
      <Jumbotron>
        <h1>Hello, world!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
      </Jumbotron>

      <div className='card'>
        {data.map((profile) => (
          <div>
            <img src={profile.photo} width='300' height='180'></img>
            <p>{profile.description}</p>
            <h1>{profile.name}</h1>
          </div>
        ))}
      </div>
    </>
  );
};

export default About_Us;
