using Duende.IdentityServer;
using Duende.IdentityServer.Configuration;
using IdP;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Rsk.Saml.Configuration;
using Serilog;

namespace IdP;

internal static class HostingExtensions
{
    public static WebApplication ConfigureServices(this WebApplicationBuilder builder)
    {
        builder.Services.AddRazorPages();

        var isBuilder = builder.Services.AddIdentityServer(options =>
            {
                options.Events.RaiseErrorEvents = true;
                options.Events.RaiseInformationEvents = true;
                options.Events.RaiseFailureEvents = true;
                options.Events.RaiseSuccessEvents = true;

                // see https://docs.duendesoftware.com/identityserver/v6/fundamentals/resources/
                options.EmitStaticAudienceClaim = true;
                options.KeyManagement.Enabled = true;
                options.KeyManagement.SigningAlgorithms = new[]
                {
                    new SigningAlgorithmOptions("RS256") {UseX509Certificate = true}
                };

            })
            .AddTestUsers(TestUsers.Users)
            .AddSamlPlugin(options =>
            {
                options.Licensee = "DEMO";
                options.LicenseKey =
                    "eyJTb2xkRm9yIjowLjAsIktleVByZXNldCI6NiwiU2F2ZUtleSI6ZmFsc2UsIkxlZ2FjeUtleSI6ZmFsc2UsIlJlbmV3YWxTZW50VGltZSI6IjAwMDEtMDEtMDFUMDA6MDA6MDAiLCJhdXRoIjoiREVNTyIsImV4cCI6IjIwMjMtMDktMDNUMDY6NDk6NDUuMTMwNjY4KzAwOjAwIiwiaWF0IjoiMjAyMy0wOC0wNFQwNjo0OTo0NSIsIm9yZyI6IkRFTU8iLCJhdWQiOjJ9.W4kyT6Y65THX+altb+MRYQ/5so0KeRtdAQeu9nLzbpp+d1Dx68jYJBFINlUyfFnNFbXg/xV0Z1/r0Ke7ZqdL37vltj06mVkBwIY2Nntif6NMwjOhcgz9CQ85QH1lhxV4LPWrxfQ2ofwsDEW48JDk6r6scNrLp3eryuG91TAoaXumUBS1zD33mXrH4rIOzmzDNd7NjNIEphsqEy6oxIx/ZYOK/NFYW/ro5k2RYaAlY0COpKNxUPcS3wG7GGm1JKnlcDOACaRUs3gWoEjCCzY90P0CNuWGZqAQrWoy+G+nHXXvMM18XvRsxiT9old07tiv1Wrxv727I6N0TxYvjQfWa0QTdxbhtb7jKyPPed8GVj4dgM3j+4jjpz8LbQywH9LNF5zNz3r6zNBcUemIkGgNAawx/23XZKHl/jJbwFeihD1k1BFtBSvM7inOCmWYJ//r+TarKjXIq8WHcfL5j0DMKdV675NnwubVJlTOSlkeSiV7iNaxA7BFycw3L935hTUiUr6N3s0qeQ1mMIJUIafRKTQvXXOzBfIur9G6TXbcp8Y6PxL5joGiRmyLUgStplYczJsC9OKPQx5c4PWDxl8BgPsUCxAGasKes8kJEXhtR9kTgLguDjvJVknj1RWdqJHuT2nBCvVsleuq5Pk3msduUnFOjkLpIILkRJmVTl4Z/oQ=";
                options.WantAuthenticationRequestsSigned = false;
            })
            .AddInMemoryServiceProviders(Config.ServiceProviders);

        // in-memory, code config
        isBuilder.AddInMemoryIdentityResources(Config.IdentityResources);
        isBuilder.AddInMemoryApiScopes(Config.ApiScopes);
        isBuilder.AddInMemoryClients(Config.Clients);


        // if you want to use server-side sessions: https://blog.duendesoftware.com/posts/20220406_session_management/
        // then enable it
        //isBuilder.AddServerSideSessions();
        //
        // and put some authorization on the admin/management pages
        //builder.Services.AddAuthorization(options =>
        //       options.AddPolicy("admin",
        //           policy => policy.RequireClaim("sub", "1"))
        //   );
        //builder.Services.Configure<RazorPagesOptions>(options =>
        //    options.Conventions.AuthorizeFolder("/ServerSideSessions", "admin"));


        builder.Services.AddAuthentication();

        return builder.Build();
    }
    
    public static WebApplication ConfigurePipeline(this WebApplication app)
    { 
        app.UseSerilogRequestLogging();
    
        if (app.Environment.IsDevelopment())
        {
            app.UseDeveloperExceptionPage();
        }

        app.UseStaticFiles();
        app.UseRouting();
        app.UseIdentityServer();
        app.UseAuthorization();
        app.UseIdentityServerSamlPlugin();
        app.MapRazorPages()
            .RequireAuthorization();

        return app;
    }
}