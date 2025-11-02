interface SearchBarProps {
    searchTerm: string;
    onSearchChange: (value: string) => void;
    onClear: () => void;
}

export function SearchBar({ searchTerm, onSearchChange, onClear }: SearchBarProps) {
    return (
        <div className="max-w-2xl mx-auto mb-4">
            <div className="relative">
                <input
                    type="text"
                    placeholder="Search by title or content..."
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e.target.value)}
                    className="w-full px-6 py-4 bg-gray-900 rounded-xl border border-gray-700 focus:border-white focus:outline-none focus:ring-2 focus:ring-gray-600 text-white placeholder-gray-500 transition-all"
                />
                {searchTerm && (
                    <button
                        onClick={onClear}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                    >
                        ✕
                    </button>
                )}
            </div>
        </div>
    );
}
