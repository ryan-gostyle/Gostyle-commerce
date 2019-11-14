import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Tabs } from 'antd';
import './Booking.css';
import WrappedRegistrationForm  from './Form'
const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

export default class Booking extends Component {
    render() {
        return (
            <Grid fluid className="booking" style={{padding:"50px"}}>
                <Row>
                    <Col xs={12} md={12}>
                        <Tabs style={{backgroundColor:"white"}} defaultActiveKey="1" onChange={callback}>
                            <TabPane tab="Book a Time" key="1">
                                <WrappedRegistrationForm />
                            </TabPane>
                            <TabPane tab="Outside PH?" key="2">
                                <WrappedRegistrationForm />
                            </TabPane>
                        </Tabs>
                    </Col>
                </Row>
            </Grid>
        )
    }
}
