﻿using System;
using System.Collections.Generic;

namespace DotNetWebApi.Models
{
    public partial class PrjMgr
    {
        public int Id { get; set; }
        public int? Pid { get; set; }
        public int? Empid { get; set; }
        public DateOnly? Lastdate { get; set; }
        public string? Comments { get; set; }

        public virtual Project? PidNavigation { get; set; }
    }
}
