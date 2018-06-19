import React from 'react';
import { Link } from "react-router-dom";

export default class NavItem extends React.Component {
  render() {
    const {text, link, onLink} = this.props;
    console.log(text);
    return (
      <li onClick={onLink}>
        <Link to={link}>{text}</Link>
      </li>
    )
  }
}
