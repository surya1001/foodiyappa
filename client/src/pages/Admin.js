import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Switch, Route, Link } from "react-router-dom";
import Users from "../components/admin/Users";
import Orders from "../components/admin/Orders";
import Products from "../components/admin/Products";
import AddProduct from "../components/admin/AddProduct";
import EditProduct from "./EditProduct";

const Admin = () => {
  const userState = useSelector((state) => state.signin);
  const { currentUser } = userState;

  useEffect(() => {
    if (!currentUser.isAdmin) {
      window.location.href = "/";
    }
  });

  return (
    <>
      <div className="container">
        <h4 className="text-center m-3">Admin Panel</h4>
        <div className="row">
          <div className="col-sm-2 col-xs-2 list-group admin">
            <Link className="list-group-item active" to="/admin">
              Orders
            </Link>
            <Link className="list-group-item" to="/admin/products">
              Products
            </Link>
            <Link className="list-group-item" to="/admin/addProduct">
              Add New Product
            </Link>
            <Link className="list-group-item" to="/admin/users">
              Users
            </Link>
          </div>
          <div className="col-sm-10 col-xs-10 shadow rounded">
            <Switch>
              <Route path="/admin" exact>
                <Orders />
              </Route>
              <Route path="/admin/products">
                <Products />
              </Route>
              <Route path="/admin/addProduct">
                <AddProduct />
              </Route>
              <Route path="/admin/users">
                <Users />
              </Route>
              <Route path="/admin/edit/:id">
                <EditProduct />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
