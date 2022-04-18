import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
const VerifiyRegister = () => {
  let [OTP, setOTP] = useState("");
  const history = useHistory();
  const loginSubmit = (e) => {
    e.preventDefault();
    var object = { otp: OTP };
    axios
      .post("/verifyOTP", object)
      .then((resp) => {
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div class="login-page">
      <div className="login-box">
        <div className="login-logo">
          <a href="https://mail.google.com/mail/u/0/">
            <b>Confirm </b>OTP
          </a>
        </div>
        {/* /.login-logo */}
        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg">Please check your mail</p>
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
                    value={OTP}
                    onChange={(e) => setOTP(e.target.value)}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-envelope" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                {/* /.col */}
                <div className="">
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

            {/* /.login-card-body */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifiyRegister;
