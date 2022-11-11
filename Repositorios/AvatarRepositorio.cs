using Entidades;
using Repositorios.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repositorios
{
    public class AvatarRepositorio:IAvatarRepositorio
    {
        private readonly DevCodeDBContext _dbContext;

        public AvatarRepositorio(DevCodeDBContext dbContext)
        {
            _dbContext = dbContext;
        }

        public void GuardarAvatar(Avatar avatar)
        {
            
                 _dbContext.Avatars.Add(avatar);
                 _dbContext.SaveChanges();
        }

        public Avatar MostrarAvatarPorUsuario(int idUsuario)
        {
            throw new NotImplementedException();
        }

        public void ModificarAvatar(int idUsuario,Avatar avatar)
        {
            Avatar avatarActual = GetAvatarPorId(idUsuario);
            avatarActual.Pelo = avatar.Pelo;
            avatarActual.Ceja = avatar.Ceja;
            avatarActual.ColorDePiel = avatar.ColorDePiel;
            avatarActual.ColorDeOjos = avatar.ColorDeOjos;
            avatarActual.Ropa = avatar.Ropa;
            _dbContext.SaveChanges();
        }

        public Avatar GetAvatarPorId(int idUsuario)
        {
            return _dbContext.Avatars.Find(idUsuario);
        }
    
    }
}
