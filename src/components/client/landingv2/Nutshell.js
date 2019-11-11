import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import './Nutshell.css';
export default class Nutshell extends Component {
    render() {
        return (
            <Grid className="nutshell container">
                <Row>
                    <Col xs={12} md={12} >
                        <h2 style={{textAlign:"center"}}>What we do? (In a nutshell)</h2> 
                        <p className="sub-title" style={{textAlign:"center"}}>We build digital solutions by bridging the gap between creativity and strategy through real-time collaborations</p> 
                    </Col>
                </Row>
            </Grid>
        )
    }
}
