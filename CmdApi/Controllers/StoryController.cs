using System.Collections.Generic;
using System.Linq;
using Entities.Models;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StoryController : ControllerBase
    {

        [HttpGet]
        public List<Story> GetStoryByFeature(string feature) // should switch this line to get stor(ies) by feature and use the ID instead of the feature name which means the type is now integer 
        {
            var result = new List<Story>();
            using (Context context = new Context())
            {
                result = context.Story.Where(s => s.FeatureId == int.Parse(feature)).ToList();


                return result;

            }

        }
    }
}

