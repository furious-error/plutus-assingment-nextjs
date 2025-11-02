interface ErrorStateProps {
    error: string;
    onRetry: () => void;
}

export function ErrorState({ error, onRetry }: ErrorStateProps) {
    return (
        <div className="min-h-screen bg-black py-20 px-4 flex items-center justify-center">
            <div className="max-w-md w-full bg-gray-900 rounded-xl p-8 border border-gray-700 text-center">
                <div className="text-6xl mb-4">⚠️</div>
                <h2 className="text-2xl font-bold mb-2 text-white">
                    Oops! Something went wrong
                </h2>
                <p className="text-gray-400 mb-6">{error}</p>
                <button
                    onClick={onRetry}
                    className="px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition-all transform hover:scale-105"
                >
                    Try Again
                </button>
            </div>
        </div>
    );
}
