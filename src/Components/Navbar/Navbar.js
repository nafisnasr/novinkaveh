import React from 'react'
import { Link } from 'react-router-dom'
import { AiTwotonePhone } from "react-icons/ai"
import {BsFlag , BsTable , BsPeopleFill} from "react-icons/bs"
import {FaQuestion} from "react-icons/fa"
import {GoInfo, GoComment} from "react-icons/go"
import "./Navbar.css"


export default function Navbar() {
    return (
        <nav className="navbar nav navbar-expand-lg bg-light">
            <div className="container-fluid navbar-wrapper">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav  mb-2 mb-lg-0" dir='rtl'>
                        <li className="nav-item mx-3">
                            <Link className="nav-link active link" aria-current="page" to="/agents-form">
                                <BsFlag className="navbar-icon"/>
                                اخذ نمایندگی
                            </Link>
                        </li>
                        <li className="nav-item mx-3">
                            <Link className="nav-link link" to="/why-us">
                                <FaQuestion className="navbar-icon"/>
                                چرا نوین کاوه؟
                            </Link>
                        </li>

                        <li className="nav-item mx-3">
                            <Link className="nav-link link" to="/gallary">
                                <BsTable className='navbar-icon'/>
                                گالری تصاویر
                            </Link>
                        </li>
                        <li className="nav-item mx-3">
                            <Link className="nav-link link" to="/about-us">
                                <GoInfo className="navbar-icon"/>
                                آشنایی با ما
                            </Link>
                        </li>
                        <li className="nav-item mx-3">
                            <Link className="nav-link link" to="/customers">
                                <BsPeopleFill className="navbar-icon"/>
                                مشتریان ما
                            </Link>
                        </li>
                        <li className="nav-item mx-3">
                            <Link className="nav-link link" to="/faq">
                                <GoComment className='navbar-icon' />
                                سوالات متداول
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="contact-box">
                    <button><AiTwotonePhone className='icon' /></button>
                </div>
            </div>
        </nav>
    )
}
