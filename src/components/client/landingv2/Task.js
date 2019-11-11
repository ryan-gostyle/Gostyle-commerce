import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import './Task.css';
export default class Task extends Component {
    render() {
        return (
            <Grid fluid className="tasks">
                <Row className="container">
                    <Col xs={12} md={12}>
                        <div className="flexcontainer container">
                            <div className="tasks-img">
                                <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/Asset+2.png" />
                                {/* <p>Business Strategy & Branding</p> */}
                            </div>
                            <div className="tasks-img">
                                <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/Asset+3.png" />
                                {/* <p>eCommerce Development & Design</p> */}
                            </div>
                            <div className="tasks-img">
                                <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/Asset+4.png" />
                                {/* <p>Inbound Marketing for all eCommerce channels</p> */}
                            </div>
                            <div className="tasks-img">
                                <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/Asset+5.png" />
                                {/* <p>MultiChannel Management</p> */}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Grid>
        )
    }
}
