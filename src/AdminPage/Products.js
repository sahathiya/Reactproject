import React, { useEffect, useState } from 'react';
import {Form, Container, Row, Col, Table, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Products.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const[filterproduct,setfilterproduct]=useState([])
  const[allproducts,setallproducts]=useState('All')
  const navigate = useNavigate();

  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/Product'); 
        setProducts(response.data);
        setfilterproduct(response.data)
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);
  const handleCategory=(e)=>{
    const allcategory=e.target.value
    setallproducts(allcategory)
    if(allcategory==='All'){
      setfilterproduct(products)
    }else{
      const filteredcategory=products.filter((product)=>product.type===allcategory)
      setfilterproduct(filteredcategory)
    }
  }

  return (
    <Container fluid className="p-4">
      <Row>
        {/* Column for spacing on the left */}
        <Col md={2}></Col>

        {/* Products Table */}
        <Col md={8}>
          <h1 className="list-head">Products List</h1>
          <button
            onClick={() => navigate('/add')}
            className="text-end mb-4"
            style={{ backgroundColor: 'purple', color: 'white', padding: '10px 15px', borderRadius: '5px' }}
          >
            Add New +
          </button>
          {/* Dropdown for category selection */}
      <Form.Select aria-label="Select category" onChange={handleCategory} value={allproducts} style={{ width: '200px', marginBottom: '20px' }}>
        <option value="All">All</option>
        <option value="men">Men</option>
        <option value="women">Women</option>
      </Form.Select>

          <Table striped bordered hover responsive className="table-right">
            <thead>
              <tr>
                <th>Id</th>
                <th>Image</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filterproduct.length > 0 ? (
                filterproduct.map((product) => (
                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>
                      <img
                        src={product.image}
                        alt={product.name}
                        style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                      />
                    </td>
                    <td>{product.name}</td>
                    <td>{product.type}</td>
                    <td>${product.price}</td>
                    <td>
                      <Button onClick={() => navigate(`/productdetailes/${product.id}`)} className="button-view">
                        View
                      </Button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center">No Products Available</td>
                </tr>
              )}
            </tbody>
          </Table>
        </Col>

        {/* Column for spacing on the right */}
        <Col md={2}></Col>
      </Row>
    </Container>
  );
};

export default Products;
