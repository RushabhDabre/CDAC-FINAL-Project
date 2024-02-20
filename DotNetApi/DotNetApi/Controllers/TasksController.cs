﻿using DotNetApi.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DotNetApi.Controllers
{
    [EnableCors]
    [Route("/[action]")]
    [ApiController]
    public class TasksController : ControllerBase
    {
        [HttpPost]
        public List<Tasktable> GetTasktables()
        {
            List<Tasktable> list = new List<Tasktable>();
            using(var db = new trackflowdbContext())
            {
                list = db.Tasktables.ToList();
            }
            return list;
        }

        [HttpPost]
        public Tasktable AddTasks([FromBody] Tasktable task)
        {
            using (var db = new trackflowdbContext())
            {
                db.Tasktables.Add(task);
                db.SaveChanges();
            }
            return task;
        }

    }
}
