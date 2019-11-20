import React, { Component } from 'react'
import {
    Form,
    Input,
    Button,
    Card,
    Icon
} from 'antd';
import Api from '../../../Api';
import cookie from 'react-cookies';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Header1 from '../../Header';
import Footer from '../../Footer';
import './login.css';

const MySwal = withReactContent(Swal)

class Login extends Component {

    handleSubmit = async e => {
        e.preventDefault();

        this.props.form.validateFieldsAndScroll(async (err, values) => {
            if (!err) {
                var submit = await Api.post('login', {
                    email: values.email,
                    password: values.password,
                }).catch(function (error) {
                        if (error.response) {
                            // The request was made and the server responded with a status code
                            // that falls out of the range of 2xx
                            console.log(error.response);
                            console.log(error.response.data);
                            console.log(error.response.status);
                            console.log(error.response.headers);
                            Object.keys(error.response.data).map(function (key, index) {
                                MySwal.fire({
                                    title: "Error",
                                    text: error.response.data[key],
                                    icon: 'error',
                                });
                                return false;
                            });
                            // currentComponent.setState({ status: "error", message: error.response.data })
                        } else {
                            MySwal.fire({
                                title: "Error",
                                text: "Error Try Again later",
                                icon: 'error',
                            });
                        }
                    });
                if (await submit) {
                    cookie.save('token', submit.data.token, {path: '/'});
                    MySwal.fire({
                        title: "Logged in!",
                        text: submit.data.token,
                        icon: "success",
                    }).then(() => {
                        return window.location.href = "/";
                      });
                }
            }
        });
    };


    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Header1 />
                <Grid>
                    <Row middle="xs" center="xs" style={{ height: "100vh" }}>
                        <Col xs={10} lg={4} md={6}>
                            <Card id="card">
                                <h1 style={{ fontFamily: "glacial-bold" }}>WELCOME</h1>
                                <br />
                                <svg id="logo" width="80%" viewBox="0 0 659 250">
                                    <g id="Layer_2" data-name="Layer 2">
                                        <g id="Layer_2-1" data-name="Layer 2">
                                            <text className="cls-1" transform="translate(76.51 179.58)">S<tspan className="cls-2" x="9.99" y="0">tudio</tspan></text>
                                            <text className="cls-3" transform="translate(33.56 140.28)">GS</text>
                                            <text className="cls-4" transform="translate(20.3 147.8)">GS</text>
                                            <path className="cls-5" d="M216.17,110.25A105.92,105.92,0,1,1,110.25,4.33,105.92,105.92,0,0,1,216.17,110.25Z" />
                                        </g>
                                    </g>
                                </svg>
                                <Form onSubmit={this.handleSubmit} className="login-form" style={{ fontFamily: "glacial" }} hideRequiredMark={true} >
                                    <Form.Item label="Email" style={{ textAlign: "left" }} >
                                        {getFieldDecorator('email', {
                                            rules: [{ required: true, message: 'Please input your email!', type: 'email' }],
                                        })(
                                            <Input
                                                size="large"
                                                prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                                placeholder="Email"
                                            />,
                                        )}
                                    </Form.Item>
                                    <Form.Item label="Password" style={{ textAlign: "left" }}  >
                                        {getFieldDecorator('password', {
                                            rules: [{ required: true, message: 'Please input your Password!' }],
                                        })(
                                            <Input.Password
                                                size="large"
                                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                                type="password"
                                                placeholder="Password"
                                            />,
                                        )}
                                    </Form.Item>
                                    <Form.Item>
                                        {/* <br/> */}
                                        <Button className="btn-submit" htmlType="submit" size="large" block>
                                            LOGIN
                  </Button>
                                    </Form.Item>
                                </Form>
                            </Card>
                        </Col>
                    </Row>
                </Grid>
                <Footer />
            </div>
        )
    }
}

const login = Form.create({ name: 'login' })(Login);
export default login