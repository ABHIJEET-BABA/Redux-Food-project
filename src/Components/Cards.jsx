import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Cardsdata from "./CardData";
import "./style.css"
import { useDispatch } from "react-redux";
import {ADD} from '../redux/actions/action'

const Cards = () => {
  const [data, setData] = useState(Cardsdata);
  const dispatch = useDispatch(Cardsdata);
  const send = (e)=>{
   dispatch(ADD(e))

  }

  return (
    <div className="container mt-3">
      <h2 className="text-center">Add item</h2>
      <div className="row">
        {data.map((element, id) => {
          return (
            <>
              <Card style={{ width: "22rem" ,border:"none" }} className="mx-4 mt-4 card_style">
                <Card.Img variant="top" className="my-4" src={element.imgdata} style={{height:"16rem"}} />
                <Card.Body>
                  <Card.Title>{element.rname}</Card.Title>
                  <Card.Text>
                    price:₹{element.price}
                  </Card.Text>
                  <div className="button_div d-flex justify-content-center">
                   <Button onClick={()=>send(element)} variant="primary" className="col-lg-12">Add to cart</Button>

                  </div>
                  
                </Card.Body>
              </Card>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
