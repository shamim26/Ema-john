import React, { useContext, useState } from "react";
import google from "../../images/google.svg";
import { Link } from "react-router-dom";
import { authContext } from "../../provider/AuthProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const SignUp = () => {
  const [error, setError] = useState("");
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  const { createUser } = useContext(authContext);

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;

    if (password !== confirm) {
      setError("Confirm password didn't matched! ");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const newUser = result.user;
        setError("");
        console.log(newUser);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Sign Up</h1>
      <form onSubmit={handleSignUp}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type={show1 ? "text" : "password"} name="password" required />
          <span onClick={() => setShow1(!show1)}>
            {show1 ? (
              <FontAwesomeIcon className="icon" icon={faEye} />
            ) : (
              <FontAwesomeIcon className="icon" icon={faEyeSlash} />
            )}
          </span>
        </div>
        <div className="form-control">
          <label htmlFor="confirm">Confirm Password</label>
          <input type={show2 ? "text" : "password"} name="confirm" required />
          <span onClick={() => setShow2(!show2)}>
            {show2 ? (
              <FontAwesomeIcon className="icon" icon={faEye} />
            ) : (
              <FontAwesomeIcon className="icon" icon={faEyeSlash} />
            )}
          </span>
          <small style={{ color: "red" }}>{error}</small>
        </div>
        <input type="submit" className="btn-submit" value="Sign Up" />

        <p className="form-text">
          Already have an account?{" "}
          <Link to="/login" style={{ color: "#FF9900" }}>
            Login{" "}
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

export default SignUp;
