import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import './Notable.css';
import Slider from "react-slick";

export default class Notable extends Component {
    render() {
        var settings = {         
            dots: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 1000,
            speed: 1500,
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 0,
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
            <Grid fluid className="notable">
                <Row style={{overflow:'hidden'}}>
                    <Col xs={12} md={12} >
                        <h2 style={{ textAlign: "center" }}>Notable Clients around the Globe!</h2>
                    </Col>
                    <Col xs={12} md={12}>
                        <div className="flexcontainer container">
                            <Slider {...settings}>
                                <div xs={12} md={4} className="notable-1">
                           
                                </div>
                                <div xs={12} md={4} className="notable-2">
                             
                                </div>
                                <div xs={12} md={4} className="notable-3">
                                 
                                </div>
                                <div xs={12} md={4} className="notable-1">
                                   
                                </div>
                                <div xs={12} md={4} className="notable-2">
                                 
                                </div>
                                <div xs={12} md={4} className="notable-3">
                                 
                                </div>
                            </Slider>
                        </div>
                    </Col>
                </Row>
            </Grid>
        )
    }
}
