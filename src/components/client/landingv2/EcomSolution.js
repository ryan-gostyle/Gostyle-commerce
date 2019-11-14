import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Button } from 'antd';
import "./services.css";

export default class EcomSolution extends Component {
    render() {

        return (
            <Grid fluid>
                <Row middle="xs" center="xs" style={{ height: "100vh" }} style={{ overflow: 'hidden' }}>
                    <Col xs={12} md={12} lg={6} >
                        <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/ecomsolution.png" />
                    </Col>
                    <Col xs={12} md={12} lg={6}>
                        <h1 style={{ textAlign: "center" }}>Ecommerce Solutions</h1>
                        <p>We provide you with your own eCommerce websiteand an all-in-one dashboard to manage your zilingo, lazada, shoppee and zalora! Let us set you up for your success with seamless and optimized eCommerce solutions for your brand! </p>
                        <Row>
                            <Col lg={6}>
                                <Button className="btn">Book Now</Button>
                            </Col>
                            <Col lg={6}>
                                <Button className="btn">Learn More</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Grid >
        )
    }
}
