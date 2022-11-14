using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace Servicios.Excepciones
{
    public class DevCodeExcepcion : Exception
    {
        public HttpStatusCode StatusCode { get; private set; }

        public DevCodeExcepcion(HttpStatusCode statusCode)
        {
            StatusCode = statusCode;
        }

        public DevCodeExcepcion(string message, HttpStatusCode statusCode)
            : base(message)
        {
            StatusCode = statusCode;
        }

        public DevCodeExcepcion(string message, Exception innerException, HttpStatusCode statusCode)
            : base(message, innerException)
        {
            StatusCode = statusCode;
        }
    }

}
