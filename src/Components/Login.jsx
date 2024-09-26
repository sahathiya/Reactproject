import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import { MyLogin } from '../useContext/Logincontext';
import { FaUser } from 'react-icons/fa';
import './login.css';
import './User.css'

function Login() {
  const navigate=useNavigate()
  const {current,setCurrent, handleChange, handleSubmit, handleCreateAccount, datas }=useContext(MyLogin)

  const handleLogout = () => {
    setCurrent(null);
    // clearCart()
    localStorage.removeItem('current');
    // navigate('/user');
  };
if(!current){
  return (
    <Container fluid className="vh-100 d-flex align-items-center justify-content-center bg-light">
      <Row className="w-100 justify-content-center">
        <Col xs={12} sm={8} md={6} lg={4}>
          <Card className="shadow-lg p-4">
            <Card.Body>
              <h2 style={{color:'purple',marginTop:'-20px'}}>Login</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formUsername" className="mb-3">
                  <Form.Control
                    type="text"
                    name="username"
                    value={datas.username}
                    onChange={handleChange}
                    placeholder="Enter username"
                  />
                </Form.Group>
             
                <Form.Group controlId="formPassword" className="mb-3">
                  <Form.Control
                    type="password"
                    name="password"
                    value={datas.password}
                    onChange={handleChange}
                    placeholder="Enter password"
                  />
                </Form.Group>

                <Button style={{backgroundColor:'purple',color:'white',width:'300px'}}  type="submit">
                  Login
                </Button>
                <br/>
                
                 {/* Create Account Button */}
                 <Button  style={{backgroundColor:'purple',color:'white',width:'300px'}} onClick={handleCreateAccount}>
                  Create an Account
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}else{
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
        <div className="card w-100" style={{ maxWidth: '500px' }}>
            <div className="card-body text-center">
                <FaUser className="w-50 h-50 mb-3" />
                <h2 className="card-title">{current.username}</h2>
                <p className="card-text text-muted">An active user</p>
                <p className="card-text">Email Address: {current.email}</p>
                <button className="btn btn-danger me-2" onClick={ handleLogout}>Log out</button>
                 <button className="btn btn-primary" onClick={()=>navigate('/')}> Back to Home</button>
            </div>
        </div>
    </div>
);
}
  
}

export default Login;


