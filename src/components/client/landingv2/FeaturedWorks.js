import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import './FeaturedWorks.css';
import Slider from "react-slick";

export default class FeaturedWorks extends Component {
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
                <Row style={{overflow:'hidden'}}>
                    <Col xs={12} md={12} >
                        <h2 style={{ textAlign: "center" }}>Our Featured Works</h2>
                    </Col>
                    <Col xs={12} md={12}>
                        <div className="flexcontainer container">
                            <Slider {...settings}>
                                <div xs={12} md={4} className="featuredworks-1">
                                <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/Asset+4.png" />
                                </div>
                                <div xs={12} md={4} className="featuredworks-2">
                                <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/Asset+4.png" />
                                </div>
                                <div xs={12} md={4} className="featuredworks-3">
                                <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/Asset+4.png" />
                                </div>
                                <div xs={12} md={4} className="featuredworks-1">
                                <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/Asset+4.png" />
                                </div>
                                <div xs={12} md={4} className="featuredworks-2">
                                <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/Asset+4.png" />
                                </div>
                                <div xs={12} md={4} className="featuredworks-3">
                                <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/Asset+4.png" />
                                </div>
                            </Slider>
                        </div>
                    </Col>
                </Row>
            </Grid>
        )
    }
}
