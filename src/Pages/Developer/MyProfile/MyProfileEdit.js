import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useRouteMatch, useParams } from "react-router-dom";

const MyProfileEdit = () => {
  var userID = JSON.parse(localStorage.getItem("user")).userId;
  const [userInfo, setUserInfo] = useState([]);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    // var object = { data: data };
    // console.log(object);
    axios
      .post("/updateUserInfo", data)

      .then((resp) => {
        console.log(resp);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios
      .get(`/getUserInfo/${userID}`)
      .then((resp) => {
        // console.log(resp.data);
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
                <p>{userInfo.id}</p>
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
                      <Link
                        to={"/home/myProfile"}
                        className="nav-link"
                        href="#activity"
                        data-toggle="tab"
                      >
                        Activity
                      </Link>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        href="#settings"
                        data-toggle="tab"
                      >
                        Settings
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="card-body">
                  <div className="tab-content">
                    <div className="tab-pane" id="activity">
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
                    <div className="tab-pane active" id="settings">
                      {Object.keys(userInfo).length !== 0 && (
                        <form
                          onSubmit={handleSubmit(onSubmit)}
                          className="form-horizontal"
                        >
                          <div className="col-sm-10">
                            <input
                              value={userInfo.userId}
                              {...register("userId")}
                              className="form-control"
                              id="userId"
                              type="hidden"
                            />
                          </div>
                          {/* For Name React Hook From starts */}
                          <div className="form-group row">
                            <label
                              htmlFor="name"
                              className="col-sm-2 col-form-label"
                            >
                              Name
                            </label>
                            <div className="col-sm-10">
                              <input
                                value={userInfo.userName}
                                {...register("userName")}
                                className="form-control"
                                id="name"
                              />
                            </div>
                          </div>
                          {/* For Name React Hook From ends */}
                          {/* For Email React Hook From starts */}
                          <div className="form-group row">
                            <label
                              htmlFor="email"
                              className="col-sm-2 col-form-label"
                            >
                              Email
                            </label>
                            <div className="col-sm-10">
                              <input
                                defaultValue={userInfo.email}
                                {...register("email")}
                                className="form-control"
                              />
                            </div>
                          </div>
                          {/* For Email React Hook From ends */}

                          {/* For password React Hook From starts */}
                          <div className="form-group row">
                            <label
                              htmlFor="password"
                              className="col-sm-2 col-form-label"
                            >
                              Password
                            </label>
                            <div className="col-sm-10">
                              <input
                                defaultValue={userInfo.password}
                                {...register("password")}
                                className="form-control"
                              />
                            </div>
                          </div>
                          {/* For password React Hook From ends */}
                          {/* For Address React Hook From starts */}
                          <div className="form-group row">
                            <label
                              htmlFor="address"
                              className="col-sm-2 col-form-label"
                            >
                              Address
                            </label>
                            <div className="col-sm-10">
                              <input
                                defaultValue={userInfo.address}
                                {...register("address")}
                                className="form-control"
                              />
                            </div>
                          </div>
                          {/* For Address React Hook From ends */}
                          {/* For Phone React Hook From starts */}
                          <div className="form-group row">
                            <label
                              htmlFor="phone"
                              className="col-sm-2 col-form-label"
                            >
                              Phone
                            </label>
                            <div className="col-sm-10">
                              <input
                                defaultValue={userInfo.phone}
                                {...register("phone")}
                                className="form-control"
                              />
                            </div>
                          </div>
                          {/* For phone React Hook From ends */}
                          {/* For Education React Hook From starts */}
                          <div className="form-group row">
                            <label
                              htmlFor="education"
                              className="col-sm-2 col-form-label"
                            >
                              Education
                            </label>
                            <div className="col-sm-10">
                              <input
                                defaultValue={userInfo.education}
                                {...register("education")}
                                className="form-control"
                              />
                            </div>
                          </div>
                          {/* For education React Hook From ends */}
                          {/* For skills React Hook From starts */}
                          <div className="form-group row">
                            <label
                              htmlFor="skills"
                              className="col-sm-2 col-form-label"
                            >
                              Skills
                            </label>
                            <div className="col-sm-10">
                              <input
                                defaultValue={userInfo.skills}
                                {...register("skills")}
                                className="form-control"
                              />
                            </div>
                          </div>
                          {/* For phone React Hook From ends */}
                          <div className="form-group row">
                            <div className="offset-sm-2 col-sm-10">
                              <div className="checkbox">
                                <label>
                                  <input type="checkbox" /> I agree to the{" "}
                                  <a href=".">terms and conditions</a>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="form-group row">
                            <div className="offset-sm-2 col-sm-10">
                              <input type="submit" className="btn btn-danger" />
                            </div>
                          </div>

                          {/* <input type="submit" /> */}
                        </form>
                      )}

                      {/* <form
                        className="form-horizontal"
                        onClick={handleProfileUpdate}
                      >
                        <input
                          type="hidden"
                          name="_token"
                          defaultValue="rU2OEAl7vedV6K2rwIgbipNScnnnzO3m8xHwem7T"
                        />
                        <div className="form-group row">
                          <label
                            htmlFor="inputName"
                            className="col-sm-2 col-form-label"
                          >
                            Name
                          </label>
                          <div className="col-sm-10">
                            <input
                              type="text"
                              className="form-control"
                              id="inputName"
                              name="userName"
                              placeholder="Name"
                              defaultValue={userInfo.userName}
                              onChange={(e) => setName(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label
                            htmlFor="inputEmail"
                            className="col-sm-2 col-form-label"
                          >
                            Email
                          </label>
                          <div className="col-sm-10">
                            <input
                              type="email"
                              className="form-control"
                              id="inputEmail"
                              name="email"
                              placeholder="Email"
                              defaultValue={userInfo.email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label
                            htmlFor="inputName2"
                            className="col-sm-2 col-form-label"
                          >
                            Password
                          </label>
                          <div className="col-sm-10">
                            <input
                              type="password"
                              className="form-control"
                              id="inputName2"
                              name="password"
                              placeholder="Password"
                              defaultValue={userInfo.password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label
                            htmlFor="inputAddress"
                            className="col-sm-2 col-form-label"
                          >
                            Address
                          </label>
                          <div className="col-sm-10">
                            <input
                              type="text"
                              className="form-control"
                              id="inputAddress"
                              name="address"
                              placeholder="Address"
                              defaultValue={userInfo.address}
                              onChange={(e) => setAddress(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label
                            htmlFor="inputPhone"
                            className="col-sm-2 col-form-label"
                          >
                            Phone
                          </label>
                          <div className="col-sm-10">
                            <input
                              type="text"
                              className="form-control"
                              id="inputPhone"
                              name="phone"
                              placeholder="Phone"
                              defaultValue={userInfo.phone}
                              onChange={(e) => setPhone(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label
                            htmlFor="inputEducation"
                            className="col-sm-2 col-form-label"
                          >
                            Education
                          </label>
                          <div className="col-sm-10">
                            <input
                              type="text"
                              className="form-control"
                              id="inputEducation"
                              name="education"
                              placeholder="Education"
                              defaultValue={userInfo.education}
                              onChange={(e) => setEducation(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label
                            htmlFor="inputSkills"
                            className="col-sm-2 col-form-label"
                          >
                            Skills
                          </label>
                          <div className="col-sm-10">
                            <input
                              type="text"
                              className="form-control"
                              id="inputSkills"
                              name="skills"
                              placeholder="Skills"
                              defaultValue={userInfo.skills}
                              onChange={(e) => setSkill(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="form-group row">
                          <div className="offset-sm-2 col-sm-10">
                            <div className="checkbox">
                              <label>
                                <input type="checkbox" /> I agree to the{" "}
                                <a href=".">terms and conditions</a>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="form-group row">
                          <div className="offset-sm-2 col-sm-10">
                            <button type="submit" className="btn btn-danger">
                              Submit
                            </button>
                          </div>
                        </div>
                      </form> */}
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

export default MyProfileEdit;
