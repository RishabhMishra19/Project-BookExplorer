import { AuthorCard } from "@/components/AuthorCard";
import { AuthorFilters } from "@/components/AuthorFilters";
import { IconButton } from "@/components/IconButton";

export default function Home() {
  return (
    <div>
      <div className="flex justify-between mx-[70px] border-b-[2px] pb-4 ml-[390px] mr-[60px] mb-4 items-center">
        <h2 className="text-3xl font-bold">Featured Authors</h2>
        <IconButton>Add Author</IconButton>
      </div>
      <div className="w-full h-max flex justify-center px-16">
        <div className="w-3/12 border-r-[1px] mr-3 px-3">
          <AuthorFilters />
        </div>
        <div className="w-10/12">
          <div className="flex flex-wrap justify-between">
            {[1, 2, 3, 4, 5, 6].map((val) => (
              <AuthorCard
                key={val}
                author={{
                  id: "1",
                  name: "John Doe",
                  rating: 3.5,
                  biography:
                    "John Doe is an author known for his works in fiction, especially in fantasy and science fiction genres.",
                  born_date: "1975-06-12",
                  books: [
                    {
                      id: "101",
                      title: "The Journey Beyond",
                      genre: "Fantasy",
                      published_date: "2005-08-23",
                      summary:
                        "A thrilling fantasy novel about a young hero embarking on an epic journey.",
                    },
                    {
                      id: "102",
                      title: "The Lost Star",
                      genre: "Science Fiction",
                      published_date: "2010-03-15",
                      summary:
                        "A sci-fi adventure that explores the mystery of a missing star.",
                    },
                  ],
                  reviews: [
                    {
                      id: "r1",
                      reviewer_name: "Jane Smith",
                      content:
                        "An amazing author with a unique style. 'The Journey Beyond' was a captivating read from start to finish.",
                      rating: 5,
                    },
                    {
                      id: "r2",
                      reviewer_name: "Samuel Green",
                      content:
                        "While 'The Lost Star' has an intriguing plot, I felt that the pacing was a bit off at times.",
                      rating: 3,
                    },
                  ],
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
