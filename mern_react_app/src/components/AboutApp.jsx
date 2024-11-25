import React from 'react'

const AboutApp = () => {
  return (
    <section id="about">
    <div className="container">
       
       <div className="about_wrapper">
        <div className="about_image">
            <img src="./image/about.jpg" alt="About"/>
        </div>

        <div className="about_content">
            <div className="subheading">
                <div className="round">
                  <div className="round_inner">
                  </div>  
                 
                </div>
                <h6>About Me</h6>
            </div>
            <h2>I Can Design Anything You Wan</h2>
            <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit.</p>
           <div className="count_wrapper">
                <div class="count_item">
                    <img src="./image/checkicon.png" alt="checkicon"/>
                    <div className="about_icon">
                        <span>360+</span>
                        <h6>Complete Project</h6>
                    </div>
                </div>
                <div className="count_item">
                    <img src="./image/watchicon.png" alt="watchicon"/>
                    <div className="about_icon">
                        <span>16+</span>
                        <h6>Year of experience</h6>
                    </div>
                </div>   
           </div>
           <ul className="check_list">
            <li>
                <img src="./image/check.png" alt="checkicon"/>
                <span>Work simple and cline design</span> 
                </li>
            <li><img src="./image/check.png" alt="checkicon"/>
                <span>New idea and user friendly design</span>
             </li>
          
           </ul>
           
            <button className="common_nav">Download My CV</button>
        </div>
       </div>
    </div>
</section>
  )
}

export default AboutApp