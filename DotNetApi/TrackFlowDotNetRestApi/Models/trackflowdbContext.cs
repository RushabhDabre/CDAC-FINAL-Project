using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace TrackFlowDotNetRestApi.Models
{
    public partial class trackflowdbContext : DbContext
    {
        public trackflowdbContext()
        {
        }

        public trackflowdbContext(DbContextOptions<trackflowdbContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Designation> Designations { get; set; } = null!;
        public virtual DbSet<Employee> Employees { get; set; } = null!;
        public virtual DbSet<Login> Logins { get; set; } = null!;
        public virtual DbSet<Project> Projects { get; set; } = null!;
        public virtual DbSet<Role> Roles { get; set; } = null!;
        public virtual DbSet<Task> Tasks { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseMySql("server=localhost;port=3306;user=root;password=root;database=trackflowdb", Microsoft.EntityFrameworkCore.ServerVersion.Parse("8.0.31-mysql"));
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.UseCollation("utf8mb4_0900_ai_ci")
                .HasCharSet("utf8mb4");

            modelBuilder.Entity<Designation>(entity =>
            {
                entity.ToTable("designation");

                entity.Property(e => e.Designationid).HasColumnName("designationid");

                entity.Property(e => e.DesignationName)
                    .HasMaxLength(255)
                    .HasColumnName("designation_name");
            });

            modelBuilder.Entity<Employee>(entity =>
            {
                entity.HasKey(e => e.Empid)
                    .HasName("PRIMARY");

                entity.ToTable("employees");

                entity.HasIndex(e => e.LoginId, "UK_lo0aqea2uilso5tj35u8c05w")
                    .IsUnique();

                entity.HasIndex(e => e.DesignationId, "designation_id");

                entity.Property(e => e.Empid).HasColumnName("empid");

                entity.Property(e => e.Basicsal).HasColumnName("basicsal");

                entity.Property(e => e.Contact)
                    .HasMaxLength(255)
                    .HasColumnName("contact");

                entity.Property(e => e.Currentaddress)
                    .HasMaxLength(255)
                    .HasColumnName("currentaddress");

                entity.Property(e => e.DesignationId).HasColumnName("designation_id");

                entity.Property(e => e.Dob).HasColumnName("dob");

                entity.Property(e => e.Email)
                    .HasMaxLength(45)
                    .HasColumnName("email");

                entity.Property(e => e.Fullname)
                    .HasMaxLength(255)
                    .HasColumnName("fullname");

                entity.Property(e => e.Gender)
                    .HasMaxLength(10)
                    .HasColumnName("gender");

                entity.Property(e => e.Hiredate).HasColumnName("hiredate");

                entity.Property(e => e.Incentives).HasColumnName("incentives");

                entity.Property(e => e.LoginId).HasColumnName("login_id");

                entity.Property(e => e.Nationality)
                    .HasMaxLength(25)
                    .HasColumnName("nationality");

                entity.Property(e => e.Permanentaddress)
                    .HasMaxLength(255)
                    .HasColumnName("permanentaddress");

                entity.HasOne(d => d.Designation)
                    .WithMany(p => p.Employees)
                    .HasForeignKey(d => d.DesignationId)
                    .HasConstraintName("employees_ibfk_2");

                entity.HasOne(d => d.Login)
                    .WithOne(p => p.Employee)
                    .HasForeignKey<Employee>(d => d.LoginId)
                    .HasConstraintName("FK7480gop9a2flk53qaag3jxvce");
            });

            modelBuilder.Entity<Login>(entity =>
            {
                entity.ToTable("login");

                entity.HasIndex(e => e.RoleId, "role_id");

                entity.HasIndex(e => e.Username, "username_UNIQUE")
                    .IsUnique();

                entity.Property(e => e.LoginId).HasColumnName("login_id");

                entity.Property(e => e.Password)
                    .HasMaxLength(255)
                    .HasColumnName("password");

                entity.Property(e => e.RoleId).HasColumnName("role_id");

                entity.Property(e => e.Status)
                    .HasColumnType("bit(1)")
                    .HasColumnName("status");

                entity.Property(e => e.Username)
                    .HasMaxLength(25)
                    .HasColumnName("username");

                entity.HasOne(d => d.Role)
                    .WithMany(p => p.Logins)
                    .HasForeignKey(d => d.RoleId)
                    .HasConstraintName("login_ibfk_1");
            });

            modelBuilder.Entity<Project>(entity =>
            {
                entity.HasKey(e => e.Pid)
                    .HasName("PRIMARY");

                entity.ToTable("projects");

                entity.HasIndex(e => e.Empid, "empid_idx");

                entity.Property(e => e.Pid)
                    .ValueGeneratedNever()
                    .HasColumnName("pid");

                entity.Property(e => e.Deadline).HasColumnName("deadline");

                entity.Property(e => e.Description)
                    .HasMaxLength(200)
                    .HasColumnName("description");

                entity.Property(e => e.Empid).HasColumnName("empid");

                entity.Property(e => e.Isuues)
                    .HasMaxLength(200)
                    .HasColumnName("isuues");

                entity.Property(e => e.Status)
                    .HasMaxLength(45)
                    .HasColumnName("status");

                entity.Property(e => e.Tectstack)
                    .HasMaxLength(200)
                    .HasColumnName("tectstack");

                entity.Property(e => e.Title)
                    .HasMaxLength(200)
                    .HasColumnName("title");

                entity.HasOne(d => d.Emp)
                    .WithMany(p => p.Projects)
                    .HasForeignKey(d => d.Empid)
                    .HasConstraintName("empid");
            });

            modelBuilder.Entity<Role>(entity =>
            {
                entity.ToTable("roles");

                entity.Property(e => e.RoleId).HasColumnName("role_id");

                entity.Property(e => e.RoleName)
                    .HasMaxLength(25)
                    .HasColumnName("role_name");
            });

            modelBuilder.Entity<Task>(entity =>
            {
                entity.ToTable("tasks");

                entity.HasIndex(e => e.Empid, "empid_idx");

                entity.HasIndex(e => e.Pid, "fk_pid");

                entity.Property(e => e.Taskid)
                    .ValueGeneratedNever()
                    .HasColumnName("taskid");

                entity.Property(e => e.Deadline).HasColumnName("deadline");

                entity.Property(e => e.Description)
                    .HasMaxLength(200)
                    .HasColumnName("description");

                entity.Property(e => e.Empid).HasColumnName("empid");

                entity.Property(e => e.Issues)
                    .HasMaxLength(100)
                    .HasColumnName("issues");

                entity.Property(e => e.Pid).HasColumnName("pid");

                entity.Property(e => e.Status)
                    .HasMaxLength(45)
                    .HasColumnName("status")
                    .HasDefaultValueSql("'to-do'");

                entity.HasOne(d => d.Emp)
                    .WithMany(p => p.Tasks)
                    .HasForeignKey(d => d.Empid)
                    .HasConstraintName("fk_empid");

                entity.HasOne(d => d.PidNavigation)
                    .WithMany(p => p.Tasks)
                    .HasForeignKey(d => d.Pid)
                    .HasConstraintName("fk_pid");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
