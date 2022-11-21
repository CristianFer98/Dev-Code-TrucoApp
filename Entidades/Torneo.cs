using System.Collections.Generic;

namespace Entidades
{
    public class Torneo
    {
        public int IdTorneo { get; set; }
        public string Nombre { get; set; }
        public int CantidadParticipantes { get; set; }
        public bool Terminado { get; set; } = false;
        public int nroRonda { get; set; } = 0;
        public virtual ICollection<TorneoPartida> Partidas { get; set; }
        public virtual ICollection<TorneoParticipante> Participantes { get; set; }

        public bool EstaLleno()
        {
            return Participantes.Count >= CantidadParticipantes;
        }
    }
}
