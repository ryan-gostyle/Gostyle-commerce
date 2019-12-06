import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Collapse, Anchor } from 'antd';
import './ISection4.css';

const { Link } = Anchor;
const { Panel } = Collapse;
export default class ISection4 extends Component {
    render() {
        return (
            <div>
                <Grid fluid id="Isection4" className="featuredworks tasks">
                    <Row center="xs" middle="xs">
                        <Col md={12} xs={12} lg={12}>
                            <Collapse bordered={false}>
                                <Panel header="HOW? (CLICK ME!)" key="1">
                                    <div className="container">
                                        <Row center="xs" middle="xs">
                                            <Col xs={12} md={12} lg={3}>
                                                <h4 className="howclickme">Facebook Ads</h4>
                                                <br />
                                            </Col>
                                            <Col xs={12} md={12} lg={3}>
                                                <h4 className="howclickme">Copywriting</h4>
                                                <br />
                                            </Col>
                                            <Col xs={12} md={12} lg={3}>
                                                <h4 className="howclickme">Graphic Design</h4>
                                                <br />
                                            </Col>
                                            <Col xs={12} md={12} lg={3}>
                                                <h4 className="howclickme">eCommerce Strategy</h4>
                                                <br />
                                            </Col>
                                            <Col xs={12} md={12} lg={3}>
                                                <h4 className="howclickme">Research Analysis</h4>
                                                <br />
                                            </Col>
                                            <Col xs={12} md={12} lg={3}>
                                                <h4 className="howclickme">B2B/B2C Lead Generation</h4>
                                                <br />
                                            </Col>
                                            <Col xs={12} md={12} lg={3}>
                                                <h4 className="howclickme">Email Marketing</h4>
                                                <br />
                                            </Col>
                                            <Col xs={12} md={12} lg={3}>
                                                <h4 className="howclickme">App Marketing</h4>
                                                <br />
                                            </Col>
                                            <Col xs={12} md={12} lg={3}>
                                                <h4 className="howclickme">Social Media Management</h4>
                                                <br />
                                            </Col>
                                            <Col xs={12} md={12} lg={3}>
                                                <h4 className="howclickme">Instagram Ads</h4>
                                                <br />
                                            </Col>
                                            <Col xs={12} md={12} lg={3}>
                                                <h4 className="howclickme">SEO</h4>
                                                <br />
                                            </Col>
                                            <Col xs={12} md={12} lg={3}>
                                                <h4 className="howclickme">Content Marketing</h4>
                                                <br />
                                            </Col>
                                            <Col xs={12} md={12} lg={3}>
                                                <h4 className="howclickme">Media Buying</h4>
                                                <br />
                                            </Col>
                                            <Col xs={12} md={12} lg={3}>
                                                <h4 className="howclickme">LinkedIn Marketing</h4>
                                                <br />
                                            </Col>
                                            <Col xs={12} md={12} lg={3}>
                                                <h4 className="howclickme">Google Ads</h4>
                                                <br />
                                            </Col>
                                        </Row>
                                    </div>
                                </Panel>
                            </Collapse>
                        </Col>
                        <Col lg={6}>
                            <br/>
                            <Anchor affix={false} style={{ display: "inline-block" }}>
                                <Link href="#solution" className="we-work" title="Learn More" />
                            </Anchor>
                            <Anchor affix={false} style={{ display: "inline-block" }}>
                                <Link href="#booking" className="book-now" title="Book Now" />
                            </Anchor>
                        </Col>
                    </Row>
                </Grid>
            </div>

        )
    }
}

