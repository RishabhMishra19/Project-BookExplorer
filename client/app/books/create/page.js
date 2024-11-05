import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full flex items-center justify-center py-16">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-teal-800 mb-6">Add New Book</h1>
        <form action="#" method="POST">
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-teal-700 text-sm font-bold mb-2"
            >
              Title:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              required
              className="w-full px-3 py-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="author"
              className="block text-teal-700 text-sm font-bold mb-2"
            >
              Author:
            </label>
            <select
              id="author"
              name="author"
              required
              className="w-full px-3 py-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option value="">Select an author</option>
              <option value="1">Jane Austen</option>
              <option value="2">George Orwell</option>
              <option value="3">J.K. Rowling</option>
              <option value="4">Ernest Hemingway</option>
              <option value="5">Agatha Christie</option>
              <option value="6">Mark Twain</option>
              <option value="7">Virginia Woolf</option>
              <option value="8">Charles Dickens</option>
              <option value="9">Leo Tolstoy</option>
              <option value="10">Gabriel García Márquez</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="birth-date"
              className="block text-teal-700 text-sm font-bold mb-2"
            >
              Published Date:
            </label>
            <input
              type="date"
              id="birth-date"
              name="birth-date"
              className="w-full px-3 py-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-teal-700 text-sm font-bold mb-2"
            >
              Description:
            </label>
            <textarea
              id="description"
              name="description"
              rows="4"
              className="w-full px-3 py-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Author
          </button>
        </form>
        <Link
          href="/books"
          className="block mt-4 text-center text-teal-600 hover:underline"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
