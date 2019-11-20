import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Button } from 'antd';
import "./services.css";


export default class Last extends Component {
    render() {

        return (
            <Grid fluid className="last bg-pan-bottom">
                <Row middle="xs" center="xs">
                    <Col xs={12} md={6}>
                        <h1 style={{fontFamily:"proxima-bold",textAlign:"center"}}>Hakuna Matata: Your Project, No Worries.</h1>
                        <p style={{wordBreak:"break-word", overflowWrap:"break-word",textAlign:"center"}}>Say goodbye to the dreaded  back and forth emails. Track your progress, get real-time update,  request for revisions, invoicing - all in one portal.</p>
                        <Row center="xs">
                            <Col lg={4}>
                                <Button className="btn">already signed up? login</Button>
                            </Col>
                            <Col lg={2}>
                                <p>find out more</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} md={6}>
                        <img alt="no image1" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/portal.png" style={{paddingBottom:"0px"}} />
                    </Col>
                </Row>
            </Grid >
        )
    }
}
