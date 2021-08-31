import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getallusers } from "../../actions/userActions";
import { deleteuser } from "../../actions/userActions";

import Loading from "../Loading";
import Error from "../Error";

const Users = () => {
  const dispatch = useDispatch();

  const userstate = useSelector((state) => state.getallUsers);
  const { loading, error, users } = userstate;

  useEffect(() => {
    dispatch(getallusers());
  }, [dispatch]);

  return (
    <div>
      <h4 className="mt-1 text-center bg-primary text-white p-2 w-100">
        Users
      </h4>

      {loading && <Loading />}
      {error && <Error error="Something went wrong" />}

      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Image</th>
            <th>Delete</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user) => {
              return (
                <tr>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <img
                      src={user.profile_pic}
                      style={{ width: "70px" }}
                      alt={user.name}
                      className="image-fluid"
                    />
                  </td>
                  <td>
                    <i
                      className="fa fa-trash text-danger"
                      onClick={() => dispatch(deleteuser(user._id))}
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

export default Users;
