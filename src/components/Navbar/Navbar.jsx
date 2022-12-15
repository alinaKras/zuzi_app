import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";

const Navbar = () => {
  const setActive = ({isActive}) => (isActive? s.active : s.item);
  return (
    <nav className={s.nav}>
      <div  className={s.item}>
        <NavLink to="/profile" className={setActive}>profile</NavLink>
      </div>
       <div className={s.item}>
        <NavLink to="/dialogs" className={setActive}>messages</NavLink>
      </div>
       <div className={s.item}>
        <NavLink to="/news"className={setActive}>news</NavLink>
      </div>
       <div className={s.item}>
        <NavLink to="/music" className={setActive}>music</NavLink>
      </div>
       <div className={s.item}>
        <NavLink to="/settings" className={setActive}>settings</NavLink>
      </div>
    </nav>
  )
}

export default Navbar;