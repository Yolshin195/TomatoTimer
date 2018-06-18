import React from 'react';
import { Link } from "react-router-dom";

export default class NavItem extends React.Component {
  render() {
    const {text, onClick} = this. props;
    return (
      <li><Link to={`/${text}`}>{text}</Link></li>
    )
  }
}
