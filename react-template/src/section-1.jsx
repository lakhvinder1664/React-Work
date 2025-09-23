import { useEffect, useRef } from "react";
import { Container, Navbar, Nav, Button, Col, Row } from "react-bootstrap";
import Carousel from "./slide-img";
import { useState } from "react";


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

  const devCarouselRef = useRef(null);

const scrollLeft = () => {
  devCarouselRef.current.scrollBy({ left: -200, behavior: "smooth" });
};

const scrollRight = () => {
  devCarouselRef.current.scrollBy({ left: 200, behavior: "smooth" });
};

const [playVideo, setPlayVideo] = useState(false);

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
            <Button style={{ background: "#a200ff", borderRadius: "30px" }}>Read More</Button>
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
      {!playVideo ? (
        <div className="thumbnail" onClick={() => setPlayVideo(true)}>
          <img src="/image.png" alt="Video Thumbnail" style={{ cursor: "pointer" }} />
          <div className="play-btn"></div>
        </div>
      ) : (
        <div className="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/FEKdk-cPVmg?autoplay=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      )}
          <div className="sec-2-right">
        <h4>Introducing Aquatik Esports | Now Recruiting</h4>
        <div className="sec-2-right-p d-flex gap-4">
          <p> <img src="/bx_bxs-check-circle.png" alt="" />Lorem Ipsum is simply</p> <p><img src="/bx_bxs-check-circle.png" alt="" />Lorem Ipsum is simply</p>
        </div>
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
     

     <div className="sec-3">
      <Container>
        <Row>
          <Col md-6>
          <div className="sec-3-left-carousel">
    <div className="sec-3-left-cont">
      <div className="sec-3-left-img-line d-flex">
        <img src="/Frame 1320.png" alt="" />
        <div className="lineimg">
          <img src="/Line 1.png" alt="" />
        </div>
      </div>
      <div className="sec-3-left-cont-img-txt">
        <h3>Game development</h3>
        <p>Our works have been internationally recognized for their design, stories and art direction. Together, we can transform your ideas into captivating games, on desktop, mobile or console.</p>
        <a href="">Learn More</a>
      </div>
    </div>

    <div className="sec-3-left-cont">
      <div className="sec-3-left-img-line d-flex">
        <img src="/Frame 1320 (3).png" alt="" />
        <div className="lineimg">
          <img src="/Line 1.png" alt="" />
        </div>
      </div>
      <div className="sec-3-left-cont-img-txt">
        <h3>Game design</h3>
        <p>We have long experience in creating educational and serious games with a wide range of topics, from history to ecology.</p>
        <a href="">Learn More</a>
      </div>
    </div>
    <div className="sec-3-left-cont">
      <div className="sec-3-left-img-line d-flex">
        <img src="/Frame 1320 (2).png" alt="" />
        <div className="lineimg">
          <img src="/Line 1.png" alt="" />
        </div>
      </div>
      <div className="sec-3-left-cont-img-txt">
        <h3>Art direction</h3>
        <p>We make award-winning games with unique art direction. Together, we can transform your ideas into captivating games, on desktop, mobile or console.</p>
        <a href="">Learn More</a>
      </div>
    </div>
    <div className="sec-3-left-cont">
      <div className="sec-3-left-img-line d-flex">
        <img src="/Frame 1320 (1).png" alt="" />
        <div className="lineimg">
          <img src="/Line 1 (1).png" alt="" />
        </div>
      </div>
      <div className="sec-3-left-cont-img-txt">
        <h3>MUTLIPLATFROM DEVELOPMENT</h3>
        <p>We make award-winning games with unique art direction. Together, we can transform your ideas into captivating games, on desktop, mobile or console.</p>
        <a href="">Learn More</a>
      </div>
    </div>
  </div>
         
          </Col>
          <Col md-6>
          <div className="sec-3-right-cont">
            <div className="sec-3-right-cont-txt">
              <h4>Key Features</h4>
              <p>We are ready to deliver your vision across multiple platforms, mobile, or desktop. Games are the language of the 21st century and we can help you harness their unique power.</p>
              <p>Games are a language of storytelling. We’re looking for games that develop and expand this language.</p>
              <Button style={{ background: "#a200ff"}} >Read More</Button>
            </div>
          </div>
          </Col>
        </Row>
      </Container>
     </div>


    <div className="sec-4">
      <Container>
        <Row>
          <Col>
            <div className="sec-4-img-cont">
              {!playVideo ? (
    <div className="thumbnail" onClick={() => setPlayVideo(true)}>
      <img src="/call of duty img.png" alt="Video Thumbnail" />
      <div className="play-btn"></div>
    </div>
  ) : (
    <iframe
      src="https://www.youtube.com/embed/tzIPoiZwPYo?autoplay=1"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  )}
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
          <div className="cod-video-bottom-p">
            <p style={{fontSize: "14px"}}>We are ready to deliver your vision across multiple platforms, mobile, or desktop. Games are the language of the 21st century and we can help you harness their unique power.</p>
          <p>Games are a language of storytelling. We’re looking for games that develop and expand this language.</p>
          </div>
          </Col>
          <Col>
           <div className="cod-video-bottom-p">
            <p style={{fontSize: "14px"}}>We are ready to deliver your vision across multiple platforms, mobile, or desktop. Games are the language of the 21st century and we can help you harness their unique power.</p>
          <p>Games are a language of storytelling. We’re looking for games that develop and expand this language.</p>
          </div>
          </Col>

        </Row>
      </Container>

      <Container>
        <Row>
            <div className="sec-4-head d-flex justify-content-between">
              <h4>Meet our developers</h4>
              <Button style={{ background: "#a200ff"}} >See All</Button>
            </div>
          </Row>

          <div className="carousel-wrapper">
  <Button className="carousel-btn left" onClick={scrollLeft} style={{background: "#48faf5"}}>
    &#8249;
  </Button>
  <Button className="carousel-btn left" onClick={scrollRight} style={{background: "#48faf5"}}>
    &#8249;
  </Button>

  <div className="moving-crousel d-flex gap-5" ref={devCarouselRef}>
    <div className="mc-1">
      <img src="/Ellipse 1.png" alt="" />
      <h4>Martin Danelio</h4>
      <p>Founder</p>
    </div>
    <div className="mc-1">
      <img src="/image (1).png" alt="" />
      <h4>Kelly Orban</h4>
      <p>Manager</p>
    </div>
    <div className="mc-1">
      <img src="/Ellipse 1.png" alt="" />
      <h4>Alice Thompson</h4>
      <p>Designer</p>
    </div>
    <div className="mc-1">
      <img src="/image (1).png" alt="" />
      <h4>Samuel Chang</h4>
      <p>Developer</p>
    </div>

  </div>

  <Button className="carousel-btn right" onClick={scrollRight}>
    &#8250;
  </Button>
</div>
      </Container>
    </div>

   <div className="sec-5">
  <Container>
    <Row>
      <div className="sec-5-head-txt text-center">
        <h4>Our latest news</h4>
        <p>
          It is very important for the customer to be aware of the fact that the
          customer needs to be able to decorate the product in the two elements
        </p>
      </div>
    </Row>

    <Row>
      <div className="second-crousel d-flex justify-content-center gap-4">
        <div className="sc-1">
          <img src="/Frame 1330.png" alt="" />
          <div className="sc-1-overlay">
            <p>MAY 2, 2024 | ADMIN</p>
            <h4>A Guide to Latest Style and Techniques</h4>
            <a href="">Learn More</a>
          </div>
        </div>

        <div className="sc-1">
          <img src="/image (2).png" alt="" />
          <div className="sc-1-overlay">
            <p>MAY 2, 2024 | ADMIN</p>
            <h4>A Guide to Latest Style and Techniques</h4>
            <a href="">Learn More</a>
          </div>
        </div>

        <div className="sc-1">
          <img src="/image (3).png" alt="" />
          <div className="sc-1-overlay">
            <p>MAY 2, 2024 | ADMIN</p>
            <h4>A Guide to Latest Style and Techniques</h4>
            <a href="">Learn More</a>
          </div>
        </div>
      </div>
    </Row>
  </Container>
</div>


      <div className="sec-6">
        <Container>
          <Row>
            <Col>
              <div className="sec-6-left-cont">
                <div className="sec-6-centre-head"><h4>The Intelligent Revolution: AI Shaping Our Future</h4></div>
                <div className="review-card">
                  <p>The website's user-friendly interface makes it easy to navigate and access a wide range of content, including cutting-edge AI solutions, informative case studies, and expert insights. Networking opportunities and funding resources</p>
                  <div className="card-user d-flex justify-content-between">
                      <div className="card-user-name">
                        <h5>James Smiths</h5>
                        <p>Client</p>
                      </div>
                      <div className="review-star-img">
                        <img src="/Star 1.png" alt="" />
                        <img src="/Star 1.png" alt="" />
                        <img src="/Star 1.png" alt="" />
                        <img src="/Star 1.png" alt="" />
                        <img src="/Star 1.png" alt="" />
                      </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <div className="sec-6-right-cont">
                <img src="/image (4).png" alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Container>
        <div className="footer">
        <Container>
          <Row>
            <Col>
              <div className="footer-cont-left">
                <h4>parchis club</h4>
                <p>It is very important for the customer to be aware of the fact that the customer needs to be able to decorate the product in the two elements</p>
                <div className="social">
                  <h5>Find Us On:</h5>
                  <div className="social-icons">
                    <img src="/Symbol.png" alt="" />
                    <img src="/Symbol (1).png" alt="" />
                    <img src="/Symbol (2).png" alt="" />
                    <img src="/Symbol (3).png" alt="" />
                  </div>
                </div>
              </div>
            </Col>
            <Col>
            <div className="footer-cont-center">
              <h4>Quick Links</h4>
              <ul>
                <li>About Us</li>
                <li>Our Services</li>
                <li>Our Portfolio</li>
                <li>Our Teams</li>
                <li>Our Testimonials</li>
              </ul>
            </div>
            </Col>
            <Col>
            <div className="footer-cont-right">
              <h4>Contact Info</h4>
              <div className="footer-p">
                <div className="footer-p-img-txt d-flex">
                  <img src="/Container.png" alt="" />
                  <p>1234, ABC Apartments, XYZ Street, Near LMN Market, Sector 15, Cityname - 110011, State, India.</p>
                </div>
                <div className="footer-p-img-txt-bottom d-flex">
                 <img src="/Symbol (4).png" alt="" />
                  <p>+91-9876543210</p>
                </div>
                
              </div>
            </div>
            </Col>
          </Row>
        </Container>
      </div>
      </Container>
       </>
     



    )
}

export default Section;