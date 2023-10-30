import { MetadataRoute } from "next";

const baseUrl = process.env["NEXT_PUBLIC_VERCEL_URL"]
  ? `https://${process.env["NEXT_PUBLIC_VERCEL_URL"]}`
  : "http://localhost:3000";

const robots = (): MetadataRoute.Robots => {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    host: baseUrl,
  };
};

export default robots;
