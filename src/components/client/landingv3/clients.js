import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import './clients.css';

export default class Clients extends Component {
    render() {
        return (
            <Grid fluid className="featureworks clients">
                <Row style={{ overflow: 'hidden' }}>
                    <Col xs={12} md={12} >
                        <h2 className="focus-in-expand" style={{ textAlign: "center" }}>Notable Clients</h2>
                    </Col>
                    <Col xs={12} md={12}>
                        <Row middle="xs" center="xs" className="slide-in-bck-center"> 
                            <div xs={12} md={4} className="featureworks-1">
                                <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/fa8.png" />
                            </div>
                            <div xs={12} md={4} className="featureworks-2">
                                <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/mandj.png" />
                            </div>
                            <div xs={12} md={4} className="featureworks-3">
                                <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/qrated+crates.jpg" />
                            </div>
                            <div xs={12} md={4} className="featureworks-1">
                                <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/techtonic.png" />
                            </div>
                            <div xs={12} md={4} className="featureworks-2">
                                <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/the+study.png" />
                            </div>
                            <div xs={12} md={4} className="featureworks-3">
                                <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/stylegenie.png" />
                            </div>
                            <div xs={12} md={4} className="featureworks-1">
                                <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/bys.png" />
                            </div>
                            <div xs={12} md={4} className="featureworks-2">
                                <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/ZDRC+Logo+Black.png" />
                            </div>
                            <div xs={12} md={4} className="featureworks-3">
                                <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/easypc.png" />
                            </div>
                            <div xs={12} md={4} className="featureworks-3">
                                <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/alpha+rock.png" />
                            </div>
                            <div xs={12} md={4} className="featureworks-1">
                                <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/biofresh.png" />
                            </div>
                            <div xs={12} md={4} className="featureworks-2">
                                <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/burligton.png" />
                            </div>
                            <div xs={12} md={4} className="featureworks-3">
                                <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/knit.png" />
                            </div>
                            <div xs={12} md={4} className="featureworks-1">
                                <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/omo.png" />
                            </div>
                            <div xs={12} md={4} className="featureworks-2">
                                <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/puma.png" />
                            </div>
                            <div xs={12} md={4} className="featureworks-3">
                                <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/custom.png" />
                            </div>
                            <div xs={12} md={4} className="featureworks-1">
                                <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/docspark.png" />
                            </div>
                            <div xs={12} md={4} className="featureworks-2">
                                <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/elmntl.jpg" />
                            </div>
                            <div xs={12} md={4} className="featureworks-3">
                                <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/mano.png" />
                            </div>
                            <div xs={12} md={4} className="featureworks-1">
                                <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/mariaswim.png" />
                            </div>
                            <div xs={12} md={4} className="featureworks-2">
                                <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/payandgo.png" />
                            </div>
                            <div xs={12} md={4} className="featureworks-3">
                                <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/rakk.jpg" />
                            </div>
                            <div xs={12} md={4} className="featureworks-1">
                                <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/snoe.png" />
                            </div>
                            <div xs={12} md={4} className="featureworks-2">
                                <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/specterpro+(1).png" />
                            </div>
                            <div xs={12} md={4} className="featureworks-3">
                                <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/tavin.jpg" />
                            </div>
                        </Row>
                    </Col>
                </Row>
            </Grid>
        )
    }
}
