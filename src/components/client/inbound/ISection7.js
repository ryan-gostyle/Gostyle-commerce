import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Tabs,Card } from 'antd';
import './ISection7.css';
import WrappedRegistrationForm from './form1'
import RemoteForm from './form2';
const { TabPane } = Tabs;

function callback(key) {
    console.log(key);
}

export default class ISection7 extends Component {
    render() {
        return (
            <Grid id="booking" fluid className="bookings">
                <Row top="xs" center="xs">
                    <Col style={{ padding: "25px" }} xs={12} md={6} lg={4} >
                        <Card>
                            <h2 style={{ fontFamily: "proxima-bold" }}>Book your Team and Collaborate Remotely or Work Side-by-Side With Us!</h2>
                        </Card>
                    </Col>
                    <Col style={{ padding: "25px" }} xs={12} md={12} lgOffset={3} lg={4}>
                        <Tabs style={{ backgroundColor: "white" }} defaultActiveKey="1" onChange={callback}>
                            <TabPane tab="Book Side-by-Side" key="1">
                                <WrappedRegistrationForm />
                            </TabPane>
                            <TabPane tab="Book Remote" key="2">
                                <RemoteForm />
                            </TabPane>
                        </Tabs>
                    </Col>
                </Row>
            </Grid>
        )
    }
}
