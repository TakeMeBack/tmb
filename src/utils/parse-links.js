import React from 'react';
import Link from 'redux-first-router-link';

export default str => {
  const strs = [];
  const links = [];
  const traverseLinks = text => {
    let splitText = text.split("<Link to='");
    if (splitText.length < 2) {
      strs.push(text)
      return
    };
    strs.push(splitText[0]);
    splitText = splitText.slice(1).join("<Link to='").split("'>");
    let linkTo = splitText[0];
    splitText = splitText.slice(1).join("'>").split("</Link>");
    let linkText = splitText[0];
    links.push({
      linkTo,
      linkText
    });
    return traverseLinks(splitText.slice(1).join("</Link>"));
  }

  traverseLinks(str);
  return strs.reduce((a,c,i)=>{
    a.push(c);
    if (links[i]){
      a.push(<Link to={links[i].linkTo} key={i}>{links[i].linkText}</Link>)
    }
    return a
  }, []);
}