import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Button } from 'antd';
import "./services.css";


export default class InMarket extends Component {
    render() {

        return (
            <Grid fluid>
                <Row middle="xs" center="xs" style={{ height: "100vh" }} style={{ overflow: 'hidden' }}>
                    <Col xs={12} md={12} lg={6}>
                        <h1 style={{ textAlign: "center" }}>Custom Applications & Mobile App Development </h1>
                        <p>Let us know your idea and let’s explore how we can make it happen. From booking platforms to Mobile Applications - Let’s execute your ideas and make it happen. </p>
                        <Row>
                            <Col lg={6}>
                                <Button className="btn">Book Now</Button>
                            </Col>
                            <Col lg={6}>
                                <Button className="btn">Learn More</Button>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} md={12} lg={6} >
                        <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/inbound.png" />
                    </Col>
                </Row>
            </Grid >
        )
    }
}
