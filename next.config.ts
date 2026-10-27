import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/US/index.do",
        destination: "/",
        permanent: true,
      },
      {
        source: "/US/programs/math.do",
        destination: "/math-tutoring-hicksville/",
        permanent: true,
      },
      {
        source: "/US/programs/english.do",
        destination: "/english-tutoring-hicksville/",
        permanent: true,
      },
      {
        source: "/US/customer/contact-us.do",
        destination: "/contact/",
        permanent: true,
      },
      {
        source: "/US/footer/faq.do",
        destination: "/faq/",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
        ],
      },
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
