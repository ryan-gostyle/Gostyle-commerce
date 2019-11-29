

import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import './Commerce.css';
import { Anchor } from 'antd';
const { Link } = Anchor;

export default class First extends Component {
    render() {
        return (
            <Grid fluid className="hero">
                <Row middle="xs" center="xs" className=" container commerce-hero">
                    <Col xs={12} md={12} lg={6}>
                        <img alt="no e1" src={"https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/e1.png"} />
                    </Col>
                    <Col xs={12} md={12} lg={6}>
                        <h1 style={{ fontFamily: "proxima-bold", textAlign: "center" }}>We Work in Collaboration to Develop  Your Custom  ecommerce solution</h1>
                        <br />
                        <div>
                            <Anchor affix={false} style={{ display: "inline-block" }}>
                                <Link href="#solution" className="we-work" title="Learn More" />
                            </Anchor>
                            <Anchor affix={false} style={{ display: "inline-block" }}>
                                <Link href="#booking" className="book-now" title="Book Now" />
                            </Anchor>
                        </div>
                        {/* 
                        <Button style={{marginBottom:"20px"}} className="we-work"><a>LEARN MORE</a></Button>
                        <Button style={{marginLeft:"10px",marginBottom:"20px"}} className="book-now"><a>BOOK NOW</a></Button> */}
                    </Col>
                </Row>
            </Grid>
        )
    }
}
