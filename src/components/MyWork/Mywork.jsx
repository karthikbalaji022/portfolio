import React,{} from 'react'
import style from './index.module.scss'
import Myworkcard from './Myworkcard'
import workData from '../../assets/data/workcarddata';
const Mywork =React.forwardRef(({},ref) =>{
  return (
    <div className={style.workWrapper} ref={ref}>
        <div className={style.workContainer}>
        <h1>My Work!</h1>
        <section className={style.workcardContainer}>
          {workData.map((item,i)=>{
            return(
            <Myworkcard key={i} card={item} />
            )
          })}
        </section>

        </div>
    </div>
  )
})

export default Mywork