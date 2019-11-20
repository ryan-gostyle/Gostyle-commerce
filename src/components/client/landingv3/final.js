import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Button } from 'antd';
import "./services.css";


export default class Last extends Component {
    render() {

        return (
            <Grid fluid className="last bg-pan-bottom">
                <Row middle="xs" center="xs">
                    <Col xs={12} md={6}>
                        <h1 style={{fontFamily:"proxima-bold",textAlign:"center"}}>Lorem Ipsum</h1>
                        <p style={{wordBreak:"break-word", overflowWrap:"break-word",textAlign:"center"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultricies enim semper euismod sagittis. Vivamus fringilla vulputate leo, sed posuere enim cursus eget.</p>
                        <Row center="xs">
                            <Col lg={4}>
                                <Button className="btn">already signed up? login</Button>
                            </Col>
                            <Col lg={2}>
                                <p>find out more</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} md={6}>
                        <img alt="no image1" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/portal.png" style={{paddingBottom:"0px"}} />
                    </Col>
                </Row>
            </Grid >
        )
    }
}
