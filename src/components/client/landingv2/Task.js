import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import './Task.css';
import { Modal, Button } from 'antd';
import './FeaturedWorks.css';
import Slider from "react-slick";
export default class Task extends Component {
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
        var settings = {
            dots: false,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: false,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false,
                        // swipe: false,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2,
                        swipe: true,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        swipe: true,
                    }
                }
            ]
        };
        return (
            <div>
                <Grid fluid className="featuredworks tasks">
                    <Row style={{ overflow: 'hidden' }}>
                        <Col xs={12} md={12}>
                            <div className="flexcontainer container">
                                <Slider {...settings}>
                                    <div xs={12} md={4} className="featuredworks-1">
                                        <div className="image-text1">
                                            <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/Asset+2.png" onClick={() => this.setModalVisibleA(true)} />
                                        </div>
                                    </div>
                                    <div xs={12} md={4} className="featuredworks-2">
                                        <div className="image-text2">
                                            <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/Asset+3.png" onClick={() => this.setModalVisibleB(true)} />
                                        </div>

                                    </div>
                                    <div xs={12} md={4} className="featuredworks-3">
                                        <div className="image-text3">
                                            <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/Asset+4.png" onClick={() => this.setModalVisibleC(true)} />
                                        </div>

                                    </div>
                                    <div xs={12} md={4} className="featuredworks-1">
                                        <div className="image-text4">
                                            <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/Asset+5.png" onClick={() => this.setModalVisibleD(true)} />
                                        </div>
                                    </div>
                                </Slider>
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
