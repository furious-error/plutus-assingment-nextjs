export  function Partners() {
    const logos = [
        { src: "public/acme.png", alt: "Acme" },
        { src: "public/echo.png", alt: "Echo" },
        { src: "public/quantum.png", alt: "Quantum" },
        { src: "public/pulse.png", alt: "Pulse" },
        { src: "public/outside.png", alt: "Outside" },
        { src: "public/apex.png", alt: "Apex" },
        { src: "public/celestial.png", alt: "Celestial" },
        { src: "public/2twice.png", alt: "2Twice" },
    ];
    return (
        <section className="px-6 md:px-12 lg-px-18" id="partners">
            <p className="text-center text-s text-white/50">
                Trusted by the world's most innovative teams
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 text-center text-sm font-medium text-white/70 sm:grid-cols-3 md:grid-cols-4">
                {logos.map((logo) => (
                    <div
                        key={logo.src}
                        className="rounded-md border border-white/20 bg-black transition-colors px-2 py-4"
                    >
                        <img
                            src={logo.src.replace(/^public\//, "/")}
                            alt={logo.alt}
                            className="h-5 w-auto m-auto"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}