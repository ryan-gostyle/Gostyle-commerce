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
const { Option } = Select;
// const AutoCompleteOption = AutoComplete.Option;
const dateFormat = 'YYYY/MM/DD';
function onChange(time, timeString) {
  console.log(time, timeString);
}
class TokenForm extends Component {
  render() {
    const { getFieldDecorator } = this.props.form;

    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '63',
    })(
      <Select style={{ width: 70 }}>
        <Option value="63">+63</Option>
        <Option value="87">+87</Option>
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
        <DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} />
        <TimePicker use12Hours onChange={onChange} />
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