export function Waitlist() {
    return (
        <section className="p-6 md:p-12 lg:p-18" id="waitlist">
            <div className="rounded-3xl border border-white/10 py-20 text-center mx-auto">
                <h1 className="text-2xl sm:text-4xl font-semibold text-center mb-8 leading-tight">
                    AI-driven SEO<br className="hidden sm:block" /> for everyone.
                </h1>
                <div className="flex items-center justify-center">
                    <div className="flex justify-center mx-auto bg-black/5 md:border border-white/10 
                  rounded-md overflow-hidden w-full max-w-md backdrop-blur-sm">
                        <div className="grid grid-rows-1 sm:grid-cols-2 gap-1">
                            <input type="email"
                                placeholder="Your email"
                                className="flex-1 px-4 py-3 bg-transparent text-white placeholder-gray-400 focus:outline-none border border-white/10 rounded-md md:border-transparent" />
                            <button
                                className="m-1 px-6 py-2 rounded-md font-medium text-black bg-white
                                transition-all duration-300">
                                Join waitlist
                            </button>
                        </div>
                    </div>
                </div>
                <p className="mt-3 text-xs text-white/40">No credit card required · 7 days free trial</p>
            </div>
        </section>
    );
}