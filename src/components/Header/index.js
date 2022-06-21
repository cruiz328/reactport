import React from 'react';
//import sideImage from '../../assets/cover/side-image.jpg';

function Header(props) {

  return (
    <header className="flex-row space-between px-1">
      <h1 class="fsdHeader">Full Stack Web Developer</h1>
      
      {props.children}
    </header>
  );
}

export default Header;
