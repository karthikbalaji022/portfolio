import React from 'react'
import style from './index.module.scss'
import {FaSearch} from 'react-icons/fa'
function Nav() {
  return (
    <nav className={style.navContainer}>
        <section className={style.logo}>
            <div className={style.logoCircle}>
            </div>
                <div className={style.logoName}>KB</div>
        </section>
       
        <section className={style.search}>
            <FaSearch className={style.searchIcon}/>
            <input type={"text"} className={style.searchBar} placeholder="search..."/>

        </section>
    </nav>
  )
}

export default Nav