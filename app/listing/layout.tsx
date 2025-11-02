import Link from 'next/link';

export default function ListingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            {/* Navigation Bar */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-gray-700">
                <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link
                        href="/"
                        className="text-xl font-bold text-white hover:text-gray-300 transition-all"
                    >
                        ← Back to Home
                    </Link>
                    <div className="flex items-center gap-4">
                        <span className="text-sm text-gray-400">API: JSONPlaceholder</span>
                    </div>
                </div>
            </nav>
            {children}
        </div>
    );
}
