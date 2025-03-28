import styles from "./AsteroidCard.module.css"
import {AsteroidContext} from "../asteroids-context/Asteroids-Context";
import { AsteroidCardAction } from "./AsteroidCardAction/AsteroidCardAction"
import { AsteroidCardImage } from "./AsteroidCardImage/AsteroidCardImage"
import { AsteroidCardContentContaier } from "../AsteroidCard/AsteroidCardContent/AsteroidCardContentContainer";
import React, {useContext} from "react";

type AsteroidCardProps = {
    name: string;
    date: string;
    distance: {
      kilometers: number;
      lunar: number;
    };
    size: number;
    isDangerous: boolean;
  };



export const AsteroidCard =(props:AsteroidCardProps)=>{
    const {name, date, distance, size, isDangerous} = props;
    const {addAsteroid} = useContext(AsteroidContext)
    return <div className={styles.container}>
    <div className={isDangerous ? styles.cardRed : styles.regvlarCard}>
        <AsteroidCardImage />
       <AsteroidCardContentContaier name={name} date={date} distance={distance} size={size}/> 
       <AsteroidCardAction isDangerous={isDangerous} onClick={()=>addAsteroid(props)}/>
    </div>
   
 </div>
}