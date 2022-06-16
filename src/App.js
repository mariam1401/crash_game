import React from "react";
import './App.css';
import Game from "./container/Hunting_Game/hunting_game";
import Loading_game from "./component/states/Loading/loading_game";
import {useEffect, useState} from "react";
function App() {
  const [finish,setFinish]=useState(false) /* for game loading */
  const [isLoading,setLoading]=useState(0)  /* for game loading */
  // const [multiplier,setMultiplier] = useState()
  // const [completed,setCompleted]=useState(false)
  // const [allowBet,setAllowBet]=useState(false)

//     useEffect(()=> {
//     const Stomp = require("@stomp/stompjs");
//     Object.assign(global, {WebSocket: require('isomorphic-ws')});
//     let client = new Stomp.Client({
//         brokerURL: "ws://18.156.177.65:8080/crash/socket",
//         onConnect: () => {
//             console.log('connected')
//             client.subscribe('/crash/bet', message => {
//                 const allowBetting = JSON.parse(message.body)
//                 setAllowBet(allowBetting.allow)
//                 // console.log(allowBetting.allow,'allowBetting')
//             })
//             client.subscribe('/crash/state', message => {
//                  const multi= JSON.parse(message.body)
//                  setMultiplier(multi.multiplier)
//                  setCompleted(multi.completed)
//                 // console.log(multi.completed,'completed')
//             })
//         },
//         onStompError: receipt => {
//             console.log(receipt.body);
//         }, onWebSocketError: evt => {
//             console.log(evt);
//         },
//     });
//     client.activate();
// },[])

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
  // console.log(multiplier,'number')
  return (
      <div className="App">
        {finish ? <Game
            // multiplier={multiplier}
            // completed={completed}
            // allowBetting={allowBet}
        /> : <Loading_game width={isLoading}/>}
      </div>
  );
}
export default App;
