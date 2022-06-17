import React from 'react'
import style from './index.module.scss'
function FloatingNav() {
  return (
    <section className={style.routes}>
    <a className={style.routeName} href="#Home">Home</a>
    <a className={style.routeName} href="#About">About</a>
    <a className={style.routeName} href="#MyWork">My Work</a>
    <a className={style.routeName} href="#Contact">Contact</a>
</section>
  )
}

export default FloatingNav