import React from "react";
import './App.css';
import Game from "./container/Hunting_Game/hunting_game";
import Loading_game from "./component/states/loading_game/loading_game";
import {useEffect, useState} from "react";
import FullScreenComponent from "react-easyfullscreen";
function App() {
  const [finish,setFinish]=useState(false)
  const [startGame,setStartGame]=useState(false)
  const [isLoading,setLoading]=useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      if (isLoading >=100){
        setStartGame(true)
      }

      if (isLoading >= 105) {
        setFinish(!finish)
        return () => clearInterval(interval)}
      setLoading(width => width + 5)
      return isLoading
    }, 90);
    return () => clearInterval(interval);
  }, [isLoading]);
  return (
      <FullScreenComponent>
        {({onToggle }) => (
      <div className="App" >
        {startGame ? <Game  onClick={()=>onToggle()}/> : <Loading_game width={isLoading}/>}
      </div>
            )}
      </FullScreenComponent>
  );
}
export default App;
