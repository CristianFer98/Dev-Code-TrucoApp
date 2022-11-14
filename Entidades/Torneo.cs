using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entidades
{
    public class Torneo
    {
        public Guid IdTorneo { get; set; }
        public string Nombre { get; set; }
        public int EtapaTorneo { get; set; }
        public bool HabilitadoJugar { get; set; }
        [JsonIgnore]
        public virtual ICollection<Mesa> Mesas { get; set; }
    }
}
