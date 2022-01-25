import styled from 'styled-components';



export const PorfolioSection =styled.div `
    background: black;
    padding-top: 20px; 
    overflow: hidden;
`

export const PorfolioTitle =styled.h2 `
    text-align: center;
    font-size: 35px;
    color:#d1b552
`

export const Span =styled.span `
    font-weight: normal
`

export const PorfolioList =styled.ul `
    list-style: none;
    text-align: center;
    margin: 20px 0
`

export const PorfolioItem =styled.li`
    display: inline-block;
    width: 100px;
    padding: 10px;
    color : #d1b552

`


export const ImageWrapper =styled.div `
    width: 25%;
    float: left;
    font-size: 0;
    position: relative;
    &:hover > div{
        opacity: 1


        
    }
    `

export const Image =styled.img `
    width: 100%
`


export const Overlay =styled.div `
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(209, 181, 82 , 0.5);
    font-size: 15px;
    opacity: 0
    
`

export const OverlaySpan =styled.span `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background: #fff;
    display: block;
    padding: 10px 20px;
    cursor: pointer;
    border: 2px solid #d1b552;

`



