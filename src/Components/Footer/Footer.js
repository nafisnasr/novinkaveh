import React from 'react'
import { Link } from 'react-router-dom'
import { BsInstagram } from "react-icons/bs"
import { PiTelegramLogo } from "react-icons/pi"
import { MdWhatsapp, MdKeyboardArrowLeft } from "react-icons/md"
import "./Footer.css"


export default function Footer() {
  return (
    <footer className='footer'>
      <div className="container">
        <div className="footer-wrapper row">

          <div className="col-lg-4 col-md-6 col-11">
            <div className="right-col">
              <div className="header">
                <p>دسترسی سریع</p>
                <Link to="/agents-form">
                  <button>اخذ نمایندگی</button>
                </Link>
              </div>

              <div className="list">
                <ul className="right-col">
                  <li>
                    <Link className="link" to="/">صفحه اصلی</Link>
                  </li>
                  <li>
                    <Link className="link" to="/coming-soon">گالری تصاویر</Link>
                  </li>
                  <li>
                    <Link className="link" to="/rules">قوانین</Link>
                  </li>
                  <li>
                    <Link className="link" to="/coming-soon">ثبت فیش واریزی</Link>
                  </li>
                  <li>
                    <Link className="link" to="/customers">مشتریان</Link>
                  </li>
                </ul>
                <ul className="left-col">
                  <li>
                    <Link className="link" to="/why">چرا نوین کاوه؟</Link>
                  </li>
                  <li>
                    <Link className="link" to="/faq">سوالات متداول</Link>
                  </li>
                  <li>
                    <Link className="link" to="/coming-soon">پرداخت آنلاین</Link>
                  </li>
                  <li>
                    <Link className="link" to="/about-us">آشنایی با ما</Link>
                  </li>
                  <li>
                    <Link className="link" to="/coming-soon">شماره حساب</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-11">
            <div className="center-col">
              <h5 className='title'>راه های ارتباطی</h5>
              <p className="description">
                ۷ روز هفته، ۲۴ ساعت شبانه روز پاسخگوی شما هستیم.
              </p>

              <div className="social-media my-2">
                <span>شبکه های اجتماعی</span>
                <div className="icon-container my-3">
                  <div className="icon-box instagram">
                    <BsInstagram className='social-icon instagram' />
                  </div>
                  <div className="icon-box telegram">
                    <PiTelegramLogo className='social-icon telegram' />
                  </div>
                  <div className="icon-box whatsapp">
                    <MdWhatsapp className='social-icon whatsapp' />

                  </div>
                </div>
              </div>

              <div className="email my-2">
                <span>پست الکنریکی</span>
                <a href="#">Example[at]gmail[dot]com</a>
              </div>

              <div className="phone my-2">
                <span>تلفن</span>
                <a href="#">42558855</a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-11">
            <div className="left-col">
              <div className="logo-box">
                <img src="/images/logo.png" alt="novinkaveh" />
              </div>
              <div className="text">
                گروه خدمات نوین کاوه مفتخر است اطمینان خاطر مشتریان را با عرضه محصولات و خدمات با کیفیت عالی در کوتاه ترین زمان و با حداقل قیمت باز ار جلب کند. نوین کاوه مرکز فروش انواع محصولات تولیدی و بازرگانی شرکت های کشور می باشد.
              </div>
              <div className="btn-container">
                <Link to="/about-us">
                  <button>
                    درباره ی ما
                    <MdKeyboardArrowLeft className="icon" />
                  </button>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}
