import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Button } from 'antd';
export default class Free extends Component {

    render() {
        return (
            <Grid>
                <Row middle="xs" center="xs">
                    <Col xs={12} md={12} style={{marginTop:"40px"}}>
                        <h1 style={{textAlign:"center"}}>Free 30 Min Consulation</h1>
                    </Col>
                    <Col xs={12} md={12} style={{marginBottom:"40px"}}>
                        <Button style={{backgroundColor:"orange"}}>Book Now</Button>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

