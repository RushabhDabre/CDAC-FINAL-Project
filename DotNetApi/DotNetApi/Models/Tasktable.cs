using System;
using System.Collections.Generic;

namespace DotNetApi.Models
{
    public partial class Tasktable
    {
        public int Tid { get; set; }
        public string Tname { get; set; } = null!;
        public string? Description { get; set; }
        public DateTime? Assigneddate { get; set; }
        public DateTime? Deadline { get; set; }
        public bool? Status { get; set; }
        public int? Progress { get; set; }
        public int? Empid { get; set; }
        public int? Pid { get; set; }

        public virtual Employee? Emp { get; set; }
        public virtual Project? PidNavigation { get; set; }
    }
}
