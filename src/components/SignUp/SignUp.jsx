import React from "react";
import google from "../../images/google.svg";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="form-container">
      <h1 className="form-title">Sign Up</h1>
      <form>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Confirm Password</label>
          <input type="password" name="confirm" required />
        </div>
        <input type="submit" className="btn-submit" value="Sign Up" />

        <p className="form-text">
          Already have an account?{" "}
          <Link to="/login" style={{ color: "#FF9900" }}>
            Login{" "}
          </Link>
        </p>

        <p className="divider">
          <hr className="line" />
          <span style={{ margin: "0 20px" }}>or</span>
          <hr className="line" />
        </p>
        <button className="btn-google">
          <img
            style={{
              display: "inline",
              verticalAlign: "middle",
              marginRight: "5px",
            }}
            src={google}
            alt=""
          />{" "}
          Continue with Google
        </button>
      </form>
    </div>
  );
};

export default SignUp;
