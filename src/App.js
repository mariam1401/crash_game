import './App.css';
import Game from "./container/Hunting_Game/hunting_game";
import Loading_game from "./component/states/Loading/loading_game";
import {useEffect, useState} from "react";
import { w3cwebsocket as W3CWebSocket } from "websocket";
// const client = new W3CWebSocket('ws://18.156.177.65:8080/crash/socket')
 // import Stomp from "@stomp/stompjs"
import Sky from "./component/sky_animation/sky";
import Loading from "./component/states/loading/loading";
function App() {
  const [finish,setFinish]=useState(false)
  const [isLoading,setLoading]=useState(0)
  //
  // useEffect(()=>{
  //   let socket = new WebSocket('wss://socketsbay.com/wss/v2/2/demo/')
  //   socket.onopen = function(e) {
  //     console.log('connected')
  //   };
  //   socket.onmessage = function(event) {
  //     console.log('message')
  //   };
  //   socket.onerror = function(error) {
  //     console.log('error')
  //   };
  //   const client = new W3CWebSocket('ws://18.156.177.65:8080/crash/socket')
  //   client.onopen=()=>{
  //     console.log('connected')
  //   }
  //   client.onmessage=(message)=>{
  //     console.log(message.data,'data')
  //   }
  //   client.onerror=()=>{
  //     console.log('error')
  //   }
  // },[])



  // Object.assign(global, { WebSocket: require('ws') });
  // let client = new Stomp.Client({
  //     brokerURL: "ws://18.156.177.65:8080/crash/socket",
  //     onConnect: () => {
  //         console.log("connected");
  //         client.subscribe('/crash/state', message => {
  //             console.log(message.body);
  //         })
  //     },
  //     onStompError: receipt => {
  //         console.log(receipt.body);
  //     },
  //     onWebSocketError: evt => {
  //         console.log(evt);
  //     },
  // });
  // client.activate();

  useEffect(() => {
    const interval = setInterval(() => {
      if (isLoading >= 100) {
        setFinish(!finish)
        return () => clearInterval(interval);
      }
      setLoading(width => width + 5)
      return isLoading
    }, 40);
    return () => clearInterval(interval);
  }, [isLoading]);

  return (
      <div className="App">
        {finish ? <Game finish={finish}/> : <Loading_game width={isLoading}/>}
        <Game/>
      </div>
  );
}
export default App;
