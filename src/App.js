import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Header1 from './components/Header'
import Footer from './components/Footer'
import Solutions from './components/client/ecommerce/Solutions'
import Collaborate from './components/client/ecommerce/Collaborate'
// import Cooperation from './components/client/ecommerce/Cooperation'
import Wework from './components/client/ecommerce/Wework'
import Hero from './components/client/landingv3/Hero'
import Nutshell from './components/client/landingv3/Nutshell'
import FeaturedWorks from './components/client/landingv3/FeaturedWorks'
import Section1 from './components/client/how-we-work/section1';
import Section2 from './components/client/how-we-work/section2';
import Section3 from './components/client/how-we-work/section3';
import Section4 from './components/client/how-we-work/section4';
import Section5 from './components/client/how-we-work/section5';
import Clients from './components/client/landingv3/clients';
import Booking from './components/client/landingv3/booking';
import Last from './components/client/landingv3/final';
import First from './components/client/ecommerce/first';
import login from './components/client/accounts/login';
import cookie from 'react-cookies';
import HowWeWorks from './components/client/landingv3/HowWeWork';
import Free from './components/client/landingv3/Free';
import CSection1 from './components/client/custom/C_Section1';
import CSection2 from './components/client/custom/C_Section2';
import CSection4 from './components/client/custom/C_Section4';
import CSection3 from './components/client/custom/C_Section3';
import Solutions1 from './components/client/ecommerce/Solution1';
import Solutions2 from './components/client/ecommerce/Solution2';
import CommcereFree from './components/client/ecommerce/Free';
import Lastcommerce from './components/client/ecommerce/Last';
// import Lastcommerce from './components/client/ecommerce/Last';




function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/commerce" component={Commerce} />
        <Route exact path="/how-we-work" component={HowWeWork} />
        <Route exact path="/coming-soon" component={ComingSoon} />
        <Route exact path="/custom" component={Custom} />
        <Route exact path="/login" component={login} />
        <Route exact path="/logout" component={logout} />
        <Route render={() => <Redirect to={{ pathname: "/coming-soon" }} />} />
      </Switch>
    </Router>
  );
}

function logout() {
  cookie.remove('token')
  window.location.href = '/'
}

function LandingPage() {
  return (
    <div className="App">
      <Header1 />
      <Hero />
      <Nutshell />
      <FeaturedWorks />
      <Clients />
      <HowWeWorks />
      <Free />
      <Booking />
      <Last />
      <Footer />
    </div>
  )

}

function Commerce() {
  return (
    <div>
      <Header1 />
      <First />
      <Solutions />
      <Collaborate />
      <Solutions1 />
      <FeaturedWorks />
      <Solutions2 />
      <Wework />
      <CommcereFree/>
      <Booking />
      {/* <Cooperation /> */}
      <Lastcommerce/>
      {/* <Last /> */}
      <Footer />
    </div>
  )
}

function HowWeWork() {
  return (
    <div className="App">
      <Header1 />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Footer />
    </div>
  )
}

function Custom() {
  return (
    <div>
      <Header1 />
      <CSection1 />
      <CSection2 />
      <CSection3 />
      <CSection4 />
      <Footer />
    </div>
  )

}

function ComingSoon() {
  return (
    <div className="App" style={{ overflow: "hidden" }}>
      {/* <Header1 /> */}
      <section style={{ background: "#ffb445", width: "100%", height: "100vh" }} className="coming-soon-placeholder">
        <Grid container="true" className="show">
          <div className="paint-position">
            <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/comingsoon3.png" className="paint" alt="cloud" />
          </div>
          <Row>
            <div className="cloud-position">
              <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/comingsoon2.png" className="cloud" alt="cloud" />
            </div>
            <Col xs={12} md={6} className="under-construct">
              <div className="under-construction">
                <h1 style={{ color: "#fce779" }}>Under</h1>
                <h1> Construction</h1>
                <a href="mailto:suppport@gostyle.studio"><Button style={{ backgroundColor: "#fce779", borderRadius: 25 }}>Contact Us</Button></a>
              </div>
            </Col>
            <Col xs={12} md={6} className="show-chair" >
              <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/comingsoon1.png" alt="paint" />
            </Col>
          </Row>
        </Grid>
      </section>
    </div>
  )
}

export default App;
