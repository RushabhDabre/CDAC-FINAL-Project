using System;
using System.Collections.Generic;

namespace TrackFlowDotNetRestApi.Models
{
    public partial class Task
    {
        public int Taskid { get; set; }
        public string Description { get; set; } = null!;
        public DateTime Deadline { get; set; }
        public string? Status { get; set; }
        public string? Issues { get; set; }
        public int? Pid { get; set; }
        public int? Empid { get; set; }

        public virtual Employee? Emp { get; set; }
        public virtual Project? PidNavigation { get; set; }
    }
}
