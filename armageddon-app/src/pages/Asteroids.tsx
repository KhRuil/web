

import { Header } from "../components/header/Header"
import { AsteroidCard } from "../components/AsteroidCard/AsteroidCard";
import {AsteroidContext} from "../components/asteroids-context/AsteroidsContext";
import { getUserKey } from '../utils/getUserKey';
import styles from "./Asteroids.module.css"
import {useContext, useEffect, useState} from "react";

export const Asteroids =()=>{

   
    const [asteroids, setAsteroids] = useState<{
        name: string;
        date: string;
        distance: {
            kilometers : number;
            lunar: number;
        },
        size: number;
        id: string;
        isDangerous: boolean
    }[]>([]);

    

    
    //хук эффект
    useEffect( ()=>{
        try{
            const result =  fetch(`https://api.nasa.gov/neo/rest/v1/feed?api_key=${getUserKey()}`).then((res)=>{
                return res.json()
               }).then((response)=>{
                  let rawAsteroids = []
                   for (const data in response.near_earth_objects) {     
                       rawAsteroids = rawAsteroids.concat(response.near_earth_objects[data])
                  }
                  const asteroids = rawAsteroids.map(item =>{
                       const size = Math.trunc((item.estimated_diameter.meters.estimated_diameter_max + item.estimated_diameter.meters.estimated_diameter_min)/2)
                       const close = item.close_approach_data[0]
                       const kilometers = Math.trunc(close.miss_distance.kilometers)
                       const lunar = Math.trunc(close.miss_distance.lunar)
                     return {
                       name: item.name, date: close.close_approach_date,
                       size , distance:{kilometers: kilometers, lunar:lunar}, isDangerous: item.is_potentially_hazardous_asteroid,
                       id: item.id
                     }
                  }) 
                  setAsteroids(asteroids)
               })
              
            }catch(err){
                console.log(err)
            }
        
    },[])

   



    const {onlyDangerous, setOnlyDangerous, setDistanceMode} = useContext(AsteroidContext);

    return <div >
        <Header />
        <div className={styles.container}>
        <div onClick={() =>  setOnlyDangerous(!onlyDangerous)}>
            <input type="checkbox" value={onlyDangerous as unknown as string} onChange={()=>setOnlyDangerous(!onlyDangerous)}></input> Показать только опасные
        </div>
        <div>Растояние <button onClick={()=>setDistanceMode(true)}>в километрах</button>,
         <button onClick={()=>setDistanceMode(false)}>в дистанциях от луны</button></div>
         </div>
      

         { onlyDangerous ? asteroids.filter((item)=>item.isDangerous).map((item)=>
         <AsteroidCard key={item.id}  {...item} />) : 
         asteroids.map((item)=><AsteroidCard  key={item.id}  {...item} />)
         }      
        </div>
}
//автоматическая генерация 
const generateAsteroids =()=>{
    const months =[
        'январь',
        'февраль',
        'март',
        'апрель',
        'май',
        'июнь',
        'июль',
        'август',
        'сентябрь',
        'октябрь',
        'ноябрь',
        'декабрь',
    ];
    const characters  = "qwerasdfzxcvtyuighjkbnmopl";
    const result = [];
    
    for (let i=0; i < 10; i++ ){
        const name = characters[(Math.random()*25).toFixed(0)]+characters[(Math.random()*25).toFixed(0)]+characters[(Math.random()*25).toFixed(0)]+characters[(Math.random()*25).toFixed(0)];
        const date = `${(Math.random()*27+1).toFixed(0)} ${months[(Math.random()*11).toFixed(0)]} 2023 ` ;
        const size = (Math.random()*100+10).toFixed(0);
        const distance = (Math.random()*9000000000).toFixed(0);
        const isDangerous = Math.random() < 0.5 ? false : true;
        result.push ({name, date, size, distance, isDangerous, id: name});    
    }
    return result;
}
