import { PaginationInfo } from '../types';
import { generatePageNumbers } from '../utils/pagination';

interface PaginationProps {
    paginationInfo: PaginationInfo;
    onPageChange: (page: number) => void;
}

export function Pagination({ paginationInfo, onPageChange }: PaginationProps) {
    const { currentPage, totalPages } = paginationInfo;

    if (totalPages <= 1) return null;

    const pageNumbers = generatePageNumbers(currentPage, totalPages);

    return (
        <div className="mt-12 flex flex-col items-center gap-4">
            <div className="flex items-center gap-2 flex-wrap justify-center">
                <button
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`px-4 py-2 rounded-lg font-semibold transition-all ${currentPage === 1
                        ? 'bg-gray-800 text-gray-600 cursor-not-allowed'
                        : 'bg-white text-black hover:bg-gray-200 transform hover:scale-105'
                        }`}
                >
                    ← Previous
                </button>

                <div className="flex items-center gap-2">
                    {pageNumbers.map((page, index) => (
                        <button
                            key={index}
                            onClick={() => typeof page === 'number' && onPageChange(page)}
                            disabled={page === '...'}
                            className={`px-4 py-2 rounded-lg font-semibold transition-all ${page === currentPage
                                ? 'bg-white text-black scale-110'
                                : page === '...'
                                    ? 'bg-transparent text-gray-500 cursor-default'
                                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:scale-105'
                                }`}
                        >
                            {page}
                        </button>
                    ))}
                </div>

                <button
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`px-4 py-2 rounded-lg font-semibold transition-all ${currentPage === totalPages
                        ? 'bg-gray-800 text-gray-600 cursor-not-allowed'
                        : 'bg-white text-black hover:bg-gray-200 transform hover:scale-105'
                        }`}
                >
                    Next →
                </button>
            </div>

            <p className="text-sm text-gray-400">
                Page {currentPage} of {totalPages}
            </p>
        </div>
    );
}
