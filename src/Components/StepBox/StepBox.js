import React from 'react'
import "./StepBox.css"


export default function StepBox({ title, text, icon }) {
    return (
        <div className='col-lg-3 col-md-6 col-11'>
            <div className="stepBox">
                {icon}
                <h4 className="title">{title}</h4>
                <span>{text}</span>
            </div>
        </div>
    )
}
