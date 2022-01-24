import React from "react";
import {WorkSection,WorkTitle,Span,WorkPart, PartTitle, PartDesc, Icon, Line} from './style.js';
import axios from 'axios';
import { Component } from "react";

class Work extends Component {

    state = {
        works :[]
    }

    componentDidMount(){
        axios.get('js/data.json').then(res =>{
            console.log(res)
        })
    }

    render(){

        // const works =this.state.works

        // const worksList = works.map((workItem)=>{
        //     return (
        //         <WorkPart first={workItem.id} key={workItem.id}>
        //             <Icon className={workItem.icon_name}></Icon>
        //             <PartTitle>{workItem.title}</PartTitle>
        //             <Line/>
        //             <PartDesc>
        //                 {workItem.body}
        //             </PartDesc>
        //          </WorkPart>
        //     )
        // })

        return (
            <WorkSection id="work">
            <div className="container">
                <WorkTitle><Span>My</Span> Work</WorkTitle>
                {/* {worksList} */}
            </div>
        </WorkSection>

        )
    }
}




export default Work;