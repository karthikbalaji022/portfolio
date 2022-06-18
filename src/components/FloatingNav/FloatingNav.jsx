import React from 'react'
import style from './index.module.scss'
function FloatingNav() {
  return (
    <section className={style.routes}>
    <a className={style.routeName} href="#Home">Home</a>
    <a className={style.routeName} href="#About">About</a>
    <a className={style.routeName} href="#MyWork">My Work</a>
    <a className={style.routeName} href="#Contact">Contact</a>
    <a className={style.routeName} href="https://drive.google.com/u/0/uc?id=1DJNssUCDD96xGvJ0OqHgRL2eFuoJfptS&export=download" download={"karthik_resume"} target="_blank">Resume download</a>
</section>
  )
}

export default FloatingNav