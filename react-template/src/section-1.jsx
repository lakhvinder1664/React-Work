import { Container, Navbar, Nav, Button, Col, Row } from "react-bootstrap";


function Section(){
  
    return(
       <>

       <div className="sec-1">
       <Container>
         <Navbar bg="dark" data-bs-theme="dark" className="top-nav">
        <Container>
         <div className="nav-logo">
          <Navbar.Brand href="#logo">Parchis Club</Navbar.Brand>
         </div>
          <Nav className="justify-content-end gap-5" defaultActiveKey="#home">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#news">News</Nav.Link>
            <Button variant="success">Read More</Button>
          </Nav>
        </Container>
      </Navbar>
       </Container>

      <div className="sec-1-ctr-txt">
        <h2>Become part of the <br /> amazing Esport community</h2>
        <p>It is very important for the customer to be aware of the fact that the customer needs to be able to decorate the product in the two elements</p>
        <div className="d-flex mb-2 sec-1-ctr-btn">
        <Button variant="success" size="lg">
          Get Started
        </Button>
        <Button variant="" size="lg" style={{color: "white", border: "1px solid white"}}>
         Go to Discord
        </Button>
      </div>
      </div>

      </div>

      {/* sec-2 */}

      <div className="sec-2-bg">
         <div className="sec-2">
        <div className="continues-slide d-flex justify-content-center gap-4">
          <div className="silde-img">
            <img src="/neurowave-09.png" alt="Neurowave 09" />
          </div>
          <div className="silde-img">
            <img src="/neurowave-10.png" alt="Neurowave 10" />
          </div>
          <div className="silde-img">
            <img src="/neurowave-11.png" alt="Neurowave 11" />
          </div>
          <div className="silde-img">
            <img src="/neurowave-12.png" alt="Neurowave 12" />
          </div>
          <div className="silde-img">
            <img src="/neurowave-13.png" alt="Neurowave 13" />
          </div>
          <div className="silde-img">
            <img src="/neurowave-14.png" alt="Neurowave 14" />
          </div>
        </div>
      </div>
      </div>

      <div className="sec-2-cont">
        <Container>
      <Row>
        <Col>
       <div className="sec-2-left">
         <h2>Parchis Club Wants New Members</h2>
        <p>It is very important for the customer to be aware of the fact that the customer needs to be able to decorate the product in the two elements</p>
       
       <div className="sec-2-left-bottom">
        <div className="three-text">
          <ul>
            <li>04</li>
            <li>320H</li>
            <li>64K</li>
          </ul>
          <ul className="bottom-three-txt">
            <li>League</li>
            <li>Total Streams</li>
            <li>Awarded</li>
          </ul>
        </div>
       </div>
       </div>
        </Col>
        <Col>
        <div className="sec-2-right">
          <img src="/image.png" alt="" />
        <h4>Introducing Aquatik Esports | Now Recruiting</h4>
        <div className="sec-2-right-p d-flex gap-4">
          <p>Lorem Ipsum is simply</p> <p>Lorem Ipsum is simply</p>
        </div>
        </div>
        </Col>
      </Row>
    </Container>
      </div>
     
       </>
     



    )
}

export default Section;