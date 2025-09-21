import { Container, Navbar, Nav, Button } from "react-bootstrap";


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
    
     
       </>
     



    )
}

export default Section;