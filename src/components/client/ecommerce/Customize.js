import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import './Customize.css';
import { Button } from 'antd';
export default class Customize extends Component {
    render() {
        return (
            <Grid fluid className="customize">
            <Row middle="xs" center="xs">
                <Col xs={12} md={12}>
                    <h3 style={{textAlign:"center"}}>Not a perfect fit?<span className="customize-package"> Let's Customize Your Package now!</span></h3> 
                    <h3 style={{textAlign:"center"}}>Coffee on us!</h3>
                </Col>
            </Row>
        </Grid>
        )
    }
}
