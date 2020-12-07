import React from 'react';
import {
  Container,
  Jumbotron,
  Row,
  Col,
  Carousel,
  Button,
  Accordion,
  Card,
} from 'react-bootstrap';
const AboutUsFinal = () => {
  return (
    <Container className='AboutUsContainer'>
      <Carousel className='AboutUsCarousel'>
        <Carousel.Item className='TeamCard'>
          <h1 className='Carousel1'>Meet The Team</h1>
          <img src='https://miro.medium.com/max/500/0*QXjL-AuzqfqqREk7.png'></img>
        </Carousel.Item>
        <Carousel.Item className='AboutUsCarosel2'>
          <Card bg='dark'>
            <Row>
              <Col xs={6} sm={4}>
                <Card.Img
                  variant='top'
                  src={require('./TeamPhotos/Alfredo.JPG')}
                />
                <Card.Title className='Carouselname'>Alfredo Mora</Card.Title>
                <Card.Subtitle className='mb-2 text-muted  '>
                  <span className='RoleText'>Role:{' Project Manager '}</span>
                </Card.Subtitle>
              </Col>
              <Col xs={12} md={8}>
                <Row>
                  <Card.Body className='CarsoselText'>
                    Hello I am one of the groups front-end programmers of the
                    project. My role was to retrieve data from public API’s
                    using redux to visualize covid-19 statistics. Alongside
                    Tejinderjeet Sandhu we implemented various graphs to the
                    project and designed the UI for the website.
                  </Card.Body>
                </Row>
                <Row className='SocialLinks'>
                  <h4 className='contactInfo'>Contact Information: </h4>
                  <Card.Link
                    href='https://www.linkedin.com/in/alfredo-mora-8ab6481b7/'
                    target='_blank'
                    class='fab fa-linkedin-in fa-2x social'
                  ></Card.Link>
                  &nbsp;
                  <Card.Link
                    href='https://github.com/Alfredo9712'
                    target='_blank'
                    class='fab fa-github fa-2x social'
                  ></Card.Link>
                </Row>
              </Col>
            </Row>
          </Card>
        </Carousel.Item>
        <Carousel.Item className='AboutUsCarosel2'>
          <Card bg='dark'>
            <Row>
              <Col xs={6} sm={4}>
                <Card.Img variant='top' src={require('./TeamPhotos/Tj.jpg')} />
                <Card.Title className='Carouselname'>
                  Tejinderjeet Sandhu
                </Card.Title>
                <Card.Subtitle className='mb-2 text-muted  '>
                  <span className='RoleText'>
                    Role:{' Assistant Project Manager '}
                  </span>
                </Card.Subtitle>
              </Col>
              <Col xs={12} md={8}>
                <Row>
                  <Card.Body className='CarsoselText'>
                    Hi my name is Tejinderjeet Sandhu, everyone knows me as Tj.
                    I am the Assistant Project Manager and one of the Senior
                    Frontend Web Developers for the Health Solutions Detectives
                    team. I worked with Alfredo Mora and Hector Carbajal to
                    implement/integrate different web components. I also worked
                    on parsing through COVID data to create new ways to display
                    the data in a meaningful way. Lastly, together with advice
                    from the team, I feel that we Frontend Engineers have truly
                    created a web app that will help progress the fight with
                    COVID-19.
                  </Card.Body>
                </Row>
                <Row className='SocialLinks'>
                  <h4 className='contactInfo '>
                    Contact Information: 006321025@coyote.csusb.edu
                  </h4>
                </Row>
              </Col>
            </Row>
          </Card>
        </Carousel.Item>
        <Carousel.Item className='AboutUsCarosel2'>
          <Card bg='dark'>
            <Row>
              <Col xs={6} sm={4}>
                <Card.Img
                  variant='top'
                  src={require('./TeamPhotos/hugo.jpg')}
                />
                <Card.Title className='Carouselname'>Hugo Romero</Card.Title>
                <Card.Subtitle className='mb-2 text-muted  '>
                  <span className='RoleText'>
                    Role:
                    {' Chief Technology Officer | Back-End Software Engineer '}
                  </span>
                </Card.Subtitle>
              </Col>
              <Col xs={12} md={8}>
                <Row>
                  <Card.Body className='CarsoselText'>
                    Hello, my name is Hugo. I was the only Backend Engineer for
                    this project. I implemented the user authentication for the
                    site, as well as the firebase implementation of the project.
                    I introduced the usage of redux and middleware to the team.
                    Delegated tasks and expectations where needed. Worked with
                    the two main frontEnd engineers who provided all the
                    frontend contributions that backend needed communication
                    with, Project Manager: Alfredo Mora, Assistant Manager:
                    Tejinderjeet Sandhu. My links can be found below.
                  </Card.Body>
                </Row>
                <Row className='SocialLinks'>
                  <h4 className='contactInfo'>Contact Information</h4>
                  <Card.Link
                    href='https://www.linkedin.com/in/r0meroh/
                    '
                    target='_blank'
                    class='fab fa-linkedin-in fa-2x social'
                  ></Card.Link>
                  &nbsp;
                  <Card.Link
                    href='https://github.com/r0meroh'
                    target='_blank'
                    class='fab fa-github fa-2x social'
                  ></Card.Link>
                </Row>
              </Col>
            </Row>
          </Card>
        </Carousel.Item>
        <Carousel.Item className='AboutUsCarosel2'>
          <Card bg='dark'>
            <Row>
              <Col xs={6} sm={4}>
                <Card.Img
                  variant='top'
                  src={require('./TeamPhotos/hector.jpg')}
                />
                <Card.Title className='Carouselname'>
                  Hector Carbajal
                </Card.Title>
                <Card.Subtitle className='mb-2 text-muted  '>
                  <span className='RoleText'>
                    Role:
                    {' Front-End Software Engineer '}
                  </span>
                </Card.Subtitle>
              </Col>
              <Col xs={12} md={8}>
                <Row>
                  <Card.Body className='CarsoselText'>
                    Hello, I am Hector Carbajal, a current Computer Science
                    major at CSUSB. For this project, I am the Frontend
                    developer responsible for the About Us page. I worked
                    alongside Alfredo Mora and Tejinderjeet Sandhu in
                    implementing different web components to create this page. I
                    am proud to say that my team and I each contributed time,
                    creativity and hardwork to make this website possible. I
                    hope you all have a great user experience through our
                    website.
                  </Card.Body>
                </Row>
                <Row className='SocialLinks'>
                  <h4 className='contactInfo'>Contact Information</h4>
                  <Card.Link
                    href='https://www.linkedin.com/in/hector-carbajal-570485173/
                    '
                    target='_blank'
                    class='fab fa-linkedin-in fa-2x social'
                  ></Card.Link>
                  &nbsp;
                  <Card.Link
                    href='https://github.com/7Hector27'
                    target='_blank'
                    class='fab fa-github fa-2x social'
                  ></Card.Link>
                </Row>
              </Col>
            </Row>
          </Card>
        </Carousel.Item>
        <Carousel.Item className='AboutUsCarosel2'>
          <Card bg='dark'>
            <Row>
              <Col xs={6} sm={4}>
                <Card.Img
                  variant='top'
                  src={require('./TeamPhotos/michelle.png')}
                />
                <Card.Title className='Carouselname'>Michelle Pham</Card.Title>
                <Card.Subtitle className='mb-2 text-muted  '>
                  <span className='RoleText'>
                    Role:
                    {' Front-End Software Engineer '}
                  </span>
                </Card.Subtitle>
              </Col>
              <Col xs={12} md={8}>
                <Row>
                  <Card.Body className='CarsoselText'>
                    Hello folx! My name is Michelle, and I am a recent Junior
                    Honors transfer student at CSU San Bernardino. As part of my
                    undergraduate journey, I am pursuing a double major in both
                    Nursing and Computer Systems (concentration in Systems
                    Administration) as well as a Psychology minor. With
                    considering my future career/professional goals: to become a
                    Nurse Informaticist, it only made it more of a compelling
                    reason to contribute towards designing a web application
                    with focus on preventative measures and easy-to-understand,
                    graphical representations of COVID-19-related statistics
                    that both provide credible and up-to-date data. With not
                    having had previous front-end development experience, it
                    definitely was a providential opportunity to serve as the
                    Front-End Developer of the team and to be able to work with
                    such an inspiring and impactful team and excellent Project
                    Managers who secured the scaffoldings of this web
                    application. A few key highlights of my contribution to the
                    COVID-19 Forecast Tracker web application include rendering
                    a pie chart that displays distribution (in percentage) of
                    COVID-19 severity impact relative to race and population
                    within Los Angeles County and compiling credible COVID-19
                    community/social services resources, relevant COVID-19 news
                    articles, as well as peer-reviewed research reports which
                    cover topics such as current vaccines in clinical trials or
                    therapeutics under research. I hope that you find this
                    website useful and hope that this website can help you
                    better understand how to protect yourself, your community,
                    and your family from COVID-19.
                  </Card.Body>
                </Row>
                <Row className='SocialLinks'>
                  <h4 className='contactInfo'>Contact Information</h4>
                  <Card.Link
                    href='https://www.linkedin.com/in/michelle-l-pham/
                    '
                    target='_blank'
                    class='fab fa-linkedin-in fa-2x social'
                  ></Card.Link>
                </Row>
              </Col>
            </Row>
          </Card>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default AboutUsFinal;
