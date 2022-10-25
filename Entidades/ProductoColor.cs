using System;
using System.Collections.Generic;

#nullable disable

namespace Entidades
{
    public partial class ProductoColor
    {
        public int IdProducto { get; set; }
        public int IdColor { get; set; }

        public virtual Color IdColorNavigation { get; set; }
        public virtual Producto IdProductoNavigation { get; set; }
    }
}
