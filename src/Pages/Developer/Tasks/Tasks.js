import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Home from "../Home/Home";
import ProjectDetails from "../ProjectDetails/ProjectDetails";
const Task = () => {
  let { path, url } = useRouteMatch();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get("/myTasks")
      .then((resp) => {
        console.log(resp.data);
        setTasks(resp.data);
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
              <h1>Tasks</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active">Tasks</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section className="content">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Tasks</h3>
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
                  <th>#</th>
                  <th>Task Title</th>
                  <th>Solution File</th>
                  <th>View More</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(tasks).length !== 0 &&
                  tasks.map((task) => (
                    <tr key={task.id}>
                      <td>2</td>
                      <td>
                        <a>{task.TaskTitle}</a>
                        <br />
                      </td>
                      <td align>
                        <a href="/downloadContent/1647792882.png">
                          {task.solution}
                        </a>
                        <br />
                      </td>
                      <td className="project-actions text-center">
                        <Link
                          to={`${url}/taskDetails/${task.id}`}
                          className="btn btn-primary btn-sm"
                        >
                          <i className="fas fa-folder"></i>
                          View
                        </Link>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Task;
