import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../actions/cartActions";
import Checkout from "../components/Checkout";

const Cart = () => {
  const dispatch = useDispatch();

  const cartState = useSelector((state) => state.cart);
  const cartItems = cartState.cartItems;

  const userState = useSelector((state) => state.signin);
  const { currentUser } = userState;
  useEffect(() => {
    if (!currentUser) {
      window.location.href = "/signin";
    }
  }, [currentUser]);

  const amount = cartItems
    .reduce((acc, item) => acc + item.quantity * item.price, 0)
    .toFixed(2);

  return (
    <div className="container mt-4">
      <h3>My Cart</h3>
      <div className="row">
        <div className="col-md-8">
          <ul className="list-group list-group-flush">
            {cartItems.map((item) => {
              return (
                <li className="list-group-item" key={item._id}>
                  <div className="row p-3">
                    <div className="col-2">
                      <img
                        src={item.image}
                        alt={item.name}
                        style={{ height: "60px", width: "60px" }}
                      />
                    </div>
                    <div className="col-1"></div>
                    <div className="col-7">
                      <p style={{ fontSize: "1rem" }}>{item.name}</p>

                      <p>
                        Quantity:
                        <i
                          className="fas fa-minus qtyBtn"
                          aria-hidden="true"
                          onClick={() =>
                            dispatch(addToCart(item, Number(item.quantity) - 1))
                          }
                        ></i>{" "}
                        {item.quantity}{" "}
                        <i
                          className="fas fa-plus qtyBtn"
                          aria-hidden="true"
                          onClick={() =>
                            dispatch(addToCart(item, Number(item.quantity) + 1))
                          }
                        ></i>
                      </p>

                      <p style={{}}>
                        Price: {item.quantity} * {item.price} ={" "}
                        {item.quantity * item.price}
                      </p>
                    </div>
                    <div className="col-2">
                      <p>
                        {" "}
                        <i
                          className="fas fa-trash text-danger mt-3"
                          onClick={() => dispatch(removeFromCart(item))}
                        ></i>{" "}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="col-md-4">
          <div className="card">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <h5 className="text-center">
                  Subtotal:&nbsp;
                  {cartItems.reduce(
                    (acc, item) => acc + Number(item.quantity),
                    0
                  )}{" "}
                  items
                </h5>
                <h4 className="text-center">
                  &#8377; {amount}
                  /-
                </h4>
              </li>
              <li className="list-group-item">
                <div className="d-flex ">
                  <div className="w-100" disabled={cartItems.length === 0}>
                    <Checkout amount={amount} />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
