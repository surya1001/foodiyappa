import React, { useEffect } from "react";
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
    <div className="container">
      <div className="row">
        {loading ? (
          <Loading />
        ) : error ? (
          <Error error={error} />
        ) : (
          products.map((product) => {
            return (
              <div key={product._id} className="col-lg-4 col-md-6 col-xs-6">
                <Product product={product} />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Home;
