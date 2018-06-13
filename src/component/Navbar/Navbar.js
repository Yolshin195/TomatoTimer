import React from 'react';
import NavItem from './NavItem';

export default class Navbar extends React.Component {
  render() {
    const { items, onClick, textLogo} = this.props;
    const navItems = items.map(item => {
      return <NavItem text={item} onClick={onClick}/>
    }); 

    return (
      <nav>
        <div className="nav-wrapper white">
          <a href="#" className="brand-logo">{textLogo}</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {navItems}
          </ul>
        </div>
      </nav>
    )
  }
}
