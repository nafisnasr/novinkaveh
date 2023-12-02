import React from 'react'
import TitleSection from "../../Components/TitleSection/TitleSection"
import AboutBox from '../../Components/AboutBox/AboutBox'
import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footer/Footer"
import "./AboutUs.css"

export default function AboutUs() {
  return (
    <>
      <Header />
      <div className="about-us">
        <div className="container">
          <div className="about-us-wrapper">

            <section className="text-section">
              <TitleSection
                title="درباره ما"
                seeMore={false}
              />

              <p className="text">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
            </section>

            <section className="box-section">
              <div className="box-section-row row">
                <AboutBox
                  icon="/images/about-us-icons/i1.svg"
                  title="نوع"
                  number="620"
                  category="محصول سایت"
                />
                <AboutBox
                  icon="/images/about-us-icons/i2.svg"
                  title="سال فعالیت"
                  number="5"
                  category="حضور در بازار"
                />
              </div>
              <div className="box-section-row row">
                <AboutBox
                  icon="/images/about-us-icons/i3.svg"
                  title="میلیون"
                  number="1"
                  category="تولید محصول"
                />
                <AboutBox
                  icon="/images/about-us-icons/i4.svg"
                  title="میلیون"
                  number="1"
                  category="رضایت از خرید"
                />
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>

  )
}
