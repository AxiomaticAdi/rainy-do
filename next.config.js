/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            { hostname: "images.unsplash.com" },
            { hostname: "images.pexels.com" },
        ],
    },
    experimental: {
        serverActions: true,
    },
};

module.exports = nextConfig;
