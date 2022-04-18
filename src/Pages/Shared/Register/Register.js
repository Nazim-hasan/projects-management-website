import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
const Register = () => {
  let [id, setId] = useState("");
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [confirmPassword, setConfirmPassword] = useState("");
  let [agreeTerm, setAgreeTerm] = useState("");
  const history = useHistory();

  const registerSubmit = (e) => {
    e.preventDefault();
    var obj = { id: id, name: name, email: email, password: password };
    console.log(obj);
    axios
      .post("http://127.0.0.1:8000/api/register", obj)
      .then((resp) => {
        if (resp) {
          var object = { email: email };
          axios
            .post("http://127.0.0.1:8000/api/website", object)
            .then((response) => {
              console.log(response);
            });
        }
        console.log(resp);
        alert("An email is sent to your mail");
        history.push(`/verify/${email}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="register-page">
      <div className="register-box">
        <div className="register-logo">
          <a href="../../index2.html">
            <b>Slack</b>LTE
          </a>
        </div>
        <div className="card">
          <div className="card-body register-card-body">
            <p className="login-box-msg">Register a new membership</p>
            <form onSubmit={registerSubmit}>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="id"
                  placeholder="User ID"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-user" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-user" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  name="confirmPassword"
                  placeholder="Retype password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-8">
                  <div className="icheck-primary">
                    <input
                      type="checkbox"
                      id="agreeTerms"
                      name="terms"
                      defaultValue="agree"
                      value={agreeTerm}
                      onChange={(e) => setAgreeTerm(e.target.value)}
                    />
                    <label htmlFor="agreeTerms">
                      I agree to the <a href="#">terms</a>
                    </label>
                  </div>
                </div>
                {/* /.col */}
                <div className="col-4">
                  <button type="submit" className="btn btn-primary btn-block">
                    Register
                  </button>
                </div>
                {/* /.col */}
              </div>
            </form>
            <div className="social-auth-links text-center">
              <p>- OR -</p>
              <a
                className="btn btn-block btn-primary"
                href="/auth/github/redirect"
              >
                <i className="fab fa-github mr-2" /> Sign in using GitHub
              </a>
              <a
                href="/auth/google/redirect"
                className="btn btn-block btn-danger"
              >
                <i className="fab fa-google-plus mr-2" /> Sign in using Google+
              </a>
            </div>
            <Link to={"/"} className="text-center">
              I already have a membership
            </Link>
          </div>
          {/* /.form-box */}
        </div>
        {/* /.card */}
      </div>
    </div>
  );
};

export default Register;
