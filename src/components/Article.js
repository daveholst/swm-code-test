import React from "react";
import Paragraph from "./Paragraph";
import Figure from "./Figure";
import PullQuote from "./PullQuote";

// TODO intentions handler -- formatIntentions
function Article(props) {
  console.log(props.blocks);
  const blocksArray = props.blocks.map(function (block) {
    if (block.kind === "text") {
      return <Paragraph {...block} />;
    } else if (block.kind === "image") {
      return <Figure {...block} />;
    } else {
      return <PullQuote {...block} />;
    }
  });
  console.log(blocksArray);
  return blocksArray;
}

export default Article;
