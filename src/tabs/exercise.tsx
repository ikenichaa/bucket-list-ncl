import { useState } from "react";
import { EXERCISE_PLACES } from "../data/excercise.ts";
import BucketCard from "../components/bucket-card.tsx";
import FilterBar from "../components/filter-bar.tsx";
import type { Status } from "../components/filter-bar.tsx";

const Exercise = () => {
  // 1. Local state for filters
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<Status>("All");
  const [minRating, setMinRating] = useState(0);

  // 2. Logic (Same as before, but using our state)
  const filteredPlaces = EXERCISE_PLACES.filter((place) => {
    const matchesSearch =
      place.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      place.postcode.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus =
      statusFilter === "All" || place.status === statusFilter;
    const matchesRating = (place.rating || 0) >= minRating;

    return matchesSearch && matchesStatus && matchesRating;
  });

  return (
    <div>
      {/* 3. Call the reusable FilterBar */}
      <FilterBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        minRating={minRating}
        setMinRating={setMinRating}
      />

      {/* 4. Grid of Results */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPlaces.map((place) => (
          <BucketCard key={place.id} {...place} />
        ))}
      </div>
    </div>
  );
};

export default Exercise;
