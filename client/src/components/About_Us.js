import React from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';
import './About_Us.css';

const About_Us = () => {
  const data = [
    {
      name: 'Alfredo Mora',
      description:
        'Lorem ipsum dolor sit amet elit scelerisque.Commodo sed egestas egestas fringilla. Vulputate mi sit amet mauris commodo quis imperdiet massa. Euismod nisi porta lorem mollis. Erat imperdiet sed euismod nisi porta lorem mollis aliquam ut. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam. Velit dignissim sodales ut eu sem.',
      photo: 'https://i1.sndcdn.com/avatars-000605914911-n6offh-t500x500.jpg',
    },
    {
      name: 'Tejinderjeet Sandhu',
      description: 'description ',
      photo: 'https://i1.sndcdn.com/avatars-000605914911-n6offh-t500x500.jpg',
    },
    {
      name: 'Hugo Romero',
      description: 'description ',
      photo: 'https://i1.sndcdn.com/avatars-000605914911-n6offh-t500x500.jpg',
    },
    {
      name: 'Michelle Pham',
      description: 'description ',
      photo: 'https://i1.sndcdn.com/avatars-000605914911-n6offh-t500x500.jpg',
    },
    {
      name: 'Hector Carbajal',
      description: 'description ',
      photo: 'https://i1.sndcdn.com/avatars-000605914911-n6offh-t500x500.jpg',
    },
  ];

  return (
    <>
      <div className='about_us_header'>
        <h1 className='header_about_us'>About Us</h1>
        <h4>
          Lorem ipsum dolor sit amet elit scelerisque.Commodo sed egestas
          egestas fringilla. Vulputate mi sit amet mauris commodo quis imperdiet
          massa. Euismod nisi porta lorem mollis.
        </h4>
      </div>

      <Container className='team'>
        <div className='meet_the_team'>
          <h1> Meet the Team</h1>
        </div>
        {data.map((profile) => (
          <div className='cards'>
            <Row>
              <Col xs={6} md={4} className='photoname'>
                <img src={profile.photo} width='300' height='300'></img>
                <h2>{profile.name}</h2>
              </Col>

              <Col xs={12} md={8}>
                <Row>
                  <h2>{profile.description}</h2>
                </Row>
                <Row>
                  <h2>Add Socials/Contact information</h2>
                </Row>
              </Col>
            </Row>
          </div>
        ))}
      </Container>
    </>
  );
};

export default About_Us;
