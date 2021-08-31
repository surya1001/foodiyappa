import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../actions/userActions";
import Error from "../components/Error";
import Loading from "../components/Loading";
import Message from "../components/Message";

const Signup = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const signupState = useSelector((state) => state.signup);
  const { loading, error, success } = signupState;

  const signup = (e) => {
    e.preventDefault();
    if (password !== confirmpassword) {
      alert("Password and confirm password does not match");
    } else {
      const user = { name, email, password };
      console.log(user);
      dispatch(signupUser(user));
      window.location.href = "/signin";
    }
  };
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-6 col-sm-8 shadow p-3 offset-md-3 offset-sm-2">
          {loading && <Loading />}
          {error && <Error error="User already Exists" />}
          {success && <Message message="User Signed Up" />}

          <h4 className="text-center">Signup</h4>
          <form onSubmit={signup}>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                placeholder="Enter Your Full Name"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                placeholder="Enter Email Address"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                placeholder="Enter Passwrod"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Confirm Password</label>
              <input
                type="password"
                placeholder="Enter Password Once Again"
                className="form-control"
                value={confirmpassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <div className="d-flex">
              <button type="submit" className="btn btn-primary w-100 mt-2">
                Signup
              </button>
            </div>
            <p className="text-center mt-3" style={{ fontSize: "1rem" }}>
              Already a Member? <a href="/signin">Click here to Signin</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
