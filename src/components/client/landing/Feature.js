import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import './Feature.css';
export default class Feature extends Component {
    render() {
        return (
            <Grid fluid className="feature">
                <Row>
                    <Col xs={12} md={12} >
                        <h2 style={{textAlign:"center"}}>Feature by the Hour</h2> 
                        <p className="sub-title" style={{textAlign:"center"}}>Just need specifics? We got you!</p> 
                    </Col>
                    <Col xs={12} md={12}>
                        <div className="flexcontainer container">
                            <div xs={6} md={3} className="feature-img">
                                <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/12.png"/>
                                <p>Lorem ipsum</p> 
                            </div>
                            <div xs={6} md={3} className="feature-img">
                                <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/13.png"/>
                                <p>Lorem ipsum</p> 
                            </div>
                            <div xs={6} md={3} className="feature-img">
                                <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/14.png"/>
                                <p>Lorem ipsum</p> 
                            </div>
                            <div xs={6} md={3} className="feature-img">
                                <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/15.png"/>
                                <p>Lorem ipsum</p> 
                            </div>
                            <div xs={6} md={3} className="feature-img">
                                <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/16.png"/>
                                <p>Lorem ipsum</p> 
                            </div>
                            <div xs={6} md={3} className="feature-img">
                                <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/17.png"/>
                                <p>Lorem ipsum</p> 
                            </div>
                            <div xs={6} md={3} className="feature-img">
                                <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/18.png"/>
                                <p>Lorem ipsum</p> 
                            </div>
                            <div xs={6} md={3} className="feature-img">
                                <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/19.png"/>
                                <p>Lorem ipsum</p> 
                            </div>
                        </div>
                    </Col>
                </Row>
        </Grid>
        )
    }
}
