import axios from 'axios';

export default axios.create({
  baseURL: `http://ec2-18-220-220-10.us-east-2.compute.amazonaws.com/api/`
  // baseURL: `http://localhost:8000/api/`
  // localhost:4000/changes
});