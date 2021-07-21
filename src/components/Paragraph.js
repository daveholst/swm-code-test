import React from "react";
import IntentionSplitter from "../utils/Intentions";

function Paragraph(props) {
  if (props.intentions.length > 0) {
    return (
      <p>
        <IntentionSplitter {...props} />
      </p>
    );
  } else {
    return <p>{props.text}</p>;
  }
}

export default Paragraph;
