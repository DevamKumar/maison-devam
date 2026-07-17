import type { Metadata } from "next";

export const siteMetadata: Metadata = {
  title: {
    default: "Maison Devam | Luxury Salon & Spa Sanctuary",
    template: "%s | Maison Devam Luxury Salon & Spa",
  },
  description:
    "Experience the pinnacle of luxury, beauty, and serenity at Maison Devam. Offering precision hairstyling, 24K gold facials, Balinese spa rituals, bridal couture makeup, and world-class aesthetic care in Bengaluru.",
  keywords: [
    "Maison Devam",
    "Luxury Salon Bengaluru",
    "Luxury Spa MG Road",
    "Bridal Makeup Artist Bengaluru",
    "Hair Botox Treatment",
    "Hydra Facial Bangalore",
    "Balinese Massage Spa",
    "Best Luxury Salon India",
    "24K Gold Facial",
    "Keratin Treatment",
  ],
  authors: [{ name: "Maison Devam Master Artisans" }],
  creator: "Devam Kumar",
  publisher: "Maison Devam Luxury Couture",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Maison Devam | Luxury Salon & Spa Sanctuary",
    description:
      "Luxury. Beauty. Serenity. Step inside Bengaluru's premier salon & spa destination worth ₹50+ lakh in architectural splendor.",
    url: "https://maisondevam.com",
    siteName: "Maison Devam Luxury Salon & Spa",
    images: [
      {
        url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1200",
        width: 1200,
        height: 630,
        alt: "Maison Devam Luxury Salon & Spa Sanctuary",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maison Devam | Luxury Salon & Spa Sanctuary",
    description: "Experience the pinnacle of luxury, beauty, and serenity at Maison Devam.",
    images: ["https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1200"],
  },
  icons: {
    icon: "/icons/logo-icon.svg",
    shortcut: "/icons/logo-icon.svg",
    apple: "/icons/logo-icon.svg",
  },
};

export const jsonLdLocalBusiness = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: "Maison Devam Luxury Salon & Spa",
  description:
    "Maison Devam is a world-class luxury salon and spa sanctuary offering haute coiffure hairstyling, advanced facials, Balinese bodywork, and bespoke bridal makeup.",
  image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1200",
  "@id": "https://maisondevam.com",
  url: "https://maisondevam.com",
  telephone: "+919876543210",
  priceRange: "₹₹₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Maison Devam Luxury Sanctuary, MG Road",
    addressLocality: "Bengaluru",
    addressRegion: "KA",
    postalCode: "560001",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 12.9754,
    longitude: 77.6068,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "09:00",
      closes: "21:00",
    },
  ],
  sameAs: [
    "https://instagram.com/maisondevam",
    "https://facebook.com/maisondevam",
    "https://linkedin.com/company/maisondevam",
  ],
};
