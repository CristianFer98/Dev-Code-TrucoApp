using System;
using System.Collections.Generic;

#nullable disable

namespace Entidades
{
    public partial class Producto
    {
        public int IdProducto { get; set; }
        public string Descripcion { get; set; }
        public string Imagen { get; set; }
        public double? Precio { get; set; }
        public int? CantidadAcomprar { get; set; }
        public int? Stock { get; set; }
        public string Medidas { get; set; }
        public string Marca { get; set; }
        public string TipoBaraja { get; set; }
    }
}
