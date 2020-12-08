// import React, { useEffect } from "react";
// import {
//   Jumbotron,
//   Container,
//   Row,
//   Col,
//   Card,
//   Accordion,
//   Button,
//   Fade,
// } from "react-bootstrap";
// import "./About_Us.css";
// import "bootstrap/dist/css/bootstrap.min.css";

// const About_Us = () => {
//   return (
//     <>
//       <div className="about_us_header">
//         <h1 className="header_about_us">About Us</h1>
//         <h4>
//           Lorem ipsum dolor sit amet elit scelerisque.Commodo sed egestas
//           egestas fringilla. Vulputate mi sit amet mauris commodo quis imperdiet
//           massa. Euismod nisi porta lorem mollis.Lorem ipsum dolor sit amet elit
//           scelerisque.Commodo sed egestas egestas fringilla. Vulputate mi sit
//           amet mauris commodo quis imperdiet massa. Euismod nisi porta lorem
//           mollis.
//         </h4>
//       </div>

//       <div className="cont">
//         <h1 className="meettheteam">Meet The Team</h1>
//       </div>

//       {/* <Container className='AboutUsContainer'> */}
//       <h1 className="meetTheTeam">Meet The Team</h1>
//       <Card className="IndividualCards">
//         <Row>
//           <Col className="CardLeft" xs={6} sm={4}>
//             <Card.Img
//               variant="top"
//               src="https://i.ibb.co/XD36tvQ/hector-Carbajal.jpg"
//             />
//             <Card.Title>Hugo Romero</Card.Title>
//             <Card.Subtitle className="mb-2 text-muted">Role</Card.Subtitle>

//             <Accordion className="Accordian" defaultActiveKey="0">
//               <Card.Header className="Socials">
//                 <Accordion.Toggle as={Button} variant="dark" eventKey="1">
//                   Contact information
//                 </Accordion.Toggle>
//               </Card.Header>
//               <Accordion.Collapse eventKey="1">
//                 <Card.Body className="socialLinks">
//                   <div className="hi">
//                     <Card.Link
//                       href="https://www.google.com/"
//                       target="_blank"
//                       class="fab fa-linkedin-in fa-2x social"
//                     ></Card.Link>
//                     <Card.Link
//                       href="https://www.google.com/"
//                       target="_blank"
//                       class="fab fa-facebook-square fa-2x social"
//                     ></Card.Link>
//                     <Card.Link
//                       href="https://www.google.com/"
//                       target="_blank"
//                       class="fa fa-instagram fa-2x social"
//                     ></Card.Link>
//                     <Card.Link
//                       href="https://www.google.com/"
//                       target="_blank"
//                       class="fab fa-github fa-2x social"
//                     ></Card.Link>
//                   </div>
//                   <p>Email: 005206704@coyote.csusb.edu </p>
//                 </Card.Body>
//               </Accordion.Collapse>
//             </Accordion>
//           </Col>
//           <Col xs={12} md={8}>
//             <Row>
//               <Card.Body className="CardRight">
//                 Some quick example text to build on the card title and make up
//                 the bulk of the card's content.Some quick example text to build
//                 on the card title and make up the bulk of the card's contentSome
//                 quick example text to build on the card title and make up the
//                 bulk of the card's contentSome quick example text to build on
//                 the card title and make up the bulk of the card's content.Some
//                 quick example text to build on the card title and make up the
//                 bulk of the card's contentSome quick example text to build on
//                 the card title and make up the bulk of the card's content.
//               </Card.Body>
//             </Row>
//           </Col>
//         </Row>
//       </Card>
//       <div className="parallax">
//         <h1></h1>
//       </div>
//   <Card className="IndividualCards">
//     <Row>
//       <Col className="CardLeft" xs={6} sm={4}>
//         <Card.Img
//           variant="top"
//           src="https://i.ibb.co/XD36tvQ/hector-Carbajal.jpg"
//         />
//         <Card.Title>Alfredo Mora</Card.Title>
//         <Card.Subtitle className="mb-2 text-muted">Role</Card.Subtitle>
//         <Accordion className="Accordian" defaultActiveKey="0">
//           <Card.Header className="Socials">
//             <Accordion.Toggle as={Button} variant="dark" eventKey="1">
//               Contact information
//             </Accordion.Toggle>
//           </Card.Header>
//           <Accordion.Collapse eventKey="1">
//             <Card.Body className="socialLinks">
//               <div className="hi">
{
  /* <Card.Link
  href="https://www.google.com/"
  target="_blank"
  class="fab fa-linkedin-in fa-2x social"
></Card.Link>;
                <Card.Link
                  href="https://www.google.com/"
                  target="_blank"
                  class="fab fa-facebook-square fa-2x social"
                ></Card.Link>
                <Card.Link
                  href="https://www.google.com/"
                  target="_blank"
                  class="fa fa-instagram fa-2x social"
                ></Card.Link>
                <Card.Link
                  href="https://www.google.com/"
                  target="_blank"
                  class="fab fa-github fa-2x social"
                ></Card.Link> */
}
//               </div>
//               <p>Email: 005206704@coyote.csusb.edu </p>
//             </Card.Body>
//           </Accordion.Collapse>
//         </Accordion>
//       </Col>
//       <Col xs={12} md={8}>
//         <Row>
//           <Card.Body className="CardRight">
//             Some quick example text to build on the card title and make up
//             the bulk of the card's content.Some quick example text to build
//             on the card title and make up the bulk of the card's contentSome
//             quick example text to build on the card title and make up the
//             bulk of the card's contentSome quick example text to build on
//             the card title and make up the bulk of the card's content.Some
//             quick example text to build on the card title and make up the
//             bulk of the card's contentSome quick example text to build on
//             the card title and make up the bulk of the card's content.
//           </Card.Body>
//         </Row>
//       </Col>
//     </Row>
//   </Card>

//       <div className="parallax">
//         <h1></h1>
//       </div>

//       <Card className="IndividualCards">
//         <Row>
//           <Col className="CardLeft" xs={6} sm={4}>
//             <Card.Img
//               variant="top"
//               src="https://i.ibb.co/XD36tvQ/hector-Carbajal.jpg"
//             />
//             <Card.Title>Michelle Pham</Card.Title>
//             <Card.Subtitle className="mb-2 text-muted">Role</Card.Subtitle>

//             <Accordion className="Accordian" defaultActiveKey="0">
//               <Card.Header className="Socials">
//                 <Accordion.Toggle as={Button} variant="dark" eventKey="1">
//                   Contact information
//                 </Accordion.Toggle>
//               </Card.Header>
//               <Accordion.Collapse eventKey="1">
//                 <Card.Body className="socialLinks">
//                   <div className="hi">
//                     <Card.Link
//                       href="https://www.google.com/"
//                       target="_blank"
//                       class="fab fa-linkedin-in fa-2x social"
//                     ></Card.Link>
//                     <Card.Link
//                       href="https://www.google.com/"
//                       target="_blank"
//                       class="fab fa-facebook-square fa-2x social"
//                     ></Card.Link>
//                     <Card.Link
//                       href="https://www.google.com/"
//                       target="_blank"
//                       class="fa fa-instagram fa-2x social"
//                     ></Card.Link>
//                     <Card.Link
//                       href="https://www.google.com/"
//                       target="_blank"
//                       class="fab fa-github fa-2x social"
//                     ></Card.Link>
//                   </div>
//                   <p>Email: 005206704@coyote.csusb.edu </p>
//                 </Card.Body>
//               </Accordion.Collapse>
//             </Accordion>
//           </Col>
//           <Col xs={12} md={8}>
//             <Row>
//               <Card.Body className="CardRight">
//                 Hello folx! My name is Michelle, and I am a recent Junior
//                 transfer student at CSU San Bernardino. As part of my
//                 undergraduate journey, I am pursuing a double major in both
//                 Nursing and Computer Systems (concentration in Systems
//                 Administration) as well as a Psychology minor. Many of my peers
//                 tend to ask me why I am majoring in what seemingly appear to be
//                 two completely different disciplines, but actually, both CS and
//                 the Health Sciences are closely integrated disciplines,
//                 especially in recent times with the COVID-19 pandemic, and are
//                 also tied to my future professional/career goals: to become a
//                 Nurse Informaticist, which involves great understanding of
//                 information systems and health care. With considering my future
//                 career/professional goals, it only made it more of a compelling
//                 reason to contribute towards designing a web application with
//                 focus on preventative measures and easy-to-understand, graphical
//                 representations of COVID-19-related statistics that both provide
//                 credible and up-to-date data. With not having had previous
//                 front-end development experience, it definitely was a
//                 providential opportunity to serve as the Front-End Developer of
//                 the team and to be able to work with such an inspiring and
//                 impactful team and excellent Project Managers who secured the
//                 scaffoldings of this web application. --TENTATIVE SECTION
//                 (SUBJECT TO CHANGE)--A few key highlights of my contribution to
//                 the COVID-19 Forecast Tracker web application include rendering
//                 Bootstrap-provided cards that displayed COVID-19 global,
//                 accumulated data i.e. number of cases, recoveries, and deaths
//                 with implementation of animation for user visual appeal,
//                 rendering a pie chart that displays distribution (in percentage)
//                 of COVID-19 impact extent relative to ethnicity and population
//                 within Los Angeles County. Both of these components were
//                 rendered with the implementation of Redux and React Hooks for
//                 state management and optimal data manipulation and
//                 representation, as well as Axios in order to execute calls to
//                 the API for data retrieval. I also contributed alongside my
//                 Project and Assistant Project Manager in developing the
//                 algorithm for COVID-19 safety precautions/recommendations based
//                 on the demographic information users input when first creating
//                 their accounts or when updating their information on their
//                 accounts and also compiling credible COVID-19 community/social
//                 services resources, relevant COVID-19 news articles, as well as
//                 peer-reviewed research reports which cover topics such as
//                 current vaccines in clinical trials or therapeutics under
//                 research. I hope that you find this website useful and hope that
//                 this website can help you better understand how to protect
//                 yourself, your community, and your family from COVID-19.
//                 content.
//               </Card.Body>
//             </Row>
//           </Col>
//         </Row>
//       </Card>
//       <div className="parallax">
//         <h1></h1>
//       </div>
//       <Card className="IndividualCards">
//         <Row>
//           <Col className="CardLeft" xs={6} sm={4}>
//             <Card.Img
//               variant="top"
//               src="https://i.ibb.co/XD36tvQ/hector-Carbajal.jpg"
//             />
//             <Card.Title>Tejinderjeet Sandhu</Card.Title>
//             <Card.Subtitle className="mb-2 text-muted">Role</Card.Subtitle>

//             <Accordion className="Accordian" defaultActiveKey="0">
//               <Card.Header className="Socials">
//                 <Accordion.Toggle as={Button} variant="dark" eventKey="1">
//                   Contact information
//                 </Accordion.Toggle>
//               </Card.Header>
//               <Accordion.Collapse eventKey="1">
//                 <Card.Body className="socialLinks">
//                   <div className="hi">
//                     <Card.Link
//                       href="https://www.google.com/"
//                       target="_blank"
//                       class="fab fa-linkedin-in fa-2x social"
//                     ></Card.Link>
//                     <Card.Link
//                       href="https://www.google.com/"
//                       target="_blank"
//                       class="fab fa-facebook-square fa-2x social"
//                     ></Card.Link>
//                     <Card.Link
//                       href="https://www.google.com/"
//                       target="_blank"
//                       class="fa fa-instagram fa-2x social"
//                     ></Card.Link>
//                     <Card.Link
//                       href="https://www.google.com/"
//                       target="_blank"
//                       class="fab fa-github fa-2x social"
//                     ></Card.Link>
//                   </div>
//                   <p>Email: 005206704@coyote.csusb.edu </p>
//                 </Card.Body>
//               </Accordion.Collapse>
//             </Accordion>
//           </Col>
//           <Col xs={12} md={8}>
//             <Row>
//               <Card.Body className="CardRight">
//                 Some quick example text to build on the card title and make up
//                 the bulk of the card's content.Some quick example text to build
//                 on the card title and make up the bulk of the card's contentSome
//                 quick example text to build on the card title and make up the
//                 bulk of the card's contentSome quick example text to build on
//                 the card title and make up the bulk of the card's content.Some
//                 quick example text to build on the card title and make up the
//                 bulk of the card's contentSome quick example text to build on
//                 the card title and make up the bulk of the card's content.
//               </Card.Body>
//             </Row>
//           </Col>
//         </Row>
//       </Card>
//       <div className="parallax">
//         <h1></h1>
//       </div>
//       <Card className="IndividualCards">
//         <Row>
//           <Col className="CardLeft" xs={6} sm={4}>
//             <Card.Img
//               variant="top"
//               src="https://i.ibb.co/XD36tvQ/hector-Carbajal.jpg"
//             />
//             <Card.Title>Hector Carbajal</Card.Title>
//             <Card.Subtitle className="mb-2 text-muted">Role</Card.Subtitle>

//             <Accordion className="Accordian" defaultActiveKey="0">
//               <Card.Header className="Socials">
//                 <Accordion.Toggle as={Button} variant="dark" eventKey="1">
//                   Contact information
//                 </Accordion.Toggle>
//               </Card.Header>
//               <Accordion.Collapse eventKey="1">
//                 <Card.Body className="socialLinks">
//                   <div className="hi">
//                     <Card.Link
//                       href="https://www.linkedin.com/in/hector-carbajal-570485173/"
//                       target="_blank"
//                       class="fab fa-linkedin-in fa-2x social"
//                     ></Card.Link>
//                     <Card.Link
//                       href="https://www.google.com/"
//                       target="_blank"
//                       class="fab fa-facebook-square fa-2x social"
//                     ></Card.Link>
//                     <Card.Link
//                       href="https://www.google.com/"
//                       target="_blank"
//                       class="fa fa-instagram fa-2x social"
//                     ></Card.Link>
//                     <Card.Link
//                       href="https://www.google.com/"
//                       target="_blank"
//                       class="fab fa-github fa-2x social"
//                     ></Card.Link>
//                   </div>
//                   <p>Email: 005206704@coyote.csusb.edu </p>
//                 </Card.Body>
//               </Accordion.Collapse>
//             </Accordion>
//           </Col>
//           <Col xs={12} md={8}>
//             <Row>
//               <Card.Body className="CardRight">
//                 Some quick example text to build on the card title and make up
//                 the bulk of the card's content.Some quick example text to build
//                 on the card title and make up the bulk of the card's contentSome
//                 quick example text to build on the card title and make up the
//                 bulk of the card's contentSome quick example text to build on
//                 the card title and make up the bulk of the card's content.Some
//                 quick example text to build on the card title and make up the
//                 bulk of the card's contentSome quick example text to build on
//                 the card title and make up the bulk of the card's content.
//               </Card.Body>
//             </Row>
//           </Col>
//         </Row>
//       </Card>
//       {/* </Container> */}

//       <div className="about_us_footer">
//         <h1 className="header_about_us">Footer PlaceHolder</h1>
//       </div>
//     </>
//   );
// };

// export default About_Us;
