namespace DTOs
{
    public class LoginResponse
    {
        public int Id { get; set; }
        public string JwtToken { get; set; }
        public string Email { get; set; }
        public string NombreCompleto { get; set; }
    }
}
