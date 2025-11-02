import { PaginationInfo } from '../types';
import { ItemsPerPageSelector } from './ItemsPerPageSelector';
import { SearchBar } from './SearchBar';

interface PageHeaderProps {
    totalPosts: number;
    filteredCount: number;
    paginationInfo: PaginationInfo;
    searchTerm: string;
    onSearchChange: (value: string) => void;
    onClearSearch: () => void;
    onItemsPerPageChange: (value: number) => void;
}

export function PageHeader({
    totalPosts,
    filteredCount,
    paginationInfo,
    searchTerm,
    onSearchChange,
    onClearSearch,
    onItemsPerPageChange,
}: PageHeaderProps) {
    const { startIndex, endIndex, itemsPerPage } = paginationInfo;

    return (
        <div className="mb-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                Blog Posts
            </h1>
            <p className="text-gray-400 mb-4">
                Showing {startIndex + 1}-{Math.min(endIndex, filteredCount)} of {filteredCount} posts
                {filteredCount !== totalPosts && ` (filtered from ${totalPosts})`}
            </p>

            <SearchBar
                searchTerm={searchTerm}
                onSearchChange={onSearchChange}
                onClear={onClearSearch}
            />

            <ItemsPerPageSelector
                itemsPerPage={itemsPerPage}
                options={[9, 12, 18, 30]}
                onItemsPerPageChange={onItemsPerPageChange}
            />
        </div>
    );
}
