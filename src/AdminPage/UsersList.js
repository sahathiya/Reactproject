// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import { Container, Row, Col, Table, Button } from 'react-bootstrap';
// // import { useNavigate } from 'react-router-dom';

// // function UsersList() {
// //   const [userlist, setuserlist] = useState([]);
// //   const navigate=useNavigate()

// //   useEffect(() => {
// //     const userdata = async () => {
// //       const res = await axios.get('http://localhost:3000/Users');
// //       console.log('userdata', res.data);

// //       const filtereduser = res.data.filter((user) => user.admin !== true);
// //       setuserlist(filtereduser);
// //     };
// //     userdata();
// //   }, []);

// //   return (
// //     <Container fluid className="p-4">
// //       <Row>
// //         {/* Empty Column for spacing on the left */}
// //         <Col md={2}></Col>

// //         {/* Table Column */}
// //         <Col md={8}>
// //           <h1 className="text-center mb-4">Users List</h1>
// //           <Table striped bordered hover responsive className="table-right">
// //             <thead>
// //               <tr>
// //                 <th>Id</th>
// //                 <th>Username</th>
// //                 <th>Email</th>
// //                 <th>Action</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {userlist &&
// //                 userlist.map((user) => (
// //                   <tr key={user.id}>
// //                     <td>{user.id}</td>
// //                     <td>{user.username}</td>
// //                     <td>{user.email}</td>
// //                     <td>
// //                       <Button className='button-view' onClick={()=>navigate(`/usersdetailes/${user.id}`)}>View</Button>
// //                     </td>
// //                   </tr>
// //                 ))}
// //             </tbody>
// //           </Table>
// //         </Col>

// //         {/* Empty Column for spacing on the right */}
// //         <Col md={2}></Col>
// //       </Row>
// //     </Container>
// //   );
// // }

// // export default UsersList;



// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import { Container, Row, Col, Table, Button } from 'react-bootstrap';
// // import { useNavigate } from 'react-router-dom';
// // import api from '../axios/api';
// // function UsersList() {
// //   const [userlist, setuserlist] = useState([]);
// //   const navigate=useNavigate()

// //   useEffect(() => {
// //     const userdata = async () => {
// //       const res = await api.get('/admin/all');
// //       console.log('userdata', res.data);

// //       // const filtereduser = res.data.filter((user) => user.admin !== true);
// //       setuserlist(res.data.users);
// //     };
// //     userdata();
// //   }, []);

// //   return (
// //     <Container fluid className="p-4">
// //       <Row>
// //         {/* Empty Column for spacing on the left */}
// //         <Col md={2}></Col>

// //         {/* Table Column */}
// //         <Col md={8}>
// //           <h1 className="text-center mb-4">Users List</h1>
// //           <Table striped bordered hover responsive className="table-right">
// //             <thead>
// //               <tr>
// //                 <th>Id</th>
// //                 <th>Username</th>
// //                 <th>Email</th>
// //                 <th>Action</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {userlist &&
// //                 userlist.map((user) => (
// //                   <tr key={user._id}>
// //                     <td>{user.id}</td>
// //                     <td>{user.username}</td>
// //                     <td>{user.email}</td>
// //                     <td>
// //                       <Button className='button-view' onClick={()=>navigate(`/usersdetailes/${user._id}`)}>View</Button>
// //                     </td>
// //                   </tr>
// //                 ))}
// //             </tbody>
// //           </Table>
// //         </Col>

// //         {/* Empty Column for spacing on the right */}
// //         <Col md={2}></Col>
// //       </Row>
// //     </Container>
// //   );
// // }

// // export default UsersList;






// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import api from '../axios/api';

// function UsersList() {
//   const [userlist, setUserList] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const userdata = async () => {
//       const res = await api.get('/admin/all');
//       console.log('userdata', res.data);
//       setUserList(res.data.users);
//     };
//     userdata();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-50 p-6 lg:p-12">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Users List</h1>
        
//         {/* Table Wrapper */}
//         <div className="overflow-x-auto bg-white shadow-lg rounded-lg border border-gray-200">
//           <table className="min-w-full table-auto text-left">
//             <thead className="bg-blue-600 text-white">
//               <tr>
//                 <th className="px-6 py-3 text-sm font-semibold tracking-wide">Id</th>
//                 <th className="px-6 py-3 text-sm font-semibold tracking-wide">Username</th>
//                 <th className="px-6 py-3 text-sm font-semibold tracking-wide">Email</th>
//                 <th className="px-6 py-3 text-sm font-semibold tracking-wide">Action</th>
//               </tr>
//             </thead>
//             <tbody className="bg-white">
//               {userlist &&
//                 userlist.map((user) => (
//                   <tr key={user._id} className="border-b border-gray-200 hover:bg-gray-100">
//                     <td className="px-6 py-4 text-sm font-medium text-gray-800">{user.id}</td>
//                     <td className="px-6 py-4 text-sm font-medium text-gray-800">{user.username}</td>
//                     <td className="px-6 py-4 text-sm font-medium text-gray-800">{user.email}</td>
//                     <td className="px-6 py-4 text-sm font-medium">
//                       <button
//                         onClick={() => navigate(`/usersdetailes/${user._id}`)}
//                         className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none"
//                       >
//                         View
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default UsersList;






import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../axios/api';

function UsersList() {
  const [userlist, setUserList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const userdata = async () => {
      const res = await api.get('/admin/all');
      console.log('userdata', res.data);
      setUserList(res.data.users);
    };
    userdata();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6 lg:p-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Users List</h1>
        
        {/* Table Wrapper */}
        <div className="overflow-x-auto bg-white shadow-lg rounded-lg border border-gray-200">
          <table className="min-w-full table-auto text-left">
            <thead className="bg-blue-950 text-white">
              <tr>
                <th className="px-4 py-2 text-sm font-medium">Id</th>
                <th className="px-4 py-2 text-sm font-medium">Username</th>
                <th className="px-4 py-2 text-sm font-medium">Email</th>
                <th className="px-4 py-2 text-sm font-medium">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {userlist &&
                userlist.map((user) => (
                  <tr key={user._id} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-800">{user._id}</td>
                    <td className="px-4 py-3 text-sm text-gray-800">{user.username}</td>
                    <td className="px-4 py-3 text-sm text-gray-800">{user.email}</td>
                    <td className="px-4 py-3 text-sm">
                      <button
                        onClick={() => navigate(`/usersdetailes/${user._id}`)}
                        className="bg-blue-950 text-white px-4 py-2 rounded-md focus:outline-none"
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default UsersList;
