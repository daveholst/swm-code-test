import React from "react";
import Paragraph from "./Paragraph";
import Figure from "./Figure";
import PullQuote from "./PullQuote";

// TODO intentions handler -- formatIntentions
function Article(props) {
  let key = 101;
  const blocksArray = props.blocks.map(function (block) {
    if (block.kind === "text") {
      key = key + 1;
      return <Paragraph key={key} {...block} />;
    } else if (block.kind === "image") {
      key = key + 1;
      return <Figure key={key} {...block} />;
    } else {
      key = key + 1;
      return <PullQuote key={key} {...block} />;
    }
  });
  return blocksArray;
}

export default Article;
