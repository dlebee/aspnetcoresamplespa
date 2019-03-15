using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;
using System;
using System.Collections.Generic;
using System.Text;

namespace Blog.Dal
{
    public static class ServiceCollectionExtensions
    {
        public static IServiceCollection AddBlog(this IServiceCollection services)
        {
            services.TryAddTransient<IBlogService, BlogService>();
            return services;
        }
    }
}
