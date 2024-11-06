import Link from "next/link";
import { BookForm } from "../../../../components/BookForm";

export default function Home() {
  return (
    <div className="w-full flex items-center justify-center py-16">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-teal-800 mb-6">Update Book</h1>
        <BookForm isUpdate={true} />
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
