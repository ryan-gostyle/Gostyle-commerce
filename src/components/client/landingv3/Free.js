import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import './free.css'
import './FeaturedWorks.css';
import { Anchor } from 'antd';

const {Link} = Anchor;

export default class Free extends Component {

    render() {
        return (
            <Grid>
                <Row middle="xs" center="xs" className="free featuredworks">
                    <Col xs={12} md={12} style={{marginTop:"40px"}}>
                        <h1 className="vibrate-1" style={{fontFamily:"proxima-bold",textAlign:"center"}}>Have an Idea? Let's make it work!</h1>
                        <p className="sub-title focus-in-expand" style={{ textAlign: "center" }}>Avail your free 30 min brainstorm session with us now!</p>
                    </Col>
                    <Col xs={12} md={12} lg={2} style={{marginBottom:"40px"}} className="fade-in-bottom">
                       <Anchor affix={false}>
                           <Link href="#booking" className="book-now" title="Book Now"/>
                       </Anchor>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

