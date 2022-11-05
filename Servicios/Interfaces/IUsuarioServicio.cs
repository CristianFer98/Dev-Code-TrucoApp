using Entidades;

namespace Servicios.Interfaces
{
    public interface IUsuarioServicio
    {
        Usuario Registrar(string email, string password, string nombreCompleto);
        Usuario Login(string email, string password);
        string FirmarToken(Usuario usuario);
    }
}
