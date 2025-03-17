/**
 * @type {import('next').NextConfig}
 */
export default {
  reactStrictMode: true,
  env: {
    // NEXT_PUBLIC_GRAPHQL_ENDPOINT : "https" 로 이후에 지정해주자.
  },
  webpack: config => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      canvas: false,
    };
    return config;
  },
};
