import React from 'react'
import { Link } from 'react-router-dom'
import "./ComingSoon.css"

export default function ComingSoon() {
    return (
        <div className='coming-soon'>
            <div className="wrapper">
                <div className="icon-box">
                    <img src="/images/logo.png" alt="NovinKaveh" />
                </div>
                <p className="title">
                    این صفحه اکنون در دسترس نیست :((
                </p>
                <Link to="/">صفحه ی اصلی</Link>
            </div>
        </div>
    )
}
