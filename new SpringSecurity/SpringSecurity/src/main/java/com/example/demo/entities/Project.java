package com.example.demo.entities;

import java.sql.Date;

import jakarta.persistence.*;

@Entity
@Table(name = "projects")
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int pid;

    @Column
    public String title;

    @Column
    public String tectstack;

    @Column
    public String description;

    @Column
    public Date deadline;

    @Column
    public String status;

    @Column
    public String comments;

    @Column
    public Integer empid;

    @Column
    public Integer clientid;

    @ManyToOne
    @JoinColumn(name = "clientid")
    public Client client;
}
