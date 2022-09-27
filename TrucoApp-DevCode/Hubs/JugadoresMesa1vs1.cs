using Servicios.Juego;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Router.Hubs
{
    public class JugadoresMesa1vs1
    {
        public int JugadorUno { get; set; }
        public int JugadorDos { get; set; }
        public List<Carta> CartasRepartidas { get; set; }

    }

}
