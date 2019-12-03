import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import './ISection2.css';
export default class ISection2 extends Component {
    render() {
        return (
            <div>
                <Grid id="nutshell" fluid className="featuredworks tasks">
                    <Row style={{ overflow: 'hidden' }}>
                        <Col xs={12} md={12} >
                            <h2 className="focus-in-expand" style={{ fontFamily: "proxima-bold", textAlign: "center" }}>We Double Down on Marketing</h2>
                            <h2 className="focus-in-expand" style={{ fontFamily: "proxima-bold", textAlign: "center" }}>Efforts That matter</h2>
                        </Col>
                        <Col xs={12} md={12}>
                            <div className="">
                                <Row>
                                    <div xs={12} md={4} className="featuredworks-1 ">
                                        <div className="item">
                                            <img alt="no inbound1.png" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/inbound1.png" />
                                            <p className="proxima-bold">Strategize</p>
                                        </div>
                                    </div>
                                    <div xs={12} md={4} className="featuredworks-2 ">
                                        <div className="item ">
                                            <img alt="no inbound2.png" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/inbound2.png" />
                                            <p className="proxima-bold">Execute</p>
                                        </div>

                                    </div>
                                    <div xs={12} md={4} className="featuredworks-3 ">
                                        <div className="item">
                                            <img alt="no inbound3.png" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/inbound3.png" />
                                            <p className="proxima-bold">Launch</p>
                                        </div>

                                    </div>
                                    <div xs={12} md={4} className="featuredworks-1 ">
                                        <div className="item">
                                            <img alt="no inbound4.png" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/inbound4.png" />
                                            <p className="proxima-bold">Analyze</p>
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

