﻿using System;
using System.Collections.Generic;

namespace TrackFlowDotNetRestApi.Models
{
    public partial class Prjteam
    {
        public int Teamid { get; set; }
        public int Piid { get; set; }
        public int Empid { get; set; }
        public DateTime Assigneddate { get; set; }
        public string? Comments { get; set; }
        public DateTime? Releasedate { get; set; }

        public virtual Project Pi { get; set; } = null!;
    }
}