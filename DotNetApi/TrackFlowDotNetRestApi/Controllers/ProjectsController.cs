using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using TrackFlowDotNetRestApi.Models;
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
            using (var db = new trackflowdbContext())
            {
                result = db.Employees.ToList();
            }
            return result;
        }


        [HttpGet]
        public List<Project> GetProjects()
        {
            List<Project> result = new List<Project>();
            using (var db = new trackflowdbContext())
            {
                result = db.Projects.ToList();
            }
            return result;
        }

        [HttpPost]

        public Project AddProject(string title, string tectstack, string description, DateTime? deadline, string? status, string? comments, int? empid, int? clientId)
        {
           Project project = new Project(title, tectstack, description, deadline, status, comments, empid, clientId);
            using (var db = new trackflowdbContext())
            {
                db.Projects.Add(project);
                db.SaveChanges();
            }
            return project;
        }

        [HttpPost]
        public Project UpdateProject(Project project)
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
            List<Prjteam> result = new List<Prjteam>();
            using (var db = new trackflowdbContext())
            {
                result = db.Prjteams.ToList();
            }
            return result;
        }

        [HttpGet]

        public Project GetProject(int id)
        {
            Project project = new Project();
            using (var db = new trackflowdbContext())
            {
                project = db.Projects.FirstOrDefault(p => p.Pid == id);
                return project;
            }
        }


        [HttpGet]
        
        public Project GetProjectByEmpId(int  empid)
        {
            Project project = new Project();
            using (var db = new trackflowdbContext())
            {
                project = db.Projects.FirstOrDefault(p => p.Empid == empid);
                return project;
            }
        }
        [HttpGet]
        public List<Employee> GetManagers()
        {
            List<Employee> managersList;

            using (var db = new trackflowdbContext())
            {
                // Retrieve managers who are not assigned to any project
                managersList = db.Employees
                                  .Where(emp => emp.Login.RoleId == 2
                                          && !db.PrjMgrs.Any(prjMgr => prjMgr.Empid == emp.Empid))
                                  .ToList();
            }

            return managersList;
        }

        [HttpGet]
        public List<Client> GetClients()
        {
            List<Client> result = new List<Client>();
            using (var db = new trackflowdbContext())
            {
                result = db.Clients.ToList();
            }
            return result;
        }

    }
}