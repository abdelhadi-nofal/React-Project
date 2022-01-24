import React from "react";
import { Link } from "react-router-dom";
import {NavbarSection,Logo,LogoText,UlList,ListItem,Anchor,StyledLink} from './style.js'



const Navbar = ()=> {

    return(

        <NavbarSection>
            
            <div className="container">
                
                <Logo>
                    <LogoText>Ultra Profile</LogoText>
                </Logo>
                
                
                <UlList>
                    <ListItem><StyledLink to='/'>Home</StyledLink></ListItem>
                    <ListItem><Anchor href="#work">Work</Anchor></ListItem>
                    <ListItem><Anchor href="#port">Portfolio</Anchor></ListItem>
                    <ListItem><Anchor href="#res">Resume</Anchor></ListItem>
                    <ListItem><Anchor href="#about">About</Anchor></ListItem>
                    <ListItem><StyledLink to='/contact'>Contact</StyledLink></ListItem>
                </UlList>
                
            </div>
            
        </NavbarSection>
            

    
    )

}


export default Navbar;