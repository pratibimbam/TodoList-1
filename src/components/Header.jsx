import React from "react";
import paperball from "../img/paperball.png";

//css
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <span className="g">G</span>
      <span className="r">r</span>
      <span className="o">o</span>
      <span className="u">u</span>
      <span className="p">p</span> <span className="three">3</span>
      <span className="thing">'</span>
      <span className="s">s</span>
      <span className="t"> t</span>
      <span className="o-two">o</span>
      <span className="d">d</span>
      <span className="o-three">o</span>
      <span className="l"> L</span>
      <span className="i">i</span>
      <span className="s-two">s</span>
      <span className="t-two">t</span>
      <img
        className="paperball"
        src={paperball}
        alt=""
        height="50px"
        width="50px"
      />
      <img
        className="paperballone"
        src={paperball}
        alt=""
        height="40px"
        width="40px"
      />
      <img
        className="paperballtwo"
        src={paperball}
        alt=""
        height="30px"
        width="30px"
      />
      <img
        className="paperballthree"
        src={paperball}
        alt=""
        height="20px"
        width="20px"
      />
    </div>
  );
}

export default Header;
