import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Product from "../components/Product";
import { getAllProducts } from "../actions/productActions";
import Loading from "../components/Loading";
import Error from "../components/Error";

const Home = () => {
  const dispatch = useDispatch();
  const productsState = useSelector((state) => state.getAllProducts);
  const { loading, error, products } = productsState;

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <div className="contianer-fluid">
      <div className="row">
        <div className="banner">
          <div className="banner-content">
            <h1 className="text-white text-center">
              Fresh <span className="text-success">Meal</span> <br />
              for every <span style={{ color: "orangered" }}>Order</span>
            </h1>
            <p className="text-white banner-p-text">
              Enjoy the meals at foodiyappa which features high quality food
              which are freshly prepared as soon as you order and get delivered
              within no minutes. So you can enjoy your delicious food
              hassle-free
            </p>
            <button className="btn mt-3 banner-btn">Checkout Menu</button>{" "}
          </div>
        </div>

        <div className="display-content">
          <div className="row p-5">
            <div className="col-md-6 p-5">
              <p>Now never missout your hunger</p>
              <p></p>
            </div>
            <div className="col-md-6">
              <img
                src="https://cdn.pixabay.com/photo/2017/09/28/18/13/bread-2796393_960_720.jpg"
                className="img-fluid"
                alt="display-content-img"
              />
            </div>
          </div>
        </div>

        <div className="todays-deal">
          <h3 className="text-center mt-4">Todays Top Deal</h3>
          <div className="container">
            <div className="row">
              {loading ? (
                <Loading />
              ) : error ? (
                <Error error={error} />
              ) : (
                products.slice(0, 3).map((product) => {
                  return (
                    <div
                      key={product._id}
                      className="col-lg-4 col-md-6 col-xs-6"
                    >
                      <Product product={product} />
                    </div>
                  );
                })
              )}
            </div>
            <div className="text-center">
              <Link className="btn banner-btn mb-4" to="/products">
                All Meals
              </Link>
            </div>
          </div>
        </div>

        <div className="container services" id="services">
          <div className="steps shadow p-4 text-center">
            <h3>Features</h3>
            <div className="container">
              <div className="row g-md-5">
                <div className="col-md-4 steps-container">
                  <div className="row">
                    <div className="col-md-3">
                      <i className="fas fa-hamburger text-danger"></i>
                    </div>
                    <div className="col-md-9">
                      <h5>Fresh Foods</h5>
                      <p>
                        Enjoy the fresh meal prepared specially for you on every
                        order.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 shadow steps-container">
                  <div className="row">
                    <div className="col-md-3">
                      <i className="fas fa-biohazard text-success"></i>
                    </div>
                    <div className="col-md-9">
                      <h5>delicious Taste</h5>
                      <p>
                        Meals prepared at foodiyappa are preapred by top quality
                        cooks
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 steps-container">
                  <div className="row">
                    <div className="col-md-3">
                      <i className="fas fa-truck text-danger"></i>
                    </div>
                    <div className="col-md-9">
                      <h5>Fast Delivery</h5>
                      <p>
                        Freshly prepared dishes are delivered within no minutes
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
