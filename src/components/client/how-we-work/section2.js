import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Button } from 'antd';
import './sections.css';

export default class Section2 extends Component {
    render() {
        return (
            <Grid fluid>
                <Row middle="xs" style={{ overflow: 'hidden' }}>
                    <Col className="texts" xs={12} md={12} lg={6}>
                        <h1 className="number"><b>01.</b></h1>
                        <h1 className="title"><b>book now</b></h1>
                        <h4 className="description"><b>Secure your hours and your dedicated team. Let's bring your project to life! Book your free 30 minute with our team today.</b></h4>
                        <Button size="large" className="btns">GET STARTED</Button>
                    </Col>
                    <Col xs={12} md={12} lg={6}>
                        <img alt="no how1" src={"https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/how1.png"} />
                    </Col>
                </Row>
            </Grid>
        )
    }
}
