namespace Entidades
{
    public class TorneoParticipante
    {
        public int IdTorneoParticipante { get; set; }
        public int IdTorneo { get; set; }
        public int IdUsuario { get; set; }
        public virtual Torneo Torneo { get; set; }
        public virtual Usuario Usuario { get; set; }
    }
}
