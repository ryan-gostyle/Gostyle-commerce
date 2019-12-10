

import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
// import './Commerce.css';
import { Anchor } from 'antd';

const { Link } = Anchor;
var isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera());
    }
};


export default class ISection1 extends Component {
    render() {
        if (!isMobile.any()) {
            return (
                <div>
                    <Grid fluid className="hero">
                        <Row middle="xs" center="xs" style={{ margin: "0 auto" }} className="inbound-hero">
                            <Col xs={12} md={12} lg={5}>
                                <h1 style={{ fontSize: "2em" }}>Our Secret sauce:</h1>
                                <h1 style={{ fontFamily: "proxima-bold", fontSize: "3em" }}>We are Great Listeners!</h1>
                                <h3 style={{ fontFamily: "proxima" }}>We listen to your target audience so that you can communicate effectively and thus reaching your business objective</h3>
                                <br />
                                <Row middle="xs" center="xs">
                                    <Col xs={12} md={6} lg={4}>
                                        <br />
                                        <Anchor affix={false}>
                                            <Link href="#nutshell" className="we-work" title="Learn More" />
                                        </Anchor>
                                    </Col>
                                    <Col xs={12} md={6} lg={4}>
                                        <br />
                                        <Anchor affix={false}>
                                            <Link href="#booking" className="book-now" title="Book Now" />
                                        </Anchor>
                                    </Col>
                                </Row>
                                {/* 
                            <Button style={{marginBottom:"20px"}} className="we-work"><a>LEARN MORE</a></Button>
                            <Button style={{marginLeft:"10px",marginBottom:"20px"}} className="book-now"><a>BOOK NOW</a></Button> */}
                            </Col>
                            <Col xs={12} md={12} lg={6}>
                                <img alt="inbound header" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/inboundheader.png" />
                            </Col></Row>
                    </Grid>
                    <Grid fluid>
                        <Row middle="xs" center="xs">
                            <Col xs={6} md={4} lg={2}>
                                <img alt="no hubspot" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/Hubspot.png" />
                            </Col>
                            <Col xs={6} md={4} lg={2}>
                                <img alt="no wordstream" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/wordstream.png" />
                            </Col>
                            <Col xs={6} md={4} lg={2}>
                                <img alt="no semrush" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/semrush.png" />
                            </Col>
                            <Col xs={6} md={4} lg={2}>
                                <img alt="no klaviyo" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/klaviyo.png" />
                            </Col>
                            <Col xs={6} md={4} lg={2}>
                                <img alt="no hootsuite" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/hootsuite.png" />
                            </Col>
                            <Col xs={6} md={4} lg={2}>
                                <img alt="no google" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/google.png" />
                            </Col>
                        </Row>
                    </Grid>
                </div>
            )
            
          
        }
        else {
            return (
                <div>
                    <Grid fluid className="hero">
                        <Row middle="xs" center="xs" style={{ margin: "0 auto" }} className="inbound-hero">
                            <Col xs={12} md={12} lg={6}>
                                <img alt="inbound header" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/inboundheader.png" />
                            </Col>
                            <Col xs={12} md={12} lg={5}>
                                <h1 style={{ fontSize: "2em" }}>Our Secret sauce:</h1>
                                <h1 style={{ fontFamily: "proxima-bold", fontSize: "3em" }}>We are Great Listeners!</h1>
                                <h3 style={{ fontFamily: "proxima" }}>We listen to your target audience so that you can communicate effectively and thus reaching your business objective</h3>
                                <br />
                                <Row middle="xs" center="xs">
                                    <Col xs={12} md={6} lg={4}>
                                        <br />
                                        <Anchor affix={false}>
                                            <Link href="#nutshell" className="we-work" title="Learn More" />
                                        </Anchor>
                                    </Col>
                                    <Col xs={12} md={6} lg={4}>
                                        <br />
                                        <Anchor affix={false}>
                                            <Link href="#booking" className="book-now" title="Book Now" />
                                        </Anchor>
                                    </Col>
                                </Row>
                                {/* 
                            <Button style={{marginBottom:"20px"}} className="we-work"><a>LEARN MORE</a></Button>
                            <Button style={{marginLeft:"10px",marginBottom:"20px"}} className="book-now"><a>BOOK NOW</a></Button> */}
                            </Col>
                        </Row>
                    </Grid>
                    <Grid fluid>
                        <Row middle="xs" center="xs">
                            <Col xs={6} md={4} lg={2}>
                                <img alt="no hubspot" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/Hubspot.png" />
                            </Col>
                            <Col xs={6} md={4} lg={2}>
                                <img alt="no wordstream" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/wordstream.png" />
                            </Col>
                            <Col xs={6} md={4} lg={2}>
                                <img alt="no semrush" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/semrush.png" />
                            </Col>
                            <Col xs={6} md={4} lg={2}>
                                <img alt="no klaviyo" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/klaviyo.png" />
                            </Col>
                            <Col xs={6} md={4} lg={2}>
                                <img alt="no hootsuite" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/hootsuite.png" />
                            </Col>
                            <Col xs={6} md={4} lg={2}>
                                <img alt="no google" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/google.png" />
                            </Col>
                        </Row>
                    </Grid>
                </div>
            )
        }

    }
}
