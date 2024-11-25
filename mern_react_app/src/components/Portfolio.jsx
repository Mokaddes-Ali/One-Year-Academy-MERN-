import React from 'react'

const Portfolio = () => {
  return (
    <>
     <section id="portfolio">
        <div className="container">
            <div className="heading_top">
                <div className="subheading">
                    <div className="round">
                      <div className="round_inner">
                      </div>  
                     
                    </div>
                    <h6>My Portfolio</h6>
                </div>
                <h3>VISIT MY PORTFOLIO</h3>
               </div>
               <div className="portfolio_wrapper">
                    <div className="portfolio_item">
                        <img src="./image/Placeholder1.png" alt="portfolio" />
                   </div>
                   <div className="portfolio_item">
                    <img src="./image/Placeholder2.png" alt="portfolio" />
               </div>
               <div className="portfolio_item">
                    <img src="./image/Placeholder3.png" alt="portfolio" />
               </div>
               <div className="portfolio_item">
                    <img src="./image/Placeholder4.png" alt="portfolio" />
               </div>
               <div className="portfolio_item">
                    <img src="./image/Placeholder5.png" alt="portfolio" />
               </div>
               <div className="portfolio_item">
                    <img src="./image/Placeholder6.png" alt="portfolio" />
               </div>

            </div>



           </div>
    </section>
    </>
  )
}

export default Portfolio