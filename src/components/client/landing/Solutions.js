import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import './Solutions.css';
export default class Solutions extends Component {
    render() {
        return (
            <Grid fluid className="solutions">
                <Row>
                    <Col xs={12} md={12} >
                        <h2 style={{textAlign:"center"}}>What we do?</h2> 
                    </Col>
                    <Col xs={12} md={12} >
                        <h1 className="solution-commerce">We Provide Digital End-to-End Ecommerce Solutions</h1> 
                    </Col>
                    <Col xs={12} md={12}>
                        <div className="flexcontainer container">
                            <div className="solutions-img">
                                <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/2.png"/>
                                <p>Business Strategy & Branding</p> 
                            </div>
                            <div className="solutions-img">
                                <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/3.png"/>
                                <p>eCommerce Development & Design</p> 
                            </div>
                            <div className="solutions-img">
                                <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/4.png"/>
                                <p>Inbound Marketing for all eCommerce channels</p> 
                            </div>
                            <div className="solutions-img">
                                <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/5.png"/>
                                <p>MultiChannel Management</p> 
                            </div>
                            <div className="solutions-img">
                                <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/6.png"/>
                                <p>Data & Performance Analysis</p> 
                            </div>
                        </div>
                    </Col>
                </Row>
            </Grid>
        )
    }
}
