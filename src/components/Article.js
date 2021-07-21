import React from "react";
import Paragraph from "./Paragraph";

// TODO intentions handler -- formatIntentions
function Article(props) {
  console.log(props.blocks);
  const blocksArray = props.blocks.map(function (block) {
    if (block.kind === "text") {
      return <Paragraph text={block.text} />;
    } else {
      return <p>test</p>;
    }
  });
  console.log(blocksArray);
  return blocksArray;
}

export default Article;
