import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import './Collaborate.css';
import { Anchor } from 'antd';
const { Link } = Anchor;
export default class Collaborate extends Component {
    render() {
        return (
            <Grid fluid className="collaborate ">
                <Row middle="xs" center="xs">
                    <Col xs={12} md={6} lg={6}>
                        <img alt="no ta.vin" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/ta.vin.png" />
                    </Col>
                    <Col xs={12} md={6} lg={6}>
                        <h2 style={{ fontFamily: "proxima-bold", textAlign: "center", fontSize: "2.5em" }}>CASE STUDY:<span className="dedicated" style={{ fontFamily: "proxima" }}> Ta.Vin Moodboard</span> </h2>
                        <p>Ta.vin is a marketplace for local brands in the Philippines. They strive to empower Filipino entreprenuers and artisans with their platform. We have collaborated with the founder from ideation to execution, giving life to her vision - Tavin Moodboard with our shopify custom solution.</p>
                        <br />
                        <div>
                            <Row middle="xs" center="xs">
                                <Col xs={6} md={3} lg={3}>
                                    <a href="//www.ta.vin" style={{paddingTop:'15px', paddingBottom:"15px"}}  className="book-now">www.Ta.vin</a>
                                </Col>
                                <Col xs={6} md={3} lg={3}>
                                    <Anchor affix={false} >
                                        <Link href="#solution1" className="book-now" title="Read More" />
                                    </Anchor>
                                </Col>
                            </Row>
                        </div>
                    </Col>

                </Row>
            </Grid>
        )
    }
}
