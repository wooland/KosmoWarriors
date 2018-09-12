using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

namespace SpaceInvaders.Hubs
{
    public class GameHub : Hub
    {
        public async Task SendData(string data)
        {
            await Clients.All.SendAsync("ReceiveData", data);
        }
    }
}
