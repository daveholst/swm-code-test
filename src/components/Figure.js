import React from "react";

function figure(props) {
  return (
    <figure className="figure-image">
      <img src={props.url} alt={props.captionText} />
      <figcaption>{props.captionText}</figcaption>
    </figure>
  );
}

export default figure;
