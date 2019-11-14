import React, { Component } from 'react'
import moment from 'moment';
import {
  Form,
  Input,
  Select,
  Checkbox,
  Button,
  AutoComplete,
  TimePicker,
  DatePicker,
} from 'antd';
import Api from '../../../Api';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal)
const { Option } = Select;
const dateFormat = 'YYYY-MM-DD';

class TokenForm extends Component {

  state = {
    time: null,
    date: null,
  }
  onChange = (time, timeString) =>{
    this.setState({ time: timeString });
  }
  onChange1 = (time, timeString) => {
    // console.log(timeString);
    this.setState({ date: timeString });
  }


  handleSubmit = async e => {
    e.preventDefault();

    this.props.form.validateFieldsAndScroll(async (err, values) => {
      if (!err) {
        var submit = await Api.post('register', {
          name: values.fullname,
          brand_company: values.brand,
          phone_number: "09" + values.phone,
          email: values.email,
          package: values.package,
          password: values.email,
          password_confirmation: values.email,
          status: "active",
          location: "Makati",
          place: values.place,
          date: this.state.date,
          time: this.state.time,
        })
          .catch(function (error) {
            if (error.response) {
              // The request was made and the server responded with a status code
              // that falls out of the range of 2xx
              console.log(error.response);
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
              MySwal.fire({
                title: "Error",
                text: error.response.data.error,
                icon: 'error',
            });
              // currentComponent.setState({ status: "error", message: error.response.data })
            }else
            {
              MySwal.fire({
                title: "Error",
                text: "Error Try Again later",
                icon: 'error',
            });
            }
          });
        if (await submit) {
            MySwal.fire({
              title: "Booked!",
              text: "We'll get back to you, Check your mail ;)",
              icon: "success"
          });
        }
      }
    });
  };


  render() {
    const { getFieldDecorator } = this.props.form;

    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '09',
    })(
      <Select style={{ width: 70 }}>
        <Option value="09">09</Option>
      </Select>,
    );



    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Item>
          {getFieldDecorator('email', {
            rules: [
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ],
          })(<Input placeholder='Email' />)}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('fullname', {
            rules: [{ required: true, message: 'Please input your full name!', whitespace: true }],
          })(<Input placeholder='Full Name' />)}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('phone', {
            rules: [{ required: true, message: 'Please input your phone number!' }],
          })(<Input addonBefore={prefixSelector} style={{ width: '100%' }} placeholder="Phone Number" />)}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('brand', {
            rules: [{ required: true, message: 'Please input your company name!', whitespace: true }],
          })(<Input placeholder='Brand/Company Name' />)}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('package', {
            rules: [{ required: true, message: 'Field is required' }],
          })(
            <Select placeholder="Package" >
              <Option value=""> </Option>
              <Option value="Package A">Package A </Option>
              <Option value="Package B">Package B</Option>
              <Option value="Package C"> Package C</Option>
            </Select>
          )}
        </Form.Item>
        <b style={{ padding: 5 }}>select a place, time, date that suits you best </b>
        <Form.Item>
          {getFieldDecorator('place', {
            rules: [{ required: true, message: 'Field is required' }],
          })(
            <Select placeholder="Place" >
              <Option value=""> </Option>
              <Option value="Sharvd">Sharvd Coworking Space</Option>
            </Select>
          )}
        </Form.Item>
        <Form.Item>
          <DatePicker onChange={this.onChange1} defaultValue={moment('2015-01-01', dateFormat)} format={dateFormat} />
          <TimePicker use12Hours onChange={this.onChange} />
        </Form.Item>

        <Form.Item>
          {getFieldDecorator('agreement', {
            valuePropName: 'checked',
          })(
            <Checkbox>
              I have read the <a href="">agreement</a>
            </Checkbox>,
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            BOOK
              </Button>
        </Form.Item>
      </Form>
    )
  }
}

const WrappedRegistrationForm = Form.create({ name: 'register' })(TokenForm);
export default WrappedRegistrationForm