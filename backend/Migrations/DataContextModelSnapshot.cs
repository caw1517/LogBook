﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using backend.Data;

#nullable disable

namespace backend.Migrations
{
    [DbContext(typeof(DataContext))]
    partial class DataContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "7.0.0");

            modelBuilder.Entity("backend.Models.Aircraft", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("AircraftType")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("SerialNumber")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<int>("UserId")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("Aircrafts");
                });

            modelBuilder.Entity("backend.Models.LogBookEntry", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int>("AircraftId")
                        .HasColumnType("INTEGER");

                    b.Property<string>("ArrivalAirport")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("DateFlown")
                        .HasColumnType("TEXT");

                    b.Property<string>("DepartureAirport")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<int?>("NumberLandings")
                        .HasColumnType("INTEGER");

                    b.Property<int>("RouteHours")
                        .HasColumnType("INTEGER");

                    b.Property<int>("RouteMinutes")
                        .HasColumnType("INTEGER");

                    b.Property<string>("RouteName")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("RouteNotes")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<int>("UserId")
                        .HasColumnType("INTEGER");

                    b.HasKey("id");

                    b.HasIndex("AircraftId");

                    b.HasIndex("UserId");

                    b.ToTable("LogBookEntries");
                });

            modelBuilder.Entity("backend.Models.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<byte[]>("PasswordHash")
                        .IsRequired()
                        .HasColumnType("BLOB");

                    b.Property<byte[]>("PasswordSalt")
                        .IsRequired()
                        .HasColumnType("BLOB");

                    b.Property<string>("UserName")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("backend.Models.Aircraft", b =>
                {
                    b.HasOne("backend.Models.User", null)
                        .WithMany("Aircrafts")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("backend.Models.LogBookEntry", b =>
                {
                    b.HasOne("backend.Models.Aircraft", "Aircraft")
                        .WithMany()
                        .HasForeignKey("AircraftId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("backend.Models.User", "User")
                        .WithMany("LogBookEntries")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Aircraft");

                    b.Navigation("User");
                });

            modelBuilder.Entity("backend.Models.User", b =>
                {
                    b.Navigation("Aircrafts");

                    b.Navigation("LogBookEntries");
                });
#pragma warning restore 612, 618
        }
    }
}
