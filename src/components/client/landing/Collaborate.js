import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import './Collaborate.css';
import { Button } from 'antd';
export default class Collaborate extends Component {
    render() {
        return (
            <Grid fluid className="collaborate">
                <Row middle="xs" center="xs">
                    <Col xs={12} md={6} lg={6}>
                        <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/ta.vin.png" />
                    </Col>
                    <Col xs={12} md={6} lg={6}>
                        <h3 style={{ fontFamily: "proxima-bold", textAlign: "center" }}><span className="dedicated">CASE STUDYL Ta.Vin Moodboard</span> </h3>
                        <p>Want to keep tabs on your project?Check in on the progress,access your invoices, view documents, book new appointments and more on the Gostyle App</p>
                        <br />
                        <Button className="we-work">LEARN MORE</Button>
                        <Button style={{ marginLeft: "10px" }} className="book-now">BOOK NOW</Button>
                    </Col>

                </Row>
            </Grid>
        )
    }
}
