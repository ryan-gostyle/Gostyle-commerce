import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';

export default class WSection4 extends Component {
    render() {
        return (
            <Grid fluid>
                <Row className="collaborate-wsection4" style={{backgroundColor:"#FAFAFA"}} middle="xs" center="xs">
                    <Col xs={12} md={12} lg={6}>
                        <img alt="no image1 logo" src={"https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/Drupal_logo.png"} />
                    </Col>
                    <Col xs={12} md={12} lg={6}>
                        <h1 style={{ fontFamily: "proxima-bold", textAlign: "center" }}>Case Study: Techtonic Summit </h1>
                        <p style={{ fontFamily: "proxima", textAlign: "left" }}>
                            We support your business with an advance approach
                            to utilise software in CMS development.
                            Our focus is to deliver feature-rich content management system
                            that meets your specific business demands.
                        </p>
                    </Col>
                </Row>
            </Grid>
        )
    }
}
