import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Login = () => {
  let [token, setToken] = useState("");
  let [id, setId] = useState("");
  let [password, setPassword] = useState("");
  const history = useHistory();

  const loginSubmit = (e) => {
    e.preventDefault();
    var obj = { userId: id, password: password };
    console.log(obj);
    axios
      .post("http://127.0.0.1:8000/api/login", obj)
      .then((resp) => {
        var token = resp.data;
        console.log(token);

        var user = { userId: token.userid, access_token: token.token };
        localStorage.setItem("user", JSON.stringify(user));
        // console.log(localStorage.getItem('user'));
        history.push("/home");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div class="login-page">
      <div className="login-box">
        <div className="login-logo">
          <a href="../../index2.html">
            <b>Slack</b>LTE
          </a>
        </div>
        {/* /.login-logo */}
        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg">Sign in to start your session</p>
            <form onSubmit={loginSubmit}>
              <input
                type="hidden"
                name="_token"
                defaultValue="ml2LlcQzOoKpWLtpIOu88pSstP8OyAqxyRDZLIdH"
              />
              <div className="mb-2">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="UserID"
                    name="userId"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-envelope" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-2">
                <div className="input-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-8">
                  <div className="icheck-primary">
                    <input type="checkbox" id="remember" />
                    <label htmlFor="remember">Remember Me</label>
                  </div>
                </div>
                {/* /.col */}
                <div className="col-4">
                  <input
                    type="submit"
                    defaultValue="login"
                    className="btn btn-primary btn-block"
                  />
                  {/* <a href=" http://127.0.0.1:8000/dashboard " class="btn btn-primary btn-block"> Sign In</a> */}
                </div>
                {/* /.col */}
              </div>
            </form>
            <div className="social-auth-links text-center mb-3">
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
            {/* /.social-auth-links */}
            <p className="mb-1">
              <a href="forgot-password.html">I forgot my password</a>
            </p>
            <p className="mb-0">
              <Link to={"/register"} className="text-center">
                Register a new membership
              </Link>
            </p>
          </div>
          {/* /.login-card-body */}
        </div>
      </div>
      {/* /.login-box */}
      {/* jQuery */}
      {/* Bootstrap 4 */}
      {/* AdminLTE App */}
    </div>
  );
};

export default Login;
