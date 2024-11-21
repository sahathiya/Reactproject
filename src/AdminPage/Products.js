// import React, { useEffect, useState } from 'react';
// import {Form, Container, Row, Col, Table, Button } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './Products.css';

// const Products = () => {
//   const [products, setProducts] = useState([]);
//   const[filterproduct,setfilterproduct]=useState([])
//   const[allproducts,setallproducts]=useState('All')
//   const navigate = useNavigate();

  
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/Product'); 
//         setProducts(response.data);
//         setfilterproduct(response.data)
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };

//     fetchProducts();
//   }, []);
//   const handleCategory=(e)=>{
//     const allcategory=e.target.value
//     setallproducts(allcategory)
//     if(allcategory==='All'){
//       setfilterproduct(products)
//     }else{
//       const filteredcategory=products.filter((product)=>product.type===allcategory)
//       setfilterproduct(filteredcategory)
//     }
//   }

//   return (
//     <Container fluid className="p-4">
//       <Row>
//         {/* Column for spacing on the left */}
//         <Col md={2}></Col>

//         {/* Products Table */}
//         <Col md={8}>
//           <h1 className="list-head">Products List</h1>
//           <button
//             onClick={() => navigate('/add')}
//             className="text-end mb-4"
//             style={{ backgroundColor: 'purple', color: 'white', padding: '10px 15px', borderRadius: '5px' }}
//           >
//             Add New +
//           </button>
//           {/* Dropdown for category selection */}
//       <Form.Select aria-label="Select category" onChange={handleCategory} value={allproducts} style={{ width: '200px', marginBottom: '20px' }}>
//         <option value="All">All</option>
//         <option value="men">Men</option>
//         <option value="women">Women</option>
//       </Form.Select>

//           <Table striped bordered hover responsive className="table-right">
//             <thead>
//               <tr>
//                 <th>Id</th>
//                 <th>Image</th>
//                 <th>Name</th>
//                 <th>Category</th>
//                 <th>Price</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filterproduct.length > 0 ? (
//                 filterproduct.map((product) => (
//                   <tr key={product.id}>
//                     <td>{product.id}</td>
//                     <td>
//                       <img
//                         src={product.image}
//                         alt={product.name}
//                         style={{ width: '50px', height: '50px', objectFit: 'cover' }}
//                       />
//                     </td>
//                     <td>{product.name}</td>
//                     <td>{product.type}</td>
//                     <td>${product.price}</td>
//                     <td>
//                       <Button onClick={() => navigate(`/productdetailes/${product.id}`)} className="button-view">
//                         View
//                       </Button>
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="6" className="text-center">No Products Available</td>
//                 </tr>
//               )}
//             </tbody>
//           </Table>
//         </Col>

//         {/* Column for spacing on the right */}
//         <Col md={2}></Col>
//       </Row>
//     </Container>
//   );
// };

// export default Products;


// import React, { useEffect, useState } from 'react';
// import {Form, Container, Row, Col, Table, Button } from 'react-bootstrap';
// import { useNavigate, useParams } from 'react-router-dom';
// import axios from 'axios';
// import './Products.css';
// import api from '../axios/api';
// const Products = () => {
//   const [products, setProducts] = useState([]);
//   const[filterproduct,setfilterproduct]=useState([])
//   const[allproducts,setallproducts]=useState('All')
//   const navigate = useNavigate();
// const {category}=useParams()
  
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await api.get('/admin/products'); 
//         console.log("adminproducts",response);
        
//         setProducts(response.data.result);
//         // setfilterproduct(response.data.products)
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };

//     fetchProducts();
//   }, []);
//   const handleCategory=async()=>{
    

//     const response=await api.get(`/admin/productbyCategory/${category}`)
//     console.log("response",response);
//     setfilterproduct(response.data.products)
    
//   }

//   return (
//     <Container fluid className="p-4">
//       <Row>
//         {/* Column for spacing on the left */}
//         <Col md={2}></Col>

//         {/* Products Table */}
//         <Col md={8}>
//           <h1 className="list-head">Products List</h1>
//           <button
//             onClick={() => navigate('/add')}
//             className="text-end mb-4"
//             style={{ backgroundColor: 'purple', color: 'white', padding: '10px 15px', borderRadius: '5px' }}
//           >
//             Add New +
//           </button>
//           {/* Dropdown for category selection */}
//       <Form.Select aria-label="Select category"   style={{ width: '200px', marginBottom: '20px' }}>
//         <option value="All" onClick={()=>handleCategory()}>All</option>
//         <option value="men" onClick={()=>handleCategory()}>Men</option>
//         <option value="women" onClick={()=>handleCategory()}>Women</option>
//       </Form.Select>
    


      
  





//           <Table striped bordered hover responsive className="table-right">
//             <thead>
//               <tr>
//                 <th>Id</th>
//                 <th>Image</th>
//                 <th>Name</th>
//                 <th>Category</th>
//                 <th>Price</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {products.length > 0 ? (
//                 products.map((product) => (
//                   <tr key={product._id}>
//                     <td>{product._id}</td>
//                     <td>
//                       <img
//                         src={product.image}
//                         alt={product.name}
//                         style={{ width: '50px', height: '50px', objectFit: 'cover' }}
//                       />
//                     </td>
//                     <td>{product.name}</td>
//                     <td>{product.category}</td>
//                     <td>${product.price}</td>
//                     <td>
//                       <Button onClick={() => navigate(`/productdetailes/${product._id}`)} className="button-view">
//                         View
//                       </Button>
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="6" className="text-center">No Products Available</td>
//                 </tr>
//               )}
//             </tbody>
//           </Table>
//         </Col>

//         {/* Column for spacing on the right */}
//         <Col md={2}></Col>
//       </Row>
//     </Container>
//   );
// };

// export default Products;




// import React, { useEffect, useState } from 'react';
// import { Form, Container, Row, Col, Table, Button } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import api from '../axios/api';


// const Products = () => {
//   const [products, setProducts] = useState([]);
//   const [filterproduct, setFilterProduct] = useState([]);
//   const navigate = useNavigate();
 

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await api.get('/admin/products');
//         console.log('admin produ',response);
        
//         setProducts(response.data.result);
//         setFilterProduct(response.data.result); // Initialize filtered products with all products
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   const handleCategoryChange = async (event) => {
//     const selectedCategory = event.target.value;

//     if (selectedCategory === 'All') {
//       setFilterProduct(products); // Show all products
//     } else {
//       try {
//         const response = await api.get(`/admin/productbyCategory/${selectedCategory}`);
//         console.log('categoryproducts',response);
        
//         setFilterProduct(response.data.products); // Set filtered products
//       } catch (error) {
//         console.error('Error fetching category products:', error);
//       }
//     }
//   };

//   return (
//     <Container fluid className="p-4">
//       <Row>
//         {/* Column for spacing on the left */}
//         <Col md={2}></Col>

//         {/* Products Table */}
//         <Col md={8}>
//           <h1 className="list-head">Products List</h1>
//           <button
//             onClick={() => navigate('/add')}
//             className="text-end mb-4"
//             style={{ backgroundColor: 'purple', color: 'white', padding: '10px 15px', borderRadius: '5px' }}
//           >
//             Add New +
//           </button>

//           {/* Dropdown for category selection */}
//           <Form.Select
//             aria-label="Select category"
//             style={{ width: '200px', marginBottom: '20px' }}
//             onChange={handleCategoryChange} // Handle category change
//           >
//             <option value="All">All</option>
//             <option value="men">Men</option>
//             <option value="women">Women</option>
//           </Form.Select>

//           <Table striped bordered hover responsive className="table-right">
//             <thead>
//               <tr>
//                 <th>Id</th>
//                 <th>Image</th>
//                 <th>Name</th>
//                 <th>Category</th>
//                 <th>Price</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filterproduct.length > 0 ? (
//                 filterproduct.map((product) => (
//                   <tr key={product._id}>
//                     <td>{product._id}</td>
//                     <td>
//                       <img
//                         src={product.image}
//                         alt={product.name}
//                         style={{ width: '50px', height: '50px', objectFit: 'cover' }}
//                       />
//                     </td>
//                     <td>{product.name}</td>
//                     <td>{product.category}</td>
//                     <td>${product.price}</td>
//                     <td>
//                       <Button
//                         onClick={() => navigate(`/productdetailes/${product._id}`)}
//                         className="button-view"
//                       >
//                         View
//                       </Button>
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="6" className="text-center">
//                     No Products Available
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </Table>
//         </Col>

//         {/* Column for spacing on the right */}
//         <Col md={2}></Col>
//       </Row>
//     </Container>
//   );
// };

// export default Products;









import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../axios/api';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filterproduct, setFilterProduct] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get('/admin/products');
        const productList = response.data?.result || [];
        setProducts(productList);
        setFilterProduct(productList); // Initialize filtered products with all products
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleCategoryChange = async (event) => {
    const selectedCategory = event.target.value;

    if (selectedCategory === 'All') {
      
      setFilterProduct(products); // Show all products
    } else {
      try {
        const response = await api.get(`/admin/productbyCategory/${selectedCategory}`);
        const categoryProducts = response.data?.products || [];
        setFilterProduct(categoryProducts); // Set filtered products
      } catch (error) {
        console.error('Error fetching category products:', error);
      }
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Products List</h1>
          <button
            onClick={() => navigate('/add')}
            className="bg-blue-950 text-white px-4 py-2 rounded shadow"
          >
            Add New +
          </button>
        </div>

        {/* Dropdown for category selection */}
        <select
          className="mb-6 p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-950 focus:outline-none"
          onChange={handleCategoryChange}
        >
          <option value="All">All</option>
          <option value="men">Men</option>
          <option value="women">Women</option>
        </select>

        <div className="overflow-x-auto bg-white rounded-lg shadow">
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="bg-blue-950 text-white">
                <th className="py-3 px-6 text-left">Id</th>
                <th className="py-3 px-6 text-left">Image</th>
                <th className="py-3 px-6 text-left">Name</th>
                <th className="py-3 px-6 text-left">Category</th>
                <th className="py-3 px-6 text-left">Price</th>
                <th className="py-3 px-6 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {filterproduct.length > 0 ? (
                filterproduct.map((product) => (
                  <tr key={product._id} className="hover:bg-gray-100">
                    <td className="py-3 px-6">{product._id}</td>
                    <td className="py-3 px-6">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-16 h-16 rounded object-cover"
                      />
                    </td>
                    <td className="py-3 px-6">{product.name}</td>
                    <td className="py-3 px-6">{product.category}</td>
                    <td className="py-3 px-6">${product.price}</td>
                    <td className="py-3 px-6 text-center">
                      <button
                        onClick={() => navigate(`/productdetailes/${product._id}`)}
                        className="bg-blue-950 text-white px-4 py-2 rounded shadow"
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="6"
                    className="text-center py-6 text-gray-500 font-medium"
                  >
                    No Products Available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Products;
