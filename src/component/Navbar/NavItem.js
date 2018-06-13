import React from 'react';

export default class NavItem extends React.Component {
  render() {
    const {text, onClick} = this. props;
    return (
      <li><a onClick={()=>onClick(text)}>{text}</a></li>
    )
  }
}
