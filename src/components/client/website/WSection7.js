import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Tabs } from 'antd';
import './WSection7.css';
import WrappedRegistrationForm from './form1'
import RemoteForm from './form2';
const { TabPane } = Tabs;

function callback(key) {
    console.log(key);
}

export default class WSection7 extends Component {
    render() {
        return (
            <Grid id="booking" fluid className="bookings">
                <Row top="xs" center="xs">
                    <Col style={{ padding: "25px" }} xs={12} md={12} lgOffset={6} lg={4}>
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
