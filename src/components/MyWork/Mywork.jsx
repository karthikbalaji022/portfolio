import React,{} from 'react'
import style from './index.module.scss'
const Mywork =React.forwardRef(({},ref) =>{

  return (
    <div className={style.workWrapper} ref={ref}>
        <div className={style.workContainer}>
        <h1>My Work!  </h1>

        </div>
    </div>
  )
})

export default Mywork