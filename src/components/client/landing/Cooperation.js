import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import Booking from './Booking'
import './Cooperation.css';
export default class Cooperation extends Component {
    render() {
        return (
            <Grid fluid className="cooperation">
                <Row>
                    <Col xs={12} md={7} style={{paddingLeft:40,paddingRight:40}} >
                        <h1>How it works?</h1>   
                        <h3>Let's Reinvent Collaboration to Real time Cooperation</h3>
                        <div className="flexcontainer container">
                            <div xs={6} md={3} className="cooperation-img">
                                <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/8.png"/>
                                <p>Lorem ipsum</p> 
                            </div>
                            <div xs={6} md={3} className="cooperation-img">
                                <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/9.png"/>
                                <p>Lorem ipsum</p> 
                            </div>
                            <div xs={6} md={3} className="cooperation-img">
                                <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/10.png"/>
                                <p>Lorem ipsum</p> 
                            </div>
                            <div xs={6} md={3} className="cooperation-img">
                                <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/11.png"/>
                                <p>Lorem ipsum</p> 
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={5}>
                        <Booking/>
                    </Col>
                </Row>
            </Grid>
        )
    }
}
