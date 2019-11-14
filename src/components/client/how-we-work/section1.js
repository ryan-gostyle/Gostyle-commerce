import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';

export default class Section1 extends Component {
    render() {
        return (
            <Grid className="booking">
                <Row middle="xs" center="xs" style={{height:"100vh"}}>
                    <Col xs={12} md={12} lg={8}>
                        <h1 style={{textAlign:"center", fontSize:"5em"}}><b>HOW WE WORK</b></h1>
                        <h2 style={{textAlign:"right", marginRight:"100px"}}>Collabortion Reinvented</h2>
                    </Col>
                </Row>
            </Grid>
        )
    }
}
