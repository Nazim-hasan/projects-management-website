import axios from "axios";
import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
const TaskDetails = () => {
  const { id } = useParams();
  const [task, setTask] = useState([]);

  useEffect(() => {
    axios
      .get(`/task/${id}`)
      .then((resp) => {
        console.log(resp.data);
        setTask(resp.data);
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
              <h1>Project Detail</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active">Project Detail</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section className="content">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Projects Detail</h3>
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
          <div className="card-body">
            <div className="row">
              <div className="col-12 col-md-12 col-lg-8 order-2 order-md-1">
                <div className="row">
                  <div className="col-12">
                    <h4>Task Instructions</h4>
                    <p>{task.taskDetails}</p>
                    <p>{task.solution}</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-12 col-lg-4 order-1 order-md-2">
                <div className="text-left mt-5 mb-3">
                  <a
                    href="/addContribution/2"
                    className="btn btn-sm btn-success"
                  >
                    Add files / Contribute
                  </a>
                  <a href="#" className="btn btn-sm btn-primary">
                    Report contact
                  </a>
                </div>
                <h3 className="text-primary">
                  <i className="fas fa-paint-brush" /> {task.TaskTitle}{" "}
                </h3>
                <br />
                <div className="text-muted">
                  <p className="text-sm">
                    Client Company
                    <b className="d-block">Deveint Inc</b>
                  </p>
                  <p className="text-sm">
                    Project Leader
                    <b className="d-block">Tony Chicken</b>
                  </p>
                  <p className="text-sm">
                    Assigned Date:
                    <b className> {task.assignDate} </b>
                  </p>
                </div>
                <h5 className="mt-5 text-muted">Project files</h5>
                <ul className="list-unstyled">
                  <li>
                    <a
                      href="/downloadContent/1647792882.png"
                      className="btn-link text-secondary"
                    >
                      <i className="far fa-fw fa-file-word" /> {task.solution}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TaskDetails;
