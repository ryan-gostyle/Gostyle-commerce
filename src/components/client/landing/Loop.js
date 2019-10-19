import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import './loop.css';
export default class Loop extends Component {
    render() {
        return (
            <Grid fluid className="loop">
                <Row>
                    <Col xs={12} md={12} >
                        <h2 style={{textAlign:"center"}}>Stay in the loop!</h2> 
                        <p className="sub-title" style={{textAlign:"center"}}>Just need specifics? We got you!</p> 
                    </Col>
                </Row>
            </Grid>
        )
    }
}
