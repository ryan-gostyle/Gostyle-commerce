import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Anchor } from 'antd';
// import './Wsection1.css';

const { Link } = Anchor;
export default class WSection1 extends Component {
    render() {
        return (
            <Grid fluid className="collaborate" style={{marginTop:0}}>
                <Row middle="xs" center="xs" style={{ height: "80vh", backgroundColor: "#FAFAFAFA" }}>
                    <Col xs={12} md={12} lg={12}>
                        <h1 style={{ fontFamily: "proxima", textAlign: "center", fontSize: "3em !important" }}>Fully Responsive yet</h1>
                        <h1 style={{ fontFamily: "proxima-bold", textAlign: "center", fontSize: "3em !important" }}>Creatively Made.</h1>
                        <Row center="xs" middle="xs">
                            <Col xs={12} md={6} lg={2}>
                                <br />
                                <Anchor affix={false}>
                                    <Link href="#nutshell" className="we-work" title="Learn More" />
                                </Anchor>
                            </Col>
                            <Col xs={12} md={6} lg={2}>
                                <br />

                                <Anchor affix={false}>
                                    <Link href="#booking" className="book-now" title="Book Now" />
                                </Anchor>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Grid>
        )
    }
}
