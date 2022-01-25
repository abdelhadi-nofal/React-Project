import React from "react";
import './style.css';


const SocialMedia = ()=> {

    return(
            <section className="footer">

            <div className="share">
                <a href="#" className="fab fa-facebook-f"></a>
                <a href="#" className="fab fa-twitter"></a>
                <a href="#" className="fab fa-instagram"></a>
                <a href="#" className="fab fa-linkedin"></a>
                <a href="#" className="fab fa-pinterest"></a>
            </div>

            <div className="links">
                <a href="#">Home</a>
                <a href="#">Work</a>
                <a href="#">Portfolio</a>
                <a href="#">Resume</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </div>


            </section>
    )

}


export default SocialMedia;