import React from 'react';
import NavItem from './NavItem';
import { Link } from "react-router-dom";


export default class Navbar extends React.Component {
  render() {
    const { items, onClick, textLogo} = this.props;
    const navItems = items.map(item => {
      return <NavItem text={item} onClick={onClick}/>
    }); 

    return (
      <nav>
        <div className="nav-wrapper white">
          <Link to="/" className="brand-logo">{textLogo}</Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {navItems}
          </ul>
        </div>
      </nav>
    )
  }
}
