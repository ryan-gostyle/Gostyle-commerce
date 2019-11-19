import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Tabs, Card } from 'antd';
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
<<<<<<< HEAD
                <Row>
                    <Col style={{padding:"25px"}} xs={12} md={12} lg={4} lgOffset={8}>
                            <Tabs style={{ backgroundColor: "white" }} defaultActiveKey="1" onChange={callback}>
                                <TabPane tab="Side by side in our office" key="1">
                                    <WrappedRegistrationForm />
                                </TabPane>
                                <TabPane tab="Working Remotely" key="2">
                                    <WrappedRegistrationForm />
                                </TabPane>
                            </Tabs>
=======
                <Row top="xs" center="xs">
                    <Col style={{ padding: "25px" }} xs={12} md={6} lg={4}  >
                        <Card>
                            <h2>Work Collaborate Remotely or Side by side in our office.</h2>
                            <h2>The choice is yours!</h2>
                        </Card>
                    </Col>
                    <Col style={{ padding: "25px" }} xs={12} md={12} lgOffset={2} lg={4}>
                        <Tabs style={{ backgroundColor: "white" }} defaultActiveKey="1" onChange={callback}>
                            <TabPane tab="Book Side-by-Side" key="1">
                                <WrappedRegistrationForm />
                            </TabPane>
                            <TabPane tab="Book Remote" key="2">
                                <WrappedRegistrationForm />
                            </TabPane>
                        </Tabs>
>>>>>>> 59125fa4a3a180342131d9501aa058ab9fdf133b
                    </Col>
                </Row>
            </Grid>
        )
    }
}
