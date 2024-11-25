import React from 'react'

const Blog = () => {
  return (
    <>
     <section id="blog">
        <div className="container">
           <div className="heading_top">
               <div className="subheading">
                   <div className="round">
                     <div className="round_inner">
                     </div>  
                    
                   </div>
                   <h6>My Blog</h6>
               </div>
               <h3>LATEST BLOG</h3>
              </div>
              <div className="blog_wrapper">
                <div className="blog_item">
                    <div className="blog_img">
                        <img src="./image/portfolio1.png" alt="blog" />
                    </div>
                    <div className="blog_content">
                        <h6>20 January, 2023</h6>
                        <p>Become a UX/UI Designer With Career Foundry.</p>
                        <a href="#" class="blog_link" >Read More 
                            <i class="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>
               </div>
                <div className="blog_item">
                    <div className="blog_img">
                        <img src="./image/portfolio2.png" alt="blog" />
                    </div>
                    <div className="blog_content">
                        <h6>20 January, 2023</h6>
                        <p>Become a UX/UI Designer With Career Foundry.</p>
                        <a href="#" class="blog_link" >Read More
                            <i className="fa-solid fa-arrow-right"></i> </a>
                    </div>
               </div>
                <div className="blog_item">
                    <div className="blog_img">
                        <img src="./image/portfolio3.png" alt="blog" />
                    </div>
                    <div className="blog_content">
                        <h6>20 January, 2023</h6>
                        <p>Become a UX/UI Designer With Career Foundry.</p>
                        <a href="#" className="blog_link" >Read More 
                            <i className="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>
               </div>


               </div>


              </div>
     </section>

    </>
  )
}

export default Blog