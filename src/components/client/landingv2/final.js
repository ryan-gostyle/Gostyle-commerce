import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Button } from 'antd';
import "./services.css";


export default class Last extends Component {
    render() {

        return (
            <Grid fluid>
                <Row middle="xs" center="xs" style={{ height: "100vh" }} style={{ overflow: 'hidden' }}>
                    <Col xs={12} md={12} lg={6}>
                        <h1 >The buzzbar app. </h1>
                        <h1 >everything in one place. </h1>
                        <p style={{wordBreak:"break-word", overflowWrap:"break-word", width:"75%"}}>Want to keeps tabs on your project? Check in on the progress of your work, access your invoinces, view documents, book new appointments, book new appointments and more on the Buzzbar App.</p>
                        <Row>
                            <Col lg={4}>
                                <Button className="btn">already signed up? login</Button>
                            </Col>
                            <Col lg={2}>
                                <p>find out more</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} md={12} lg={6} >
                        <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/cp.png" />
                    </Col>
                </Row>
            </Grid >
        )
    }
}
