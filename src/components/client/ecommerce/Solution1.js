import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import './Solutions.css';
export default class Solutions1 extends Component {
    render() {
        return (
            <Grid fluid id="solution1" className="solutions">
                <Row middle="xs" center="xs" className="container solutions-commerce">
                    <Col xs={12} md={12} lg={6}>
                        <h1 style={{ fontFamily: "proxima-bold" }}>Our Personal Favorite</h1>
                        <p style={{ wordWrap: "break-word" }}>5 Shopify certified developers, 3 Shopify certified Business Developers and a rockstar digital marketer with 3 years of shopify ads experience. We create custom shopify tech solutions for your ecommerce that sets you up for success!</p>
                    </Col>
                    <Col xs={12} md={12} lg={6}>
                        <img alt="no shopify" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/shopify.png" />
                    </Col>
                </Row>
            </Grid>
        )
    }
}
