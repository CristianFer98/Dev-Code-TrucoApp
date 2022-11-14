using Entidades;
using Repositorios.Interfaces;

namespace Repositorios
{
    public class UsuarioRepositorio : IUsuarioRepositorio
    {
        private readonly DevCodeDBContext _dbContext;

        public UsuarioRepositorio(DevCodeDBContext dbContext)
        {
            _dbContext = dbContext;
        }

        public Usuario GuardarUsuario(Usuario usuario)
        {
            _dbContext.Usuarios.Add(usuario);
            _dbContext.SaveChanges();
            return usuario;
        }
    }
}
