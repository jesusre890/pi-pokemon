import React from "react";
import { Link } from "react-router-dom";
import fondo from "../../img-pk/1366_2000.jpeg";
import ho_oh from "../../img-pk/gifsPokes/ho oh.gif";
import style from "./Landing.module.css";

const Landing = () => {
  return (
    <div className={style.containerLanding}>
      <div>
        <Link to="/home">
          <div className={style.imagenes}>
            <img
              src={fondo}
              alt="pueblo paletta"
              className={style.fondoPueblo}
            />
            <img src={ho_oh} className={style.hooh} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Landing;

{/*<img src={fondo} alt="pueblo paletta" className={style.fondoPueblo} />*/}