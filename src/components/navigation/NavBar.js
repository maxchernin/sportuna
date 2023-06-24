// NavBar.js
import React from 'react';
import NavItem from './NavItem';
import MegaMenu from './MegaMenu';
import SubMenu from './SubMenu';

function NavBar() {
  return (
    <div className='container'>
      <div class="kode_logo_bar">
        <div class="logo">
          <a href="#">
            <img src="images/logo.png" alt=""></img>
          </a>
        </div>
        <div className="kode_navigation">
        <ul className="nav">
          <NavItem label="home" link="index.html" />
          <NavItem label="Fixtures & Results" link="#">
            <SubMenu>
              <NavItem label="latest result" link="latest-result.html" />
              <NavItem label="teamschedule" link="team-schedule.html" />
            </SubMenu>
          </NavItem>
          <NavItem label="team" link="#">
            <SubMenu>
              <NavItem label="team overview" link="team-overview.html" />
              <NavItem label="team roster" link="team-roster.html" />
              {/* More NavItems... */}
            </SubMenu>
          </NavItem>
          {/* More NavItems... */}
          <NavItem label="mega menu" link="#">
            <MegaMenu>
              {/* Your MegaMenu content goes here */}
            </MegaMenu>
          </NavItem>
        </ul>
      </div>
      </div>
      
    </div>
  );
}

export default NavBar;
