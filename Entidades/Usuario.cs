using System;
using System.Collections.Generic;

#nullable disable

namespace Entidades
{
    public partial class Usuario
    {
        public Usuario()
        {
            TorneoParticipantes = new HashSet<TorneoParticipante>();
        }

        public int IdUsuario { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string NombreCompleto { get; set; }
        public string FotoPerfil { get; set; }

        public virtual ICollection<TorneoParticipante> TorneoParticipantes { get; set; }
    }
}
