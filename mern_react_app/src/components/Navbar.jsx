import React from 'react'

const Navbar = () => {
  return (
    <>
     <nav id="navbar">
        <div className="container">
           <div className="nav_wrapper">
            <a href="#" class="logo">
                <img src="./image/Logo.png" alt="Logo"/>
            </a>
               
          
            <ul className="menu">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Resume</a></li>
                <li><a href="#">Testinomials</a></li>
                <li><a href="#">Blog</a></li>
            </ul>
            <button className="common_nav">Contact Us</button>
           </div>
        </div>
       
    </nav>
    </>
  )
}

export default Navbar