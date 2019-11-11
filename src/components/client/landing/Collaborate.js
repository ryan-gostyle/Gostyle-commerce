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
                        <h3 style={{textAlign:"left"}}><span className="dedicated">Build, Optimize and Elevate</span> </h3> 
                        <h3 style={{textAlign:"left",maxWidth:"500px"}}>your eCommerce with your dedicated team - side by side</h3> 
                        <p>Our model is all about you. Whenever you need us, we're here to help you reach new audiences, connect with other businesses and transform your marketing efforts (among</p>
                    </Col>
                </Row>
            </Grid>
        )
    }
}
