import React from "react";

function IntentionSplitter(props) {
  const intentionsArray = props.intentions;
  const splitArray = props.text.split("");
  let additionalCharCount = 0;

  // !assumes intentions is always in order from start of para to end!
  intentionsArray.forEach((int) => {
    if (int.kind === "emphasized") {
      // tag into start of emphasized
      splitArray.splice(int.index, 0, "<em>");
      additionalCharCount += 1;
      // tag end of emphasized
      splitArray.splice(int.index + int.length + additionalCharCount, 0, "</em>");
      additionalCharCount += 1;
    } else {
      splitArray.splice(int.index, 0, "<strong>");
      additionalCharCount += 1;
      splitArray.splice(int.index + int.length + additionalCharCount, 0, "</strong>");
      additionalCharCount += 1;
    }
  });

  console.log(splitArray);
  const htmlString = splitArray.join("");
  // const formattedParaString = formattedParagraphArray[0];
  // console.log(formattedParaString);
  return <p dangerouslySetInnerHTML={{ __html: htmlString }}></p>;
}

export default IntentionSplitter;
