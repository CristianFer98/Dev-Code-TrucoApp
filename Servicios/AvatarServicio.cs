using Entidades;
using Repositorios.Interfaces;
using Servicios.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Servicios
{
    public class AvatarServicio : IAvatarServicio
    {
        private readonly IAvatarRepositorio _avatarRepositorio;

        public AvatarServicio(IAvatarRepositorio avatarRepositorio)
        {
            _avatarRepositorio = avatarRepositorio;
        }
        public void GuardarAvatar(int idUsuario, string pelo, string ceja,string colorDeOjos, string colorDePiel, string ropa)
        {
            var avatar = new Avatar
            {
                IdUsuarioAvatar = idUsuario,
                Pelo = pelo,
                Ceja = ceja,
                ColorDeOjos = colorDeOjos,
                ColorDePiel=colorDePiel,
                Ropa=ropa
                
            };

            _avatarRepositorio.GuardarAvatar(avatar);
            //throw new NotImplementedException();
        }

        public Avatar MostrarAvatarPorUsuario(int idUsuario)
        {
            return _avatarRepositorio.MostrarAvatarPorUsuario(idUsuario);
        }

        public void ModificarAvatar(int idUsuario, string pelo, string ceja, string colorDeOjos, string colorDePiel, string ropa)
        {
            var avatar = new Avatar
            {
                IdUsuarioAvatar = idUsuario,
                Pelo = pelo,
                Ceja = ceja,
                ColorDeOjos = colorDeOjos,
                ColorDePiel = colorDePiel
            };

            _avatarRepositorio.ModificarAvatar(idUsuario, avatar);
        }

        public Avatar GetAvatarPorId(int idUsuario)
        {
            return _avatarRepositorio.GetAvatarPorId(idUsuario);
        }
    }
}
