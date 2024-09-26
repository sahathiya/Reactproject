import React, { useState } from 'react';
import { Form, Button, Container, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Signup.css'

function RegistrationForm() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    address: '',
    phonenumber: '',
    password: '',
    cpassword: '',
    admin: false,
    block: false,
    cart: [],
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const validate = () => {
    let errors = {};

    // Username validation
    if (!inputs.username) {
      errors.username = 'Username is required.';
    } else if (!/^[A-Za-z0-9]{3,16}$/.test(inputs.username)) {
      errors.username = 'Username should be 3-16 characters and alphanumeric.';
    }

    // Email validation
    if (!inputs.email) {
      errors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(inputs.email)) {
      errors.email = 'Email address is invalid.';
    }

    // Address validation
    if (!inputs.address) {
      errors.address = 'Address is required.';
    }

    // Phone number validation
    if (!inputs.phonenumber) {
      errors.phonenumber = 'Phone number is required.';
    } else if (!/^\d{10}$/.test(inputs.phonenumber)) {
      errors.phonenumber = 'Phone number should be 10 digits.';
    }

    // Password validation
    if (!inputs.password) {
      errors.password = 'Password is required.';
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,16}$/.test(inputs.password)
    ) {
      errors.password =
        'Password must be 8-16 characters long, with at least one uppercase letter, one lowercase letter, one digit, and one special character.';
    }

    // Confirm Password validation
    if (!inputs.cpassword) {
      errors.cpassword = 'Confirm password is required.';
    } else if (inputs.password !== inputs.cpassword) {
      errors.cpassword = 'Passwords do not match.';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await axios.post('http://localhost:3000/Users', inputs);
        console.log(response)
        alert('Registration successful');
        setInputs({username:'',email:'', address: '', phonenumber: '',password: '',cpassword: ''})
        navigate('/login');
      } catch (error) {
        console.log('Error registering user:', error);
      }
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh',marginTop:'-15px'}}>
      <Card style={{ width: '50%', maxWidth: '400px',maxHeight:'450px', padding: '2rem', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',border:'2px solid purple' }}>
        <Card.Body>
          <h2  style={{textAlign:'center',color:'purple',marginTop:'-30px'}}>Register</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formUsername"  className="mb-3">
              
              <Form.Control
                type="text"
                name="username"
                value={inputs.username}
                onChange={handleChange}
                isInvalid={!!errors.username}
                placeholder="Enter username"
              />
              <Form.Control.Feedback type="invalid">
                {errors.username}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formEmail" className="mb-3">
              
              <Form.Control
                type="email"
                name="email"
                value={inputs.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
                placeholder="Enter email"
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formAddress" className="mb-3">
             
              <Form.Control
                type="text"
                name="address"
                value={inputs.address}
                onChange={handleChange}
                isInvalid={!!errors.address}
                placeholder="Enter address"
              />
              <Form.Control.Feedback type="invalid">
                {errors.address}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formPhoneNumber" className="mb-3">
             
              <Form.Control
                type="text"
                name="phonenumber"
                value={inputs.phonenumber}
                onChange={handleChange}
                isInvalid={!!errors.phonenumber}
                placeholder="Enter phone number"
              />
              <Form.Control.Feedback type="invalid">
                {errors.phonenumber}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formPassword" className="mb-3">
             
              <Form.Control
                type="password"
                name="password"
                value={inputs.password}
                onChange={handleChange}
                isInvalid={!!errors.password}
                placeholder="Enter password"
              />
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formCPassword" className="mb-3">
              
              <Form.Control
                type="password"
                name="cpassword"
                value={inputs.cpassword}
                onChange={handleChange}
                isInvalid={!!errors.cpassword}
                placeholder="Confirm password"
              />
              <Form.Control.Feedback type="invalid">
                {errors.cpassword}
              </Form.Control.Feedback>
            </Form.Group>

            <Button style={{backgroundColor:'purple',color:'white',marginTop:'-5px'}} type="submit" >
              Register
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default RegistrationForm;


