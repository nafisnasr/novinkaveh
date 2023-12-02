import React from 'react'
import "./Topbar.css"
import { Link } from 'react-router-dom'
import { CiSearch } from "react-icons/ci"
import { BiPencil } from "react-icons/bi"

export default function Topbar() {
    return (
        <div className='topbar'>
            <div className="topbar-wrapper">

                <div className="logo-box">
                    <img src="/images/logo.png" alt="Novin kaveh" />
                </div>

                <div className="center-box">
                    <ul className="list">
                        <Link className='link' to="/">
                            <li className="list-items">صفحه اصلی</li>
                        </Link>
                        <Link className='link' to="/payment">
                            <li className="list-items">پرداخت آنلاین</li>
                        </Link>
                        <Link className='link' to="/coming-soon">
                            <li className="list-items">شماره حساب ها</li>
                        </Link>
                        <Link className='link' to="/coming-soon">
                            <li className="list-items">ثبت واریزی فیش </li>
                        </Link>
                        <Link className='link' to="/rules">
                            <li className="list-items">قوانین</li>
                        </Link>
                    </ul>

                </div>

                <div className="left-box">

                    <div className="search-form">
                        <input type="text" placeholder='جستجو...' />
                        <button><CiSearch className="search-icon" /></button>
                    </div>

                    <Link className='link agent-link' to="/agents-form">
                        <button className='agent-btn'>
                            اخذ نمایندگی
                            <BiPencil className='icon' />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
