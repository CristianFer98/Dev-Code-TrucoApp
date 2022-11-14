using Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repositorios.Interfaces
{
    public interface IAvatarRepositorio
    {
        public void GuardarAvatar(Avatar avatar);
        public Avatar MostrarAvatarPorUsuario(int idUsuario);
        public void ModificarAvatar(int idUsuario);
    }
}
