import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';

export default class WSection3 extends Component {
    render() {
        return (
            <Grid fluid className="collaborate" id="wsection3">
                <Row middle="xs" center="xs">
                    <Col xs={12} md={12} lg={6}>
                        <h1 style={{ fontFamily: "proxima-bold", textAlign:"center",fontSize:35,margin:"0 auto"}}>CMS Development Expertise: </h1>
                        <p style={{ fontFamily: "proxima", textAlign:"justify" }}>
                            We support your business with an advance approach
                            to utilise software in CMS development.
                            Our focus is to deliver feature-rich content management system
                            that meets your specific business demands.
                        </p>
                    </Col>
                    <Col xs={12} md={12} lg={6} style={{maxWidth:660}}>
                        <Row middle="xs" center="xs">
                            <Col xs={6} md={4} lg={4}>
                                <img alt="no drupal logo" src={"https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/Drupal_logo.png"} />
                            </Col>
                            <Col xs={6} md={4} lg={4}>
                                <img alt="no ghost logo" src={"https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/ghost.png"} />
                            </Col>
                            <Col xs={6} md={4} lg={4}>
                                <img alt="no squarespace logo" src={"https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/squarespace-logo1.png"} />
                            </Col>
                            <Col xs={6} md={12} lg={12}>
                                <img alt="no wordpress logo" src={"https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/wordpress.png"} />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Grid>
        )
    }
}
