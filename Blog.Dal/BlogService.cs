using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Blog.Dal
{

    public class BlogService : IBlogService
    {
        public Task<IEnumerable<Blog>> GetBlogsAsync(int page, int pageSize, CancellationToken cancellationToken = default(CancellationToken))
        {
            var faker = new Bogus.Faker<Blog>();
            faker.RuleFor(t => t.Id, () => Guid.NewGuid());
            faker.RuleFor(t => t.Author, t => t.Person.FullName);
            faker.RuleFor(t => t.Title, t => t.Lorem.Sentence());
            faker.RuleFor(t => t.Content, t => t.Lorem.Paragraphs(10));

            var ret = new List<Blog>();
            for (var i = 0; i < 1000; i++)
                ret.Add(faker.Generate());

            return Task.FromResult<IEnumerable<Blog>>(ret.Skip(page*pageSize).Take(pageSize));
        }
    }
}
