using Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Servicios.Interfaces
{
    public interface IAvatarServicio
    {
        public void GuardarAvatar(int idUsuario, string pelo, string ceja, string colorDeOjos, string colorDePiel, string ropa);
        public Avatar MostrarAvatarPorUsuario(int idUsuario);
        public void ModificarAvatar(int idUsuario, string pelo, string ceja, string colorDeOjos, string colorDePiel, string ropa);
        public Avatar GetAvatarPorId(int idUsuario);

    }
}
