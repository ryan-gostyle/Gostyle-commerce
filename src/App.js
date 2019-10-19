import React from 'react';
import 'antd/dist/antd.css';
import Typed from 'react-typed';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './App.css';
import Header1 from './components/Header'
import Footer from './components/Footer'
import Solutions from './components/client/landing/Solutions'
import Collaborate from './components/client/landing/Collaborate'
import Customize from './components/client/landing/Customize'
import Feature from './components/client/landing/Feature'
import Cooperation from './components/client/landing/Cooperation'
import Packages from './components/client/landing/Packages'
import Loop from './components/client/landing/Loop'
import Partners from './components/client/landing/Partners'
import Notable from './components/client/landing/Notable'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
  return (
    <div className="App">
      <Header1 />
      <Grid fluid className="hero">
        <Row>
          <Col xs={12} md={5} className="hero-col-1">
            <h1>Let's Build</h1>
            <h1 style={{ marginBottom: 15 }} >Your &nbsp;
            <span className="bold-font-600"><Typed
                strings={["Webstore", "SEO", "Brand"]}
                typeSpeed={200}
                backSpeed={100}
                loop
                smartBackspace
                shuffle={false}
                backDelay={3}
                fadeOut={false}
                fadeOutDelay={100}
                loopCount={0}
                showCursor
                cursorChar="|" /></span></h1>
            <a href="#" className="book-now">BOOK NOW</a><a href="#" className="we-work">HOW WE WORK</a>
          </Col>
          <Col xs={12} md={7}>
            <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/1.png" />
          </Col>
        </Row>
      </Grid>
      <Solutions />
      <hr style={{ height: "30px", backgroundColor: "#ffef00d6", border: "#ffef00d6" }} />
      <Collaborate />
      <Packages />
      <Customize />
      <Cooperation />
      <Partners />
      <Feature />
      <Notable />
      <Loop />
      <Footer/>
    </div>
  );
}

export default App;
