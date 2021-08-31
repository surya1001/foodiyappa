import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { signoutUser } from "../actions/userActions";

const Header = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cart);
  const userState = useSelector((state) => state.signin);

  const { currentUser } = userState;

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand" href="/">
            Foodiyappa
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>

              {currentUser ? (
                <>
                  {currentUser.isAdmin ? (
                    <li className="nav-item">
                      <a className="nav-link" href="/admin">
                        Admin Panel
                      </a>
                    </li>
                  ) : (
                    ""
                  )}
                  <li className="nav-item">
                    <a className="nav-link" href="/orders">
                      My Orders
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="/"
                      onClick={() => dispatch(signoutUser())}
                    >
                      Signout
                    </a>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <a className="nav-link" href="/signin">
                      Signin
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/signup">
                      Signup
                    </a>
                  </li>
                </>
              )}

              <div className="nav-item">
                <a href="/cart" className="nav-link">
                  Cart ({cartState.cartItems.length})
                </a>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
