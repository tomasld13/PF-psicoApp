import React, { useEffect, useState } from "react"
import style from "./Question.module.css"


export default function Question({ nameQuestion, descQuestion}) {
    const [ question, setQuestion] = useState("")
    const [ showQuestion, setShowQuestion] = useState(false)
    useEffect(()=>{
        setQuestion(nameQuestion)
    }, [])

    const handleClick=(e)=>{
        e.preventDefault()
        !showQuestion?setShowQuestion(true):setShowQuestion(false)
    }

    return (
    <div className={style.content}>
        <div className={ style.question }>
            <h3 className="text-lg">{ question }</h3><button onClick={(e)=>{ handleClick(e)}}>V</button>
        </div>
        {showQuestion?<p className={style.desc}>{descQuestion}</p>:<></>}
    </div>
    )
}