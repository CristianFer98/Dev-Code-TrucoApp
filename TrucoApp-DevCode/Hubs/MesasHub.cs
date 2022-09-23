using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Router.Hubs
{
    public class MesasHub : Hub
    {

        public async Task ConnectionSuccess()
        {
            await Clients.All.SendAsync("ReceiveConnection", "Hola a todos");
        }

    }
}
