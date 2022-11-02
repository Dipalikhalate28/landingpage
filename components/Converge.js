import React from 'react'
import style from "../styles/converge.module.css"
import { convergeimg } from '../images/svgexports'
import { Card } from '@mui/material'
function Converge() {
    return (
        <Card className={style.converge}>
            <div className={style.convergefirst}>
                <div className={style.convergenm}>Converge</div>
                <div><span className={style.byhumancloud}>by </span><span className='human'> human</span><span className={style.cloud}>cloud</span></div>
            </div>
            <div className='image'>
                {convergeimg}

            </div>
        </Card >
    )
}

export default Converge