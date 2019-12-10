import React, { Component } from 'react'
import Typed from 'react-typed';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './ISection3.css';
export default class ISection3 extends Component {
    render() {
        return (
            <div>
                <Grid className="">
                    <Row center="xs" middle="xs">
                        <Col lg={6}>
                            <h1 id="ineed">I NEED</h1>
                        </Col>
                        <Col lg={6}>
                            <h3 id="typing">
                                <Typed
                                    strings={["Leads","Conversion","Engagement","Likes","Followers","Content","Social Media Manager", "Strategies","Ads","Sales"]}
                                    typeSpeed={200}
                                    backSpeed={100}
                                    loop
                                    smartBackspace
                                    shuffle={false}
                                    backDelay={3}
                                    fadeOut={false}
                                    fadeOutDelay={100}
                                    loopCount={0}
                                    showCursor
                                    cursorChar="|" />
                                
                            </h3>
                        </Col>
                    </Row>
                </Grid>
            </div>

        )
    }
}

