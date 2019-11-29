import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
// import './free.css'
import './FeaturedWorks.css';
import { Anchor } from 'antd';

const {Link} = Anchor;

export default class CommcereFree extends Component {

    render() {
        return (
            <Grid fluid>
                <Row middle="xs" center="xs" style={{backgroundColor: "#FAFAFAFA"}} className="free featuredworks">
                    <Col xs={12} md={12} style={{marginTop:"40px"}}>
                        <h1 className="vibrate-1" style={{fontFamily:"proxima-bold",textAlign:"center"}}>Custom Solution? Let's talk about it</h1>
                    </Col>
                    <Col xs={12} md={12} lg={3} style={{marginBottom:"40px"}} className="fade-in-bottom">
                       <Anchor affix={false}>
                           <Link href="#booking" className="book-now" title="Customize Package"/>
                       </Anchor>
                    </Col>
                </Row>
            </Grid>
        )
    }
}
