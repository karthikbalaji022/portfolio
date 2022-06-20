import React from 'react'
import style from './card.module.scss';
function Myworkcard({key,card}) {
  return (
    <div className={style.workcard} key={key}>
        <div className={style.front}>
            <div className={style.imgContainer}>

            <img src={card.img} alt="project pic"/>
            </div>
            <div className={style.footer}>
            <h1 className={style.workTitle}>{card.title}</h1>
            <p>{card.description}</p>
            <button className={style.hover}>Flip</button>
            </div>
        </div>
        <div className={style.back}>
            <h1 className={style.backTitle}>Tech Stack used</h1>
            <ul>
            {card.techStack.map((item,i)=>{
                return(
                    <li key={i}>{item}</li>
                )
            })}
            </ul>
                <div className={style.btns}>

                <a href={card.github} target="_blank">
                <button className={style.github}>GitHub</button>
                </a>
                {card.deployed==true &&
                    (<a href={card.deployLink} target="_blank">
                <button className={style.website}>Website</button>
                    </a>)
                }
                </div>

        </div>
    </div>
  )
}

export default Myworkcard;