import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import '../landingv3/Nutshell.css';
import './FeaturedWorks.css';
import { Anchor } from 'antd';
const { Link } = Anchor;
export default class Wework extends Component {
    render() {
        return (
            <div>
                <Grid fluid className="featuredworks tasks">
                    <Row>
                        <Col xs={12} md={12} lg={12}>
                            <h2 className="focus-in-expand" style={{ fontFamily: "proxima-bold", textAlign: "center" }}>Let's Build Online Store</h2>
                        </Col>
                        <Col lg={12}>
                            <p style={{ textAlign: "center", wordBreak: "break-word" }}>From Premium Packages to Custom eCommerce Solutions, we tailor fit based on your business objectives.</p>
                        </Col>
                        <Col xs={12} md={12}>
                            <div className="">
                                <Row>
                                    <div xs={12} md={4} className="featuredworks-1 " style={{ background: "#FAFAFAFA" }}>
                                        <div className="item  fade-in-bottom-1 ">
                                            <img alt="no ecom1.png" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/ecommerce-01.png" />
                                            <p>ECOMMERCE Website Development</p>
                                            <ul>
                                                <li>MultiChannel Management</li>
                                                <li>MultiChannel Management</li>
                                                <li>MultiChannel Management</li>
                                                <li>MultiChannel Management</li>
                                            </ul>
                                            <Anchor affix={false} style={{ display: "inline-block" }}>
                                                <Link href="#booking" className="book-now" title="Request Quote" />
                                            </Anchor>
                                        </div>
                                    </div>
                                    <div xs={12} md={4} className="featuredworks-2 ">
                                        <div className="item  fade-in-bottom-2">
                                            <img alt="no inbounmarketing" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/inbound+marketing.png" />
                                            <p>ECOMMERCE Inbound Marketing</p>
                                            <ul>
                                                <li>MultiChannel Management</li>
                                                <li>MultiChannel Management</li>
                                                <li>MultiChannel Management</li>
                                                <li>MultiChannel Management</li>
                                            </ul>
                                            <Anchor affix={false} style={{ display: "inline-block" }}>
                                                <Link href="#booking" className="book-now" title="Request Quote" />
                                            </Anchor>
                                        </div>

                                    </div>
                                    <div xs={12} md={4} className="featuredworks-3 " style={{ background: "#FAFAFAFA" }}>
                                        <div className="item   fade-in-bottom-3">
                                            <img alt="no mobile" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/mobile.png" />
                                            <p>ECOMMERCE Virtual Assistant</p>
                                            <ul>
                                                <li>MultiChannel Management</li>
                                                <li>MultiChannel Management</li>
                                                <li>MultiChannel Management</li>
                                                <li>MultiChannel Management</li>
                                            </ul>
                                            <Anchor affix={false} style={{ display: "inline-block" }}>
                                                <Link href="#booking" className="book-now" title="Request Quote" />
                                            </Anchor>
                                        </div>

                                    </div>
                                    <div xs={12} md={4} className="featuredworks-1 ">
                                        <div className="item  fade-in-bottom-4">
                                            <img alt="no multichannel" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/multichannel-management.png" />
                                            <p>MultiChannel Management</p>
                                            <ul>
                                                <li>MultiChannel Management</li>
                                                <li>MultiChannel Management</li>
                                                <li>MultiChannel Management</li>
                                                <li>MultiChannel Management</li>
                                            </ul>
                                            <Anchor affix={false} style={{ display: "inline-block" }}>
                                                <Link href="#booking" className="book-now" title="Request Quote" />
                                            </Anchor>
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

