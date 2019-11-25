import React, { Component } from 'react'
import {
  Form,
  Input,
  Button,
} from 'antd';
// import Api from '../../../Api';

import Axios from 'axios';



class Newsletters extends Component {

  state = {
    time: null,
    date: null,
    timezones: [],
  }
  onChange = (time, timeString) => {
    this.setState({ time: timeString });
  }
  onChange1 = (time, timeString) => {
    // console.log(timeString);
    this.setState({ date: timeString });
  }

  async componentDidMount() {

    var timezone = await Axios.get('https://raw.githubusercontent.com/dmfilipenko/timezones.json/master/timezones.json');
    this.setState({ timezones: timezone.data })
  }



//   handleSubmit = async e => {
//     e.preventDefault();

//     this.props.form.validateFieldsAndScroll(async (err, values) => {
//       if (!err) {
//         var submit = await Api.post('register', {
//           name: values.fullname,
//           brand_company: values.brand,
//           phone_number: "09" + values.phone,
//           email: values.email,
//           package: values.package,
//           password: values.email,
//           password_confirmation: values.email,
//           status: "active",
//           location: "Makati",
//           place: values.place,
//           date: this.state.date,
//           time: this.state.time,
//           timezone: values.timezone
//         })
//           .catch(function (error) {
//             if (error.response) {
//               // The request was made and the server responded with a status code
//               // that falls out of the range of 2xx
//               console.log(error.response);
//               console.log(error.response.data);
//               console.log(error.response.status);
//               console.log(error.response.headers);
//               Object.keys(error.response.data).map(function (key, index) {
//                 MySwal.fire({
//                   title: "Error",
//                   text: error.response.data[key][0],
//                   icon: 'error',
//                 });
//                 return false
//               });
//               // currentComponent.setState({ status: "error", message: error.response.data })
//             } else {
//               MySwal.fire({
//                 title: "Error",
//                 text: "Error Try Again later",
//                 icon: 'error',
//               });
//             }
//           });
//         if (await submit) {
//           MySwal.fire({
//             title: "Booked!",
//             text: "We'll get back to you, Check your mail ;)",
//             icon: "success"
//           });
//         }
//       }
//     });
//   };


  render() {
    const { getFieldDecorator } = this.props.form;

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
        <Form.Item style={{textAlign:"center"}}>
          <Button type="primary" htmlType="submit" style={{borderRadius:25,margin: "15px 5px"}}>
            Subscribe
              </Button>
        </Form.Item>
      </Form>
    )
  }
}

const Newsletter = Form.create({ name: 'newletter' })(Newsletters);
export default Newsletter