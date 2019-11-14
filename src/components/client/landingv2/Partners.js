import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import './Partners.css';
export default class Partners extends Component {
  render() {

    return (
      <Grid fluid className="partners">
        <Row>
          <Col xs={12} md={12} >
            <h2 style={{ textAlign: "center" }}>Our Partners</h2>
            <p className="sub-title" style={{ textAlign: "center" }}>We take collaboration seriously..and it shows!</p>
          </Col>
          <Col xs={12} md={12}>
            <div className="flexcontainer container">
              <Row middle="xs" center="xs">
                <Col xs={6} md={6}>
                  <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/20.png" />
                </Col>
                <Col xs={6} md={6}>
                  <img style={{maxHeight:"350px"}} src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/the+study.png" />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Grid>
    )
  }
}
