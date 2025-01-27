import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Button } from 'antd';
import './sections.css';

export default class Section3 extends Component {
    render() {
        return (
            <Grid fluid>
                <Row middle="xs" style={{ overflow: 'hidden', marginBottom:"40px" }}>
                    <Col className="texts" xs={12} md={12} lg={6}>
                        <h1 className="number"><b>02.</b></h1>
                        <h1 className="title"><b>side-by-side</b></h1>
                        <h4 className="description"><b>Real-time updates and Real-time Collabortion. Work side-by-side with your dedicated team remotely or in any of our partnered coworking locations.</b></h4>
                        <Button size="large" className="btns">Locations</Button>
                        <br/>
                    </Col>
                    <Col xs={12} md={12} lg={6}>
                        <img alt="no feature21" src={'https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/feature2.png'} />
                    </Col>
                </Row>
            </Grid>
        )
    }
}
