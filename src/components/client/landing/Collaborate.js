import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import './Collaborate.css';
export default class Collaborate extends Component {
    render() {
        return (
            <Grid fluid className="collaborate">
                <Row>
                    <Col xs={12} md={6} >
                        <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/7.png"/>   
                    </Col>
                    <Col xs={12} md={6}>
                        <h3 style={{textAlign:"left"}}>Collaborate <span className="realtime">real-time</span></h3> 
                        <h3 style={{textAlign:"left"}}>with your <span className="dedicated">Dedicated Team!</span></h3> 
                        <p>Our model isall about you. Whenever you need us, we're here to help you reach new audiences, connect with other businesses and transform your marketing efforts (among other things) Born in Shareditch, this walk-in, pay-by-the-hour digital and marketing services is the first of its kind - anyone can simply book online and work side by side with specialists, without fuss or extortionate fees of a traditional agency.</p>
                    </Col>
                </Row>
            </Grid>
        )
    }
}
