

import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Button } from 'antd';
export default class First extends Component {
    render() {
        return (
            <Grid fluid className="hero">
                <Row middle="xs" center="xs">
                    <Col xs={12} md={12}>
                        <img src={"https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/e1.png"} />
                    </Col>
                    <Col xs={12} md={12}>
                        <h1 style={{ fontFamily: "proxima-bold", textAlign: "center" }}>eCommerce Solutions</h1>
                        <p>want to keep tabs on you project? Check in on the progress of your work, access your invoices,</p>
                        <p> view documents, book new appointments and more on the Gostyle App</p>
                        <br />
                        <Button style={{marginBottom:"20px"}} className="we-work">LEARN MORE</Button>
                        <Button style={{marginLeft:"10px",marginBottom:"20px"}} className="book-now">BOOK NOW</Button>
                    </Col>
                </Row>
            </Grid>
        )
    }
}
