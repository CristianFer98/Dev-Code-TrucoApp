using Entidades;

namespace Repositorios.Interfaces
{
    public interface IUsuarioRepositorio
    {
        Usuario GuardarUsuario(Usuario usuario);
        Usuario BuscarUsuarioPorMail(string email);
        public void AgregarFotoPerfil(int idUsuario, string imagen);
    }
}
