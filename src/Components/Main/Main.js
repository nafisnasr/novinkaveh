import React from "react"
import "./Main.css"
import { Link } from "react-router-dom"

export default function Main() {
    return (

        <main className="main">
            <div className="container">
                <div className="main-wrapper row">

                    <div className="col-lg-6 col-11">
                        <div className="section right">
                            <Link to="/about-us" className="link">
                                <div className="title-container">
                                    <h2 className="title">برای دریافت مشاوره رایگان کلیک کنید</h2>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-3 col-11">
                        <div className="section center">
                            <Link to="/about-us" className="link">
                                <div className="title-container">
                                    <h2 className="title">دریافت نمایندگی</h2>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-3 col-11">
                        <div className="section left">
                            <Link to="/about-us" className="link">
                                <div className="title-container">
                                    <h2 className="title">محصولات</h2>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}