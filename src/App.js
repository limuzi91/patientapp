import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./components/landingPage";
import DashboardPage from "./components/dashboardPage";
import PatientPage from "./components/patientPage";
import SignUp from "./components/authPage/SignUp";
import Login from "./components/authPage/Login";
import NotFoundPage from "./components/notFoundPage";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

class App extends Component {
  render() {
    const routes = (
      <Switch>
        <Route exact path="/" component={LandingPage} />

        <Route path="/dashboard/patient-list" component={DashboardPage} />
        <Route path="/dashboard/settings" component={DashboardPage} />

        <Route path="/patients/:patientname" component={PatientPage} />
        <Route path="/register" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route component={NotFoundPage} />
      </Switch>
    );
    return (
      <div>
        <Navbar />
        <div style={{ marginTop: 50 }} />
        <div style={{ minHeight: "80vh" }}>{routes}</div>

        <Footer />
      </div>
    );
  }
}

export default App;
