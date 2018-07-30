import React, { Component, Fragment } from "react";
import { NavLink, withRouter, Link } from "react-router-dom";

import classnames from "classnames";

class Header extends Component {
  state = {
    open: false
  };
  toggleNavbar = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  };
  closeNav = () => {
    this.setState({ open: false });
  };

  onGoToDashboard = () => {
    this.props.history.push("/dashboard");
    this.setState({ open: false });
  };

  render() {
    const guestLink = (
      <Fragment>
        <Link
          to="/login"
          className=" btn btn-outline btn-inherit  navbar-right navbar-btn "
        >
          Log in
        </Link>

        <Link
          to="/register"
          className="btn btn-outline btn-inherit   navbar-right  navbar-btn"
        >
          Sign up
        </Link>
      </Fragment>
    );

    return (
      <nav className="navbar navbar-default navbar-fixed-top  ">
        <div className="container">
          <div className="navbar-header">
            <button
              onClick={this.toggleNavbar}
              type="button"
              style={{
                minWidth: 44,
                fontSize: 20,
                padding: "3px 5px"
              }}
              className="navbar-toggle collapsed btn-inherit"
            >
              <span className="sr-only">Toggle navigation</span>
              {this.state.open ? (
                <i className="fas fa-times" />
              ) : (
                <i className="fas fa-bars" />
              )}
            </button>
            <NavLink className="navbar-brand" to="/" activeClassName="active">
              <i className="fab fa-app-store-ios" />&nbsp;&nbsp;Patient&nbsp;App
            </NavLink>
          </div>

          <div
            className={classnames({
              "collapse navbar-collapse": !this.state.open
            })}
          >
            <ul className="nav navbar-nav">
              <li>
                <NavLink
                  className="navbar-item--rightsilverline navbar-item--leftsilverline"
                  activeClassName="active"
                  to="/dashboard/patient-list"
                  onClick={this.closeNav}
                >
                  Dashboard
                </NavLink>
              </li>
            </ul>

            {guestLink}
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(Header);
