import React from 'react'

const Banner = () => {
  return (
    <section id="banner">
    <div className="container">
       <div className="banner_wrapper">
        <div className="banner_content">
            <div className="subheading">
                <div className="round">
                  <div className="round_inner">
                  </div>  
                 
                </div>
                <h6>I AM DESIGNER</h6>
            </div>
            <h1>Creative Design and Web Solutions</h1>
            <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et.</p>
            <button className="common_nav">Download My CV</button>
        </div>
        <div className="banner-image">
            <img src="./image/banner.jpg" alt="Banner"/>
        </div>
       </div>
        
    </div>
    </section>
  )
}

export default Banner