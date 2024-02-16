﻿using System;
using System.Collections.Generic;

namespace TrackFlowDotNetRestApi.Models
{
    public partial class Client
    {
        public Client()
        {
            Projects = new HashSet<Project>();
        }

        public int Clientid { get; set; }
        public string? Clientname { get; set; }
        public string? Website { get; set; }
        public string? Domain { get; set; }
        public string? Address { get; set; }
        public string? Contact { get; set; }

        public virtual ICollection<Project> Projects { get; set; }
        public virtual ICollection<Client> Clients { get; set; }
    }
}
