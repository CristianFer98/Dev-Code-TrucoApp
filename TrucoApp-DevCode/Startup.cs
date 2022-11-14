using Entidades;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Repositorios;
using Repositorios.Interfaces;
using Router.Hubs;
using Servicios;
using Servicios.Interfaces;
using System.Collections.Generic;

namespace Router
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            services.AddControllersWithViews();

            services.AddSignalR().AddAzureSignalR(Configuration.GetConnectionString("Azure:SignalR:ConnectionString"));

            // In production, the React files will be served from this directory
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp/build";
            });

            services.AddSingleton<IDictionary<string, UserConnection>>(opts => new Dictionary<string, UserConnection>());

            services.AddDbContext<DevCodeDBContext>(options => options.UseLazyLoadingProxies().UseSqlServer(Configuration.GetConnectionString("DevCodeDBContext")));

            services.AddTransient<DevCodeDBContext>();
            services.AddScoped<IMesaRepositorio, MesaRepositorio>();
            services.AddScoped<IUsuarioRepositorio, UsuarioRepositorio>();
            services.AddScoped<IAvatarRepositorio, AvatarRepositorio>();
            services.AddScoped<IProductoRepositorio, ProductoRepositorio>();
            services.AddScoped<IColorRepositorio,ColorRepositorio>();
            services.AddScoped<ITalleRepositorio, TalleRepositorio>();
            services.AddScoped<IAccesorioRepositorio, AccesorioRepositorio>();
            services.AddScoped<ITorneoRepositorio, TorneoRepositorio>();
            services.AddScoped<IMesaServicio, MesaServicio>();
            services.AddScoped<IUsuarioServicio, UsuarioServicio>();
            services.AddScoped<IAvatarServicio, AvatarServicio>();
            services.AddScoped<IProductoServicio, ProductoServicio>();
            services.AddScoped<IColorServicio, ColorServicio>();
            services.AddScoped<ITalleServicio, TalleServicio>();
            services.AddScoped<IAccesorioServicio, AccesorioServicio>();
            services.AddScoped<ITorneoServicio, TorneoServicio>();

            services.AddCors(options =>
            {
                options.AddPolicy("CORSPolicy",
                    builder =>
                    {
                        builder
                        .AllowAnyMethod()
                        .AllowAnyHeader()
                        .AllowCredentials()
                        .WithOrigins("https://localhost:3000");
                    });
            });

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseSpaStaticFiles();

            app.UseRouting();
            app.UseCors("CORSPolicy");

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapHub<MesasHub>("/mesashub");

                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller}/{action=Index}/{id?}");

            });

            app.UseSpa(spa =>
            {
                spa.Options.SourcePath = "ClientApp";

                if (env.IsDevelopment())
                {
                    spa.UseReactDevelopmentServer(npmScript: "start");
                }
            });
        }
    }
}
