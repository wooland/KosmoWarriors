"use strict";

var connection = new signalR.HubConnectionBuilder().withUrl("/GameHub").build();

connection.on("ReceiveData", function (data) {
    
    document.getElementById("messagesList").appendChild(data);
});