import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import './Solutions.css';
export default class Solutions extends Component {
    render() {
        return (
            <Grid fluid className="solutions">
                <Row middle="xs" center="xs" className="container solutions-commerce">
                    <Col xs={12} md={12} lg={6}>
                        <h1 style={{ fontFamily: "proxima-bold" }}>Custom Shopify Solutions</h1>
                        <p>Want to keep tabs on your project?Check in on the progress,access your invoices, view documents, book new appointments and more on the Gostyle App </p>
                    </Col>
                    <Col xs={12} md={12} lg={6}>
                        <Row center="xs" middle="xs">
                            <Col lg={6}>
                                <img alt="no salesforce" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/salesforce.png" />
                            </Col>
                            <Col lg={6}>
                                <img alt="no magento" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/magento.png" />
                            </Col>
                            <Col lg={12}>
                                <img alt="no shopify" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/shopify.png" />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Grid>
        )
    }
}
