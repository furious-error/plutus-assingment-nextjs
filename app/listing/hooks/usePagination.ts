import { useMemo, useState } from 'react';
import { PaginationInfo, Post } from '../types';

export function usePagination(items: Post[], initialItemsPerPage = 9) {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(initialItemsPerPage);

    const paginationInfo = useMemo<PaginationInfo>(() => {
        const totalPages = Math.ceil(items.length / itemsPerPage);
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;

        return {
            currentPage,
            totalPages,
            startIndex,
            endIndex,
            itemsPerPage,
        };
    }, [items.length, currentPage, itemsPerPage]);

    const currentItems = useMemo(
        () => items.slice(paginationInfo.startIndex, paginationInfo.endIndex),
        [items, paginationInfo.startIndex, paginationInfo.endIndex]
    );

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleItemsPerPageChange = (newItemsPerPage: number) => {
        setItemsPerPage(newItemsPerPage);
        setCurrentPage(1);
    };

    const resetPage = () => setCurrentPage(1);

    return {
        currentItems,
        paginationInfo,
        handlePageChange,
        handleItemsPerPageChange,
        resetPage,
    };
}
