import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import './clients.css';

export default class Clients extends Component {
    render() {
        return (
            <Grid fluid className="featureworks clients">
                <Row style={{ overflow: 'hidden' }}>
                    <Col xs={12} md={12} >
                        <h2 className="focus-in-expand" style={{fontFamily:"proxima-bold", textAlign: "center" }}>Notable Clients around the globe!</h2>
                    </Col>
                    <Col xs={12} md={12}>
                        <Row middle="xs" center="xs" className="slide-in-bck-center"> 
                            <div xs={12} md={4} className="featureworks-1">
                                <img alt="no fa8co" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/fa8.png" />
                            </div>
                            <div xs={12} md={4} className="featureworks-2">
                                <img alt="no mandj" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/mandj.png" />
                            </div>
                            <div xs={12} md={4} className="featureworks-3">
                                <img alt="no qcrates" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/qrated+crates.jpg" />
                            </div>
                            <div xs={12} md={4} className="featureworks-1">
                                <img alt="no techtonic" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/techtonic.png" />
                            </div>
                            <div xs={12} md={4} className="featureworks-2">
                                <img alt="no thestudy" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/the+study.png" />
                            </div>
                            <div xs={12} md={4} className="featureworks-3">
                                <img alt="no alpharock" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/alpha+rock.png" />
                            </div>
                            <div xs={12} md={4} className="featureworks-1">
                                <img alt="no bys" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/bys.png" />
                            </div>
                            <div xs={12} md={4} className="featureworks-2">
                                <img alt="no zdrc" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/ZDRC+Logo+Black.png" />
                            </div>
                            <div xs={12} md={4} className="featureworks-3">
                                <img alt="no easypc" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/easypc.png" />
                            </div>
                            <div xs={12} md={4} className="featureworks-1">
                                <img alt="no biofresh" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/biofresh.png" />
                            </div>
                            <div xs={12} md={4} className="featureworks-2">
                                <img alt="no burlington" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/burligton.png" />
                            </div>
                            <div xs={12} md={4} className="featureworks-3">
                                <img alt="no knit" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/knitlogo.png" />
                            </div>
                            <div xs={12} md={4} className="featureworks-1">
                                <img alt="no omo" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/omo.png" />
                            </div>
                            <div xs={12} md={4} className="featureworks-2">
                                <img alt="no puma" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/puma.png" />
                            </div>
                            <div xs={12} md={4} className="featureworks-3">
                                <img alt="no custom" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/custom.png" />
                            </div>
                            <div xs={12} md={4} className="featureworks-1">
                                <img alt="no payandgo" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/payandgo.png" />
                            </div>
                            <div xs={12} md={4} className="featureworks-2">
                                <img alt="no docspark" src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/docspark.png" />
                            </div>
                        </Row>
                    </Col>
                </Row>
            </Grid>
        )
    }
}