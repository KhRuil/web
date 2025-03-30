import { useParams } from "react-router-dom"
import styles from "../static/css/style.css"

export const Asteroid =() =>{
    const {id} = useParams();
    return <div>
        {`Asteroid page ${id}`}</div>
}