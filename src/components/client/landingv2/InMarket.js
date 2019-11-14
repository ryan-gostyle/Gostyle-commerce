import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Button } from 'antd';
import "./services.css";


export default class InMarket extends Component {
    render() {

        return (
            <Grid fluid >
                <Row middle="xs" center="xs" className="inbound-tagline" style={{ height: "100vh" }} style={{ overflow: 'hidden' }}>
                    <Col xs={12} md={12} lg={6} >
                        <h1 style={{ textAlign: "center" }}>Inbound Marketing </h1>
                        <p>We provide you with your own eCommerce websiteand an all-in-one dashboard to manage your zilingo, lazada, shoppee and zalora! Let us set you up for your success with seamless and optimized eCommerce solutions for your brand!  </p>
                        <Row>
                            <Col style={{margin:"0 auto"}}>
                                <Button className="btn"  style={{margin:"5px 10px"}}>Book Now</Button>
                                <Button className="btn"  style={{margin:"5px 10px"}}>Learn More</Button>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} md={12} lg={6}  className="inMarket-background">
                        {/* <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/inbound.png" /> */}
                    </Col>
                </Row>
            </Grid >
        )
    }
}
