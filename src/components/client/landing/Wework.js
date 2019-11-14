import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import './Wework.css';
export default class Wework extends Component {
    render() {
        return (
            <Grid fluid className="wework">
                <Row middle="xs" center="xs">
                    <Col xs={12} md={12} >
                        <Col xs={12} md={12} >
                            <h1 className="wework-h1">How we work?</h1> 
                        </Col>
                        <div className="flexcontainer">
                            <div xs={6} md={3} lg={4} className="wework-img">
                                <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/8.png"/>
                                <p>Choose a package</p> 
                            </div>
                            <div xs={6} md={3}  lg={4} className="wework-img">
                                <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/9.png"/>
                                <p>Book your Deicated Team</p> 
                            </div>
                            <div xs={6} md={3} lg={4} className="wework-img work3">
                                <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/10.png"/>
                                <p>Await for Booking Confirmation and Details</p> 
                            </div>
                            <div xs={6} md={3} lg={4} className="wework-img">
                                <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/11.png"/>
                                <p>Collaborate Real-time</p> 
                            </div>
                        </div>
                    </Col>
                </Row>
            </Grid>
        )
    }
}
