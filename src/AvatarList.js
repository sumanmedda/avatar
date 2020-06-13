import React from 'react';
import './Avatar.css'
import 'tachyons'

const AvatarList = (props) =>{
    return<div className = "mainInfo ma4 pa4 bg-light-green dib grow shadow-4">
        <h1 className = "headingInfo tc" > { props.name }</h1>
        <img className="avatarIds" src={`https://joeschmoe.io/api/v1/${props.name}`} alt="avatar1"></img>
        <p class="tc">{props.work}</p>
    </div>
    
}

export default AvatarList