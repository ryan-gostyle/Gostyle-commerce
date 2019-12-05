import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Tabs } from 'antd';
import './C_section3.css';
import WrappedRegistrationForm  from './C_Form'
const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

export default class C_Section3 extends Component {
    render() {
        return (
            <Grid fluid className="booking" style={{padding:"50px"}}>
                <Row>
                    <Col xs={12} md={12} lg={4} lgOffset={8}>
                        <Tabs style={{backgroundColor:"white",textAlign:"center"}} defaultActiveKey="1" onChange={callback} >
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
