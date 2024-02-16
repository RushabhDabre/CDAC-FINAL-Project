using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using TrackFlowDotNetRestApi.Models;
using System.http.web;
using System.Reflection;

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


        [HttpGet]
        public List<Project> GetProjects()
        {
            List<Project> result = new List<Project>();
            using(var db = new trackflowdbContext())
            {
                result = db.Projects.ToList();
            }
            return result;
        }

        [HttpPost]

        public Project AddProject (Project project)
        {
            using(var db = new trackflowdbContext())
            {
                db.Projects.Add(project);
                db.SaveChanges();
            }
            return project;
        }

        [HttpPost]
        public Project UpdateProject (Project project)
        {
            using (var db = new trackflowdbContext())
            {
                db.Projects.Update(project);
                db.SaveChanges();
            }
            return project;
        }




        [HttpGet]
        public List<Prjteam> GetPrjteam()
        {
            List<Prjteam> result  = new List<Prjteam>();
            using (var db = new trackflowdbContext())
            {
                result = db.Prjteams.ToList();
            }
            return result;
        }


        }

    [HttpGet]
    [Route("api/employees/withoutrelease")]
    public IHttpActionResult GetEmp()
    {
        using (var db = new trackflowdbContext())
        {
            try
            {
                var empsWithoutRelease = db.Employees
                    .Where(e => !db.Prjteams.Any(t => t.Empid == e.Empid && t.Releasedate != null))
                    .ToList();

                return Ok(empsWithoutRelease);
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }
    }
}


}
