const TableFooter = ({ currentPage = 1, totalPages = 5 }) => {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between px-4 py-3 text-sm text-gray-600 border-t bg-white ">
      {/* Results Info */}
      <div className="text-center sm:text-left">
        Showing 1 to 3 of 24 results
      </div>
 
      {/* Pagination */}
      <div className="flex justify-center sm:justify-end flex-wrap gap-1">
        <button
          className="px-2 py-1 border rounded disabled:opacity-50"
          disabled={currentPage === 1}
        >
          &lt;
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            className={`px-3 py-1 rounded border ${
              currentPage === i + 1
                ? "bg-orange-500 text-white"
                : "bg-white text-gray-800"
            }`}
          >
            {i + 1}
          </button>
        ))}
        <button
          className="px-2 py-1 border rounded disabled:opacity-50"
          disabled={currentPage === totalPages}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};
 
export default TableFooter;
 
 