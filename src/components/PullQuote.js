import React from "react";
import "../styles/pullQuote.css";
function PullQuote(props) {
  return (
    <figure className="figure-quote">
      <blockquote>{props.text}</blockquote>
      <figcaption className="quote-caption">{props.attribution}</figcaption>
    </figure>
  );
}

export default PullQuote;
