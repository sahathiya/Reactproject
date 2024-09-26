import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function UsersList() {
  const [userlist, setuserlist] = useState([]);
  const navigate=useNavigate()

  useEffect(() => {
    const userdata = async () => {
      const res = await axios.get('http://localhost:3000/Users');
      console.log('userdata', res.data);

      const filtereduser = res.data.filter((user) => user.admin !== true);
      setuserlist(filtereduser);
    };
    userdata();
  }, []);

  return (
    <Container fluid className="p-4">
      <Row>
        {/* Empty Column for spacing on the left */}
        <Col md={2}></Col>

        {/* Table Column */}
        <Col md={8}>
          <h1 className="text-center mb-4">Users List</h1>
          <Table striped bordered hover responsive className="table-right">
            <thead>
              <tr>
                <th>Id</th>
                <th>Username</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {userlist &&
                userlist.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>
                      <Button className='button-view' onClick={()=>navigate(`/usersdetailes/${user.id}`)}>View</Button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </Col>

        {/* Empty Column for spacing on the right */}
        <Col md={2}></Col>
      </Row>
    </Container>
  );
}

export default UsersList;

