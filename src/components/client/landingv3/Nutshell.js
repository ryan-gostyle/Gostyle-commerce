import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import './Nutshell.css';
import { Modal, Button } from 'antd';
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
                <Grid id="nutshell" fluid className="featuredworks tasks color-change-2x">
                    <Row style={{ overflow: 'hidden' }}>
                        <Col xs={12} md={12} >
                            <h2 className="focus-in-expand" style={{ fontFamily: "proxima-bold", textAlign: "center" }}>What We Do (in a nutshell)</h2>
                            <p className="sub-title focus-in-expand" style={{ textAlign: "center" }}>We Build Digital Solutions by Bridging the Gap Between Creativity and Strategy</p>
                        </Col>
                        <Col xs={12} md={12}>
                            <div className="">
                                <Row>
                                    <div xs={12} md={4} className="featuredworks-1 ">
                                        <div className="item anim fade-in-bottom-1 ">
                                            <img alt="no ecommerce-0.png" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/ecommerce-01.png" onClick={() => this.setModalVisibleA(true)} />
                                            <p className="proxima-bold">ECOMMERCE SOLUTIONS</p>
                                        </div>
                                    </div>
                                    <div xs={12} md={4} className="featuredworks-2 ">
                                        <div className="item anim fade-in-bottom-2">
                                            <img alt="no website+design+and+development.png" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/website+design+and+development.png" onClick={() => this.setModalVisibleB(true)} />
                                            <p className="proxima-bold">WEBSITE DESIGN & DEVELOPMENT</p>
                                        </div>

                                    </div>
                                    <div xs={12} md={4} className="featuredworks-3 ">
                                        <div className="item  anim fade-in-bottom-3">
                                            <img alt="no inbound+marketing.png" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/inbound+marketing.png" onClick={() => this.setModalVisibleC(true)} />
                                            <p className="proxima-bold">INBOUND MARKETING</p>
                                        </div>

                                    </div>
                                    <div xs={12} md={4} className="featuredworks-1 ">
                                        <div className="item anim fade-in-bottom-4">
                                            <img alt="no custom+solutions.png" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/custom+solutions.png" onClick={() => this.setModalVisibleD(true)} />
                                            <p className="proxima-bold">CUSTOM SOLUTIONS</p>
                                        </div>
                                    </div>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Grid>

                {/* ECOMMERCE SOLUTIONS MODAL */}
                <Modal
                    visible={this.state.visibleA}
                    onCancel={this.handleCancel}
                    width={1200}
                >
                    <Grid fluid className="featuredworks tasks color-change-2x">
                        <Row middle="xs" center="xs" style={{ overflow: 'hidden',fontFamily:"proxima" }}>
                            <Col xs={12} md={5} >
                                <img alt="no ecomsolution.png" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/ecomsolution.png" />
                            </Col>
                            <Col xs={12} md={7} >
                                <div className="modal-right">
                                    <h2 style={{ textAlign: "center" }}>Ecommerce Solutions</h2>
                                    <p style={{ textAlign: "justify" }}>We provide you with your own eCommerce websiteand an all-in-one dashboard to manage your zilingo, lazada, shoppee and zalora! Let us set you up for your success with seamless and optimized eCommerce solutions for your brand! </p>
                                    <Button style={{textAlign:"center", backgroundColor:"#fce779", margin:"10px"}} href="#booking" onClick={e => this.setState({ visibleA: false })}>Book Now</Button>
                                    <Button style={{textAlign:"center", backgroundColor:"#fce779", margin:"10px"}} href="/commerce" onClick={e => this.setState({ visibleA: false })}>Learn more</Button>
                                </div>
                            </Col>
                        </Row>
                    </Grid>
                </Modal>

                {/* WEBSITE AND DEVELOPMENT MODAL */}
                <Modal
                    visible={this.state.visibleB}
                    onCancel={this.handleCancel}
                    width={1200}
                >
                    <Grid fluid className="featuredworks tasks color-change-2x">
                        <Row style={{ overflow: 'hidden',fontFamily:"proxima" }} center="xs" middle="xs">
                            <Col xs={12} md={5} >
                                <img alt="no web.png" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/web.png" />
                            </Col>
                            <Col xs={12} md={7} >
                                <div className="modal-right">
                                    <h2 style={{ textAlign: "center" }}>Website Design & Website Development </h2>
                                    <p style={{ textAlign: "justify" }}>Never underestimate the winning combination  of a clear  creative direction partnered with the right technology! Work with our ui/ux designers and developers  to <b>bring your vision to life!</b></p>
                                    <Button style={{textAlign:"center", backgroundColor:"#fce779", margin:"10px"}} href="#booking" onClick={e => this.setState({ visibleB: false })}>Book Now</Button>
                                    <Button style={{textAlign:"center", backgroundColor:"#fce779", margin:"10px"}} href="/website" onClick={e => this.setState({ visibleB: false })}>Learn more</Button>
                                </div>
                            </Col>
                        </Row>
                    </Grid>
                </Modal>
                
                {/* INBOUND MARKETING MODAL */}
                <Modal
                    visible={this.state.visibleC}
                    onCancel={this.handleCancel}
                    width={1200}
                >
                    <Grid fluid className="featuredworks tasks color-change-2x">
                        <Row middle="xs" center="xs" style={{ overflow: 'hidden',fontFamily:"proxima" }}>
                            <Col xs={12} md={5} >
                                <img alt="no inbound.png" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/inbound.png" />
                            </Col>
                            <Col xs={12} md={7} >
                                <div className="modal-right">
                                    <h2 style={{ textAlign: "center" }}>Inbound Marketing </h2>
                                    <p style={{ textAlign: "justify" }}>We provide you with your own eCommerce website and an all-in-one dashboard to manage your zilingo, lazada, shoppee and zalora! Let us set you up for your success with seamless and optimized eCommerce solutions for your brand!  </p>
                                    <Button style={{textAlign:"center", backgroundColor:"#fce779", margin:"10px"}} href="#booking" onClick={e => this.setState({ visibleC: false })}>Book Now</Button>
                                    <Button style={{textAlign:"center", backgroundColor:"#fce779", margin:"10px"}} href="/inbound" onClick={e => this.setState({ visibleC: false })}>Learn more</Button>
                                
                                </div>
                            </Col>
                        </Row>
                    </Grid>
                </Modal>
                
                {/* CUSTOM APPLICATION */}
                <Modal
                    visible={this.state.visibleD}
                    onCancel={this.handleCancel}
                    width={1200}
                >
                    <Grid fluid className="featuredworks tasks color-change-2x">
                        <Row center="xs" middle="xs" style={{ overflow: 'hidden',fontFamily:"proxima" }}>
                            <Col xs={12} md={5} >
                                <img alt="no mobile.png" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/mobile.png" />
                            </Col>
                            <Col xs={12} md={7} >
                                <div className="modal-right">
                                    <h2 style={{ textAlign: "center" }}>Custom Applications & Mobile App Development </h2>
                                    <p style={{ textAlign: "justify" }}>Let us know your idea and let’s explore how we can make it happen. From booking platforms to Mobile Applications - Let’s execute your ideas and make it happen. </p>
                                    <Button style={{textAlign:"center", backgroundColor:"#fce779", margin:"10px"}} href="#booking" onClick={e => this.setState({ visibleD: false })}>Book Now</Button>
                                    <Button style={{textAlign:"center", backgroundColor:"#fce779", margin:"10px"}} href="/customapplication" onClick={e => this.setState({ visibleD: false })}>Learn more</Button>
                                </div>
                            </Col>
                        </Row>
                    </Grid>
                </Modal>
            </div>

        )
    }
}

