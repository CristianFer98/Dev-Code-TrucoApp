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

        public virtual DbSet<Avatar> Avatars { get; set; }
        public virtual DbSet<Color> Colors { get; set; }
        public virtual DbSet<Mesa> Mesas { get; set; }
        public virtual DbSet<Producto> Productos { get; set; }
        public virtual DbSet<ProductoColor> ProductoColors { get; set; }
        public virtual DbSet<ProductoTalle> ProductoTalles { get; set; }
        public virtual DbSet<Talle> Talles { get; set; }
        public virtual DbSet<Usuario> Usuarios { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=.\\SQLExpress;Database=DevCodeDB;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "Modern_Spanish_CI_AS");

            modelBuilder.Entity<Avatar>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("Avatar");

                entity.Property(e => e.Ceja).HasMaxLength(50);

                entity.Property(e => e.ColorDeOjos).HasMaxLength(50);

                entity.Property(e => e.ColorDePiel).HasMaxLength(50);

                entity.Property(e => e.Pelo).HasMaxLength(50);

                entity.Property(e => e.Ropa).HasMaxLength(50);

                entity.HasOne(d => d.IdUsuarioNavigation)
                    .WithMany()
                    .HasForeignKey(d => d.IdUsuario)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_usuario");
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

                entity.Property(e => e.NombreCompleto).HasMaxLength(256);

                entity.Property(e => e.Password).HasMaxLength(1024);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
