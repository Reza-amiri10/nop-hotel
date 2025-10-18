/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "qztxgzehrwhijvfbirla.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/cabin-images/**",
      },
    ],
    qualities: [20, 30, 50, 75, 85, 90, 100],
  },
};

export default nextConfig;
