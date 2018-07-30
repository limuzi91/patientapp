import React from "react";
import { Link } from "react-router-dom";

const Comment = props => {
  const comment = props.comment;

  return (
    <div className="panel panel-default">
      <div className="panel-body">
        <p style={{ marginTop: 15 }}>{comment.body}</p>
      </div>
      <div className="panel-footer flex-row justify-content-between">
        <div>
          <Link to={`/dashboard/settings`}>
            <img src={comment.image} className="avatar" alt="" />
          </Link>
          &nbsp;
          <Link to={`/dashboard/settings`}>{comment.author}</Link>
          &nbsp;
          <span className="text-muted">{comment.createAt}</span>
        </div>

        <div>
          <a
            style={{ lineHeight: "40px", marginRight: 10 }}
            href="javascript:void(0)"
          >
            <i className="fas fa-trash-alt" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Comment;
