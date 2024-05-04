using Ocelot.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.AspNetCore.Builder;
using System.IO;
using Ocelot.Middleware;
using Microsoft.Extensions.Configuration;

namespace ApiGateway
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var host = new WebHostBuilder()
                .UseKestrel()
                .UseContentRoot(Directory.GetCurrentDirectory())
                .ConfigureAppConfiguration(
                    (hostingContext, config) =>
                    {
                        config
                            .SetBasePath(hostingContext.HostingEnvironment.ContentRootPath)
                            .AddJsonFile("appsettings.json", true, true)
                            .AddJsonFile(
                                $"appsettings.{hostingContext.HostingEnvironment.EnvironmentName}.json",
                                true,
                                true
                            )
                            .AddJsonFile("ocelot.json")
                            .AddEnvironmentVariables();
                    }
                )
                .ConfigureServices(s =>
                {
                    s.AddControllers();
                    s.AddOcelot();
                })
                .ConfigureLogging(
                    (hostingContext, logging) => {
                        //add your logging
                    }
                )
                .UseIISIntegration()
                .Configure(app =>
                {
                    app.UseOcelot().Wait();
                })
                .Build();
            host.Run();
        }
    }
}
