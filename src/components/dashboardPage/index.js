import React, { Component } from "react";
import Settings from "./Settings";
import PatientList from "./PatientList";
//import Collapse from "react-bootstrap/lib/Collapse";

import { Route, NavLink } from "react-router-dom";

class Dashboard extends Component {
  state = {
    open: true
  };

  onToggle = () => {
    this.setState(prevState => ({ open: !prevState.open }));
  };

  openOverviewBox = () => {
    this.setState({
      open: true
    });
  };

  render() {
    return (
      <div style={{ marginTop: 80 }}>
        <section className="dashboard__main">
          <div className="container">
            <div className="row">
              <div className="col-sm-3">
                <div className="list-group">
                  <li
                    style={{
                      height: 54,
                      lineHeight: 2,
                      fontSize: 18,
                      fontWeight: 500
                    }}
                    className="list-group-item text-center"
                  >
                    DASHBOARD
                  </li>

                  <NavLink
                    to="/dashboard/patient-list"
                    exact
                    activeClassName="active"
                    className="list-group-item"
                  >
                    <span>
                      <i className="fas fa-list-ul" />&nbsp;&nbsp;Patients&nbsp;List
                    </span>
                  </NavLink>

                  <NavLink
                    to="/dashboard/settings"
                    exact
                    activeClassName="active"
                    className="list-group-item"
                  >
                    <span>
                      <i className="fas fa-cogs" />&nbsp;&nbsp;Settings
                    </span>
                  </NavLink>

                  <NavLink
                    to="/"
                    exact
                    activeClassName="active"
                    className="list-group-item"
                  >
                    <span>
                      <i className="fas fa-home" />&nbsp;&nbsp;Home&nbsp;Page
                    </span>
                  </NavLink>
                  <NavLink
                    to="/login"
                    exact
                    activeClassName="active"
                    className="list-group-item"
                  >
                    <span>
                      <i className="fas fa-sign-in-alt" />&nbsp;&nbsp;Login
                    </span>
                  </NavLink>
                  <NavLink
                    to="/register"
                    exact
                    activeClassName="active"
                    className="list-group-item"
                  >
                    <span>
                      <i className="fas fa-user-plus" />&nbsp;&nbsp;Sign&nbsp;Up
                    </span>
                  </NavLink>
                </div>
                <div
                  className="well border-shadow"
                  style={{ background: "white", border: "1px solid #ddd" }}
                >
                  <h6>Daily tasks completion</h6>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{ minWidth: "2em", width: "2%" }}
                    >
                      0%
                    </div>
                  </div>
                  <h6>Patients feedbacks completion</h6>
                  <div className="progress">
                    <div className="progress-bar" style={{ width: "60%" }}>
                      60%
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-9">
                {/*<div className="panel panel-default">
                  <div className="panel-heading flex-row align-items-center justify-content-between">
                    <h3 className="panel-title ">Website Overview</h3>
                    <button
                      onClick={this.onToggle}
                      className="btn btn-primary btn-outline"
                    >
                      {this.state.open ? "Toggle Me" : "Expand"}
                    </button>
                  </div>
                  <Collapse in={this.state.open}>
                    <div className="panel-body">
                      <div className="col-sm-6 col-md-3 col-xs-6">
                        <div
                          className="well dashboard__box bg-colorful "
                          style={{ minHeight: 170 }}
                        >
                          <h5>
                            <span>
                              <i
                                className="fa fa-user"
                                style={{ height: 14 }}
                              />
                            </span>
                          </h5>
                          <h5>User Page</h5>
                          <NavLink
                            to={`/user/${this.props.currentUser.username}`}
                            className="btn btn-inherit btn-outline"
                          >
                            View
                          </NavLink>
                        </div>
                        <NavLink
                          to="/dashboard/settings"
                          exact
                          activeClassName="active"
                          className="btn btn-success btn-block"
                          style={{ minHeight: 35, marginBottom: 15 }}
                        >
                          <span>
                            <i className="fa fa-edit" />&nbsp;
                          </span>Edit
                        </NavLink>
                      </div>

                      <div className="col-sm-6 col-md-3 col-xs-6">
                        <div
                          className="well dashboard__box bg-colorful "
                          style={{ minHeight: 170 }}
                        >
                          <h5>
                            <span>
                              <i className="fab fa-linkedin" />
                            </span>
                          </h5>
                          <h5>My LinkedInn Profile</h5>
                          <button
                            onClick={this.goToMyLinkedIn}
                            className="btn btn-inherit btn-outline"
                          >
                            View
                          </button>
                        </div>
                        <NavLink
                          to="/dashboard/profiledashboard"
                          exact
                          activeClassName="active"
                          className="btn btn-success btn-block"
                          style={{ minHeight: 35, marginBottom: 15 }}
                        >
                          <span>
                            <i className="fas fa-user-edit" />&nbsp;
                          </span>Create/Edit
                        </NavLink>
                      </div>

                      <div className="col-sm-6 col-md-3 col-xs-6">
                        <div
                          className="well dashboard__box bg-colorful "
                          style={{ minHeight: 170 }}
                        >
                          <h5>
                            <span>
                              <i className="fab fa-medium" />
                            </span>
                          </h5>
                          <h5>My Mediumm Articles</h5>
                          <NavLink
                            to={`/articles/${this.props.currentUser.username}`}
                            className="btn btn-inherit btn-outline"
                          >
                            View
                          </NavLink>
                        </div>
                        <NavLink
                          to="/dashboard/editor"
                          exact
                          activeClassName="active"
                          className="btn btn-success btn-block"
                          style={{ minHeight: 35, marginBottom: 15 }}
                        >
                          <span>
                            <i className="fas fa-file-medical" />&nbsp;
                          </span>Create Article
                        </NavLink>
                      </div>

                      <div className="col-sm-6 col-md-3 col-xs-6">
                        <div
                          className="well dashboard__box bg-colorful "
                          style={{ minHeight: 170 }}
                        >
                          <h5>
                            <span>
                              <i className="fab fa-meetup" />
                            </span>
                          </h5>
                          <h5>My MeetUpp Events</h5>
                          <NavLink
                            to={`/events/${this.props.currentUser.username}`}
                            className="btn btn-inherit btn-outline"
                          >
                            View
                          </NavLink>
                        </div>
                        <NavLink
                          to="/dashboard/create-event"
                          exact
                          activeClassName="active"
                          className="btn btn-success btn-block"
                          style={{ minHeight: 35, marginBottom: 15 }}
                        >
                          <span>
                            <i className="fas fa-plus" />&nbsp;
                          </span>Create Event
                        </NavLink>
                      </div>
                    </div>
                  </Collapse>
    </div>*/}

                <Route path="/dashboard/patient-list" component={PatientList} />
                <Route path="/dashboard/settings" component={Settings} />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Dashboard;
