import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import './sections.css';

export default class Section5 extends Component {
    render() {
        return (
            <Grid className="booking">
                <Row middle="xs" style={{ height: "100vh" }}>
                    <Col xs={12} md={12} lg={6}>
                        <h1 className="number"><b>04.</b></h1>
                        <h1 className="title"><b>LAUNCH</b></h1>
                        <h4 className="description"><b>Congratulations!</b></h4>
                        <h4 className="description"><b>We wish your venture all the best!</b></h4>
                        <h4 className="description"><b>(We are always here for you!)</b></h4>
                    </Col>
                    <Col xs={12} md={12} lg={6}>

                    </Col>
                </Row>
            </Grid>
        )
    }
}
