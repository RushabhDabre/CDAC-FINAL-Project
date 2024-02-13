using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TrackFlowDotNetRestApi.Models;

namespace TrackFlowDotNetRestApi.Controllers
{

    [Route("api/[controller]/[action]")]
    [ApiController]
   // [EnableCors]
    public class ProjectsController : ControllerBase
    {
        [HttpGet]
        public List<Employee> GetEmps()
        {
            List<Employee> result = new List<Employee>();
            using(var db = new trackflowdbContext())
            {
                result = db.Employees.ToList();
            }
            return result;
        }
    }
}
