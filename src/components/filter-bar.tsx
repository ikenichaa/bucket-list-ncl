const FilterBar = ({
  searchQuery,
  setSearchQuery,
  statusFilter,
  setStatusFilter,
  minRating,
  setMinRating,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-gray-50 p-4 rounded-2xl mb-8 border border-gray-100">
      {/* Search Input */}
      <div className="md:col-span-2">
        <label className="block text-[11px] font-medium text-gray-400 mb-1.5 ml-0.5 uppercase tracking-wide">
          Search Name or Area
        </label>
        <input
          type="text"
          value={searchQuery}
          placeholder="e.g. NE1 or Flower Cafe..."
          className="w-full p-2.5 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Status Dropdown */}
      <div>
        <label className="block text-[11px] font-medium text-gray-400 mb-1.5 ml-0.5 uppercase tracking-wide">
          Progress
        </label>
        <select
          value={statusFilter}
          className="w-full p-2.5 bg-white border border-gray-200 rounded-xl outline-none cursor-pointer"
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="all">Everything</option>
          <option value="Been There">Been There</option>
          <option value="Want to Go">Want to Go</option>
        </select>
      </div>

      {/* Rating Dropdown */}
      <div>
        <label className="block text-[11px] font-medium text-gray-400 mb-1.5 ml-0.5 uppercase tracking-wide">
          Min Stars
        </label>
        <select
          value={minRating}
          className={`w-full p-2.5 bg-white border border-gray-200 rounded-xl outline-none cursor-pointer transition-opacity ${
            statusFilter === "Want to Go" ? "opacity-30" : "opacity-100"
          }`}
          onChange={(e) => setMinRating(Number(e.target.value))}
          disabled={statusFilter === "Want to Go"}
        >
          <option value="0">Any Rating</option>
          <option value="5">5 Stars only</option>
          <option value="4">4+ Stars</option>
          <option value="3">3+ Stars</option>
        </select>
      </div>
    </div>
  );
};

export default FilterBar;
