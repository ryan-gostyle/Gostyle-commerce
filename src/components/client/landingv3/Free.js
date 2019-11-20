import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import './free.css'
export default class Free extends Component {

    render() {
        return (
            <Grid>
                <Row middle="xs" center="xs" className="free">
                    <Col xs={12} md={12} style={{marginTop:"40px"}}>
                        <h1 className="vibrate-1" style={{fontFamily:"proxima-bold",textAlign:"center"}}>Free 30 Min. Consulation</h1>
                    </Col>
                    <Col xs={12} md={12} style={{marginBottom:"40px"}} className="fade-in-bottom">
                        <a href="#book" className="book-now">BOOK NOW</a>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

