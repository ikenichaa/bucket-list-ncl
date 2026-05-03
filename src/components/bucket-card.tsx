type BucketCardProps = {
  image: string;
  title: string;
  description: string;
  status: string;
  rating: number;
  postcode: string;
};

const BucketCard = ({
  image,
  title,
  description,
  status,
  rating,
  postcode,
}: BucketCardProps) => {
  const isVisited = status === "Been There";

  return (
    <div className="group overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-all border border-gray-100">
      <div className="relative h-48 w-full overflow-hidden">
        <img src={image} alt={title} className="h-full w-full object-cover" />

        {/* Status Overlay Badge */}
        <div
          className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold shadow-sm ${
            isVisited
              ? "bg-green-100 text-green-700"
              : "bg-amber-100 text-amber-700"
          }`}
        >
          {status}
        </div>
      </div>

      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          <span className="text-xs font-mono text-gray-400 bg-gray-50 px-2 py-1 rounded">
            {postcode}
          </span>
        </div>

        {/* Rating Section - Only shows if visited */}
        {isVisited && rating && (
          <div className="flex items-center gap-1 mb-3 text-amber-500">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={i < rating ? "fill-current" : "text-gray-200"}
              >
                ★
              </span>
            ))}
            <span className="text-gray-500 text-xs ml-1">({rating}/5)</span>
          </div>
        )}

        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default BucketCard;
