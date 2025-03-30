import {useContext} from "react";
import {AsteroidContext} from "../../asteroids-context/AsteroidsContext";
import {AsteroidCardContent} from "./AsteroidCardContent";

export const AsteroidCardContentContaier = (props)=>{
    const {distanceMode} = useContext(AsteroidContext);
    return <AsteroidCardContent {...props} distanceMode={distanceMode} />
}