import React, { Component } from "react";

import classnames from "classnames";

import GoBack from "../common/GoBack";

class Login extends Component {
  state = {
    email: "",
    password: "",
    errors: {}
  };

  updateState = field => ev => {
    const state = this.state;
    const newState = Object.assign({}, state, { [field]: ev.target.value });

    this.setState(newState);
  };

  render() {
    const { errors } = this.state;
    return (
      <div>
        <div className="container">
          <div style={{ height: 50 }} />
          <div className="row">
            <div
              className="col-xs-10 col-xs-offset-1 col-md-6 col-md-offset-3"
              style={{ padding: 0 }}
            >
              <GoBack />
            </div>
          </div>
          <div className="row">
            <div
              className="col-xs-10 col-xs-offset-1 col-md-6 col-md-offset-3 border-shadow border-radius"
              style={{
                padding: 30,
                background: "white",
                border: "1px solid #ddd"
              }}
            >
              <h1 className=" text-center">Log In</h1>
              <p style={{ marginTop: 20 }} className="lead text-center">
                <small>
                  By clicking submit, you agree to the PatientApp{" "}
                  <a
                    style={{ color: "rgb(61, 90, 150)" }}
                    href="https://google.ca"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    User Agreement
                  </a>{" "}
                  and{" "}
                  <a
                    style={{ color: "rgb(61, 90, 150)" }}
                    href="https://google.ca"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Privacy Policy
                  </a>
                </small>
              </p>

              <form noValidate>
                <div className="form-group">
                  <label className="text-left">Email:</label>
                  <input
                    type="email"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.email
                    })}
                    placeholder="Email Address"
                    name="email"
                    value={this.state.email}
                    onChange={this.updateState("email")}
                  />
                  {errors.email && (
                    <p>
                      <small style={{ color: "red", marginTop: 0 }}>
                        {errors.email}
                      </small>
                    </p>
                  )}
                </div>
                <div className="form-group">
                  <label className="text-left">Password:</label>
                  <input
                    type="password"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.password
                    })}
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.updateState("password")}
                  />
                  {errors.password && (
                    <p>
                      <small style={{ color: "red", marginTop: 0 }}>
                        {errors.password}
                      </small>
                    </p>
                  )}
                </div>
                <input
                  type="button"
                  style={{ margin: "30px auto 20px auto" }}
                  value="Submit"
                  className="btn btn-success btn-lg btn-block "
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
