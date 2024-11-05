/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV === "development";

const nextConfig = {
  async rewrites() {
    return isDev
      ? [
          {
            source: "/api/:path*",
            destination: "http://localhost:4000/api/:path*", // Proxy to backend in dev mode only
          },
        ]
      : [];
  },
};

export default nextConfig;
