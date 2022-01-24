import axios from "axios";
import React,{Component} from "react";
import {ProfileSkills ,ProfileSkillsProfile,SkillsPercentSpan,ProfileTile,SkillsTile,SkillsPercent,SkillsPercentSp1,ProfileList,ListItem,SkillsPerc,Span,SpanWeb,Skills,SkillsTitle,SkillsDesc,SkillsBar} from './style.js';


class Profile extends Component{

    state = {
        profiledata:[]
    }

    componentDidMount(){
        axios.get('js/data.json').then( res =>{
            this.setState({
                profiledata : res.data.profile
            })
        })
    }


    render(){

        const profiledata = this.state.profiledata

        const profData = profiledata.map((sindata)=>{
            return(
                // console.log(sindata.topic)


                <SkillsBar key={sindata.id} id="res">
                    <SkillsTitle>{sindata.topic}</SkillsTitle>
                    <SkillsPerc>{sindata.perc}</SkillsPerc>
                    <SkillsPercent>
                        <SkillsPercentSpan>
                            <SkillsPercentSp1></SkillsPercentSp1>
                            </SkillsPercentSpan>
                    </SkillsPercent>
                </SkillsBar>
                        

                    




            )
        })

        return(
            <ProfileSkills>
                <div className="container">

                <ProfileSkillsProfile>
                        <ProfileTile><Span>My</Span>Profile</ProfileTile>
                        <ProfileList>
                            <ListItem>
                                <Span>Name</Span>
                                Abdel Hadi Nofal
                            </ListItem>
                            <ListItem>
                                <Span>Birthday</Span>
                                19/7/1993

                            </ListItem>
                            <ListItem>
                                <Span>Address</Span>
                                Amman - Jordan

                            </ListItem>
                            <ListItem>
                                <Span>Phone</Span>
                                +962 788240201

                            </ListItem>
                            <ListItem>
                                <Span>Email</Span>
                                hadinofal1993@gmail.com

                            </ListItem>
                            <ListItem>
                                <Span>GitHub</Span>
                                <SpanWeb>GitHub</SpanWeb>
                            </ListItem>
                        </ProfileList>

                    </ProfileSkillsProfile>

                    <Skills>
                        <SkillsTile> <Span>Some</Span>  Skills</SkillsTile>
                        <SkillsDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                        </SkillsDesc>
                            {profData}
                        
                    </Skills>
                    
                </div>
            </ProfileSkills>
        )
    }
}



export default Profile;