import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Button, Card } from 'antd';
import "./services.css";


export default class Website extends Component {
    render() {

        return (
            <Grid fluid>
                <Row middle="xs" center="xs" style={{ height: "100vh" }} style={{ overflow: 'hidden' }}>
                    <Col xs={12} lg={8}>
                        <Card>
                            <Row>
                                <Col xs={12} lg={6}>
                                    <h1>Website Design & Website Development </h1>
                                    <p>Never underestimate the winning combination  of a clear  creative direction partnered with the right technology! Work with our ui/ux designers and developers  to <b>bring your vision to life!</b></p>
                                </Col>
                                <Col lg={6}>
                                    <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/web.png" />
                                </Col>
                                <Col style={{margin:"0 auto"}}>
                                    <Button className="btn" style={{margin:"5px 10px"}}>Book Now</Button>
                                    <Button className="btn" style={{margin:"5px 10px"}}>Learn More</Button>
                                </Col>
                            </Row>

                        </Card>
                    </Col>
                </Row>
            </Grid >
        )
    }
}
