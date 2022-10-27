using System;
using System.Collections.Generic;

#nullable disable

namespace Entidades
{
    public partial class ProductoTalle
    {
        public int IdProducto { get; set; }
        public int IdTalles { get; set; }

        public virtual Producto IdProductoNavigation { get; set; }
        public virtual Talle IdTallesNavigation { get; set; }
    }
}
