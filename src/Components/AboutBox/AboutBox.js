import React from 'react'
import "./AboutBox.css"

export default function AboutBox({ icon, title, number, category }) {
    return (
        <div className='col-lg-3 col-md-4 col-11'>
            <div className="about-box-wrapper">
                <div className="img-box">
                    <img
                        src={icon}
                        alt="about-us-icon"
                    />
                </div>
                <div className='info'><span className='colored-number'>{number}</span>{title}</div>
                <div className="category">{category}</div>
            </div>
        </div>
    )
}
