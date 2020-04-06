using Microsoft.AspNetCore.Mvc;
using Api.Services;

namespace Api.Controllers
{
    public class UserInfo
    {
        public string Id { get; set; }
        public string Login { get; set; }
        public bool IsAuthenticated { get; set; }
    }

    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IIdentityService _identityService;

        public UserController(IIdentityService identityService)
        {
            _identityService = identityService;
        }

        [HttpGet("current")]
        public UserInfo CurrentUser()
        {
            return new UserInfo
            {
                Id = _identityService.GetID(),
                Login = _identityService.GetMail(),
                IsAuthenticated = _identityService.IsAuthenticated()
            };
        }
    }

}
