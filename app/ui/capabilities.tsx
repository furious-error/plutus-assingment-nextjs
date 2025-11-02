import { title } from "process";

export function Capabilities(){
    const capabilityBullets = [
        { title: "User-friendly dashboard", body: "Perform complex SEO audits and optimizations with a single click.", img: "public/c1.png", alt: "metric"},
        { title: "Content evaluation", body: "Simple corrections for immediate improvements.", img: "public/c2.png", alt: "content"},
        { title: "Link Optimization Wizard", body: "Guides you through the process of creating and managing links.", img: "public/c3.png", alt: "links"},
        { title: "Visual reports", body: "Visual insights into your site’s performance.", img: "public/c4.png", alt: "reports"},
        { title: "SEO goal setting", body: "Helps you set and achieve SEO goals with guided assistance.", img: "public/c5.png", alt: "goals"},
        { title: "One-click optimization", body: "Perform complex SEO audits and optimizations with a single click.", img: "public/c6.png", alt: "one-click"},
        { title: "Smart keyword generator", body: "Automatic suggestions and the best keywords to target.", img: "public/c7.png", alt: "keywords"},
        { title: "Automated alerts", body: "Automatic notifications about your SEO health, including quick fixes.", img: "public/c8.png", alt: "alerts"},
        { title: "Competitor reports", body: "Provides insights into competitors’ keyword strategies and ranking.", img: "public/c9.png", alt: "competitors"},
    ];
    return (
        <section className="border-t border-b border-t-white/10 border-b-white/10 w-full bg-linear-to-r from-[#7c3aed24] to-[#4d1d9500]" id="capabilities">
            <div className="px-6 md:px-12 lg:px-18 my-16">
                <div className="space-y-8">
                    <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                        Elevate your<br /> SEO efforts.
                    </h2>
                    <p className="text-sm text-white/70">
                        Guided automation streamlines repetitive tasks so your team can prioritize insights and strategy.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12">
                    {capabilityBullets.map((item) => (
                        <div
                            key={item.title}
                            className="flex flex-col gap-3"
                        >
                            <div className="flex items-center gap-3">
                                <img src={item.img.replace(/^public\//, "/")} alt={item.alt} className="h-6 w-6 shrink-0" />
                                <h3 className="text-base font-semibold text-white">{item.title}</h3>
                            </div>
                            <p className="text-sm text-white/70 py-2">{item.body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}