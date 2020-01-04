import React from "react"
import { Link } from "gatsby"
import HeroImg from "../../../assets/images/slider-1.png"
import Pattern from "../../../assets/images/Pattern.png"

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-img">
        <img src={HeroImg} alt="" />
      </div>
      <div className="hero-banner">
        <h3>EXPLORE THE</h3>
        <h1>New Arrivals</h1>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout
        </p>
        <img src={Pattern} alt="" />
        <Link to="/shop">Shop now</Link>
      </div>
    </div>
  )
}

export default Hero
