import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import './Solutions.css';
export default class Solutions extends Component {
    render() {
        return (
            <Grid fluid id="solution" className="solutions">
                <Row middle="xs" center="xs" className="container solutions-commerce">
                    <Col xs={12} md={12} lg={12}>
                        <h1 style={{ fontFamily: "proxima-bold", textAlign: "center" }}>Growth Based Mindset - No Matter the Platform</h1>
                    </Col>
                    <Col lg={8}>
                        <p style={{ textAlign: "center", wordWrap: "break-word"}}>Some ecommerce development techonologies are loved more than others for their unique capabilities. To make sure that our clients get their ecommerce store built on the techonology they believe in, we have mastered all the major ecommerce website builders out there.</p>
                    </Col>
                    <Col xs={12} md={12} lg={12}>
                        <Row center="xs" middle="xs">

                            <Col xs={6} lg={3}>
                                <img alt="no shopify" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/shopify.png" />
                            </Col>
                            <Col xs={6} lg={3}>
                                <img alt="no woo" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/logo-woo.png" />
                            </Col>
                            <Col xs={6} lg={3}>
                                <img alt="no salesforce" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/salesforce.png" />
                            </Col>
                            <Col xs={6} lg={3}>
                                <img alt="no magento" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/magento.png" />
                            </Col>

                        </Row>
                    </Col>
                </Row>
            </Grid>
        )
    }
}
