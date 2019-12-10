import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import './Solutions.css';
export default class Solutions2 extends Component {
    render() {
        return (
            <Grid fluid id="solution" className="solutions">
                <Row middle="xs" center="xs" className="container solutions-commerce">
                    <Col xs={12} md={12} lg={6}>
                        <Row center="xs" middle="xs">
                            <Col xs={6} lg={6}>
                                <img alt="no anchanto" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/anchanto.png" />
                            </Col>
                            <Col xs={6} lg={6}>
                                <img alt="no payo" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/Payo_logo_Yellow-copy.png" />
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} md={12} lg={6}>
                        <h1 style={{ fontFamily: "proxima-bold", textAlign: "right" }}>eCommerce Partners</h1>
                        <p style={{ wordWrap: "break-word", textAlign: "right" }}>We've joined forces with the industry's best to fully support your eCommerce business!</p>
                    </Col>
                </Row>
            </Grid>
        )
    }
}
