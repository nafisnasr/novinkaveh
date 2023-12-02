import React, { useState } from 'react'
import TitleSection from "../../Components/TitleSection/TitleSection"
import CustomersBox from '../../Components/CustomersBox/CustomersBox'
import "./Customers.css"
import { customersData } from '../../data'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'

export default function Customers() {

  const [customers, setCustomers] = useState(customersData)

  return (
    <>
      <Header />
      <div className="customers-page">

        <TitleSection
          title="مشتریان نوین کاوه"
          seeMore={false}
        />

        <div className="container">
          <div className="wrapper row">
            {customers.map(box => (
              <CustomersBox key={box.id} {...box} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>

  )
}
