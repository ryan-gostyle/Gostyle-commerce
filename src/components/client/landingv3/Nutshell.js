import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import './Nutshell.css';
import { Modal, Button } from 'antd';
               import ScrollAnimation from 'react-animate-on-scroll';
import './FeaturedWorks.css';
export default class Nutshell extends Component {
    state = {
        visibleA: false,
        visibleB: false,
        visibleC: false,
        visibleD: false,
    };

    setModalVisibleA(visibleA) {
        this.setState({ visibleA });
    }
    setModalVisibleB(visibleB) {
        this.setState({ visibleB });
    }
    setModalVisibleC(visibleC) {
        this.setState({ visibleC });
    }
    setModalVisibleD(visibleD) {
        this.setState({ visibleD });
    }
    handleCancel = e => {
        console.log(e);
        this.setState({
            visibleA: false,
            visibleB: false,
            visibleC: false,
            visibleD: false,
        });
    };
    render() {
        return (
            <div>
                <Grid fluid className="featuredworks tasks color-change-2x">
                    <Row style={{ overflow: 'hidden' }}>
                        <Col xs={12} md={12} >
                            <h2 className="focus-in-expand" style={{ textAlign: "center" }}>What we do in a nutshell</h2>
                            <p className="sub-title focus-in-expand" style={{ textAlign: "center" }}>We build digital solutions by bridging the gap between creativity and strategy</p>
                        </Col>
                        <Col xs={12} md={12}>
                            <div className="">
                                <Row>
                                    <div xs={12} md={4} className="featuredworks-1 ">
                                        <div className="nut-image-text1 anim fade-in-bottom-1">
                                            <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/ecommerce-01.png" onClick={() => this.setModalVisibleA(true)} />
                                        </div>
                                    </div>
                                    <div xs={12} md={4} className="featuredworks-2 ">
                                        <div className="nut-image-text2 anim fade-in-bottom-2">
                                            <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/website+design+and+development.png" onClick={() => this.setModalVisibleB(true)} />
                                        </div>

                                    </div>
                                    <div xs={12} md={4} className="featuredworks-3 ">
                                        <div className="nut-image-text3  anim fade-in-bottom-3">
                                            <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/inbound+marketing.png" onClick={() => this.setModalVisibleC(true)} />
                                        </div>

                                    </div>
                                    <div xs={12} md={4} className="featuredworks-1 ">
                                        <div className="nut-image-text4 anim fade-in-bottom-4">
                                            <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/custom+solutions.png" onClick={() => this.setModalVisibleD(true)} />
                                        </div>
                                    </div>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Grid>
  
                <Modal
                    visible={this.state.visibleA}
                    onCancel={this.handleCancel}
                    width={1200}
                >
                    <Grid fluid className="featuredworks tasks color-change-2x">
                        <Row style={{ overflow: 'hidden' }}>
                            <Col xs={12} md={5} >
                                <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/ecomsolution.png" />
                            </Col>
                            <Col xs={12} md={7} >
                                <div className="modal-right">
                                    <h2 style={{ textAlign: "center" }}>Ecommerce Solutions</h2>
                                    <p style={{ textAlign: "justify" }}>We provide you with your own eCommerce websiteand an all-in-one dashboard to manage your zilingo, lazada, shoppee and zalora! Let us set you up for your success with seamless and optimized eCommerce solutions for your brand! </p>
                                </div>
                            </Col>
                        </Row>
                    </Grid>
                </Modal>
                <Modal
                    visible={this.state.visibleB}
                    onCancel={this.handleCancel}
                    width={1200}
                >
                    <Grid fluid className="featuredworks tasks color-change-2x">
                        <Row style={{ overflow: 'hidden' }}>
                            <Col xs={12} md={5} >
                                <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/web.png" />
                            </Col>
                            <Col xs={12} md={7} >
                                <div className="modal-right">
                                    <h2 style={{ textAlign: "center" }}>Website Design & Website Development </h2>
                                    <p style={{ textAlign: "justify" }}>Never underestimate the winning combination  of a clear  creative direction partnered with the right technology! Work with our ui/ux designers and developers  to <b>bring your vision to life!</b></p>
                                </div>
                            </Col>
                        </Row>
                    </Grid>
                </Modal>
                <Modal
                    visible={this.state.visibleC}
                    onCancel={this.handleCancel}
                    width={1200}
                >
                    <Grid fluid className="featuredworks tasks color-change-2x">
                        <Row style={{ overflow: 'hidden' }}>
                            <Col xs={12} md={5} >
                                <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/inbound.png" />
                            </Col>
                            <Col xs={12} md={7} >
                                <div className="modal-right">
                                    <h2 style={{ textAlign: "center" }}>Inbound Marketing </h2>
                                    <p style={{ textAlign: "justify" }}>We provide you with your own eCommerce website and an all-in-one dashboard to manage your zilingo, lazada, shoppee and zalora! Let us set you up for your success with seamless and optimized eCommerce solutions for your brand!  </p>

                                </div>
                            </Col>
                        </Row>
                    </Grid>
                </Modal>
                <Modal
                    visible={this.state.visibleD}
                    onCancel={this.handleCancel}
                    width={1200}
                >
                    <Grid fluid className="featuredworks tasks color-change-2x">
                        <Row style={{ overflow: 'hidden' }}>
                            <Col xs={12} md={5} >
                            <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/mobile.png" />
                            </Col>
                            <Col xs={12} md={7} >
                                <div className="modal-right">
                                <h2 style={{ textAlign: "center" }}>Custom Applications & Mobile App Development </h2>
                                <p style={{ textAlign: "justify" }}>Let us know your idea and let’s explore how we can make it happen. From booking platforms to Mobile Applications - Let’s execute your ideas and make it happen. </p>
                                </div>
                            </Col>
                        </Row>
                    </Grid>
                </Modal>
            </div>

        )
    }
}

