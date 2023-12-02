import React from "react"
import "./TitleSection.css"
import { BsFillArrowLeftCircleFill } from "react-icons/bs"
import { Link } from "react-router-dom"


export default function TitleSection({ title, seeMore, link }) {
    return (
        <section className="title-section container-fluid">
            <h3 className="title">
                {title}
            </h3>
            {(seeMore &&
                <Link to={link}>
                    <BsFillArrowLeftCircleFill
                        className="see-all-btn"
                    />
                </Link>
            )}
        </section>
    )
}