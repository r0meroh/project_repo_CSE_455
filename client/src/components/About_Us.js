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
      photo:
        'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/105591019_3076225415787781_2688025347582234513_n.jpg?_nc_cat=104&_nc_sid=09cbfe&_nc_ohc=LT9sQW2-c_MAX-HCQbI&_nc_ht=scontent-lax3-1.xx&oh=6cabeccf9147d66ba819b1afe1b8105a&oe=5F9B0866',
    },
  ];

  return (
    <>
      <div className='about_us_header'>
        <Jumbotron>
          <h1>Hello, world!</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
        </Jumbotron>
      </div>

      <Container className='team'>
        {data.map((profile) => (
          <div className='single_card'>
            <Row>
              <Col>
                <img src={profile.photo} width='250' height='250'></img>
                <h2>{profile.name}</h2>
              </Col>
              <Col className='descript'>
                <h4>{profile.description}</h4>
              </Col>
            </Row>
            <Row>
              <Col>
                <h2></h2>
              </Col>
              <Col>
                <h2>Social Medias to be Provided</h2>
              </Col>
            </Row>
          </div>
        ))}
      </Container>
    </>
  );
};

export default About_Us;
