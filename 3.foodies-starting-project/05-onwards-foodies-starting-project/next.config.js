const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "zenghyun-nextjs-demo-users-image.s3.amazonaws.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
