import React from 'react';
import {FaLinkedin,FaGithub,FaInstagram,FaWhatsapp} from 'react-icons/fa';
import style from './index.module.scss';
function Sidebar() {
    const msg=`Hi can we have a chat about your profile for this amazing job opportunity?`;
  return (
    <div className={style.sideBar}>
        <a href="https://www.linkedin.com/in/karthik-balaji-v-67b02917a/ " target={"_blank"}><FaLinkedin/></a>
        <a href="https://github.com/karthikbalaji022" target={"_blank"}><FaGithub/></a>
        <a href=" " target={"_blank"}><FaInstagram/></a>
        <a href={"https://api.whatsapp.com/send?phone=9159022780&amp;text="+msg+";" } target={"_blank"}><FaWhatsapp/></a>
    </div>
  )
}

export default Sidebar