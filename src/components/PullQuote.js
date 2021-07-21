import React from "react";
import "../styles/pullQuote.css";
function PullQuote(props) {
  return (
    <figure className="figure-quote">
      <blockquote>{props.text}</blockquote>
      <figcaption>{props.attribution}</figcaption>
    </figure>
  );
}

export default PullQuote;
