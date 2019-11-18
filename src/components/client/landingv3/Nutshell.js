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
                <Grid fluid className="featuredworks tasks">
                    <Row style={{ overflow: 'hidden' }}>
                        <Col xs={12} md={12} >
                            <h2 style={{ textAlign: "center" }}>What we do in a nutshell</h2>
                            <p className="sub-title" style={{ textAlign: "center" }}>We build digital solutions by bridging the gap between creativity and strategy</p>
                        </Col>
                        <Col xs={12} md={12}>
                            <div className="flexcontainer container">
                                <Row>
                                    <div xs={12} md={4} className="featuredworks-1 ">
                                        <div className="nut-image-text1 anim">
                                            <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/ecommerce-01.png" onClick={() => this.setModalVisibleA(true)} />
                                        </div>
                                    </div>
                                    <div xs={12} md={4} className="featuredworks-2 ">
                                        <div className="nut-image-text2 anim">
                                            <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/website+design+and+development.png" onClick={() => this.setModalVisibleB(true)} />
                                        </div>

                                    </div>
                                    <div xs={12} md={4} className="featuredworks-3 anim">
                                        <div className="nut-image-text3">
                                            <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/inbound+marketing.png" onClick={() => this.setModalVisibleC(true)} />
                                        </div>

                                    </div>
                                    <div xs={12} md={4} className="featuredworks-1 anim">
                                        <div className="nut-image-text4">
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
                >
                </Modal>
                <Modal
                    visible={this.state.visibleB}
                    onCancel={this.handleCancel}
                >
                </Modal>
                <Modal
                    visible={this.state.visibleC}
                    onCancel={this.handleCancel}
                >
                </Modal>
                <Modal
                    visible={this.state.visibleD}

                    onCancel={this.handleCancel}
                >
                </Modal>
            </div>

        )
    }
}

