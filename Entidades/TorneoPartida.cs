namespace Entidades
{
    public class TorneoPartida
    {
        public int IdTorneoPartida { get; set; }
        public int IdTorneo { get; set; }
        public int IdMesa { get; set; }
        public int NroRonda { get; set; } = 0;
        public virtual Torneo Torneo { get; set; }
        public virtual Mesa Mesa { get; set; }
    }
}
