import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import './sections.css';

export default class Section5 extends Component {
    render() {
        return (
            <Grid className="booking2">
                <Row middle="xs" style={{ height: "100vh" }}>
                    <Col style={{paddingLeft:"100px"}} xs={12} md={12} lg={6}>
                        <h1 style={{color:"white"}} className="number"><b>04.</b></h1>
                        <h1 className="title" style={{color:"white"}}><b>LAUNCH</b></h1>
                        <h4 className="description" style={{color:"white"}}><b>Congratulations!</b></h4>
                        <h4 className="description" style={{color:"white"}}><b>We wish your venture all the best!</b></h4>
                        <h4 className="description" style={{color:"white"}}><b>(We are always here for you!)</b></h4>
                    </Col>
                </Row>
            </Grid>
        )
    }
}
