using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace Blog.Dal
{
    public interface IBlogService
    {
        Task<IEnumerable<Blog>> GetBlogsAsync(int page, int pageSize, CancellationToken cancellationToken = default(CancellationToken));
    }
}