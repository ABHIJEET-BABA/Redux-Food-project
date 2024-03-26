import React,{ useEffect, useState} from "react";
import {  DLT  } from '../redux/actions/action'
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Nav from 'react-bootstrap/Nav';
import Badge from "@mui/material/Badge";



import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import Menu from '@mui/material/Menu';
import { useDispatch, useSelector } from "react-redux";


const Header = () => {

 

  const [price, setPrice] =useState(0)
  const getData = useSelector((state)=>state.cartreducer.carts );
  console.log(getData)

  const dispatch = useDispatch()


 
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const dlt = (id)=>{
    dispatch( DLT(id))
  }

  const total = () => {
    let price = 0;
    getData.map((ele, k) => { 
        price = ele.price + price;
    });
    setPrice(price);
  }

  useEffect(()=>{
    total();
  },[total])



 
  return (
    <Navbar expand="lg" className="bg-dark">
      <Container>
        <NavLink to="/" className="text-light text-decoration-none mx-3 ">
          Add Cart{" "}
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/cards" className="text-light text-decoration-none mx-3">
              Home
            </NavLink>
            <NavLink to="/carddetails" className="text-light text-decoration-none">
              Link
            </NavLink>
          </Nav>
        </Navbar.Collapse>
        <Badge badgeContent={getData.length} color="primary"
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
         
        >
          <i
            class="fa-solid fa-cart-shopping"
            style={{ color: "white", fontSize: "20px" }}></i>
        </Badge>
      </Container>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
       
       
      


      >


       
         {
          getData.length ?
            <div className="card_details" style={{ width: "30rem", padding: 10 }}>
              <Table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Photo</th>
                    <th>RestaurantName</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    getData.map((e, index) => (
                      <tr key={index}>
                        <td>
                          <NavLink to={`/carddetails/${e.id}`}><img src={e.imgdata} style={{ width: "5rem", height: "5rem" }} alt=""  onClick={handleClick} /></NavLink>
                        </td>
                        <td>
                        <p>{e.rname}</p>
                        <p>price:₹{e.price}</p>
                        <p>quantity:₹{e.qnty}</p>
                        <p style={{color:"red","fontSize":20,cursor:"pointer"}} onClick={()=>dlt(e.id)}>
                          <i className="fas fa-trash smalltrash"></i>
                        </p>
                        </td>
                        <td className="mt-5" style={{color:"red",fontSize:20,cursor:"pointer"}} onClick={()=>dlt(e.id)}>
                         <i className="fas fa-trash largetrash"></i>
                        </td>

                        
                       

                      
                       
                      </tr>
                    ))
                  }
                  <p className="text-center">Total :₹{price}</p>
                </tbody>
              </Table>
            </div> :
            <div className="card_details d-flex justify-content-center align-items-center" style={{ width: "24rem", padding: 10, position: "relative" }}>
              <i className="fas fa-close smallclose" onClick={handleClick} style={{ position: "absolute", top: "2px", right: "20px", fontSize: "23px", cursor: "pointer" }} ></i>
              <p>Your cart is empty</p>
              <img src="./cart.gif" alt="" className="emptycart_img" style={{ width: "5rem" }} />
            </div>
        }
        
       
      
       
      </Menu>
     
    </Navbar>
  );
};

export default Header;
