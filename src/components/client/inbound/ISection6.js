import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
export default class ISection6 extends Component {
    render() {
        return (
            <div>
                <Grid fluid >
                    <Row center="xs" middle="xs">
                        <Col lg={5} xs={12} md={5}>
                            <h1 style={{fontFamily:"proxima-bold",textAlign:"center", fontSize:"2.4em"}}> Let's BrainStorm your winning Strategy For Free!</h1>
                        </Col>
                        <Col lg={5} xs={12} md={5}>
                            <p style={{textAlign:"justify"}}>We Firmly Believe that Executing Marketing Strategies is never a cookie cutter approach. 
                                We base everything on data and execution to hack your growth and reach your business objectives.
                                We use our winning combination of empathy, value and technology to create your personal gameplan and set you up for success!
                            </p>
                        </Col>
                    </Row>
                </Grid>
            </div>

        )
    }
}

