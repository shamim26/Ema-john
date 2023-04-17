import React, { useContext, useState } from "react";
import "./Login.css";
import google from "../../images/google.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../../provider/AuthProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const [show, setShow] = useState(false);
  const { signIn } = useContext(authContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Login</h1>
      <form onSubmit={handleLogin}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type={show ? "text" : "password"} name="password" required />
          <span onClick={() => setShow(!show)}>
            {show ? (
              <FontAwesomeIcon className="icon" icon={faEye} />
            ) : (
              <FontAwesomeIcon className="icon" icon={faEyeSlash} />
            )}
          </span>
        </div>
        <input type="submit" className="btn-submit" value="Login" />

        <p className="form-text">
          New to Ema-john?
          <Link to="/sign-up" style={{ color: "#FF9900" }}>
            {" "}
            Create New Account
          </Link>
        </p>

        <div className="divider">
          <hr className="line" />
          <span style={{ margin: "0 20px" }}>or</span>
          <hr className="line" />
        </div>
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

export default Login;
