import React from "react"

import Header from "../components/Header"
import Overview from "../components/OverviewWiki"

import Whale from "../components/Whale"
import Users from "../components/Users"


function Home() {
  return (
    <div>
    
        <Header />
        <Whale />
        <Overview />
      <Users/>

     
     
    </div>
  )
}

export default Home
