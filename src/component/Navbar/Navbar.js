import React from 'react';
import NavItem from './NavItem';
import { Link } from "react-router-dom";


export default class Navbar extends React.Component {
  render() {
    const { items, link, textLogo, onLink} = this.props;
    const navItems = items.map(item => {
      const url = (link === item)? '/': item;
      console.log(link, item, url);
      return <NavItem
        link={url}
        text={item}
        onLink={()=>onLink(url)}
      />
    }); 

    return (
      <nav>
        <div className="nav-wrapper white">
          <Link onClick={()=>onLink('/')} to="/" className="brand-logo">{textLogo}</Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {navItems}
          </ul>
        </div>
      </nav>
    )
  }
}
