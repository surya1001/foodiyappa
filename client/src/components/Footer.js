import React from "react";

const Footer = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-3 col-sm-6 px-4">
          <h5
            className="text-center"
            style={{
              color: "black",
              backgroundColor: "#fff",
              padding: "5px",
              borderRadius: "5px",
            }}
          >
            Foodiyappa
          </h5>
          <p>
            Foodiyappa is online food delivery app at an extra delicious price
          </p>
        </div>
        <div className="col-md-3 col-sm-6 footer-links">
          <h5
            className="text-center"
            style={{
              color: "black",
              backgroundColor: "#fff",
              padding: "5px",
              borderRadius: "5px",
            }}
          >
            Links
          </h5>
          <p>
            <a href="/">Home</a>
          </p>
          <p>
            <a href="/about">About</a>
          </p>
          <p>
            <a href="/services">Services</a>
          </p>
          <p>
            <a href="/cars">All Products</a>
          </p>
        </div>
        <div className="col-md-3 col-sm-6 text-center">
          <h5
            style={{
              color: "black",
              backgroundColor: "#fff",
              padding: "5px",
              borderRadius: "5px",
            }}
          >
            Social Links
          </h5>
          <a href="/">
            <i className="fab fa-facebook social-icons"></i>
          </a>
          <a href="/">
            <i className="fab fa-instagram social-icons"></i>
          </a>
          <a href="/">
            <i className="fab fa-twitter social-icons"></i>
          </a>
          <a href="/">
            <i className="fab fa-telegram social-icons"></i>
          </a>
        </div>
        <div className="col-md-3 col-sm-6">
          <h5
            className="text-center"
            style={{
              color: "black",
              backgroundColor: "#fff",
              padding: "5px",
              borderRadius: "5px",
            }}
          >
            Cantact Us
          </h5>
          <p>
            <i className="fas fa-mail-bulk text-primary footer-icons"></i>{" "}
            foodiyappa@help.com
          </p>
          <p>
            <i className="fas fa-phone text-primary footer-icons"></i> +91 2525
            2525
          </p>
        </div>
      </div>
      <div className="text-center">
        <p>Foodiyappa &copy; 2021</p>
      </div>
    </>
  );
};

export default Footer;
