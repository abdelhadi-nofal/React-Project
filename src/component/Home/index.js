import React from "react";
import './style.js';
import { HomeSection,HomeInformation,HomeTitle,HomeInfo,HomeDesc,Span,HomeButton } from "./style.js";

const Home = ()=> {

    return(
        <HomeSection>
            <div className="container">
                <HomeInformation>
                    <HomeTitle>Abdel Hadi Nofal</HomeTitle>
                    <HomeInfo>Frontend Developer</HomeInfo>
                    <HomeDesc>
                        Iam a professional <Span>UX Designer</Span> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
                    </HomeDesc>
                    <HomeButton>Let's Begin</HomeButton>
                </HomeInformation>
            </div>
        </HomeSection>
    )

}


export default Home;