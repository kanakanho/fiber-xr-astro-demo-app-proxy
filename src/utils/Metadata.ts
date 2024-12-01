export type Metadata = {
  title: string;
  description: string;
  applicationName: string;
  authors?: string[];
  keywords?: string[];
  category: "website" | string;
  themeColor?: string;
  creater?: string;
  manifest?: string;
  openGraph: {
    title?: string;
    description?: string;
    siteName?: string;
    url?: string;
    type?: string;
    imageType?:
      | "image/jpeg"
      | "image/gif"
      | "image/png"
      | "image/svg+xml"
      | "image/tiff"
      | "image/webp";
    imageWidth?: number;
    imageHeight?: number;
    image?: string;
    imageAlt?: string;
  };
  twitter: {
    card?: "summary" | "summary_large_image" | "app" | "player";
    site?: string;
    creator?: string;
    description?: string;
    imageType?:
      | "image/jpeg"
      | "image/gif"
      | "image/png"
      | "image/svg+xml"
      | "image/tiff"
      | "image/webp";
    imageWidth?: number;
    imageHeight?: number;
    image?: string;
  };
};

const Metadata: Metadata = {
  title: "Astro & React App",
  description: "This is a sample application using Astro and React.",
  applicationName: "AstroReactApp",
  keywords: ["astro", "react", "app"],
  category: "website",
  openGraph: {
    title: "Astro & React App",
    description: "Astro & React App",
    siteName: "Astro & React App",
    url: "https://example.com",
    type: "website",
    imageAlt: "Astro & React App",
    image: "https://example.com/ogp.jpg",
  },
  twitter: {
    card: "summary_large_image",
    site: "@example",
    creator: "@example",
    description: "Astro & React App",
    imageType: "image/png",
    image: "https://example.com/twitter-image.jpg",
  },
};

export default Metadata;
