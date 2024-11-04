import { BookCard } from "@/components/BookCard";
import { BookFilters } from "@/components/BookFilters";
import { IconButton } from "@/components/IconButton";

export default function Home() {
  return (
    <div className="w-full h-max flex justify-center px-16">
      <div className="w-3/12 border-r-[1px] mr-3 px-3">
        <BookFilters />
      </div>
      <div className="w-10/12">
        <div className="flex flex-wrap justify-between">
          {[1, 2, 3, 4, 5, 6].map((val) => (
            <BookCard
              book={{
                title: "To Kill a Mockingbird",
                author: "Harper Lee",
                rating: 3.5,
                description:
                  "A novel about the serious issues of rape and racial inequality. A novel about the serious issues of rape and racial inequality",
                coverImage: "https://example.com/mockingbird.jpg",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
