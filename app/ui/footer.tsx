export function Footer(){
    const logo = "public/logo.png";
    const footerLinks = {
        Product: ["Features", "Integrations", "Pricing", "Updates", "FAQ"],
        Company: ["About", "Careers", "Blog", "Manifesto", "Press", "Contact"],
        Resources: ["Examples", "Docs", "Guides", "Community", "API"],
        Legal: ["Privacy", "Terms", "Services"],
    };
    return (
        <footer className="border-t border-white/10 bg-black/20">
            <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-12 md:flex-row md:justify-between">
                <div className="flex-row justify-between">
                    <div className="flex items-center gap-3">
                        <img src="/logo.png" alt="AI Startup Kit Logo" />
                        <span className="text-sm font-medium text-white/90">AI Startup Kit</span>
                        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 text-xs text-white/40 md:hidden lg:hidden">
                            <div className="flex items-center gap-3">
                                <span>T</span>
                                <span>L</span>
                                <span>G</span>
                            </div>
                        </div>
                    </div>
                    {/* <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 text-xs text-white/40">
                        <div className="flex items-center gap-3">
                            <span>T</span>
                            <span>L</span>
                            <span>G</span>
                        </div>
                    </div> */}

                </div>
                <div className="grid grid-cols-2 gap-8 text-sm text-white/60 sm:grid-cols-4">
                    {Object.entries(footerLinks).map(([section, links]) => (
                        <div key={section}>
                            <p className="text-xs text-white/40">{section}</p>
                            <ul className="mt-4 space-y-8">
                                {links.map((link) => (
                                    <li key={link}>
                                        <a href="#" className="transition-colors hover:text-white">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    )
}