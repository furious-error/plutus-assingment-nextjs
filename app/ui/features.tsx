

export  function Features(){
    const primaryFeatures = [
      {
        title: "SEO goal setting",
        description: "Helps you set and achieve SEO goals with guided assistance.",
        img: "public/torus.png",
        alt: "torus",
      },
      {
        title: "User-friendly dashboard",
        description: "Perform complex SEO audits and optimizations with a single click.",
        img: "public/dashboard-feature.png",
        alt: "dashboard",
      },
      {
        title: "Visual reports",
        description: "Visual insights into your site's performance in seconds.",
        img: "public/analytics-feature.png",
        alt: "reports",
      },
      {
        title: "Smart keyword generator",
        description: "Automates suggestions around the best keywords to target.",
        img: "public/conus.png",
        alt: "conus",
      },
    ];
    return (
        <section className="px-6 md:px-12 lg:px-18 w-full" id="features">
            <div className="mx-auto w-4/5 md:w-3/5 font-medium text-md md:text-3xl text-center">
                Harness the power of AI, making search engine optimization intuitive and effective for all skill levels.
            </div>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-6 auto-rows-[300px] md:auto-rows-[130px] gap-6">
                {primaryFeatures.map((feature, i) => {
                    const spans =
                        [
                            "md:col-span-2 md:row-span-2",
                            "md:col-span-4 md:row-span-2",
                            "md:col-span-4 md:row-span-2",
                            "md:col-span-2 md:row-span-2",
                        ][i] ?? "md:col-span-3 md:row-span-2";

                    return (
                        <div
                            key={feature.title}
                            className={`relative overflow-hidden rounded-md border border-white/10 bg-[#0b0b0f]/70 ${spans}`}
                        >
                            <div className="bg-contain bg-center bg-no-repeat absolute inset-0"
                            style={{
                                backgroundImage: `${(i == 1 || i == 2) ? "linear-gradient(to top, rgba(54, 23, 100, 1), rgba(3, 1, 6, 0))," : ""} url(${feature.img.replace(/^public\//, "/")})`,
                                backgroundSize: (i == 1 || i == 2) ? "contain" : "50%",
                                backgroundPosition: "top"
                            }}>
                                <div className="absolute inset-0 bg-black/5"></div>
                                
                                <div className="h-full w-full p-2 flex flex-col justify-end">
                                    <h3 className="text-base md:text-lg font-semibold text-white max-w-[30ch]">
                                        {feature.title}
                                    </h3>
                                    <p className="mt-2 text-sm text-white/70 max-w-[30ch]">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>    </section>
    );
}