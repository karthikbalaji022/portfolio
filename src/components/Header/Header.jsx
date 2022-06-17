import React from "react";
import style from "./index.module.scss";
import karthik from '../../assets/images/karthik.jpg'
import {FaReact,FaNodeJs,FaHtml5,FaCss3,FaJava} from 'react-icons/fa'
import {DiJavascript,DiSass} from 'react-icons/di'
import {SiRedux,SiMongodb,SiGithub} from 'react-icons/si'
function Header() {
  return (
    <div className={style.headerContianer}>
      <DiSass className={`${style.logo} ${style.logo1}`} title="Sass"/>
      <FaNodeJs className={`${style.logo} ${style.logo2}`} title="NodeJs"/>
      <FaHtml5 className={`${style.logo} ${style.logo3}`} title="HTML"/>
      <FaCss3 className={`${style.logo} ${style.logo4}`} title="CSS"/>
      <FaJava className={`${style.logo} ${style.logo5}`} title="Java"/>
      <DiJavascript className={`${style.logo} ${style.logo6}`} title="JavaScript"/>
      <FaReact className={`${style.logo} ${style.logo7}`} title="Reactjs"/>
      <SiRedux className={`${style.logo} ${style.logo8}`} title="Redux"/>
      <SiMongodb className={`${style.logo} ${style.logo9}`} title="MongoDb"/>
      <SiGithub className={`${style.logo} ${style.logo10}`} title="Git"/>
      <div className={style.bounceTitle}>
        <div className={style.bounceHead}>Welcome</div>
        <div className={style.bounceHead}>to</div>
        <div className={style.bounceHead}>Karthik's</div>
        <div className={style.bounceHead}>portfolio</div>
      </div>
      <div className={style.imageContainer}>
        <img src={karthik}/>
      </div>
    </div>
  );
}

export default Header;
