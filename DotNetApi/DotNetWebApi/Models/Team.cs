using System;
using System.Collections.Generic;

namespace DotNetWebApi.Models
{
    public partial class Team
    {
        public int Teamid { get; set; }
        public int Pid { get; set; }
        public int Empid { get; set; }
        public string? Comments { get; set; }
        public DateOnly? AssignedDate { get; set; }
        public ulong? Status { get; set; }
        public DateOnly? Releasedate { get; set; }

        public virtual Employee Emp { get; set; } = null!;
        public virtual Project PidNavigation { get; set; } = null!;
    }
}
