using Blog.Dal;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;
using System;
using System.Collections.Generic;
using System.Text;

namespace Blog.Web
{
    public static class ServiceCollectionExtensions
    {
        public static IServiceCollection AddBlogMvc(this IServiceCollection services)
        {
            services.AddBlog();
            return services;
        }
    }
}
