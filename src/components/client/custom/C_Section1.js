import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import './C_section1.css';
export default class C_Section1 extends Component {
    render() {
        return (
            <Grid fluid className="collaborate ">
                <Row middle="xs" center="xs">
                    <Col xs={12} md={6} lg={6}>
                        <h1 style={{ fontFamily: "proxima-bold", textAlign: "center", fontSize:"2.5em"}}>COMPLEX IDEA MADE POSSIBLE</h1>
                        <h4 style={{ fontFamily: "proxima-bold", textAlign: "center"}}>We are a firm believer of tailor fitting solutions based on business objectives</h4>
                    </Col>
                    <Col xs={12} md={6} lg={6}>
                        <img alt="no ta.vin" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/ta.vin.png" />
                    </Col>
                </Row>
            </Grid>
        )
    }
}
