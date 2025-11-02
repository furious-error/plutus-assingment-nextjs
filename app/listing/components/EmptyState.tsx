interface EmptyStateProps {
    searchTerm: string;
    onClearSearch: () => void;
    onSearchChange: (value: string) => void;
}

export function EmptyState({ searchTerm, onClearSearch, onSearchChange }: EmptyStateProps) {
    return (
        <div className="min-h-screen bg-black py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="mb-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                        Blog Posts
                    </h1>
                    <p className="text-gray-400 mb-8">Explore our collection of articles</p>

                    <div className="max-w-2xl mx-auto mb-8">
                        <input
                            type="text"
                            placeholder="Search by title or content..."
                            value={searchTerm}
                            onChange={(e) => onSearchChange(e.target.value)}
                            className="w-full px-6 py-4 bg-gray-900 rounded-xl border border-gray-700 focus:border-white focus:outline-none focus:ring-2 focus:ring-gray-600 text-white placeholder-gray-500 transition-all"
                        />
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center py-20">
                    <div className="text-6xl mb-4">🔍</div>
                    <h2 className="text-2xl font-bold mb-2 text-gray-300">No posts found</h2>
                    <p className="text-gray-400 mb-6">
                        {searchTerm ? `No results for "${searchTerm}"` : 'No posts available'}
                    </p>
                    {searchTerm && (
                        <button
                            onClick={onClearSearch}
                            className="px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition-all transform hover:scale-105"
                        >
                            Clear Search
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
