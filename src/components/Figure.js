import React from "react";

function figure(props) {
  return (
    <figure>
      <img src={props.url} alt={props.captionText} />
      <figcaption>{props.captionText}</figcaption>
    </figure>
  );
}

export default figure;
