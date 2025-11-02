export function LoadingState() {
    return (
        <div className="min-h-screen bg-black py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="mb-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                        Blog Posts
                    </h1>
                    <p className="text-gray-400">Loading amazing content...</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[...Array(6)].map((_, i) => (
                        <div
                            key={i}
                            className="bg-gray-900 rounded-xl p-6 border border-gray-700 animate-pulse"
                        >
                            <div className="h-6 bg-gray-800 rounded mb-4"></div>
                            <div className="h-4 bg-gray-800 rounded mb-2"></div>
                            <div className="h-4 bg-gray-800 rounded mb-2"></div>
                            <div className="h-4 bg-gray-800 rounded w-3/4"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
