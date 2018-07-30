import React, { Component } from "react";
import Dialog from "material-ui/Dialog";

const withEnlargeImage = WrappedComponent =>
  class extends React.Component {
    state = {
      open: false,
      image: null
    };

    enlargeImg = image => {
      this.setState({ image, open: true });
    };

    handleClose = () => {
      this.setState({ open: false });
    };

    render() {
      const { imageMinWidth, dialogWidth, dialogMaxWidth } = this.props;
      const actions = [
        <button
          className="btn btn-success"
          style={{ marginRight: 20, marginBottom: 10 }}
          onClick={this.handleClose}
        >
          Close
        </button>
      ];

      return (
        <div>
          <WrappedComponent {...this.props} enlargeImg={this.enlargeImg} />
          <Dialog
            actions={actions}
            modal={false}
            open={this.state.open}
            className="dialog-override"
            onRequestClose={this.handleClose}
            contentStyle={{
              width: dialogWidth,
              minHeight: 400,
              maxWidth: dialogMaxWidth
            }}
          >
            <img
              src={this.state.image}
              alt=""
              style={{ minWidth: imageMinWidth }}
              className="img-responsive center-block "
            />
          </Dialog>
        </div>
      );
    }
  };

export default withEnlargeImage;
