import React from 'react'
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import "./Agents.css"


export default function Agents() {
  return (
    <>
      <Header />
      <div className="agents-info">
        <div className="agents-info-wrapper container">
          <div className="agents-info-form">
            <h3 className="title">پرداخت وجه آنلاین</h3>
            <form >
              <div className="form-input">
                <label>نام و نام خانوادگی <span>*</span></label>
                <input type="text" />
              </div>
              <div className="form-input">
                <label>موضوع پیام <span>*</span></label>
                <input type="text" />
              </div>
              <div className="form-input">
                <label>متن پیام <span>*</span></label>
                <textarea cols="30" rows="10"></textarea>
              </div>
              <div className="form-input">
                <label>نحوه اطلاع رسانی و ارسال پاسخ به شما</label>
                <select >
                  <option value="0">تلفنی</option>
                  <option value="0">پیامک</option>
                  <option value="0">ایمیل</option>
                  <option value="0">تلگرام</option>
                </select>
              </div>
              <div className="btn-box">
                <button>ارسال</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>

  )
}
