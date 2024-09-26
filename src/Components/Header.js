


import React, { useState, useContext } from 'react';
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import './Header.css';
import { MyLogin } from '../useContext/Logincontext';
import { MyCart } from '../useContext/Cartcontext';

function Header() {

  const [searchQuery, setSearchQuery] = useState('');
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();
  const {products,current} = useContext(MyLogin);
  const{cart}=useContext(MyCart)
  const cartlength=cart.length
  const profile=current?current.username:"No user"

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();

      const query = searchQuery.toLowerCase();

      if (query === 'men') {
        navigate('/men');
      } else if (query === 'women') {
        navigate('/women');
      } else {
       
        const product = products.find(
          (product) => product.name.toLowerCase() === query
        );

        if (product) {
         
          navigate(`/collectiondetailes/${product.id}`);
        } else {
         
          navigate(`/search`);
        }
      }

      setExpanded(false); 
      setSearchQuery('');
    }
  };

  const handleNavLink = () => {
    setExpanded(false);
  };

  return (
    <Navbar expand="lg" className="navbar" expanded={expanded}>
      <Navbar.Brand href="/"><span style={{color:'purple',fontWeight:'bold',fontFamily:'sans-serif'}}>PLASHOE</span></Navbar.Brand>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        className="navbar-toggler"
        onClick={() => setExpanded(expanded ? false : true)}
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <NavLink to="/men" className="nav-link" onClick={handleNavLink}>
            MEN
          </NavLink>
          <NavLink to="/women" className="nav-link" onClick={handleNavLink}>
            WOMEN
          </NavLink>
          <NavLink to="/collection" className="nav-link" onClick={handleNavLink}>
            COLLECTION
          </NavLink>
          <NavLink to="/lookbook" className="nav-link" onClick={handleNavLink}>
            LOOKBOOK
          </NavLink>
          {/* <NavLink to="/sale" className="nav-link" onClick={handleNavLink}>
            SALE
          </NavLink>
          <NavLink to="/ourstory" className="nav-link" onClick={handleNavLink}>
            OURSTORY
          </NavLink>
          <NavLink to="/contact" className="nav-link" onClick={handleNavLink}>
            CONTACT
          </NavLink> */}
        </Nav>

        <Nav className="ms-auto d-flex align-items-center">
          <Form className="d-flex me-3">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleSearch}
            />
          </Form>
          { current&&<NavLink to="/cart" className="nav-link" onClick={handleNavLink}><i className="fas fa-shopping-cart">{cartlength>0? cartlength:0}</i>
          </NavLink>}
          <NavLink to="/login" className="nav-link" onClick={handleNavLink}>
            <i className="fas fa-user">{profile}</i>
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;

