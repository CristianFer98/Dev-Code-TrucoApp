using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace Entidades
{
    public partial class DevCodeDBContext : DbContext
    {
        public DevCodeDBContext()
        {
        }

        public DevCodeDBContext(DbContextOptions<DevCodeDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Accesorio> Accesorios { get; set; }
        public virtual DbSet<Avatar> Avatars { get; set; }
        public virtual DbSet<Color> Colors { get; set; }
        public virtual DbSet<Mesa> Mesas { get; set; }
        public virtual DbSet<Producto> Productos { get; set; }
        public virtual DbSet<ProductoColor> ProductoColors { get; set; }
        public virtual DbSet<ProductoTalle> ProductoTalles { get; set; }
        public virtual DbSet<Talle> Talles { get; set; }
        public virtual DbSet<Usuario> Usuarios { get; set; }
        public virtual DbSet<Torneo> Torneos { get; set; }
        public virtual DbSet<TorneoParticipante> TorneoParticipantes { get; set; }
        public virtual DbSet<TorneoPartida> TorneoPartidas { get; set; }
        public virtual DbSet<TorneoCri> TorneoCris { get; set; }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Server=.\\SQLEXPRESS;Database=DevCodeDB;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "Modern_Spanish_CI_AS");

            modelBuilder.Entity<Torneo>(torneo =>
            {
                torneo.ToTable("Torneos");
                torneo.HasKey(t => t.TorneoId);

                torneo.Property(t => t.Nombre).IsRequired().HasMaxLength(512);

                torneo.Property(t => t.CantidadParticipantes).IsRequired();
                torneo.Property(t => t.NroRonda).IsRequired();

                torneo.Property(t => t.Terminado).IsRequired();

                torneo.HasMany(t => t.Participantes)
                    .WithOne(tp => tp.Torneo)
                    .HasForeignKey(tp => tp.TorneoId);
            });

            modelBuilder.Entity<TorneoParticipante>(torneoParticipante =>
            {
                torneoParticipante.ToTable("TorneoParticipantes");
                torneoParticipante.HasKey(t => t.IdTorneoParticipante);

                torneoParticipante.Property(t => t.NroRonda);
                torneoParticipante.HasOne(tp => tp.Torneo)
                    .WithMany(t => t.Participantes)
                    .HasForeignKey(tp => tp.TorneoId);

                torneoParticipante.HasOne(tp => tp.Usuario)
                    .WithMany()
                    .HasForeignKey(tp => tp.IdUsuario);

                torneoParticipante.Ignore(tp => tp.Torneo);
            });

            modelBuilder.Entity<TorneoPartida>(torneoPartida =>
            {
                torneoPartida.ToTable("TorneoPartidas");
                torneoPartida.HasKey(t => t.IdTorneoPartida);

                torneoPartida.Property(t => t.NroRonda);

                torneoPartida.HasOne(tp => tp.Torneo)
                    .WithMany(t => t.Partidas)
                    .HasForeignKey(tp => tp.TorneoId);

                torneoPartida.HasOne(tp => tp.Mesa)
                    .WithMany()
                    .HasForeignKey(tp => tp.IdMesa);

                torneoPartida.Ignore(tp => tp.Torneo);
            });

            modelBuilder.Entity<Accesorio>(entity =>
            {
                entity.HasKey(e => e.IdAccesorio)
                    .HasName("IdAccesorio");

                entity.ToTable("Accesorio");

                entity.Property(e => e.Descripcion)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Imagen)
                    .HasMaxLength(300)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Avatar>(entity =>
            {
                entity.HasKey(e => e.IdUsuarioAvatar)
                    .HasName("IdUsuarioAvatar");

                entity.ToTable("Avatar");

                entity.Property(e => e.IdUsuarioAvatar).ValueGeneratedNever();

                entity.Property(e => e.Ceja).HasMaxLength(50);

                entity.Property(e => e.ColorDeOjos).HasMaxLength(50);

                entity.Property(e => e.ColorDePiel).HasMaxLength(50);

                entity.Property(e => e.Pelo).HasMaxLength(50);

                entity.Property(e => e.Ropa).HasMaxLength(50);
            });

            modelBuilder.Entity<Color>(entity =>
            {
                entity.HasKey(e => e.IdColor)
                    .HasName("IdColor");

                entity.ToTable("Color");

                entity.Property(e => e.Descripcion)
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Mesa>(entity =>
            {
                entity.HasKey(e => e.IdMesa);

                entity.ToTable("Mesa");

                entity.Property(e => e.Estado)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.FechaCreacion).HasColumnType("datetime");

                entity.Property(e => e.Tipo)
                    .IsRequired()
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<Producto>(entity =>
            {
                entity.HasKey(e => e.IdProducto)
                    .HasName("IdProducto");

                entity.ToTable("Producto");

                entity.Property(e => e.CantidadAcomprar).HasColumnName("CantidadAComprar");

                entity.Property(e => e.Descripcion).HasMaxLength(50);

                entity.Property(e => e.Imagen).HasMaxLength(300);

                entity.Property(e => e.Marca).HasMaxLength(20);

                entity.Property(e => e.Medidas).HasMaxLength(50);

                entity.Property(e => e.TipoBaraja).HasMaxLength(20);
            });

            modelBuilder.Entity<ProductoColor>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("ProductoColor");

                entity.HasOne(d => d.IdColorNavigation)
                    .WithMany()
                    .HasForeignKey(d => d.IdColor)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_idColor");

                entity.HasOne(d => d.IdProductoNavigation)
                    .WithMany()
                    .HasForeignKey(d => d.IdProducto)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_idProd");
            });

            modelBuilder.Entity<ProductoTalle>(entity =>
            {
                entity.HasNoKey();

                entity.HasOne(d => d.IdProductoNavigation)
                    .WithMany()
                    .HasForeignKey(d => d.IdProducto)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_prod");

                entity.HasOne(d => d.IdTallesNavigation)
                    .WithMany()
                    .HasForeignKey(d => d.IdTalles)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_talles");
            });

            modelBuilder.Entity<Talle>(entity =>
            {
                entity.HasKey(e => e.IdTalles)
                    .HasName("IdTalles");

                entity.Property(e => e.Descripcion)
                    .HasMaxLength(10)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Usuario>(entity =>
            {
                entity.HasKey(e => e.IdUsuario)
                    .HasName("IdUsuario");

                entity.ToTable("Usuario");

                entity.Property(e => e.Email).HasMaxLength(256);

                entity.Property(e => e.FotoPerfil).IsUnicode(false);

                entity.Property(e => e.NombreCompleto).HasMaxLength(256);

                entity.Property(e => e.Password).HasMaxLength(1024);
            });

            modelBuilder.Entity<TorneoCri>(entity =>
            {
                entity.HasKey(e => e.IdTorneo)
                    .HasName("PK__TorneoCr__7757BBA09BE5FD7C");

                entity.Property(e => e.IdMesaFinal).HasColumnName("IdMesaFinal");

                entity.Property(e => e.IdMesaSemiDos).HasColumnName("IdMesaSemiDos");

                entity.Property(e => e.IdMesaSemiUno).HasColumnName("IdMesaSemiUno");

                entity.HasOne(d => d.IdMesaFinalNavigation)
                    .WithMany()
                    .HasForeignKey(d => d.IdMesaFinal)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("IDFK_FINAL_MESA");

                entity.HasOne(d => d.IdMesaSemiDosNavigation)
                    .WithMany()
                    .HasForeignKey(d => d.IdMesaSemiDos)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("IDFK_SEMIFINAL_MESADOS");

                entity.HasOne(d => d.IdMesaSemiUnoNavigation)
                    .WithMany()
                    .HasForeignKey(d => d.IdMesaSemiUno)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("IDFK_SEMIFINAL_MESAUNO");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
