using System;
using System.Collections.Generic;

namespace TrackFlowDotNetRestApi.Models
{
    public partial class Project
    {
        public Project()
        {
            Tasks = new HashSet<Task>();
        }

        public int Pid { get; set; }
        public string Title { get; set; } = null!;
        public string Tectstack { get; set; } = null!;
        public string Description { get; set; } = null!;
        public DateTime? Deadline { get; set; }
        public string? Isuues { get; set; }
        public int? Empid { get; set; }
        public string? Status { get; set; }

        public virtual Employee? Emp { get; set; }
        public virtual ICollection<Task> Tasks { get; set; }
    }
}
