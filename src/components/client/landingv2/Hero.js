import React, { Component } from 'react'
import Typed from 'react-typed';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './Hero.css';
import Slider from "react-slick";
export default class Hero extends Component {
    render() {
        var settings = {
            dots: false,
            infinite: true,
            autoplay: true,
            autoplaySpeed:8500,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
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
            <Slider {...settings}>
                <div>
                    <Grid fluid className="hero-asset6">
                        <Row>
                            <Col xs={12} md={12} className="hero-col-1">
                                <h1 style={{ marginBottom: 15 }} >
                                    <span className="bold-font-600"><Typed
                                        strings={["Don't Wait On Emails"]}
                                        typeSpeed={100}
                                        backSpeed={100}
                                        smartBackspace
                                        shuffle={false}
                                        backDelay={3}
                                        fadeOut={false}
                                        fadeOutDelay={100}
                                        loopCount={0}
                                        showCursor={false}
                                        cursorChar="|" /></span></h1>
                                <h3 style={{ marginBottom: 15 }} >
                                    <span className="bold-font-500"><Typed
                                        strings={["We work side-by-side, virtually or physically to get sh*t done..!"]}
                                        typeSpeed={50}
                                        backSpeed={100}
                                        smartBackspace
                                        shuffle={false}
                                        startDelay={3500}
                                        fadeOut={false}
                                        fadeOutDelay={100}
                                        loopCount={0}
                                        showCursor
                                        cursorChar="|" /></span></h3>

                            </Col>
                        </Row>
                    </Grid>
                </div>
                <div>
                    <Grid fluid className="hero-asset22">
                        <Row>
                            <Col xs={12} md={12} className="hero-col-1">
                                <h1 style={{ marginBottom: 15 }} >
                                    <span className="bold-font-600"><Typed
                                        strings={["Collaborate Real-Time"]}
                                        typeSpeed={100}
                                        backSpeed={100}
                                        smartBackspace
                                        shuffle={false}
                                        backDelay={3}
                                        fadeOut={false}
                                        fadeOutDelay={100}
                                        loopCount={0}
                                        showCursor={false}
                                        cursorChar="|" /></span></h1>
                                <h3 style={{ marginBottom: 15 }} >
                                    <span className="bold-font-500"><Typed
                                        strings={["Book your best location and we'll have your dedicated team deployed right away!"]}
                                        typeSpeed={50}
                                        backSpeed={100}
                                        smartBackspace
                                        shuffle={false}
                                        startDelay={3500}
                                        fadeOut={false}
                                        fadeOutDelay={100}
                                        loopCount={0}
                                        showCursor
                                        cursorChar="|" /></span></h3>

                            </Col>
                        </Row>
                    </Grid>
                </div>
                <div>
                    <Grid fluid className="hero-asset21">
                        <Row>
                            <Col xs={12} md={12} className="hero-col-1">
                                <h1 style={{ marginBottom: 15 }} >
                                    <span className="bold-font-600"><Typed
                                        strings={["Collaborate Real-Time"]}
                                        typeSpeed={100}
                                        backSpeed={100}
                                        smartBackspace
                                        shuffle={false}
                                        backDelay={3}
                                        fadeOut={false}
                                        fadeOutDelay={100}
                                        loopCount={0}
                                        showCursor={false}
                                        cursorChar="|" /></span></h1>
                                <h3 style={{ marginBottom: 15 }} >
                                    <span className="bold-font-500"><Typed
                                        strings={["Book your best location and we'll have your dedicated team deployed right away!"]}
                                        typeSpeed={50}
                                        backSpeed={100}
                                        smartBackspace
                                        shuffle={false}
                                        startDelay={3500}
                                        fadeOut={false}
                                        fadeOutDelay={100}
                                        loopCount={0}
                                        showCursor
                                        cursorChar="|" /></span></h3>

                            </Col>
                        </Row>
                    </Grid>
                </div>
            </Slider>

        )
    }
}
