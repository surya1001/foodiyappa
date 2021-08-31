import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../Loading";
import Error from "../Error";
import { getAllProducts, deleteProduct } from "../../actions/productActions";

const Products = () => {
  const dispatch = useDispatch();
  const productstate = useSelector((state) => state.getAllProducts);
  const { loading, error, products } = productstate;

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <div>
      <h4 className="mt-1 text-center bg-primary text-white p-2 w-100">
        All Products
      </h4>
      {loading && <Loading />}
      {error && <Error error="Something went wrong" />}

      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products &&
            products.map((product) => {
              return (
                <tr key={product._id}>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.category}</td>
                  <td>
                    <Link to={`/admin/edit/${product._id}`}>
                      <i className="fa fa-edit text-success me-2"></i>
                    </Link>
                    <i
                      className="fa fa-trash text-danger"
                      onClick={() => dispatch(deleteProduct(product._id))}
                    ></i>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
