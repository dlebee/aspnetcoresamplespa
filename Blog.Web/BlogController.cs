using Blog.Dal;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Blog.Web
{
    [ApiController, Route("api/v1/blog")]
    public class BlogController : Controller
    {
        [HttpGet("{page:int?}/{pageSize:int?}")]
        public Task<IEnumerable<Dal.Blog>> Get([FromServices]IBlogService blogService, int page = 1, int pageSize = 10) => blogService.GetBlogsAsync(page, pageSize);
    }
}
