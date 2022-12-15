import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  return (
    <div className={s.content}>
      <div>
        <img className={s.topImg} src='https://c4.wallpaperflare.com/wallpaper/410/867/750/vector-forest-sunset-forest-sunset-forest-wallpaper-preview.jpg' />
      </div>
      <div className = {s.descriptionBlock}>
        ava + description
      </div>
    </div>
  );
}

export default ProfileInfo;