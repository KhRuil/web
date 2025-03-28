import { Link } from "react-router-dom"
import styles from "./Header.module.css"
import {getUserKey} from "../../utils/getUserKey";
import {memo, useState} from "react";

export const Header = memo(()=>{

    const [inputOpened, setInputOpened] = useState(false)

    return ( <div className={styles.container}>
            <div >
                <h1>ARMAGGEDON V</h1>
                <div><p>Сервис мониторнинга и уничтожения астеройдов, опасно приближающихся к Земле.</p></div>
            </div>
            <div className={styles.Link}>
                <p>
                <Link to={"/asteroids"}>Астероиды</Link> / <Link to={"/desroyment"}>Уничтожение</Link>
                </p>
            </div>
            <div>
          {getUserKey() === "DEMO_KEY" ? (
            <button className="" onClick={()=>setInputOpened(!inputOpened)}>Unauthorized</button>) : (<div>Api key provided</div>
          )}
        </div>
          {inputOpened ? <input onChange={(ev)=>{
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            if (ev.target.value.length == 40) {
              localStorage.setItem("API_KEY", ev.target.value);
              setInputOpened(false)
            }
          }}/> : null}
      </div>
    );
})

Header.displayName = "Header";