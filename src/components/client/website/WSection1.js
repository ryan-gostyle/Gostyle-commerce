import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Anchor } from 'antd';
// import './Wsection1.css';

const { Link } = Anchor;
export default class WSection1 extends Component {
    render() {
        return (
            <Grid fluid className="collaborate" style={{marginTop:0}}>
                <Row middle="xs" center="xs" style={{ height: "100%", backgroundColor: "#FAFAFAFA" }}>
                    <Col xs={12} md={12} lg={5}>
                        <h1 style={{ fontFamily: "proxima-bold", fontSize: "3em !important" }}>Fully Responsive yet</h1>
                        <h1 style={{ fontFamily: "proxima-bold", fontSize: "3em !important" }}>Creatively Made.</h1>
                        <h3 style={{ fontFamily: "proxima", width:"90%" }}>We go beyond building just a beautiful website but we ensure a fantastic <br/><strong style={{fontFamily:"proxima-bold"}}>user experience</strong></h3>
                        <Row>
                            <Col xs={12} md={6} lg={4}>
                                <br />
                                <Anchor affix={false}>
                                    <Link href="#nutshell" className="we-work" title="Learn More" />
                                </Anchor>
                            </Col>
                            <Col xs={12} md={6} lg={4}>
                                <br />

                                <Anchor affix={false}>
                                    <Link href="#booking" className="book-now" title="Book Now" />
                                </Anchor>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} md={12} lg={6}>
                        <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/websiteheader.png"/>
                    </Col>
                </Row>
            </Grid>
        )
    }
}
