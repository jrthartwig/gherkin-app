using Api.Constants;
using Microsoft.AspNetCore.Http;
using System.Linq;

namespace Api.Services
{
    public interface IIdentityService
    {
        bool IsAuthenticated();
        string GetMail();
        string GetID();

    }

    public class AzureAdIdentityService : IIdentityService
    {
        private readonly IHttpContextAccessor _httpContextAccessor;

        public AzureAdIdentityService(IHttpContextAccessor httpContextAccessor)
        {
            _httpContextAccessor = httpContextAccessor;
        }

        public bool IsAuthenticated()
        {
            return _httpContextAccessor.HttpContext.User.Identity.IsAuthenticated;
        }

        public string GetMail()
        {
            return _httpContextAccessor.HttpContext.User.Identity.Name;
        }

        public string GetID()
        {
            var idClaims = _httpContextAccessor.HttpContext.User.Claims
                .FirstOrDefault(c => c.Type == AzureAdClaimTypes.ObjectID);

            return idClaims?.Value;
        }

    }

}