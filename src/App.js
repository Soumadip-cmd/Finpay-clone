import React from 'react'
import Home from './components/Home'
import FuturePayment from './components/FuturePayment'
import WhyFinpay from './components/WhyFinpay'
import NoAssetVolatility from './components/NoAssetVolatility'
import ReserveSteps from './components/ReserveSteps'
import MissionSection from './components/MissionSection'
import PlanSelection from './components/PlanSelection'
import TryitNow from './components/TryitNow'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Home/>
      <FuturePayment/>
      <WhyFinpay/>
      <NoAssetVolatility/>
      <ReserveSteps/>
      <MissionSection/>
      <PlanSelection/>
      <TryitNow/>
      <Footer/>
    </>
  )
}

export default App
