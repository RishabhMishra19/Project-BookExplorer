import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full  flex items-center justify-center  py-16">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-teal-800 mb-6">
          Sign Up for BookExplorer
        </h1>
        <form action="#" method="POST">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-teal-700 text-sm font-bold mb-2"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-3 py-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-teal-700 text-sm font-bold mb-2"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-3 py-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-teal-700 text-sm font-bold mb-2"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="w-full px-3 py-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="confirm-password"
              className="block text-teal-700 text-sm font-bold mb-2"
            >
              Confirm Password:
            </label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              required
              className="w-full px-3 py-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div className="mb-6">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              required
              className="mr-2"
            />
            <label htmlFor="terms" className="text-sm text-teal-700">
              I agree to the{" "}
              <a href="#" className="text-teal-600 hover:underline">
                Terms and Conditions
              </a>
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center text-teal-600">
          Already have an account?{" "}
          <Link
            href="/auth/login"
            className="text-teal-800 hover:underline font-bold"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
