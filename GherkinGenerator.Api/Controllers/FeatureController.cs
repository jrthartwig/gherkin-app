using System;
using System.Collections.Generic;
using System.Linq;
using Entities.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{   
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class FeatureController : ControllerBase
    {
        [HttpGet]
        public List<Feature> GetWebFeaturesByProjectType(string projectType)
        {
            var projectTypeEnum = (ProjectType)Enum.Parse(typeof(ProjectType), projectType);
            var result = new List<Feature>();
            using (Context context = new Context())
            {
                result = context.Feature.Where(f => f.ProjectType == projectTypeEnum).ToList();


                return result;

            }
        }
    }
}