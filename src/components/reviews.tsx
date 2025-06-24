import { ArrowUpRight, Star } from "lucide-react";
import { useMemo } from "react";

const bgColors = [
  "bg-red-500",
  "bg-green-500",
  "bg-blue-500",
  "bg-pink-500",
  "bg-purple-500",
  "bg-amber-700",
  "bg-indigo-500",
  "bg-rose-500",
];

const reviews = [
  {
    name: "Chris Lee",
    text: `Fantastic agency to work for, a clear leader in their field. David
    in particular is by far one of the best I’ve dealt with in my 10
    years in this indu...`,
    date: "6/16/2025",
    rating: 5,
  },
  {
    name: "Amanda Davis",
    text: `Swift Recruit helped me land my dream role quickly and professionally.
    Highly recommended!`,
    date: "5/30/2025",
    rating: 5,
  },
  {
    name: "Benjamin Cole",
    text: `Outstanding service and a team that genuinely cares.`,
    date: "5/22/2025",
    rating: 5,
  },
  {
    name: "Chris Lee",
    text: `Fantastic agency to work for, a clear leader in their field. David
    in particular is by far one of the best I’ve dealt with in my 10
    years in this indu...`,
    date: "6/16/2025",
    rating: 5,
  },
  {
    name: "Amanda Davis",
    text: `Swift Recruit helped me land my dream role quickly and professionally.
    Highly recommended!`,
    date: "5/30/2025",
    rating: 5,
  },

];

const getRandomColor = () => {
  return bgColors[Math.floor(Math.random() * bgColors.length)];
};

const Reviews = () => {
  const coloredReviews = useMemo(
    () =>
      reviews.map((review) => ({
        ...review,
        initial: review.name.charAt(0),
        bgColor: getRandomColor(),
      })),
    []
  );

  return (
    <div className="flex flex-col gap-4 max-w-screen-xl px-4 lg:px-0 mx-auto items-center py-8">
      <p className="text-2xl font-semibold">Google Reviews</p>
      <p>Read genuine reviews from our satisfied clients and candidates</p>

      <div className="flex flex-col gap-3 items-center mt-8">
        <div className="flex gap-1">
          {Array(5)
            .fill(null)
            .map((_, i) => (
              <Star key={i} fill="yellow" className="text-yellow-200 size-8" />
            ))}
          <p className="text-xl ml-2">5.0</p>
        </div>
        <p>216 Google Reviews</p>
        <p>Reviews for: Swift Recruit</p>
        <button className="flex items-center gap-4 border px-3 rounded-md py-2 hover:bg-slate-300">
          View All Reviews <ArrowUpRight />
        </button>
      </div>

      {/* reviews */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {coloredReviews.map((review, index) => (
          <div
            key={index}
            className="border p-4 rounded-md space-y-2 flex flex-col "
          >
            <div className="flex gap-4 items-center">
              <div
                className={`size-14 flex items-center justify-center rounded-full text-white text-3xl ${review.bgColor}`}
              >
                {review.initial}
              </div>
              <div>
                <p className="text-lg font-semibold">{review.name}</p>
                <div className="flex gap-1">
                  {Array(review.rating)
                    .fill(null)
                    .map((_, i) => (
                      <Star
                        key={i}
                        fill="yellow"
                        className="text-yellow-200 size-5"
                      />
                    ))}
                </div>
              </div>
            </div>
            <p className="text-center mt-4 text-gray-600 text-sm">
              {review.text}
            </p>
            <p className="w-full text-center text-xs text-gray-500">
              {review.date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
