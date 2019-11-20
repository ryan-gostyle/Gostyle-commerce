import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import './Partners.css';
import Slider from "react-slick";
export default class Feature extends Component {
    render() {
        var settings = {
            dots: false,
            infinite: false,
            speed: 1500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
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
            <Grid fluid className="partners">
                <Row>
                    <Col xs={12} md={12} >
                        <h2 style={{ textAlign: "center" }}>Our Partners</h2>
                        <p className="sub-title" style={{ textAlign: "center" }}>We take collaboration seriously..and it shows!</p>
                    </Col>
                    <Col xs={12} md={12}>
                        <div className="flexcontainer container">
                            <Slider {...settings}>
                                <div>
                                    <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/20.png"/>
                                </div>
                                <div>
                                    <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/21.png"/>
                                </div>
                                <div>
                                    <img src=""/>
                                </div>
                                <div>
                                    <img src=""/>
                                </div>
                            </Slider>
                        </div>
                    </Col>
                </Row>
            </Grid>
        )
    }
}
