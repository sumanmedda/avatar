import React, { Component } from 'react';
//import ReactDom from 'react-dom';
import './Avatar.css';
import AvatarList from './AvatarList';
import 'tachyons';

class Avatar extends Component{
        
            constructor(){
                super();
                this.state={
                    name:"This is a react Website"
                }
            }

            nameChange(){
                this.setState({
                    name:"Author of this website is - Suman Medda"
                })
            }
    render() {
            const avatarIdsArray = [
                {
                    id: 1,
                    name: "jQuery",
                    work: "Web Dev"
                },
                {
                    id: 2,
                    name: "React",
                    work: "user Interface"
                },
                {
                    id: 3,
                    name: "Javascript",
                    work: "Simple Interface"
                },
                {
                    id: 4,
                    name: "Nodejs",
                    work: "Backend"
                }
            ];
            const arrayMapCard = avatarIdsArray.map((avatarCard, i) => {
                return <AvatarList key={i} id={avatarIdsArray[i].id} name={avatarIdsArray[i].name} work={avatarIdsArray[i].work} />
            });
            return <div class="mainPage">
                <h1 className="mainHeading tc">{this.state.name}</h1>
                {arrayMapCard}
                <button onClick={() => this.nameChange()} class="">Author of this website</button>
            </div>

        }
    }

export default Avatar