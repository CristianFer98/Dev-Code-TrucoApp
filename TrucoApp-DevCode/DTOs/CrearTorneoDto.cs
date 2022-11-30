using Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TrucoApp.DTOs
{
    public class CrearTorneoDto
    {
        public int Usuario { get; set; }
        public string Nombre { get; set; }
        public int CantidadParticipantes { get; set; }
    }
}
