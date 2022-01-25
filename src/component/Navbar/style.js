import styled from 'styled-components';
import { Link } from 'react-router-dom';



export const NavbarSection =styled.div `
    padding: 0;
    display:flex;
    overflow: hidden;
    z-index:1;
    background: black;
    color:white;
    position: fixed;
    border-bottom: 1px solid #c9bd93;
    width:100%
    
    
`

export const Logo =styled.div `
    width: 50%;
    float: left;
`

export const LogoText =styled.h2`
    font-size: 25px;
    font-weight: bold
`


export const UlList =styled.ul `
    width: 50%;
    float: left;
    list-style: none;
    padding: 0%;

`

export const ListItem =styled.li `
    display: inline-block;

`

export const Anchor =styled.a `
    display: block;
    text-decoration: none;
    padding: 10px 15px;
    color:white;


    &:hover{
        color: #d1b552
    }
`

export const StyledLink = styled(Link)`
    display: block;
    color:white;
    text-decoration: none;
    padding: 10px 15px;
    font-weight: light;

    &:hover{
        color: #d1b552
    }
`;



