using Entidades;
using Repositorios.Interfaces;
using System.Linq;

namespace Repositorios
{
    public class UsuarioRepositorio : IUsuarioRepositorio
    {
        private readonly DevCodeDBContext _dbContext;

        public UsuarioRepositorio(DevCodeDBContext dbContext)
        {
            _dbContext = dbContext;
        }

        public Usuario BuscarUsuarioPorMail(string email)
        {
            return _dbContext.Usuarios.Where(x => x.Email == email).FirstOrDefault(); 
        }

        public Usuario GuardarUsuario(Usuario usuario)
        {
            _dbContext.Usuarios.Add(usuario);
            _dbContext.SaveChanges();
            return usuario;
        }
    }
}
