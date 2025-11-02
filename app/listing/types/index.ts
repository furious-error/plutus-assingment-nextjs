export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface PaginationInfo {
    currentPage: number;
    totalPages: number;
    startIndex: number;
    endIndex: number;
    itemsPerPage: number;
}
