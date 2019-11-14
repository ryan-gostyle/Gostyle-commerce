

import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Typed } from 'react-typed';
export default class First extends Component {
    render() {
        return (
            <Grid fluid className="hero">
                <Row>
                    <Col xs={12} md={5} className="hero-col-1">
                        <h1>Let's Build</h1>
                        <h1 style={{ marginBottom: 15 }} >Your &nbsp;
    <span className="bold-font-600"><Typed
                                strings={["Webstore", "SEO", "Brand"]}
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
                                cursorChar="|" /></span></h1>
                        <a href="#" className="book-now">BOOK NOW</a><a href="#" className="we-work">HOW WE WORK</a>
                    </Col>
                    <Col xs={12} md={7}>
                        <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/1.png" />
                    </Col>
                </Row>
            </Grid>
        )
    }
}
