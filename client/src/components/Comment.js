import React, {useState} from 'react';
import DefaultImage from '../images/default-profile-picture.png'


export default function Comment(props){
  
    return(
      <div className="comment">
          <div classname="commenter">
            <img src={DefaultImage} className="commenter-picture" alt="user"/>
            <div className="commenter-username">{props.commenter}</div>
          </div>
          <p className="text">{props.text}</p>
          <div className="date">{props.date}</div>
      </div>
    )
  }