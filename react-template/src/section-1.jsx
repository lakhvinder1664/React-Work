import { useEffect } from "react";
import { Container, Navbar, Nav, Button, Col, Row } from "react-bootstrap";
import Carousel from "./slide-img";

function Section(){
  
  useEffect(() => {
    const counters = document.querySelectorAll(".counter");

function runCounter(counter) {
  const targetValue = counter.getAttribute("data-target");
  const target = parseInt(targetValue.replace(/\D/g, "")); // number only
  let suffix = targetValue.replace(/[0-9]/g, ""); // extract H, K etc.

  let startTime = null;
  const duration = 2000; // 2 seconds

  function updateCounter(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);

    const current = Math.floor(progress * target);
    counter.innerText = current + suffix;

    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    } else {
      counter.innerText = target + suffix; // final value
    }
  }

  requestAnimationFrame(updateCounter);
}


    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            runCounter(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach(counter => observer.observe(counter));
  }, []);

    return(
       <>

       <div className="sec-1">
       <Container>
         <Navbar bg="transparent" variant="dark" expand="lg" className="top-nav" fixed="top">
        <Container>
         <div className="nav-logo">
          <Navbar.Brand href="#logo">parchis club</Navbar.Brand>
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
        <Button variant="success" size="lg" style={{ background: "#a200ff"}}>
          Get Started
        </Button>
        <Button variant="" size="lg" style={{color: "white", border: "1px solid white"}}>
         Go to Discord
        </Button>
      </div>
      </div>

      </div>

      {/* sec-2 */}
      
      <div class="sec-2-bg">
  <div class="sec-2">
    <div class="marquee">
      <div class="marquee-content">
        <img src="/neurowave-09.png" alt="Neurowave 09" />
        <img src="/neurowave-10.png" alt="Neurowave 10" />
        <img src="/neurowave-11.png" alt="Neurowave 11" />
        <img src="/neurowave-12.png" alt="Neurowave 12" />
        <img src="/neurowave-13.png" alt="Neurowave 13" />
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
        <li>
          <div className="counter" data-target="4">0</div>
          <div className="btm-counter">League</div>
        </li>
        <li>
          <div className="counter" data-target="320H">0</div>
          <div className="btm-counter">Total Streams</div>
        </li>
        <li>
          <div className="counter" data-target="64K">0</div>
          <div className="btm-counter">Awarded</div>
        </li>
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
          <p> <img src="/bx_bxs-check-circle.png" alt="" />Lorem Ipsum is simply</p> <p><img src="/bx_bxs-check-circle.png" alt="" />Lorem Ipsum is simply</p>
        </div>
        </div>
        </Col>
      </Row>
      <div className="card-sec">
        <Container>
          <Row>
            <div className="card-sec-head d-flex justify-content-between">
              <h4>Currently Trending Games</h4>
              <Button style={{ background: "#a200ff"}} >See All</Button>
            </div>
          </Row>
         <Row>
  <div className="col-img d-flex">
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src="/Group 93.png" alt="Game 93" />
           <div className="bottom-card-cont">
            <img src="/Group.png" alt="" />
            <p>40 Followers</p>
          </div>
        </div>
        <div className="flip-card-back">
          <h5>40k</h5>
          <p>Awarded</p>
        </div>
      </div>
    </div>

    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src="/Group 94.png" alt="Game 94" />
           <div className="bottom-card-cont">
            <p>40 Followers</p>
          </div>
          <div className="front-box">
    <h5>40</h5>
    <p>Follower</p>
  </div>
        </div>
        <div className="flip-card-back">
         <h5>40k</h5>
          <p>Awarded</p>
        </div>
      </div>
    </div>

    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src="/Group 95.png" alt="Game 95" />
           <div className="bottom-card-cont">
            <p>40 Followers</p>
          </div>
        </div>
        <div className="flip-card-back">
          <h5>40k</h5>
          <p>Awarded</p>
        </div>
      </div>
    </div>

    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src="/Group 96.png" alt="Game 96" />
          <div className="bottom-card-cont">
            <p>40 Followers</p>
          </div>
        </div>
        <div className="flip-card-back">
          <h5>40k</h5>
          <p>Awarded</p>
        </div>
      </div>
    </div>
  </div>
</Row>

        </Container>
      </div>
    </Container>
      </div>
     

       </>
     



    )
}

export default Section;