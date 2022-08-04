import React from "react";

const Header = () => {
  return (
    <header datatype="grid" data-header className="navigate">
    <nav className="nav">           
      <div className="" id="" role="button" tabindex="0">
         <div className="nav-mobile">
        <a id="nav-ham" href="#!"><span id="ss"></span></a>        
      </div>
      <div>
      <img className="logo" src="Ileero-logo-concept-03.svg" alt=""></img>
      </div>
      </div>
      <ul className="nav_style">
        <li>
          <a href="#!">Feature</a>
        </li>
        <li>
          <a href="#!">How it work</a>
        </li>
        <li>
          <a href="#!">Help</a>
        </li>
        <li>
          <a href="#!">FAQ's</a>
        </li>
        <li>
          <a href="#!">Account</a>
          <ul>
              <li id="menu-item-96" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-96"><a href="#!">Login</a></li>
              <li id="menu-item-97" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-97"><a href="#!">Signup</a></li>
          </ul>
      </li>
      </ul>
    </nav>
    
</header>
    );
};

export default Header;
