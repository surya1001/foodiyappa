import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../actions/productActions";

import Error from "../Error";
import Loading from "../Loading";
import Message from "../Message";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const dispatch = useDispatch();
  const addproductstate = useSelector((state) => state.addProduct);
  const { loading, error, success } = addproductstate;

  const submitHandler = (e) => {
    e.preventDefault();
    const product = { name, image, description, price, category };
    console.log(product);
    dispatch(addProduct(product));
  };

  return (
    <div>
      <h4 className="mt-1 text-center bg-primary text-white p-2 w-100">
        Add New Product
      </h4>
      <div className="container mb-3">
        {loading && <Loading />}
        {error && <Error error="Something went wrong" />}
        {success && <Message message="Product Added Successfully" />}

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
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
