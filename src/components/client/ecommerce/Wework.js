import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import '../landingv3/Nutshell.css';
import '../landingv3/FeaturedWorks.css';
export default class Wework extends Component {
    render() {
        return (
            <div>
                <Grid fluid className="featuredworks tasks color-change-2x">
                    <Row style={{ overflow: 'hidden' }}>
                        <Col xs={12} md={12} >
                            <h2 className="focus-in-expand" style={{ fontFamily: "proxima-bold", textAlign: "center" }}>Let's Build Online Store</h2>
                        </Col>
                        <Col xs={12} md={12}>
                            <div className="">
                                <Row>
                                    <div xs={12} md={4} className="featuredworks-1 ">
                                        <div className="item anim fade-in-bottom-1 ">
                                            <img alt="no ecom1.png" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/ecommerce-01.png" />
                                            <p>ECOMMERCE Website Development</p>
                                        </div>
                                    </div>
                                    <div xs={12} md={4} className="featuredworks-2 ">
                                        <div className="item anim fade-in-bottom-2">
                                            <img alt="no inbounmarketing" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/inbound+marketing.png"  />
                                            <p>ECOMMERCE Inbound Marketing</p>
                                        </div>

                                    </div>
                                    <div xs={12} md={4} className="featuredworks-3 ">
                                        <div className="item  anim fade-in-bottom-3">
                                            <img alt="no mobile" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/mobile.png"  />
                                            <p>ECOMMERCE Virtual Assistant</p>
                                        </div>

                                    </div>
                                    <div xs={12} md={4} className="featuredworks-1 ">
                                        <div className="item anim fade-in-bottom-4">
                                            <img alt="no multichannel" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/multichannel-management.png"  />
                                            <p>MultiChannel Management</p>
                                        </div>
                                    </div>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>

        )
    }
}

