import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: ["Applebot", "Bingbot", "Googlebot"],
        allow: ["/"],
        disallow: "/admin/",
      },
      {
        userAgent: "Yeti",
        allow: ["/"],
        disallow: "/admin/",
      },
    ],
    sitemap: "https://gaoncare.kr/sitemap.xml",
  };
}
