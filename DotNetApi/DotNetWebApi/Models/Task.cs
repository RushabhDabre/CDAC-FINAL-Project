using System;
using System.Collections.Generic;

namespace DotNetWebApi.Models
{
    public partial class Task
    {
        public int Tid { get; set; }
        public string Tname { get; set; } = null!;
        public string? Description { get; set; }
        public DateOnly? Assigneddate { get; set; }
        public DateOnly? Deadline { get; set; }
        public ulong? Status { get; set; }
        public int? Progress { get; set; }
        public int? Empid { get; set; }
        public int? Pid { get; set; }

        public virtual Employee? Emp { get; set; }
        public virtual Project? PidNavigation { get; set; }
    }
}
