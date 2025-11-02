import Image from "next/image";

export function Clients() {
    return (
        <section
            className="relative isolate overflow-hidden py-32 px-6 md:px-12 lg:px-18"
            id="testimonials"
        >
            {/* Ambient glow */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(112,56,255,0.12),transparent_55%)]" />
                <div className="absolute inset-0 opacity-25 [background:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-size-[33%_33%]" />
            </div>

            {/* Header */}
            <div className="mx-auto mb-16 max-w-3xl text-center">
                <h2 className="text-4xl font-semibold text-white sm:text-5xl">Our clients</h2>
                <p className="mt-4 text-base text-gray-400">
                    Hear firsthand how our solutions have boosted online success for users like you.
                </p>
            </div>

            {/* Testimonial */}
            <div className="mx-auto flex max-w-4xl flex-col gap-10 sm:p-10 lg:flex-row lg:items-center lg:gap-14">
                {/* Avatar */}
                <div className="relative mx-auto h-48 w-48 shrink-0 overflow-hidden rounded-4xl bg-linear-to-br from-[#8350ff]/50 via-[#5c2ce4]/60 to-[#3416ba]/70">
                    <Image
                        src="/client-avatar.png"
                        alt="Portrait of Talia Taylor"
                        fill
                        className="object-cover mix-blend-screen opacity-90"
                        sizes="(max-width: 1024px) 160px, 160px"
                        priority
                    />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(133,76,255,0.6),transparent_65%)]" />
                </div>

                {/* Quote */}
                <div className="text-center lg:text-left">
                    <p className="text-balance text-lg font-medium leading-relaxed text-white sm:text-[28px]">
                        “This product has completely transformed how I manage my projects and deadlines”
                    </p>
                    <div className="mt-8 space-y-1">
                        <p className="text-md font-semibold text-white">Talia Taylor</p>
                        <p className="text-xs text-gray-400">
                            Digital Marketing Director @ Quantum
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}