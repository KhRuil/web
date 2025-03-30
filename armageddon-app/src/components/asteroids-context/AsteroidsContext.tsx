import React, {createContext, FC, useState} from "react";

export const AsteroidContext = createContext(null);

type AsteroidsContextProviderProps = {
    children ?: React.ReactNode;
}

export const AsteroidsContextProvider: FC<AsteroidsContextProviderProps> = ({children})=>{

    const [onlyDangerous, setOnlyDangerous] = useState(false);
    const [distanceMode, setDistanceMode] = useState(false);

    const [destroyment, setDestroyment] = useState([]);



    const addAsteroid=(asteroid)=>{
        setDestroyment([...destroyment.filter(item=>item.id !== asteroid.id), asteroid])
    }

    const deleteAsteroid=(asteroid)=>{
        setDestroyment([...destroyment.filter(item=>item.id !== asteroid.id)])
    }

     return (
       <AsteroidContext.Provider
           value={{
               onlyDangerous,
               setOnlyDangerous,
               distanceMode,
               setDistanceMode,
               addAsteroid,
               destroyment,
       }}
       >
         {children}
       </AsteroidContext.Provider>
     );
}