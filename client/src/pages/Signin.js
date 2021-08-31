import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signinUser } from "../actions/userActions";
import Error from "../components/Error";
import Loading from "../components/Loading";

const Signin = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signinState = useSelector((state) => state.signin);
  const { loading, error } = signinState;
  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      window.location.href = "/";
    }
  }, []);

  const signin = (e) => {
    e.preventDefault();
    const user = { email, password };
    dispatch(signinUser(user));
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 col-sm-8 shadow p-3 offset-md-3 offset-sm-2">
          {loading && <Loading />}
          {error && <Error error="Invalid Email or Password" />}

          <h4 className="text-center">Signin</h4>
          <form onSubmit={signin}>
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

            <div className="d-flex">
              <button type="submit" className="btn btn-primary w-100 mt-2">
                Signin
              </button>
            </div>

            <p className="text-center mt-3" style={{ fontSize: "1rem" }}>
              New to Foodiyappa? <a href="/signup">Click here to Signup</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
