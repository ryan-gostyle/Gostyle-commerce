import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import './WSection2.css';
// import './FeaturedWorks.css';
export default class WSection2 extends Component {
    render() {
        return (
            <div>
                <Grid id="nutshell" fluid className="wsection featuredworks tasks" style={{marginTop:0,padding:15}}>
                    <Row style={{ overflow: 'hidden' }}>
                        <Col xs={12} md={12} >
                            <h2 className="" style={{ fontFamily: "proxima-bold", textAlign: "center" }}>Strategy, Design and Development </h2>
                            <p className="sub-title" style={{ textAlign: "center" }}>we take the necessary steps to plan and strategize your business objectives before</p>
                        </Col>
                        <Col xs={12} md={12}>
                            <div className="">
                                <Row>
                                    <div xs={12} md={4} className="featuredworks-1 ">
                                        <div className="item ">
                                            <img alt="no ecommerce-0.png" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/gostyle+web+dev-03.png" />
                                            <p className="proxima">UI/UX Design</p>
                                        </div>
                                    </div>
                                    <div xs={12} md={4} className="featuredworks-2 ">
                                        <div className="item ">
                                            <img alt="no website+design+and+development.png" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/ecommerce-01.png"  />
                                            <p className="proxima">Web Development</p>
                                        </div>

                                    </div>
                                    <div xs={12} md={4} className="featuredworks-3 ">
                                        <div className="item ">
                                            <img alt="no inbound+marketing.png" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/gostyle+web+dev-02.png"  />
                                            <p className="proxima">Growth & Maintenance</p>
                                        </div>

                                    </div>
                                    <div xs={12} md={4} className="featuredworks-1 ">
                                        <div className="item">
                                            <img alt="no custom+solutions.png" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/custom+solutions.png"  />
                                            <p className="proxima">CUSTOM SOLUTIONS</p>
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

