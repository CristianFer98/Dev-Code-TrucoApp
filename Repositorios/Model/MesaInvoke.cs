using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repositorios.Model
{
    public class MesaInvoke
    {
        public int? idMesa { get; set; }

        public int? idJugadorUno  { get; set; }

        public bool invoke { get; set; }//si es invoke connection.invoke, si es null ingresarMesa


    }
}
