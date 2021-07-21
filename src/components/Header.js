import React from 'react';

function Header(props) {
  console.log();
  return (
    <header>
      <h1>{props.headline}</h1>
      <span>{props.byline}, </span><span>{props.source}</span>
      <br></br>
      <time>{new Date(props.publicationDate).toLocaleString()}</time>
      <hr />
    </header>
  )
}

export default Header;