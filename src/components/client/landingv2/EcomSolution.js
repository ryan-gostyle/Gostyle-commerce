import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Button } from 'antd';
import "./services.css";

export default class EcomSolution extends Component {
    render() {

        return (
            <div>
                <Row middle="xs" center="xs" style={{ height: "100vh" }} style={{ overflow: 'hidden' }} className="ecom">
                    <Col xs={12} md={12} lg={6} className="ecom-background" >
                        <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/ecomsolution.png" />
                    </Col>
                    <Col xs={12} md={12} lg={6} className="ecom-background-triangle">
                        <h1 style={{ textAlign: "center" }}>Ecommerce Solutions</h1>
                        <p>We provide you with your own eCommerce websiteand an all-in-one dashboard to manage your zilingo, lazada, shoppee and zalora! Let us set you up for your success with seamless and optimized eCommerce solutions for your brand! </p>
                        <Row style={{textAlign:"center"}}>
                            <Col style={{margin:"0 auto"}}>
                                <Button className="btn" style={{margin:"5px 10px"}}>Book Now</Button>
                                <Button className="btn" style={{margin:"5px 10px"}}>Learn More</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div >
        )
    }
}
