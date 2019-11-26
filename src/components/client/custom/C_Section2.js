import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import './C_section2.css';
export default class C_Section2 extends Component {
    render() {
        return (
            <Grid fluid id="solution" className="solutions">
                <Row middle="xs" center="xs">
                    <Col xs={12} md={12} lg={12}>
                        <br/>
                        <h1 style={{ textAlign:"center", fontFamily: "proxima-bold" }}>None of our package fit your needs? Worry Not!</h1>
                        <h3 style={{ textAlign:"center", fontFamily: "proxima" }}><b>Full up the form below and your team in us will reach out</b> </h3>
                        <h3 style={{ textAlign:"center", fontFamily: "proxima" }}><b>with your custom solutions ready</b></h3>
                        <br/>
                    </Col>
                </Row>
            </Grid>
        )
    }
}
