import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [new URL('https://github.com/shadcn.png')],
    },
};

export default nextConfig;
