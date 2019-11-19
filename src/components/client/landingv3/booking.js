import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Tabs } from 'antd';
import './booking.css';
import WrappedRegistrationForm from './form'
const { TabPane } = Tabs;

function callback(key) {
    console.log(key);
}

export default class Booking extends Component {
    render() {
        return (
            <Grid fluid className="bookings">
                <Row>
                    <Col style={{padding:"25px"}} xs={12} md={12} lg={4} lgOffset={8}>
                            <Tabs style={{ backgroundColor: "white" }} defaultActiveKey="1" onChange={callback}>
                                <TabPane tab="Book Side-by-Side" key="1">
                                    <WrappedRegistrationForm />
                                </TabPane>
                                <TabPane tab="Book Remote" key="2">
                                    <WrappedRegistrationForm />
                                </TabPane>
                            </Tabs>
                    </Col>
                </Row>
            </Grid>
        )
    }
}
