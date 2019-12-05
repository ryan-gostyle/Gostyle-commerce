

import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import Typed from 'react-typed';
import { Anchor } from 'antd';
const { Link } = Anchor;

export default class First extends Component {
    render() {
        return (
            <Grid fluid className="hero">
                <Row>
                    <Col xs={12} md={5} lg={5} lgOffset={1} className="hero-col-1">
                        <h1 style={{ fontFamily: "proxima-bold" }} className="bold-font-600 slide-in-bck-center">LET'S BUILD YOUR  <br /> <span className="bold-font-900"><Typed
                            strings={["Webstore", "SEO", "Brand"]}
                            typeSpeed={200}
                            backSpeed={100}
                            loop
                            smartBackspace
                            shuffle={false}
                            backDelay={3}
                            fadeOut={false}
                            fadeOutDelay={100}
                            loopCount={0}
                            showCursor
                            cursorChar="|" /></span></h1>
                        <div className="fade-in-bottom">
                            <h2>THROUGH REAL-TIME</h2>
                            <h2>COLLABORATION</h2>
                            <br />
                            {/* <a href="#learn" ></a> */}
                            {/* <a href="#booking" >BOOK NOW</a> */}
                            <Row start="xs" middle="xs">
                                <Col xs={12} md={6} lg={4}>
                                    <br/>
                                    <Anchor affix={false}>
                                        <Link href="#nutshell" className="we-work" title="Learn More" />
                                    </Anchor>
                                </Col>
                                <Col xs={12} md={6} lg={4}>
                                <br/>

                                    <Anchor affix={false}>
                                        <Link href="#booking" className="book-now" title="Book Now" />
                                    </Anchor>
                                </Col>
                            </Row>

                        </div>
                    </Col>
                    <Col xs={12} md={7} lg={6}>
                        <img alt="no no-bg.gif" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/no-bg.gif" />
                        <Row top="xs" center="xs" style={{ marginRight: "20px" }}>
                            <Col xs={6} md={3}>
                                <img alt="no zoom" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/zoom.png" />
                            </Col>
                            <Col xs={6} md={3}>
                                <img alt="no loom" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/loom.png" />
                            </Col>
                            <Col xs={6} md={3}>
                                <img alt="no slack" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/slack.png" />
                            </Col>
                            <Col xs={6} md={3}>
                                <img alt="no toggle" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/toggle.png" />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Grid>
        )
    }
}
