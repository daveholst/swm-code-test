import Parse from "html-react-parser";

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
      // tag start of string
      splitArray.splice(int.index, 0, "<strong>");
      additionalCharCount += 1;
      // tag end of strong
      splitArray.splice(int.index + int.length + additionalCharCount, 0, "</strong>");
      additionalCharCount += 1;
    }
  });
  //! parse seemed a better option that use innerHtmlDangerous! 🙉
  return Parse(splitArray.join(""));
}

export default IntentionSplitter;
