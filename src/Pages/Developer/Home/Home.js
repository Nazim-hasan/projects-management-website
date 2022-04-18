import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import Dashboard from "../Dashboard/Dashboard/Dashboard";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Menu from "../../Shared/Menu/Menu";
import Projects from "../Projects/Projects";
import { useRouteMatch, useParams } from "react-router-dom";
import Tasks from "../Tasks/Tasks";
import MyProfile from "../MyProfile/MyProfile";
import ProjectDetails from "../ProjectDetails/ProjectDetails";
import TaskDetails from "../TaskDetails/TaskDetails";
import MyProfileEdit from "../MyProfile/MyProfileEdit";
import Chatting from "../Chatting/Chatting";

const Home = () => {
  let { path, url } = useRouteMatch();
  const { linkURL } = useParams();
  return (
    <div>
      <Header />
      <Menu />
      <Switch>
        <Route exact path={path}>
          <Dashboard />
        </Route>
        <Route exact path={`${path}/projects/projectDetails/:id`}>
          <ProjectDetails />
        </Route>
        <Route exact path={`${path}/Tasks/taskDetails/:id`}>
          <TaskDetails />
        </Route>
        <Route exact path={`${path}/MyProfile/MyProfileEdit`}>
          <MyProfileEdit />
        </Route>
        <Route exact path={`${path}/MyProfile/MyProfile`}>
          <MyProfile />
        </Route>
        {/* <Route path={`${path}/:topicId`}>
          <Test />
        </Route> */}
        <Route path={`${path}/projects`}>
          <Projects />
        </Route>
        <Route path={`${path}/tasks`}>
          <Tasks />
        </Route>
        <Route path={`${path}/MyProfile`}>
          <MyProfile />
        </Route>
        {/* <Route path={`${path}/Chatting`}>
          <Chatting />
        </Route> */}
        {/* <Route path={`${path}/MyProfileEdit`}>
          <MyProfileEdit />
        </Route> */}

        {/* <Route path={`${path}/projectDetails/:id`}>
          <ProjectDetails />
        </Route> */}
      </Switch>
      <Footer />
    </div>
  );
};

export default Home;
