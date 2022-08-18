// import {useEffect} from "react";
const {useEffect} = require("react");
const {unwrapResult} = require("@reduxjs/toolkit");
const test = ()=> {

    useEffect(() => {
        const Stomp = require("@stomp/stompjs");

        Object.assign(global, {WebSocket: require('isomorphic-ws')});
        let client = new Stomp.Client({
            brokerURL: "ws://18.156.177.65:8080/crash/socket",
            onConnect: () => {
                // console.log("connected");
                client.subscribe('/crash/state', message => {
                    console.log(message.body);
                })
            },
            onStompError: receipt => {
                console.log(receipt.body);
            },
            onWebSocketError: evt => {
                console.log(evt);
            },

        });
        client.activate();
    }, [])
}