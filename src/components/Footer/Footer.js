import React from 'react'
import footerImg from "../../img/footer.png"

const Footer = () => {
  return (
    <div className="footer d__flex align__items__center justify__content__space__between pz__10" style={{
      "zIndex": "100", "padding": "10px 20px"
    }}>
      <img src={footerImg} alt="My pic" className="footer__img pointer" />
      <span className="copyright" style={{"color": "#c6c9d8", "fontSize": "14px", "opacity": "0.75"}}>Copyright © 2021 programmer <a href="https://www.github.com/cleitonrs" target="_blank" rel="noreferrer">Cleiton Santos</a>. All Rights Reserved.</span>
    </div>
  )
}

export default Footer
