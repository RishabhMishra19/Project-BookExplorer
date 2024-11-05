import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full flex items-center justify-center py-36">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-teal-800 mb-6">
          Login to BookExplorer
        </h1>
        <form action="#" method="POST">
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
          <div className="mb-6">
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
          <div className="flex items-center justify-between mb-6">
            <div>
              <input
                type="checkbox"
                id="remember"
                name="remember"
                className="mr-2"
              />
              <label htmlFor="remember" className="text-sm text-teal-700">
                Remember me
              </label>
            </div>
            <a href="#" className="text-sm text-teal-600 hover:underline">
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Log in
          </button>
        </form>
        <p className="mt-4 text-center text-teal-600">
          Don't have an account?{" "}
          <Link
            href="/auth/signup"
            className="text-teal-800 hover:underline font-bold"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
