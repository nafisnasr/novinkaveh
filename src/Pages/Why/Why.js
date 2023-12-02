import React from 'react'
import "./Why.css"
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'


export default function Why() {
  return (
    <>
    <Header/>
    <div className="why-us">
      <div className="container">
        <div className="wrapper">
          <h3 className="title text-center">چرا نوین کاوه؟</h3>
          <p className="text">
            نوین کاوه دارای چندین شعبه زنجیره ای جهت عرضه مسقیم و بدون واسطه محصولات در مناطق مختلف کلان شهر تهران میباشد.این مجموعه با واحد تولیدی شال و روسری همراه با تجهیزات بروز و پیشرفته با هدف تولید محصولاتی با کیفیت با قیمت مناسب در حال فعالیت میباشد. باتوجه به این پتانسیل ها و در جهت توسعه شعبات خود این برند اقدام به واگذاری شعبات فروشگاهی با شرایط ویژه نموده است. شرایطی همچون تامین کالا بصورت اعتباری برای نمایندگان بدون پرداخت نقدی و انحصار نماینده در شهر مورد درخواست اعطای امتیازات فروش عمده در شهر مورد درخواست.
          </p>

          <section className="why-us-list">
            <h5 className="title">ویژگی های اخذ نمایندگی:</h5>
            <ul className="list-items">
              <li>سرمایه گذاری با سرمایه کم و سود مناسب</li>
              <li>ریسک پایین در سرمایه گذاری</li>
              <li>راه اندازی کسب و کار در کمترین بازده زمانی</li>
              <li>بازگشت سریع سرمایه</li>
              <li>امکان اخذ نمایندگی با قیمت تولیدی</li>
              <li>اعطای نمایندگی انحصاری</li>
              <li>فروش و تامین اعتباری کالا از سوی دفتر مرکزی</li>
            </ul>
          </section>

          
        </div>
      </div>
    </div>
    <Footer/>
    </>


  )
}
