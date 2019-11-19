

import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import Typed from 'react-typed';
export default class First extends Component {
    render() {
        return (
            <Grid fluid className="hero">
                <Row>
                    <Col xs={12} md={5} lg={5} lgOffset={1} className="hero-col-1">
                        <h1 style={{ fontFamily: "proxima-bold" }} className="bold-font-600 slide-in-bck-center">LET'S BUILD YOUR  <br/> <span className="bold-font-900"><Typed
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
                            <a href="#" className="we-work">LEARN MORE</a>
                            <a href="#" className="book-now">BOOK NOW</a>
                        </div>
                    </Col>
                    <Col xs={12} md={7} lg={6}>
                        <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/no-bg.gif" />
                        <Row top="xs" center="xs" style={{marginRight:"20px"}}>
                            <Col xs={12} md={3}>
                                <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/zoom.png" />
                            </Col>
                            <Col xs={12} md={3}>
                                <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/loom.png" />
                            </Col>
                            <Col xs={12} md={3}>
                                <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/slack.png" />
                            </Col>
                            <Col xs={12} md={3}>
                                <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/toggle.png" />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Grid>
        )
    }
}
