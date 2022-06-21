import React from 'react';
import style from './index.module.scss';
import {FiLinkedin,FiTwitter,FiInstagram,FiGithub} from 'react-icons/fi'
function Footer() {
  return (
    <div className={style.footerContainer}>
        <h3>Created and managed by Karthik Balaji</h3>
        <div className={style.footerIcons}>
            <a className={style.logoLink} href=""><FiGithub className={style.logoFooter}/></a>
            <a className={style.logoLink} href=""><FiInstagram className={style.logoFooter}/></a>
            <a className={style.logoLink} href=""><FiLinkedin className={style.logoFooter}/></a>
            <a className={style.logoLink} href=""><FiTwitter className={style.logoFooter}/></a>
        </div>
    </div>
  )
}

export default Footer