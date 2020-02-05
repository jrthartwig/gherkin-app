using System.Linq;
using Entities.Models;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StoryController : ControllerBase
    {
        readonly Context _context;

        public StoryController(Context context)
        {
            _context = context;
        }

        [HttpGet]
        public IQueryable<Story> GetStoryByFeature(string feature)
        {
            var result = _context.Story.Where(s => s.Feature.Name == feature);

            // _context.Feature.Where(f => f.ProjectType == GetProjectType(projectType)); does the same thing as the line above, but for an unknown reason the line above is (possibly) better

            return result;

        }
    }
}

