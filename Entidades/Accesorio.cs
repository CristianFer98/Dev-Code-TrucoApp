using System;
using System.Collections.Generic;

#nullable disable

namespace Entidades
{
    public partial class Accesorio
    {
        public int IdAccesorio { get; set; }
        public string Imagen { get; set; }
        public string Descripcion { get; set; }
        public double? Precio { get; set; }
        public bool? Comprado { get; set; }
    }
}
