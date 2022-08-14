/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import React from "react";

import  classes from '../card/card.module.css'
const Card = props =>(
    <div className={classes.Card}>
        <div className={classes.img}>
        <Image src={props.image}/> </div>
        <h3>{props.title}</h3>
        <p>{props.text}</p>
       
    </div>
)

export default Card;