import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
// import './Nutshell.css';
// import './FeaturedWorks.css';
import './howwework.css';
export default class HowWeWorks extends Component {
    render() {
        return (
            <div>
                <Grid fluid className="featuredworks tasks color-change-2x how-we-work">
                    <Row>
                        <Col xs={12} md={12} >
                            <h2 className="focus-in-expand" style={{fontFamily:"proxima-bold", textAlign: "center" }}>How We Work</h2>
                            <p className="sub-title focus-in-expand" style={{ textAlign: "center" }}>Collaboration Reinvented</p>
                        </Col>
                        <Col xs={12} md={12}>
                            <div className="how-we-works ">
                                <Row>
                                    <div xs={6} md={4} className="featuredworks-1 anim  fade-in-bottom-1 " >
                                        <div className="item">
                                            <img alt="no image1" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/book-hours.png"  />
                                            <p className="proxima-bold">Book Your Hours</p>
                                        </div>
                                    </div>
                                    <div xs={6} md={4} className="featuredworks-2 anim  fade-in-bottom-2 ">
                                        <div className="item ">
                                            <img alt="no image2" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/dedicated-team.png"  />
                                            <p className="proxima-bold">Dedicated Team</p>
                                        </div>

                                    </div>
                                    <div xs={6} md={4} className="featuredworks-3 anim   fade-in-bottom-3">
                                        <div className="item ">
                                            <img alt="no image3" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/flexible-pricing.png"  />
                                            <p className="proxima-bold">Flexible Pricing</p>
                                        </div>

                                    </div>
                                    <div xs={6} md={4} className="featuredworks-1 anim   fade-in-bottom-4">
                                        <div className="item ">
                                            <img alt="no image4" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/realtime-collab.png"  />
                                            <p className="proxima-bold">Real-Time Project Tech</p>
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

