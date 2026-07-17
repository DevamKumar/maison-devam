import { MetadataRoute } from "next";
import { BLOGS_DATA } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://maisondevam.com";

  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/packages",
    "/gallery",
    "/pricing",
    "/experience",
    "/offers",
    "/team",
    "/products",
    "/blogs",
    "/contact",
    "/book",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const blogRoutes = BLOGS_DATA.map((post) => ({
    url: `${baseUrl}/blogs/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes];
}
