import React from 'react'
import "./CustomersBox.css"


export default function CustomersBox({ img, text }) {
    return (
        <div className="col-lg-3 col-md-4 col-6">
            <div className='customers-box'>
                <div className="img-box my-2">
                    <img src={img} alt={text} />
                </div>
                <span className="text">{text}</span>
            </div>
        </div>
    )
}
