import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState([]);

  useEffect(() => {
    axios
      .get(`/project/${id}`)
      .then((resp) => {
        console.log(resp.data);
        setProject(resp.data);
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
                  <div className="col-12 col-sm-4">
                    <div className="info-box bg-success">
                      <div className="info-box-content">
                        <span className="info-box-text text-center text-white">
                          Estimated budget
                        </span>
                        <span className="info-box-number text-center text-white mb-0">
                          {project.budget}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-4">
                    <div className="info-box bg-danger">
                      <div className="info-box-content">
                        <span className="info-box-text text-center text-white">
                          Total amount spent
                        </span>
                        <span className="info-box-number text-center text-white mb-0">
                          {project.amountSpent}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-4">
                    <div className="info-box bg-warning">
                      <div className="info-box-content">
                        <span className="info-box-text text-center text-white">
                          Estimated project duration
                        </span>
                        <span className="info-box-number text-center text-white mb-0">
                          {project.deadline}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="row">
                  <div className="col-12">
                    <h4>Recent Activity</h4>
                    <div className="post clearfix">
                      <div className="user-block">
                        <img
                          className="img-circle img-bordered-sm"
                          src="../../dist/img/user7-128x128.jpg"
                          alt="User Image"
                        />
                        <span className="username">
                          <a href="#">Nazim Hasan</a>
                        </span>
                        <span className="description">
                          Commented on this project
                        </span>
                      </div>
                      <p>Budget is too low</p>
                      <p>
                        <a href="#" className="link-black text-sm">
                          <i className="fas fa-link mr-1" /> Demo File 2
                        </a>
                      </p>
                    </div>
                    <div className="post clearfix">
                      <div className="user-block">
                        <img
                          className="img-circle img-bordered-sm"
                          src="../../dist/img/user7-128x128.jpg"
                          alt="User Image"
                        />
                        <span className="username">
                          <a href="#">Nazim Hasan</a>
                        </span>
                        <span className="description">
                          Commented on this project
                        </span>
                      </div>
                      <p>Hi</p>
                      <p>
                        <a href="#" className="link-black text-sm">
                          <i className="fas fa-link mr-1" /> Demo File 2
                        </a>
                      </p>
                    </div>
                    <form
                      className="form-horizontal"
                      action="http://127.0.0.1:8000/commentSubmit"
                      method="post"
                    >
                      <input
                        type="hidden"
                        name="_token"
                        defaultValue="N5m2w84rM9zVaFLIXWqt1TJZFqzW1vbQTRpQFBe4"
                      />
                      <input
                        className="form-control form-control-sm"
                        type="text"
                        name="projectId"
                        defaultValue={4}
                        placeholder="Type a Project ID"
                        style={{ width: "0%" }}
                      />
                      <input
                        className="form-control form-control-sm"
                        type="text"
                        name="comment"
                        placeholder="Type a comment"
                      />
                      <input
                        type="submit"
                        defaultValue="submit"
                        className="btn-sm btn-success mt-2"
                      />
                    </form>
                  </div>
                </div> */}
              </div>
              <div className="col-12 col-md-12 col-lg-4 order-1 order-md-2">
                <div className="text-left mt-5 mb-3">
                  {/* <a href=" http://127.0.0.1:8000/addContribution" class="btn btn-sm btn-primary">Add files / Contribute</a> */}
                  <a href="#" className="btn btn-sm btn-primary">
                    Report contact
                  </a>
                </div>
                <h3 className="text-primary">
                  <i className="fas fa-paint-brush" /> {project.projectName}{" "}
                </h3>
                <p className="text-muted"> {project.projectDetails}</p>
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
                    <b className>{project.assignDate}</b>
                  </p>
                </div>
                <h5 className="mt-5 text-muted">Project files</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href className="btn-link text-secondary">
                      <i className="far fa-fw fa-file-word" />{" "}
                      Functional-requirements.docx
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

export default ProjectDetails;
