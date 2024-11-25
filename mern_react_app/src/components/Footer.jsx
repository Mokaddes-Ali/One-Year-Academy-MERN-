import React from 'react'

const Footer = () => {
  return (
    <>
     <footer id="footer">
        <div className="container">
            <div className="footer_wrapper">
                <div className="footer_info">
                    <img src="./image/Logofooter.png" alt="footer" />
                    <p>At vero eos et accusamus et iusto odio dign ducimus qui blanditiis praesentium volup deleniti atque corrupti quos dolores et molestias excepturi sint occaecati </p>
                    <a href="mailto:mdgolamki035@gmail.com">mdgolamki035@gmail.com</a>
                </div>
                  <div className="footer_link">
                    <h3 className="footer_title">Explore Link</h3>
                    <ul className="footer_nav">
                        <li><a href="#">About</a></li>
                        <li><a href="#">Resume</a></li>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">Blog</a></li>
                        
                    </ul>
                  </div>
                  <div className="footer_link">
                    <h3 className="footer_title">My Services</h3>
                    <ul className="footer_nav">
                        <li><a href="#">UI/UX Design</a></li>
                        <li><a href="#">Mobile App</a></li>
                        <li><a href="#">Graphics Design</a></li>
                        <li><a href="#">Web Developer</a></li>
                        
                    </ul>
                  </div>
                  <div className="footer_link">
                    <h3 className="footer_title">Follow me</h3>
                        <div className="social_link">

                            <a href="#" target="_blank" className="social_link_item">
                                <i className="fa-brands fa-facebook-f"></i>
        
                            </a>
                            <a href="#" target="_blank" className="social_link_item">
                                <i className="fa-brands fa-twitter"></i>
        
                            </a>
                            <a href="#" target="_blank" className="social_link_item">
                                <i className="fa-brands fa-facebook-f"></i>
        
                            </a>
                            <a href="#" target="_blank" className="social_link_item">
                                <i className="fa-brands fa-facebook-f"></i>
        
                            </a>

                        
                        
                        </div>
                        <address><i className="fa-solid fa-location-dot"></i>
                            <span>202 Dog Hill Lane Beloit, KS 67420</span> </address>

                             <a href="#" className="footer_call">
                                <i className="fa-solid fa-phone"></i>
                                1-800-915-6270
                             </a>
                       
                    
                  </div>








            </div>

        </div>
        <div className="copyright">
            <div className="container">
                <div className="copywright_wrapper">
                    <div>
                        <p className="copywright_text">All rights reserved &copy;
                            2023 Credesign</p>
                    </div>
                    <div className="terms_privacy">
                        <a href="#"  className="copywright_text">Terms & Condition</a>
                        <a href="#"  className="copywright_text">Privacy policy</a>
                    </div>
                </div>
            </div>

        </div>

    </footer>
    
    </>
  )
}

export default Footer