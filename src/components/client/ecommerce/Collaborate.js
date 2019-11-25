import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import './Collaborate.css';
import { Anchor } from 'antd';
const { Link } = Anchor;
export default class Collaborate extends Component {
    render() {
        return (
            <Grid fluid className="collaborate ">
                <Row middle="xs" center="xs">
                    <Col xs={12} md={6} lg={6}>
                        <img alt="no ta.vin" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/ta.vin.png" />
                    </Col>
                    <Col xs={12} md={6} lg={6}>
                        <h2 style={{ fontFamily: "proxima-bold", textAlign: "center", fontSize:"2.5em"}}>CASE STUDY:<span className="dedicated" style={{ fontFamily: "proxima"}}> Ta.Vin Moodboard</span> </h2>
                        <p>Want to keep tabs on your project? Check in on the progress,access your invoices, view documents, book new appointments and more on the Gostyle App</p>
                        <br />
                        <div>
                            <Anchor affix={false} style={{ display: "inline-block" }}>
                                <Link href="#solution" className="we-work" title="Learn More" />
                            </Anchor>
                            <Anchor affix={false} style={{ display: "inline-block" }}>
                                <Link href="#booking" className="book-now" title="Book Now" />
                            </Anchor>    
                        </div> 
                    </Col>

                </Row>
            </Grid>
        )
    }
}
