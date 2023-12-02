import React from 'react'
import { Link } from 'react-router-dom'
import "./PaymentBtnBox.css"


export default function PaymentBtnBox() {
    return (
        <div className="payment-btn-box">
            <Link
                className='link active'
                to="/payment"
            >
                <button>پرداخت وجه آنلاین</button>
            </Link>
            <Link
                className='link'
                to="/coming-soon"
            >
                <button>شماره حساب</button>
            </Link>
            <Link
                className='link'
                to="/coming-soon"
            >
                <button>ثبت فیش واریزی</button>
            </Link>
        </div>
    )
}
