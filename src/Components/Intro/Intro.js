import React from "react"
import "./Intro.css"
import { Link } from "react-router-dom";


export default function Intro() {
    return (
        <section className="intro">
            <div className="container">

                <div className="intro-wrapper row">

                    <div className="img-section col-lg-5 col-11">
                        <img src="/images/intro-img.png" alt="novinkaveh" />
                    </div>

                    <div className="text-section col-lg-7 col-11">
                        <h2 className="title">دریافت نمایندگی فروش</h2>
                        <p className="text">
                            برند نوین کاوه برندی مطرح در حوزه طراحی، تولید وعرضه مـــحصولات لوکس و منحصر بفرد و متنوع است و فـــعالیت خود را از سال ۱۹۹۹ مـــیلادی (۱۳۷۸ هجری شمسی) آغاز نمود و در صنعت های مختلف با نـــگرش توسعه بازار و گسترش شعبات خود به منظورتسهیل در ارایه خدمات به مشتریان اصــیل و همچنین بهره‌مندی از ظرفیت علاقمندان به ایجاد کسب و کار در صنعت محصولات تولیدی، اقدام به اعطای نمایندگی داخل و خارج از ایران می نماید.
                        </p>
                        <p className="text">
                            اولین شعار فروشگاه نوین کاوه ایجاد”حس خوب خرید” برای مشتری می باشد. فروشگاه نوین کاوه با ویژگی هایی که دارد و نیز با خدمات مختلفی که ارائه می دهد.
                        </p>
                        <Link className="link" to="/agent-form">
                            <button>اخذ نمایندگی فروش</button>
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
}