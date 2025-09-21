import { Container, Navbar, Nav, Button } from "react-bootstrap";


function Section(){
    return(
       <>
        
      <div className="sec-1">
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
            <Button variant="purple">Read More</Button>
          </Nav>
        </Container>
      </Navbar>
      </div>
     
       </>
     



    )
}

export default Section;