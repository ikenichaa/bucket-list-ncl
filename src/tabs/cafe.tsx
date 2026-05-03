import BucketCard from "../components/bucket-card";
import { CAFE_PLACES } from "../data/cafe.ts";
const Cafe = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {CAFE_PLACES.map((place, index) => (
        <BucketCard key={index} {...place} />
      ))}
    </div>
  );
};

export default Cafe;
