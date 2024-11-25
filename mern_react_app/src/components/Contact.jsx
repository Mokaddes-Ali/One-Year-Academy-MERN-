import React from 'react'

const Contact = () => {
  return (
    <>
           <section id="contact">
        <div className="container">
           <div className="heading_top">
               <div className="subheading">
                   <div className="round">
                     <div className="round_inner">
                     </div>  
                    
                   </div>
                   <h6>My Contact</h6>
               </div>
               <h3>I WANT TO HEAR FROM YOU</h3>
              </div>
              <div className="contact_wrapper">
                <div className="contact_form">
                    <form action="#" method="">
                        <div className="input_group">
                            <input type="text" className="form_input" name="name" placeholder="Name" required />
                        
                            <input className="form_input" type="email" name="email" placeholder="Email" required />
                        
                            <input className="form_input" type="text" id="phone" name="phone" placeholder="phone" required/>
                        
                            <input className="form_input" type="text" id="subject" name="subject" placeholder="Subject" required/>
                        </div>
                        
                   
                        <textarea className="form_textarea" name="message" placeholder="Message" required>

                        </textarea>

                     
                        <button type="submit" class="common_nav ">Sent Me Message</button>
                    </form>
                </div>
                <div className="contact_info">
                    <div className="contact_info_item">
                        <div className="icon_box">
                            <img src="./image/ciconloc.png" alt="icon"/>
                        </div>
                        <div className="contact_info_content">
                            <h6>Address</h6>
                            <p>221B Baker Street, London, UK</p>
                        </div>
                    </div>
                    <div className="contact_info_item">
                        <div class="icon_box">
                            <img src="./image/ciconph.png" alt="icon"/>
                        </div>
                        <div className="contact_info_content">
                            <h6>Phone</h6>
                            <p>+8801842549968</p>
                        </div>
                    </div>
                    <div className="contact_info_item">
                        <div className="icon_box">
                            <img src="./image/ciconenv.png" alt="icon"/>
                        </div>
                        <div className="contact_info_content">
                            <h6>Email</h6>
                            <p>mdgolamki035@gmail.com</p>
                        </div>
                    </div>
                </div>
              </div>
              </div>
     </section>
    </>
  )
}

export default Contact