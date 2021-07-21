import React from "react";
import IntentionSplitter from "../utils/Intentions";
// function

function Paragraph(props) {
  // TODO check intentiosn
  console.log(props);
  if (props.intentions.length > 0) {
    return <IntentionSplitter {...props} />;
  } else {
    return <p>{props.text}</p>;
  }
  // break up into an array of chars.
}

export default Paragraph;
