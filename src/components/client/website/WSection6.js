import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Button, Anchor } from 'antd';

const { Link } = Anchor;

export default class WSection6 extends Component {
    render() {
        return (
            <div>
                <Grid fluid className="featuredworks" style={{ backgroundColor: "#FAFAFA" }}>
                    <Row center="xs" middle="xs">
                        <Col xs={12} md={12} lg={3}>
                            <img alt="no basic" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/gostyle+web+dev-05.png" />
                        </Col>
                        <Col xs={12} md={12} lg={3}>
                            <img alt="no standard" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/gostyle+web+dev-06.png" />
                        </Col>
                        <Col xs={12} md={12} lg={3}>
                            <img alt="no premium" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/gostyle+web+dev-07.png" />
                        </Col>
                        <Col xs={12} md={12} lg={3}>
                            <h2 style={{ textAlign: "center" }}>Growth & Maintenance Package</h2>
                            <br />
                            <Anchor affix={false}>
                                <Link href="#booking" className="book-now" title="Try" />
                            </Anchor>
                        </Col>
                    </Row>
                </Grid>
                <Grid fluid className="featuredworks" style={{marginTop:"50px", marginBottom:"20px", minHeight:"0px"}}>
                    <Row center="xs" middle="xs">
                        <Col xs={12} md={12} lg={12}>
                            <h1 style={{textAlign:"center", fontFamily:"proxima-bold", fontSize:"3em"}}>Cant Decide? Let's figure out your package together!</h1>
                        </Col>
                        <Col>
                            <Anchor affix={false}>
                                <Link href="#booking" className="book-now" title="Book Now" />
                            </Anchor>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}
