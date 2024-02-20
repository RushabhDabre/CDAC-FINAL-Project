using DotNetApi.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DotNetApi.Controllers
{
    [EnableCors]
    [Route("api/[controller]")]
    [ApiController]
    public class TasksController : ControllerBase
    {
        [HttpGet]
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
        public Tasktable AddTasks(Tasktable tasktable)
        {
            using(var db = new trackflowdbContext())
            {
                db.Tasktables.Add(tasktable);
                db.SaveChanges();
            }
            return tasktable;
        }
    }
}
