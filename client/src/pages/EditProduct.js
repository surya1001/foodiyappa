import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getProductById, updateProduct } from "../actions/productActions";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Message from "../components/Message";

const EditProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const getproductbyidstate = useSelector((state) => state.getProductById);
  const updateproductstate = useSelector((state) => state.updateProduct);
  const { loading, error, product } = getproductbyidstate;
  const { updateloading, updateerror, updatesuccess } = updateproductstate;

  useEffect(() => {
    if (product) {
      setName(product.name);
      setPrice(product.price);
      setCategory(product.category);
      setDescription(product.description);
      setImage(product.image);
    } else {
      dispatch(getProductById(id));
    }
  }, [product, id, dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();

    const updatedproduct = {
      _id: id,
      name,
      image,
      description,
      price,
      category,
    };
    console.log(product);

    dispatch(updateProduct(updatedproduct));
  };

  return (
    <div>
      <h4 className="mt-1 text-center bg-primary text-white p-2 w-100">
        Edit Product
      </h4>
      {loading && <Loading />}
      {error && <Error error="Something went wrong" />}

      {updateloading && <Loading />}
      {updateerror && <Error error="Something went wrong" />}
      {updatesuccess && <Message message="Product Details Updated" />}
      <div className="row">
        <div className="col-md-6 col-sm-8 shadow p-3 offset-md-3 offset-sm-2">
          <form onSubmit={submitHandler}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                placeholder="Enter Product Name"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Price</label>
              <input
                type="text"
                placeholder="Enter Product Price"
                className="form-control"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Category</label>
              <input
                type="text"
                placeholder="Enter Product Category"
                className="form-control"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Product Description</label>
              <input
                type="text"
                placeholder="Enter Product Description"
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Product Image</label>
              <input
                type="text"
                placeholder="Enter Product Image"
                className="form-control"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                required
              />
            </div>

            <div className="d-flex">
              <button type="submit" className="btn btn-primary w-100 mt-2">
                Edit Product Details
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
