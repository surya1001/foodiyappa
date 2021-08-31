import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/cartActions";

const Product = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  const addtocart = () => {
    dispatch(addToCart(product, quantity));
  };

  return (
    <>
      <div className="shadow rounded p-4 m-4 text-center">
        <div onClick={handleShow}>
          <h5>{product.name}</h5>
          <img
            src={product.image}
            alt={product.name}
            className="img-fluid"
            style={{ width: "200px", height: "200px" }}
          />
        </div>
        <div className="d-flex mt-2">
          <div className="w-100 d-flex">
            <p>
              <b className="">Qty &nbsp; </b>
            </p>
            <select
              style={{ border: "0.5px solid #999" }}
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            >
              {[...Array(5).keys()].map((num, index) => {
                return (
                  <option key={index} value={index + 1}>
                    {index + 1}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="w-100">
            <p>
              <b>Price:</b> &#x20B9; {product.price * quantity}
            </p>
          </div>
        </div>

        <div className="d-flex mt-2">
          <button
            onClick={addtocart}
            className="btn rounded w-100 bg-primary text-white"
          >
            Add To Cart
          </button>
        </div>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{product.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={product.image}
              className="img-fluid"
              style={{ width: "100%" }}
              alt="Pizza"
            />
            {product.description}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default Product;
