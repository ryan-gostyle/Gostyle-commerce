import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import './WSection5.css';
import Slider from "react-slick";

export default class WSection5 extends Component {
    render() {
        var settings = {
            dots: false,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <Grid fluid className="featuredworks">
                <Row center="xs" middle="xs">
                    <Col xs={12} md={12} lg={12} style={{marginBottom:45}}>
                        <div >
                            <Slider {...settings}>
                                <div xs={12} md={4} className="featuredworks-1">
                                    <img alt="no feature10" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/feature10.png" />
                                </div>
                                <div xs={12} md={4} className="featuredworks-2">
                                    <img alt="no feature11" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/feature11.png" />
                                </div>
                                <div xs={12} md={4} className="featuredworks-3">
                                    <img alt="no feature6" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/feature6.png" />
                                </div>
                                <div xs={12} md={4} className="featuredworks-1">
                                    <img alt="no feature7" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/feature7.png" />
                                </div>
                                <div xs={12} md={4} className="featuredworks-2">
                                    <img alt="no feature8" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/feature8.png" />
                                </div>
                                <div xs={12} md={4} className="featuredworks-3">
                                    <img alt="no feature9" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/feature9.png" />
                                </div>
                            </Slider>
                        </div>
                    </Col>
                    <Col lg={7} >
                        <h1 style={{ fontFamily: "proxima-bold",fontSize:35 }} >Choose You Package, <br/>or make your own - Inquire now!</h1>
                    </Col>
                    <Col lg={4}>
                        <p style={{ textAlign: "center", wordBreak: "break-word"}}>We cater to small, medium and enterprise businesses.
                        Flexible pricing that aligns with your business objective is the way to go -
                        Invest in Premium or Start Safe! Choose or Create your Package now!
                        </p>
                    </Col>
                </Row>
            </Grid>
        )
    }
}
