import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";

const Menu = () => {
  let { path, url } = useRouteMatch();
  var userID = JSON.parse(localStorage.getItem("user")).userId;
  // axios
  //   .get(`/getUserName/$userID`)
  //   .then((resp) => {
  //     var userName = resp.data;
  //     // console.log(userName);
  //     localStorage.setItem("userName", JSON.stringify(userName));
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  //   const [userName, setUserName] = useState([]);

  useEffect(() => {
    axios
      .get(`/getUserName/${userID}`)
      .then((resp) => {
        var userName = resp.data;
        localStorage.setItem("userName", JSON.stringify(userName));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userID]);

  return (
    <div>
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Brand Logo */}
        <a href="http://127.0.0.1:8000/dashboard" className="brand-link">
          <img
            src="https://adminlte.io/themes/v3/dist/img/AdminLTELogo.png"
            alt="AdminLTE Logo"
            className="brand-image img-circle elevation-3"
            style={{ opacity: ".8" }}
          />
          <span className="brand-text font-weight-light">Slack LTE</span>
        </a>
        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar user panel (optional) */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img
                src="../../dist/img/user1-128x128.jpg"
                className="img-circle elevation-2"
                alt="User Image"
              />
            </div>
            <div className="info">
              <a href="/myProfile" className="d-block">
                {JSON.parse(localStorage.getItem("userName"))}
              </a>
            </div>
          </div>
          {/* SidebarSearch Form */}
          <div className="form-inline">
            <div className="input-group" data-widget="sidebar-search">
              <input
                className="form-control form-control-sidebar"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <div className="input-group-append">
                <button className="btn btn-sidebar">
                  <i className="fas fa-search fa-fw" />
                </button>
              </div>
            </div>
            <div className="sidebar-search-results">
              <div className="list-group">
                <a href="#" className="list-group-item">
                  <div className="search-title">
                    <strong className="text-light" />N
                    <strong className="text-light" />o
                    <strong className="text-light" />{" "}
                    <strong className="text-light" />e
                    <strong className="text-light" />l
                    <strong className="text-light" />e
                    <strong className="text-light" />m
                    <strong className="text-light" />e
                    <strong className="text-light" />n
                    <strong className="text-light" />t
                    <strong className="text-light" />{" "}
                    <strong className="text-light" />f
                    <strong className="text-light" />o
                    <strong className="text-light" />u
                    <strong className="text-light" />n
                    <strong className="text-light" />d
                    <strong className="text-light" />!
                    <strong className="text-light" />
                  </div>
                  <div className="search-path" />
                </a>
              </div>
            </div>
          </div>
          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
              <li className="nav-item menu-open">
                <a href="#" className="nav-link active">
                  <i className="nav-icon fas fa-th" />
                  <p>
                    Menu
                    <i className="right fas fa-angle-left" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href={url} className="nav-link">
                      <i className="nav-icon fas fa-tachometer-alt" />
                      <p>Dashboard</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <Link to={`${url}/projects`} className="nav-link">
                      <i className="fas fa-folder nav-icon" />
                      <p>Projects Overview</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={`${url}/Tasks`} className="nav-link">
                      <i className="nav-icon fas fa-book" />
                      <p>My Tasks</p>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to={`${url}/Tasks`} className="nav-link">
                      <i className="nav-icon fas fa-columns" />
                      <p>Board</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={`${url}/MyProfile`} className="nav-link">
                      <i className="fas fa-cog nav-icon" />
                      <p>My Profile</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={`${url}/Tasks`} className="nav-link">
                      <i className="nav-icon far fa-calendar-alt" />
                      <p>Road map</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={`${url}/Chatting`} className="nav-link">
                      <i className="nav-icon nav-icon fas fa-edit" />
                      <p>Public Chat</p>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>
    </div>
  );
};

export default Menu;
