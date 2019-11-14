import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Button } from 'antd';
import './sections.css';

export default class Section4 extends Component {
    render() {
        return (
            <Grid className="booking1">
                <Row middle="xs" style={{ height: "100vh" }}>
                    <Col xs={12} md={12} lg={6}>
                        <h1 className="number"><b>03.</b></h1>
                        <h1 className="title"><b>flexible pricing</b></h1>
                        <h4 className="description"><b>Real-time updates and Real-time Collabortion. Work side-by-side with your dedicated team remotely or in any of our partnered coworking locations.</b></h4>
                        <Button size="large" className="btns">PRICES</Button>
                    </Col>
                    <Col xs={12} md={12} lg={6}>
                    <img src={'https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/how4.png'} style={{height:"auto", width:"auto"}} />

                    </Col>
                </Row>
            </Grid>
        )
    }
}
