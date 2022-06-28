import React from "react";
import './App.css';
import Game from "./container/Hunting_Game/hunting_game";
import Loading_game from "./component/states/Loading/loading_game";
import {useEffect, useState} from "react";
function App() {
  const [finish,setFinish]=useState(false) /* for game loading */
  const [isLoading,setLoading]=useState(0)  /* for game loading */
  useEffect(() => {
    const interval = setInterval(() => {
      if (isLoading >= 100) {
        setFinish(!finish)
        return () => clearInterval(interval);
      }
      setLoading(width => width + 5)
      return isLoading
    }, 90);
    return () => clearInterval(interval);
  }, [isLoading]);
  return (
      <div className="App">
        {finish ? <Game/> : <Loading_game width={isLoading}/>}
      </div>
  );
}
export default App;
