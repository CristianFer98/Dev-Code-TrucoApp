using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Threading.Tasks;
using MercadoPago.Client.Payment;
using MercadoPago.Client.Preference;
using MercadoPago.Config;
using MercadoPago.Resource.Payment;
using MercadoPago.Resource.Preference;

namespace Servicios
{
    public class MercadoPagoServicio
    {
       // public string IdPreferencia { get; set; }
        public async Task<string> MercadoPagoAsync(int precioProducto, string descripcionProducto, int cantidadProducto)
        {

            MercadoPagoConfig.AccessToken = "TEST-41867053796882-111310-baff4998148b6b468919b60c499f6416-822844930";

            // Crea el objeto de request de la preferencia
            var request = new PreferenceRequest
            {
                Items = new List<PreferenceItemRequest>
                {
                    new PreferenceItemRequest
                    {
                        Title = descripcionProducto,
                        Quantity = cantidadProducto,
                        CurrencyId = "ARS",
                        UnitPrice = precioProducto,
                    },
                },

            };
            // Crea la preferencia
            var client = new PreferenceClient();
            Preference preference = await client.CreateAsync(request);
            string json = JsonSerializer.Serialize(preference.Id);
            return json;
            

        }

    }
}
