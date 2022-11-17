using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

#nullable disable

namespace Entidades
{
    public partial class Mesa
    {
        public int IdMesa { get; set; }
        public int CantidadJugadores { get; set; }
        public int JugadorUno { get; set; }
        public int? JugadorDos { get; set; }
        public string Tipo { get; set; }
        public string Estado { get; set; }
        public DateTime FechaCreacion { get; set; }
        public int? Ganador { get; set; }
    }
}
