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
import Hero from './components/client/landingv2/Hero'
import Nutshell from './components/client/landingv2/Nutshell'
import FeaturedWorks from './components/client/landingv2/FeaturedWorks'
import Task from './components/client/landingv2/Task'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import EcomSolution from './components/client/landingv2/EcomSolution';
import Mobile from './components/client/landingv2/Mobile';
import InMarket from './components/client/landingv2/InMarket';
import Website from './components/client/landingv2/Website';
import Section1 from './components/client/how-we-work/section1';
import Section2 from './components/client/how-we-work/section2';
import Section3 from './components/client/how-we-work/section3';
import Section4 from './components/client/how-we-work/section4';
import Section5 from './components/client/how-we-work/section5';
import Clients from './components/client/landingv2/clients';
import Booking from './components/client/landingv2/booking';
import Partners from './components/client/landingv2/Partners'
import Last from './components/client/landingv2/final';
import First from './components/client/landing/first';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/commerce" component={Commerce} />
        <Route exact path="/how-we-work" component={HowWeWork} />
      </Switch>
    </Router>
  );
}

function LandingPage() {
  return (
    <div className="App">
      <Header1 />
      <Hero />
      <Nutshell />
      <Task />
      <FeaturedWorks />
      <EcomSolution />
      <Website />
      <Mobile />
      <InMarket />
      <Clients />
      <Booking />
      <Partners />
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
      <hr style={{ height: "30px", backgroundColor: "#fce779", border: "#fce779" }} />
      <Collaborate />
      <Wework />
      <Cooperation />
      <Partners />
      <Packages />
      <Customize />

      <Feature />
     {/*  <Notable />
      <Loop /> */}
      <Footer/>
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
