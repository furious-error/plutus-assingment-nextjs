export function Hero() {
    return (
        <section className="text-center px-6 md:px-12 lg:px-18" id="hero">
            <div className="mx-auto w-full">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/5 px-4 py-2 text-xs text-black/70">
                    <span className="inline-flex p-1 rounded-3xl bg-purple-700 border border-white font-extrabold text-[10px]">NEW</span>
                    <div className="text-purple-700 font-medium text-[12px]">Latest integration just arrived</div>
                </div>
                <div className="mt-6 text-4xl font-semibold leading-tight flex justify-center mx-auto text-white max-w-[15ch] sm:text-5xl lg:text-6xl">
                    Boost your rankings with AI.
                </div>
                <p className="mt-6 text-base text-white/70 sm:text-lg max-w-[45ch] flex justify-center m-auto">
                    Elevate your site's visibility effortlessly with AI, where smart technology meets user-friendly SEO tools.
                </p>
                <button className="mt-8 rounded-md bg-white px-8 py-3 text-sm font-semibold text-black shadow-[0_-20px_120px_rgba(96,42,154)] transition-transform hover:-translate-y-0.5">
                    Start for free
                </button>
            </div>
            <div className="w-full flex justify-center mt-12">
                <img
                    src="/App.png"
                    alt="Application screenshot"
                    className="block h-auto w-auto mx-auto shadow-[0_-40px_120px_rgba(96,42,154)] rounded-md"
                />
            </div>
            
        </section>
    );
}