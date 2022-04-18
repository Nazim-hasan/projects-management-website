import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useRouteMatch, useParams } from "react-router-dom";

const MyProfile = () => {
  var userID = JSON.parse(localStorage.getItem("user")).userId;
  const [userInfo, setUserInfo] = useState([]);
  let { path, url } = useRouteMatch();
  useEffect(() => {
    axios
      .get(`/getUserInfo/${userID}`)
      .then((resp) => {
        console.log(resp.data);
        setUserInfo(resp.data);
        // console.log(userInfo);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="content-wrapper" style={{ minHeight: "503.875px" }}>
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Profile</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href=".">Home</a>
                </li>
                <li className="breadcrumb-item active">User Profile</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <div
                className="card card-primary card-outline"
                style={{ marginBottom: 0 }}
              >
                <div className="card-body box-profile">
                  <div className="text-center">
                    <img
                      className="profile-user-img img-fluid img-circle"
                      src="../../dist/img/user1-128x128.jpg"
                      alt="User profile picture"
                    />
                  </div>
                  <h3 className="profile-username text-center">
                    {userInfo.userName}
                  </h3>
                  <p className="text-muted text-center">Developer</p>
                </div>
              </div>
              <div className="card card-primary">
                <div className="card-header">
                  <h3 className="card-title">About Me</h3>
                </div>
                <div className="card-body">
                  <strong>
                    <i className="fas fa-book mr-1" /> Education
                  </strong>
                  <p className="text-muted">{userInfo.education}</p>
                  <hr />
                  <strong>
                    <i className="fas fa-map-marker-alt mr-1" /> Location
                  </strong>
                  <p className="text-muted">{userInfo.address}</p>
                  <hr />
                  <strong>
                    <i className="fas fa-pencil-alt mr-1" /> Skills
                  </strong>
                  <p className="text-muted">
                    <span className="tag tag-danger">{userInfo.skills}</span>
                  </p>
                  <hr />
                  <strong>
                    <i className="far fa-file-alt mr-1" /> Contact no.
                  </strong>
                  <p className="text-muted">{userInfo.phone}</p>
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <div className="card">
                <div className="card-header p-2">
                  <ul className="nav nav-pills">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        href="#activity"
                        data-toggle="tab"
                      >
                        Activity
                      </a>
                    </li>
                    <li className="nav-item">
                      <Link
                        to={`${url}/MyProfileEdit`}
                        className="nav-link"
                        data-toggle="tab"
                      >
                        Settings
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="card-body">
                  <div className="tab-content">
                    <div className="active tab-pane" id="activity">
                      <div className="post">
                        <div className="user-block">
                          <img
                            className="img-circle img-bordered-sm"
                            src="../../dist/img/user1-128x128.jpg"
                            alt="user image"
                          />
                          <span className="username">
                            <a href="/myProfile">Nazim Hasan</a>
                          </span>
                          <span className="description">
                            Commented on a task
                          </span>
                        </div>
                        <p>Hi</p>
                        <p>
                          {/* <a href="." class="link-black text-sm mr-2"><i class="fas fa-share mr-1"></i> Share</a> */}
                          {/* <a href="." class="link-black text-sm"><i class="far fa-thumbs-up mr-1"></i> Like</a> */}
                          {/* <span class="float-right">
                           <a href="." class="link-black text-sm">
                           <i class="far fa-comments mr-1"></i> Comments (5)
                           </a>
                           </span> */}
                        </p>
                        {/* <input class="form-control form-control-sm" type="text" placeholder="Type a comment"> */}
                      </div>
                      <div className="post">
                        <div className="user-block">
                          <img
                            className="img-circle img-bordered-sm"
                            src="../../dist/img/user1-128x128.jpg"
                            alt="user image"
                          />
                          <span className="username">
                            <a href="/myProfile">Nazim Hasan</a>
                          </span>
                          <span className="description">
                            Commented on a task
                          </span>
                        </div>
                        <p>Budget is too low</p>
                        <p>
                          {/* <a href="." class="link-black text-sm mr-2"><i class="fas fa-share mr-1"></i> Share</a> */}
                          {/* <a href="." class="link-black text-sm"><i class="far fa-thumbs-up mr-1"></i> Like</a> */}
                          {/* <span class="float-right">
                           <a href="." class="link-black text-sm">
                           <i class="far fa-comments mr-1"></i> Comments (5)
                           </a>
                           </span> */}
                        </p>
                        {/* <input class="form-control form-control-sm" type="text" placeholder="Type a comment"> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyProfile;
