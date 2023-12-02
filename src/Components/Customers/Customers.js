import React from 'react'
import TitleSection from "../TitleSection/TitleSection"
import "./Customers.css"


export default function Customers() {
    return (
        <>
            <div className='customers'>
                <TitleSection
                    title="مشتریان ما"
                    seeMore={false}
                />
                <div className="container">
                    <div className="customers-wrapper row">
                        <div className="img-box col-lg-1 col-md-4 col-6">
                            <img src="/images/customers/logo1.png" alt="novin kaveh logo" />
                        </div>
                        <div className="img-box col-lg-1 col-md-4 col-6">
                            <img src="/images/customers/logo2.png" alt="novin kaveh logo" />
                        </div>
                        <div className="img-box col-lg-1 col-md-4 col-6">
                            <img src="/images/customers/logo3.png" alt="novin kaveh logo" />
                        </div>
                        <div className="img-box col-lg-1 col-md-4 col-6">
                            <img src="/images/customers/logo4.png" alt="novin kaveh logo" />
                        </div>
                        <div className="img-box col-lg-1 col-md-4 col-6">
                            <img src="/images/customers/logo5.png" alt="novin kaveh logo" />
                        </div>
                        <div className="img-box col-lg-1 col-md-4 col-6">
                            <img src="/images/customers/logo6.png" alt="novin kaveh logo" />
                        </div>
                        <div className="img-box col-lg-1 col-md-4 col-6">
                            <img src="/images/customers/logo7.png" alt="novin kaveh logo" />
                        </div>
                        <div className="img-box col-lg-1 col-md-4 col-6">
                            <img src="/images/customers/logo8.png" alt="novin kaveh logo" />
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
