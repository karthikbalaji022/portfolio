import React from 'react'
import style from './index.module.scss'
function FloatingNav({home,about,work,contact}) {
  return (
    <section className={style.routes}>
    <button className={style.routeName} href="/" onClick={()=>{home?.current?.scrollIntoView({behavior:"smooth", block: "start", inline: "nearest" })}}>Home</button>
    <button className={style.routeName} href="/" onClick={()=>{about?.current?.scrollIntoView({behavior:"smooth", block: "start", inline: "nearest" })}}>About</button>
    <button className={style.routeName} href="/" onClick={()=>{work?.current?.scrollIntoView({behavior:"smooth", block: "start", inline: "nearest" })}}>My Work</button>
    <button className={style.routeName} href="/" onClick={()=>{contact?.current?.scrollIntoView({behavior:"smooth", block: "start", inline: "nearest" })}}>Contact</button>
    <a className={style.routeName} href="https://drive.google.com/u/0/uc?id=1DJNssUCDD96xGvJ0OqHgRL2eFuoJfptS&export=download" download={"karthik_resume"} target="_blank">Resume download</a>
</section>
  )
}

export default FloatingNav