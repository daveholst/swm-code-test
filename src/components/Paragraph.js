import React from "react";
import IntentionSplitter from "../utils/Intentions";

function Paragraph(props) {
  if (props.intentions.length > 0) {
    return <IntentionSplitter {...props} />;
  } else {
    return <p>{props.text}</p>;
  }
}

export default Paragraph;
