import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Home from "../Home/Home";
import ProjectDetails from "../ProjectDetails/ProjectDetails";

const Projects = () => {
  let { path, url } = useRouteMatch();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("/allProjects")
      .then((resp) => {
        console.log(resp.data);
        setProjects(resp.data);
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
              <h1>Projects</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active">Projects</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section className="content">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Projects</h3>
            <div className="card-tools">
              <button
                type="button"
                className="btn btn-tool"
                data-card-widget="collapse"
                title="Collapse"
              >
                <i className="fas fa-minus" />
              </button>
              <button
                type="button"
                className="btn btn-tool"
                data-card-widget="remove"
                title="Remove"
              >
                <i className="fas fa-times" />
              </button>
            </div>
          </div>
          <div className="card-body p-0">
            <table className="table table-striped projects">
              <thead>
                <tr>
                  <th style={{ width: "1%" }}>#</th>
                  <th style={{ width: "20%" }}>Project Name</th>
                  <th style={{ width: "30%" }}>Team Members</th>
                  <th>Project Progress</th>
                  <th style={{ width: "20%" }}>Project Details</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(projects).length !== 0 &&
                  projects.map((project) => (
                    <tr key={project.ProjectId}>
                      <td>{project.ProjectId}</td>
                      <td>
                        <a>{project.projectName}</a>
                        <br />
                        <small>{project.assignDate}</small>
                      </td>
                      <td>
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <img
                              alt="Avatar"
                              className="table-avatar"
                              src="../../dist/img/avatar.png"
                            />
                          </li>
                          <li className="list-inline-item">
                            <img
                              alt="Avatar"
                              className="table-avatar"
                              src="../../dist/img/avatar2.png"
                            />
                          </li>
                          <li className="list-inline-item">
                            <img
                              alt="Avatar"
                              className="table-avatar"
                              src="../../dist/img/avatar3.png"
                            />
                          </li>
                          <li className="list-inline-item">
                            <img
                              alt="Avatar"
                              className="table-avatar"
                              src="../../dist/img/avatar4.png"
                            />
                          </li>
                        </ul>
                      </td>
                      <td className="project_progress">
                        <div className="progress progress-sm">
                          <div
                            className="progress-bar bg-green"
                            role="progressbar"
                            aria-valuenow={57}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            style={{ width: "57%" }}
                          />
                        </div>
                        <small>57% Complete</small>
                      </td>
                      <td className="project-actions text-center">
                        <Link
                          to={`${url}/projectDetails/${project.ProjectId}`}
                          className="btn btn-primary btn-sm"
                          href="/projectDetails/4"
                        >
                          <i className="fas fa-folder"></i>
                          View Details
                        </Link>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <Switch></Switch>
    </div>
  );
};

export default Projects;
