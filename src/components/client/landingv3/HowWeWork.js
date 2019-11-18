import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import './Nutshell.css';
import './FeaturedWorks.css';
export default class HowWeWorks extends Component {
    render() {
        return (
            <div>
                <Grid fluid className="featuredworks tasks">
                    <Row style={{ overflow: 'hidden' }}>
                        <Col xs={12} md={12} >
                            <h2 style={{ textAlign: "center" }}>HOW WE WORK</h2>
                        </Col>
                        <Col xs={12} md={12}>
                            <div className="flexcontainer container">
                                <Row>
                                    <div xs={12} md={4} className="featuredworks-1 ">
                                        <div className="how-image-text1 anim">
                                            <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/book-hours.png"  />
                                        </div>
                                    </div>
                                    <div xs={12} md={4} className="featuredworks-2 ">
                                        <div className="how-image-text2 anim">
                                            <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/dedicated-team.png"  />
                                        </div>

                                    </div>
                                    <div xs={12} md={4} className="featuredworks-3 anim">
                                        <div className="how-image-text3">
                                            <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/flexible-pricing.png"  />
                                        </div>

                                    </div>
                                    <div xs={12} md={4} className="featuredworks-1 anim">
                                        <div className="how-image-text4">
                                            <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/realtime-collab.png"  />
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

