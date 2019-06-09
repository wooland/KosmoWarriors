"use strict";

var connection = new signalR.HubConnectionBuilder().withUrl("/GameHub").build();

connection.on("ReceiveData", function (data) {
    
    var daList = document.getElementById("messagesList")
    daList.prepend(data);
        
}); 