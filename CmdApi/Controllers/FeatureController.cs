using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Entities.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FeatureController : ControllerBase
    {
        readonly Context _context;

        public FeatureController(Context context)
        {
            _context = context;
        }

        [HttpGet]
        public IQueryable<Feature> GetWebFeaturesByProjectType(string projectType)
        {
            var projectTypeEnum = (ProjectType)Enum.Parse(typeof(ProjectType), projectType) ;
            var result = _context.Feature.Where(f => f.ProjectType == projectTypeEnum);

            return result;

        }
    }
}