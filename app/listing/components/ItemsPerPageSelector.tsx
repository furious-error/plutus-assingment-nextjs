interface ItemsPerPageSelectorProps {
    itemsPerPage: number;
    options: number[];
    onItemsPerPageChange: (value: number) => void;
}

export function ItemsPerPageSelector({
    itemsPerPage,
    options,
    onItemsPerPageChange,
}: ItemsPerPageSelectorProps) {
    return (
        <div className="flex items-center justify-center gap-2 text-sm">
            <span className="text-gray-400">Items per page:</span>
            {options.map((num) => (
                <button
                    key={num}
                    onClick={() => onItemsPerPageChange(num)}
                    className={`px-3 py-1 rounded-lg transition-all ${itemsPerPage === num
                        ? 'bg-white text-black'
                        : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                        }`}
                >
                    {num}
                </button>
            ))}
        </div>
    );
}
