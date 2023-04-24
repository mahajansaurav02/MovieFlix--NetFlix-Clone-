import Search from "@material-ui/icons/Search";
import Notifications from "@material-ui/icons/Notifications";
import ArrowDropDown from "@material-ui/icons/ArrowDropDown";
import "./navbar.scss";
import { useState } from "react";

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)

    window.onscroll=()=>{
        setIsScrolled(window.pageYOffset===0?false:true)
        return()=>(window.onscroll =null)
    }
  return (
    <div className={isScrolled?"navbar scrolled":"navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My list</span>
        </div>

        <div className="right">
          <Search className="icons"/>
          <span>Kid</span>
          <Notifications className="icons"/>
          <img src="data:image/jpeg;base64,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" alt="" />
          <div className="profile">
          <ArrowDropDown className="icons"/>
          <div className="options">
            <span>Settings</span>
            <span>Logout</span>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};
