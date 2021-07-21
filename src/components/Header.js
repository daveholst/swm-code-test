import React from "react";
import "../styles/header.css";

function Header(props) {
  const dateOptions = {
    dateStyle: "full",
    timeStyle: "short",
  };
  return (
    <header>
      <h1>{props.headline}</h1>
      <span className="byline">{props.byline}, </span>
      <span className="source">{props.source}</span>
      <br></br>
      <time>{new Date(props.publicationDate).toLocaleString("en-AU", dateOptions)} </time>
      <img src="./assets/plus.svg" alt="plus icon" height="13px"></img>
      <hr />
    </header>
  );
}

export default Header;
