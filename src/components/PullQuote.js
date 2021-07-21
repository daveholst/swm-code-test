import React from "react";

function PullQuote(props) {
  return (
    <figure className="figure-quote">
      <blockquote>{props.text}</blockquote>
      <figcaption>{props.attribution}</figcaption>
    </figure>
  );
}

export default PullQuote;
