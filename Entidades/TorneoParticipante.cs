namespace Entidades
{
    public class TorneoParticipante
    {
        public int IdTorneoParticipante { get; set; }
        public int TorneoId { get; set; }
        public int IdUsuario { get; set; }
        public int NroRonda { get; set; } = 0;
        public virtual Torneo Torneo { get; set; }
        public virtual Usuario Usuario { get; set; }
    }
}
