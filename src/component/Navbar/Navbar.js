import React from 'react';
import NavItem from './NavItem';
import { Link } from "react-router-dom";


export default class Navbar extends React.Component {
  render() {
    const { items, link, textLogo, onLink} = this.props;
    const navItems = items.map(item => {
      return <NavItem
        link={link}
        text={item}
        onLink={()=>onLink(item)}
      />
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
