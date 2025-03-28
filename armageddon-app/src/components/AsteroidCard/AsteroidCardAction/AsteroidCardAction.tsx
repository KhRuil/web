export const AsteroidCardAction = (props: {isDangerous: boolean, onClick: (asteroid: any)=>void}) => {

    const {isDangerous, onClick} = props;
    
        return (<div>
            <div className="">{`Оценка: ${isDangerous ? 'опасен' : 'не опасен'}`}</div>
            <button className="" onClick={onClick}>
            <div className=""> На уничтожение</div>
            </button>
        </div>)
    }