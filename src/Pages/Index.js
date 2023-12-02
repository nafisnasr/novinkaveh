import React from 'react'
import Main from '../Components/Main/Main'
import Intro from '../Components/Intro/Intro'
import Steps from "../Components/Steps/Steps"
import Customers from '../Components/Customers/Customers'
import Header from "../Components/Header/Header"
import Footer from "../Components/Footer/Footer"

export default function Index() {
  return (
    <>
      <Header />
      <Main />
      <Intro />
      <Steps />
      <Customers />
      <Footer />
    </>
  )
}
