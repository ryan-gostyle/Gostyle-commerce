import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Button } from 'antd';
import './sections.css';

export default class Section3 extends Component {
    render() {
        return (
            <Grid className="booking">
                <Row middle="xs" style={{ height: "100vh" }}>
                    <Col xs={12} md={12} lg={6}>
                        <h1 className="number"><b>02.</b></h1>
                        <h1 className="title"><b>side-by-side</b></h1>
                        <h4 className="description"><b>Real-time updates and Real-time Collabortion. Work side-by-side with your dedicated team remotely or in any of our partnered coworking locations.</b></h4>
                        <Button size="large" className="btns">Locations</Button>
                    </Col>
                    <Col xs={12} md={12} lg={6}>
                    </Col>
                </Row>
            </Grid>
        )
    }
}
