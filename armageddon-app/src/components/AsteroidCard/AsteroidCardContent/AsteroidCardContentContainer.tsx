import {useContext} from "react";
import {AsteroidContext} from "../../asteroids-context/Asteroids-Context";
import {AsteroidCardContent} from "./AsteroidCardContent";

export const AsteroidCardContentContaier = (props)=>{
    const {DistanceLuna} = useContext(AsteroidContext);
    return <AsteroidCardContent {...props} DistanceLuna={DistanceLuna} />
}