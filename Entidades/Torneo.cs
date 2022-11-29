using System.Collections.Generic;

namespace Entidades
{
    public class Torneo
    {
        public int TorneoId { get; set; }
        public string Nombre { get; set; }
        public int CantidadParticipantes { get; set; }
        public bool Terminado { get; set; }
        public int NroRonda { get; set; } = 0;
        public bool estaleno { get; set; }
        public virtual ICollection<TorneoPartida> Partidas { get; set; }
        public virtual ICollection<TorneoParticipante> Participantes { get; set; }

        public bool EstaLleno()
        {
            return Participantes.Count >= CantidadParticipantes;
        }
    }
}
