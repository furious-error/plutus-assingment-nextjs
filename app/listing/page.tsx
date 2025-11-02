'use client';

import { useEffect } from 'react';
import { EmptyState } from './components/EmptyState';
import { ErrorState } from './components/ErrorState';
import { LoadingState } from './components/LoadingState';
import { PageHeader } from './components/PageHeader';
import { Pagination } from './components/Pagination';
import { PostGrid } from './components/PostGrid';
import { usePagination } from './hooks/usePagination';
import { usePosts } from './hooks/usePosts';
import { useSearch } from './hooks/useSearch';

export default function ListingPage() {
    // Custom hooks for data management
    const { posts, loading, error, refetch } = usePosts();
    const { searchTerm, setSearchTerm, filteredPosts } = useSearch(posts);
    const {
        currentItems,
        paginationInfo,
        handlePageChange,
        handleItemsPerPageChange,
        resetPage,
    } = usePagination(filteredPosts);

    // Reset page when search changes
    useEffect(() => {
        resetPage();
    }, [searchTerm, resetPage]);

    // Loading State
    if (loading) {
        return <LoadingState />;
    }

    // Error State
    if (error) {
        return <ErrorState error={error} onRetry={refetch} />;
    }

    // Empty State
    if (filteredPosts.length === 0) {
        return (
            <EmptyState
                searchTerm={searchTerm}
                onClearSearch={() => setSearchTerm('')}
                onSearchChange={setSearchTerm}
            />
        );
    }

    // Success State with Data
    return (
        <div className="min-h-screen bg-black py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <PageHeader
                    totalPosts={posts.length}
                    filteredCount={filteredPosts.length}
                    paginationInfo={paginationInfo}
                    searchTerm={searchTerm}
                    onSearchChange={setSearchTerm}
                    onClearSearch={() => setSearchTerm('')}
                    onItemsPerPageChange={handleItemsPerPageChange}
                />

                <PostGrid posts={currentItems} />

                <Pagination paginationInfo={paginationInfo} onPageChange={handlePageChange} />
            </div>
        </div>
    );
}
