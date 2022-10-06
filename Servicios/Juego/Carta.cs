using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Servicios.Juego
{
    public class Carta
    {

        public int Id { get; set; }
        public int Numero { get; set; }
        public string Palo { get; set; }
        public int RankingValorTruco { get; set; }
        public int RankingValorEnvido { get; set; }
        public string Imagen { get; set; }

        public Carta(int id, int numero, string palo, int rankingValorTruco, int rankingValorEnvido, string imagen)
        {
            Id = id;
            Numero = numero;
            Palo = palo;
            RankingValorTruco = rankingValorTruco;
            RankingValorEnvido = rankingValorEnvido;
            Imagen = imagen;
        }

    }
}
