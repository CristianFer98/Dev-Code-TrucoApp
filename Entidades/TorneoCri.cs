using System;
using System.Collections.Generic;

#nullable disable

namespace Entidades
{
    public class TorneoCri
    {
        public int IdTorneo { get; set; }
        public int? IdMesaSemiUno { get; set; }
        public int? IdMesaSemiDos { get; set; }
        public int? IdMesaFinal { get; set; }

        public virtual Mesa IdMesaFinalNavigation { get; set; }
        public virtual Mesa IdMesaSemiDosNavigation { get; set; }
        public virtual Mesa IdMesaSemiUnoNavigation { get; set; }
    }
}
