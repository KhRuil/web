import { useContext } from "react";
import {AsteroidContext} from "../AsteroidCardContent/AsteroidCardContentContainer";

type AsteroidCardContentProps = {
    name: string;
    date: string;
    distance: {
      kilometers: number;
      lunar: number;
    };
    size: number;
    distanseMode: boolean;
    
  };

export const AsteroidCardContent = (props:AsteroidCardContentProps) => {
    const {name, date, distance, size, distanseMode} = props;
   

    return ( <div>
        <div className="">{name}</div>
        <div className="">{`Дата: ${date}`}</div>
        <div className="">
            {distanseMode ? `Растояние: ${distance.kilometers} км`: `Растояние: ${distance.lunar} лун`}
        </div>
        <div className="">{`Размер: ${size} м`}</div>
    </div>
    )
}