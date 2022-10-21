using System;
using System.Collections.Generic;

#nullable disable

namespace Entidades
{
    public partial class Avatar
    {
        public int IdUsuario { get; set; }
        public string Pelo { get; set; }
        public string Ceja { get; set; }
        public string ColorDePiel { get; set; }
        public string ColorDeOjos { get; set; }
        public string Ropa { get; set; }

        public virtual Usuario IdUsuarioNavigation { get; set; }
    }
}
