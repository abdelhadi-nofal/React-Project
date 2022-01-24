import axios from "axios";
import React ,{Component} from "react";
import {PorfolioItem,PorfolioList,PorfolioSection,PorfolioTitle,Image,ImageWrapper, Overlay, OverlaySpan,Span}from './style.js';



class Portfoilo extends Component {

    state ={
        images : []
    }

    componentDidMount(){
        axios.get('js/data.json').then(res =>{
            this.setState({
                images : res.data.portfolio
            })
        })
    }



    render(){

        const images =this.state.images

        const imagesAll = images.map((imageItem)=>{
            return (
                <ImageWrapper key={imageItem.id}>
                    

                    <Image src={imageItem.image} alt=""/>
                    <Overlay >
                        <OverlaySpan>
                            Show Image
                        </OverlaySpan>
                    </Overlay>
    
                </ImageWrapper>
            )
        })
        return(
            <PorfolioSection id="port">
                <PorfolioTitle><Span>My</Span> Portfolio</PorfolioTitle>
                <PorfolioList>
                    <PorfolioItem active>All</PorfolioItem>
                    <PorfolioItem>HTML</PorfolioItem>
                    <PorfolioItem>Photoshop</PorfolioItem>
                    <PorfolioItem>Wordpress</PorfolioItem>
                    <PorfolioItem>Mobile</PorfolioItem>
                </PorfolioList>
            


            <div className="box">
                {imagesAll}
            </div>
            
        </PorfolioSection>

        )
    }
}





export default Portfoilo;