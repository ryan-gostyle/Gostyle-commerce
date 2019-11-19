import React from 'react';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header1 from './components/Header'
import Footer from './components/Footer'
import Solutions from './components/client/landing/Solutions'
import Collaborate from './components/client/landing/Collaborate'
import Customize from './components/client/landing/Customize'
import Feature from './components/client/landing/Feature'
import Cooperation from './components/client/landing/Cooperation'
import Packages from './components/client/landing/Packages'
import Wework from './components/client/landing/Wework'
import Loop from './components/client/landing/Loop'
// import Partners from './components/client/landing/Partners'
import Notable from './components/client/landing/Notable'
import Hero from './components/client/landingv3/Hero'
import Nutshell from './components/client/landingv3/Nutshell'
import FeaturedWorks from './components/client/landingv3/FeaturedWorks'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Section1 from './components/client/how-we-work/section1';
import Section2 from './components/client/how-we-work/section2';
import Section3 from './components/client/how-we-work/section3';
import Section4 from './components/client/how-we-work/section4';
import Section5 from './components/client/how-we-work/section5';
import Clients from './components/client/landingv3/clients';
import Booking from './components/client/landingv3/booking';
import Last from './components/client/landingv3/final';
import First from './components/client/landing/first';
import login from './components/client/accounts/login';
import cookie from 'react-cookies';
import HowWeWorks from './components/client/landingv3/HowWeWork';
import Free from './components/client/landingv3/Free';
import Lastcommerce from './components/client/landing/Last';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/commerce" component={Commerce} />
        <Route exact path="/how-we-work" component={HowWeWork} />
        <Route exact path="/login" component={login} />
        <Route exact path="/logout" component={logout} />
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
      <HowWeWorks/>
      <Free/>
      <Booking />
      <Last />
      <Footer />

      {/*
      <EcomSolution />
      <Website />
      <Mobile />
      <InMarket />
      <Partners /> */}
      


    </div>
  )

}

function Commerce() {
  return (
    <div>
      <Header1 />
      <First />
      <Solutions />
      <FeaturedWorks />
      <Collaborate />
      <Wework />
      <div>
        <br/>
        <h1 style={{textAlign:"center",fontFamily:"proxima-bold"}}>Custom Solution? Let's talk about it</h1>
        <br/>
      </div>
      <Cooperation />
      <Lastcommerce />
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

export default App;
