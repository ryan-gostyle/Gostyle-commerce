

import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
// import './Commerce.css';
import { Anchor } from 'antd';

const { Link } = Anchor;

export default class ISection1 extends Component {
    render() {
        return (
            <div>
                <Grid fluid className="hero">
                    <Row middle="xs" center="xs" style={{margin: "0 auto" }} className="container inbound-hero">
                        <Col xs={12} md={12} lg={6}>
                            <h1 style={{ fontSize: "2em" }}>Our Secret sauce:</h1>
                            <h1 style={{ fontFamily: "proxima-bold", fontSize: "3em" }}>We are Great Listeners!</h1>
                            <h3 style={{ fontFamily: "proxima" }}>We listen to your target audience so that you can communicate effectively and thus reaching your business objective</h3>
                            <br />
                            <div style={{textAlign:"center"}}>
                                <Anchor affix={false} style={{ display: "inline-block" }}>
                                    <Link href="#solution" className="we-work" title="Learn More" />
                                </Anchor>
                                <Anchor affix={false} style={{ display: "inline-block" }}>
                                    <Link href="#booking" className="book-now" title="Book Now" />
                                </Anchor>
                            </div>
                            {/* 
                        <Button style={{marginBottom:"20px"}} className="we-work"><a>LEARN MORE</a></Button>
                        <Button style={{marginLeft:"10px",marginBottom:"20px"}} className="book-now"><a>BOOK NOW</a></Button> */}
                        </Col>
                        <Col xs={12} md={12} lg={6}>
                            <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/inboundheader.png" />
                        </Col>
                    </Row>
                </Grid>
                <Grid fluid>
                    <Row middle="xs" center="xs">
                        <Col xs={4} md={4} lg={2}>
                            <img alt="no hubspot" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/Hubspot.png" />
                        </Col>
                        <Col xs={4} md={4} lg={2}>
                            <img alt="no wordstream" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/wordstream.png" />
                        </Col>
                        <Col xs={4} md={4} lg={2}>
                            <img alt="no semrush" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/semrush.png" />
                        </Col>
                        <Col xs={4} md={4} lg={2}>
                            <img alt="no klaviyo" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/klaviyo.png" />
                        </Col>
                        <Col xs={4} md={4} lg={2}>
                            <img alt="no hootsuite" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/hootsuite.png" />
                        </Col>
                        <Col xs={4} md={4} lg={2}>
                            <img alt="no google" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/google.png" />
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}
