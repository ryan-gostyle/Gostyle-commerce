import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import './Package.css';
export default class Packages extends Component {
    render() {
        return (
            <Grid fluid className="packages">
                <Row className="flexcontianer">
                    <Col xs={12} md={4} className="package-1">
                        <h3>Bronze</h3>
                        <ul>
                            <li>Lorem ipsum daet is</li>
                            <li>Lorem ipsum daet is</li>
                            <li>Lorem ipsum daet is</li>
                            <li>Lorem ipsum daet is</li>
                            <li>Lorem ipsum daet is</li>
                            <li>Lorem ipsum daet is</li>
                        </ul>
                        <span>LEARN MORE</span>
                    </Col>
                    <Col xs={12} md={4} className="package-2">
                        <h3>Silver</h3>
                        <li>Lorem ipsum daet is</li>
                        <li>Lorem ipsum daet is</li>
                        <li>Lorem ipsum daet is</li>
                        <li>Lorem ipsum daet is</li>
                        <li>Lorem ipsum daet is</li>
                        <li>Lorem ipsum daet is</li>
                        <span>LEARN MORE</span>
                    </Col>
                    <Col xs={12} md={4} className="package-3">
                        <h3>Platinum</h3>
                        <li>Lorem ipsum daet is</li>
                        <li>Lorem ipsum daet is</li>
                        <li>Lorem ipsum daet is</li>
                        <li>Lorem ipsum daet is</li>
                        <li>Lorem ipsum daet is</li>
                        <li>Lorem ipsum daet is</li>
                        <span>LEARN MORE</span>
                    </Col>      
                </Row>
            </Grid>
        )
    }
}
