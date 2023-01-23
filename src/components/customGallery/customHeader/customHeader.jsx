import React from "react";
import './customHeader.css';
import {useEffect} from "react";

export default function CustomHeader(props) {
    useEffect(()=>{
        console.log({...props});
    });

    return (
        <div className="customHeader">
            {props.leftElements && props.leftElements.length > 0 && <div className="leftElements">
                {props.leftElements}
            </div>}
            {props.centerElements && props.centerElements.length > 0 && <div className="centerElements">
                {props.centerElements}
            </div>}
            {props.rightElements && props.rightElements.length > 0 && <div className="rightElements">
                {props.rightElements}
            </div>}
            
        </div>
    )
}