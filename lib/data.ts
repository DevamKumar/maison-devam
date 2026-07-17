export interface ServiceItem {
  id: string;
  name: string;
  category: "Hair" | "Skin" | "Spa" | "Nails" | "Makeup";
  price: number;
  priceDisplay: string;
  duration: string;
  description: string;
  image: string;
  popular?: boolean;
  seniorityOptions?: { title: string; price: number; priceDisplay: string }[];
}

export interface PackageItem {
  id: string;
  name: string;
  price: number;
  priceDisplay: string;
  duration: string;
  description: string;
  features: string[];
  image: string;
  recommended?: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialization: string;
  experience: string;
  image: string;
  bio: string;
  social: {
    instagram?: string;
    facebook?: string;
    linkedin?: string;
  };
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  serviceUsed: string;
  rating: number;
  review: string;
  clientImage: string;
  date: string;
}

export interface OfferItem {
  id: string;
  title: string;
  subtitle: string;
  discount: string;
  code: string;
  validUntil: string;
  description: string;
  image: string;
}

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  price: number;
  priceDisplay: string;
  rating: number;
  reviewsCount: number;
  description: string;
  image: string;
  inStock: boolean;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: "Beauty Tips" | "Hair Care" | "Skin Care" | "Spa Benefits" | "Luxury Lifestyle" | "Seasonal Care";
  excerpt: string;
  content: string;
  author: {
    name: string;
    role: string;
    image: string;
  };
  date: string;
  readTime: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "Hair Styling" | "Luxury Spa" | "Massage" | "Bridal Makeup" | "Reception" | "Luxury Interiors" | "Facials" | "Beauty Products" | "Customers" | "Team";
  image: string;
  aspectRatio: "square" | "tall" | "wide";
}

export const SERVICES_DATA: ServiceItem[] = [
  // HAIR SERVICES
  {
    id: "hair-cut",
    name: "Hair Cut",
    category: "Hair",
    price: 700,
    priceDisplay: "₹700",
    duration: "45 min",
    description: "Tailored precision cut by our skilled stylists including relaxing hair wash and signature blow-dry finish.",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800",
    popular: true,
    seniorityOptions: [
      { title: "Standard Stylist", price: 700, priceDisplay: "₹700" },
      { title: "Senior Stylist", price: 1200, priceDisplay: "₹1200" },
      { title: "Creative Director Cut", price: 1800, priceDisplay: "₹1800" },
    ],
  },
  {
    id: "senior-stylist-cut",
    name: "Senior Stylist Hair Cut",
    category: "Hair",
    price: 1200,
    priceDisplay: "₹1200",
    duration: "60 min",
    description: "Advanced architectural sculpting and personalized consultation with our seasoned master stylists.",
    image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "creative-cut",
    name: "Creative Cut",
    category: "Hair",
    price: 1800,
    priceDisplay: "₹1800",
    duration: "60 min",
    description: "Bespoke haute-coiffure transformation by our Creative Director, customized to your bone structure and lifestyle.",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800",
    popular: true,
  },
  {
    id: "hair-spa",
    name: "Luxury Hair Spa",
    category: "Hair",
    price: 1800,
    priceDisplay: "₹1800",
    duration: "60 min",
    description: "Deep conditioning ritual infused with argan and keratin essences to restore vitality and mirror shine.",
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "hair-botox",
    name: "Hair Botox Treatment",
    category: "Hair",
    price: 6000,
    priceDisplay: "₹6000",
    duration: "120 min",
    description: "Intensive anti-frizz collagen filler that reconstructs damaged hair fibers from the inside out without harsh chemicals.",
    image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&q=80&w=800",
    popular: true,
  },
  {
    id: "keratin",
    name: "Keratin Treatment",
    category: "Hair",
    price: 8500,
    priceDisplay: "₹8500",
    duration: "180 min",
    description: "Imported Brazilian keratin protein infusion providing up to 6 months of sleek, humidity-resistant, silky straight hair.",
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "smoothening",
    name: "Hair Smoothening",
    category: "Hair",
    price: 9500,
    priceDisplay: "₹9500",
    duration: "180 min",
    description: "Permanent structural rebonding and smoothening enriched with silk amino acids for effortless everyday elegance.",
    image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "hair-color-global",
    name: "Global Hair Color",
    category: "Hair",
    price: 4500,
    priceDisplay: "₹4500",
    duration: "120 min",
    description: "Ammonia-free luxury French color formulation delivering multi-dimensional luminance and 100% grey coverage.",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800",
    popular: true,
  },
  {
    id: "highlights",
    name: "Custom Highlights & Balayage",
    category: "Hair",
    price: 3500,
    priceDisplay: "₹3500",
    duration: "120 min",
    description: "Hand-painted sun-kissed ribbons of light utilizing Olaplex bond protection for seamless tonal transitions.",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "root-touchup",
    name: "Root Touch-up",
    category: "Hair",
    price: 2500,
    priceDisplay: "₹2500",
    duration: "60 min",
    description: "Flawless color matching at the roots paired with a nourishing gloss treatment to revive overall vibrancy.",
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "beard-styling",
    name: "Beard Styling & Spa",
    category: "Hair",
    price: 400,
    priceDisplay: "₹400",
    duration: "30 min",
    description: "Precision razor shaping, hot towel infusion, and beard oil conditioning for the modern gentleman.",
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "kids-haircut",
    name: "Kids Luxury Haircut",
    category: "Hair",
    price: 500,
    priceDisplay: "₹500",
    duration: "30 min",
    description: "Gentle, fun, and meticulous styling tailored specifically for young clients in a serene environment.",
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=800",
  },

  // SKIN SERVICES
  {
    id: "cleanup",
    name: "Express Botanical Cleanup",
    category: "Skin",
    price: 1200,
    priceDisplay: "₹1200",
    duration: "45 min",
    description: "Gentle exfoliation, steam extraction, and soothing aloe mask to clear congested pores and restore radiance.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "detan",
    name: "Organic Detan Therapy",
    category: "Skin",
    price: 1500,
    priceDisplay: "₹1500",
    duration: "45 min",
    description: "Enriched with lactic acid and organic licorice extract to instantly dissolve sun tan and brighten complexion.",
    image: "https://images.unsplash.com/photo-1512290900672-1f04e15efad6?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "hydra-facial",
    name: "Signature Hydra Facial",
    category: "Skin",
    price: 4500,
    priceDisplay: "₹4500",
    duration: "75 min",
    description: "Medical-grade hydro-dermabrasion combining gentle vortex extraction with hyaluronic serum infusion for an instant glass-skin glow.",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800",
    popular: true,
  },
  {
    id: "gold-facial",
    name: "24K Gold Luminance Facial",
    category: "Skin",
    price: 3000,
    priceDisplay: "₹3000",
    duration: "60 min",
    description: "Infuses pure colloidal 24K gold foil to stimulate cellular renewal, firm facial contours, and illuminate dull skin.",
    image: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&q=80&w=800",
    popular: true,
  },
  {
    id: "diamond-facial",
    name: "Diamond Micro-Exfoliation Facial",
    category: "Skin",
    price: 4000,
    priceDisplay: "₹4000",
    duration: "75 min",
    description: "Real micronized diamond crystals gently resurface fine lines and uneven texture, revealing baby-soft porcelain skin.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "luxury-facial",
    name: "Maison Devam Luxury Facial",
    category: "Skin",
    price: 6500,
    priceDisplay: "₹6500",
    duration: "90 min",
    description: "Our bespoke holistic facial utilizing Swiss caviar extracts, lymphatic sculpting massage, and LED light therapy.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800",
    popular: true,
  },
  {
    id: "anti-aging-facial",
    name: "Peptide Anti-Aging Facial",
    category: "Skin",
    price: 7500,
    priceDisplay: "₹7500",
    duration: "90 min",
    description: "Advanced bio-peptide complexes and micro-current stimulation lift and tone facial muscles for dramatic youthfulness.",
    image: "https://images.unsplash.com/photo-1512290900672-1f04e15efad6?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "acne-treatment",
    name: "Advanced Acne Clarifying Treatment",
    category: "Skin",
    price: 5000,
    priceDisplay: "₹5000",
    duration: "75 min",
    description: "Salicylic and tea tree enzymatic peels combined with high-frequency ozone therapy to calm inflammation and prevent breakouts.",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "pigmentation-therapy",
    name: "Lumino-Correct Pigmentation Therapy",
    category: "Skin",
    price: 5500,
    priceDisplay: "₹5500",
    duration: "75 min",
    description: "Targeted kojic acid and vitamin C serum penetration designed to fade melasma, dark spots, and hyperpigmentation.",
    image: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&q=80&w=800",
  },

  // SPA & WELLNESS SERVICES
  {
    id: "swedish-massage",
    name: "Swedish Massage",
    category: "Spa",
    price: 3000,
    priceDisplay: "₹3000",
    duration: "60 min",
    description: "Classic European long flowing strokes with warm aromatic oils to relieve stress, improve circulation, and relax the entire body.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "deep-tissue-massage",
    name: "Deep Tissue Massage",
    category: "Spa",
    price: 3500,
    priceDisplay: "₹3500",
    duration: "60 min",
    description: "Focused firm pressure targeting deep muscle layers and connective fascia to release chronic knots and athletic stiffness.",
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=800",
    popular: true,
  },
  {
    id: "balinese-massage",
    name: "Balinese Massage",
    category: "Spa",
    price: 4200,
    priceDisplay: "₹4200",
    duration: "75 min",
    description: "Traditional Indonesian ritual combining gentle stretching, acupressure, and warm lemongrass oils to balance internal Qi.",
    image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=800",
    popular: true,
  },
  {
    id: "aromatherapy-massage",
    name: "Bespoke Aromatherapy Massage",
    category: "Spa",
    price: 3800,
    priceDisplay: "₹3800",
    duration: "60 min",
    description: "Curate your own therapeutic journey with our organic essential oil blends (Lavender, Eucalyptus, Ylang-Ylang, or Bergamot).",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "head-massage",
    name: "Ayurvedic Shirodhara & Head Massage",
    category: "Spa",
    price: 900,
    priceDisplay: "₹900",
    duration: "45 min",
    description: "Warm herbal oils delicately poured over the forehead followed by deep scalp stimulation to eliminate insomnia and mental fatigue.",
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "foot-reflexology",
    name: "Foot Reflexology Sanctuary",
    category: "Spa",
    price: 1500,
    priceDisplay: "₹1500",
    duration: "45 min",
    description: "Targeted pressure point therapy on the feet corresponding to vital organs, accompanied by a warm peppermint foot soak.",
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "couple-spa",
    name: "Royal Couple Sanctuary Spa",
    category: "Spa",
    price: 6500,
    priceDisplay: "₹6500",
    duration: "90 min",
    description: "Side-by-side synchronized full-body massages in our private candle-lit VIP suite with complimentary champagne and chocolates.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800",
    popular: true,
  },
  {
    id: "luxury-spa-ritual",
    name: "Maison Devam Imperial Spa Ritual",
    category: "Spa",
    price: 8500,
    priceDisplay: "₹8500",
    duration: "120 min",
    description: "The pinnacle of relaxation: body scrub with volcanic lava stone, 90-min warm stone massage, and a restorative rose petal bath.",
    image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=800",
    popular: true,
  },

  // NAIL COUTURE
  {
    id: "manicure",
    name: "Classic Manicure",
    category: "Nails",
    price: 900,
    priceDisplay: "₹900",
    duration: "45 min",
    description: "Nail shaping, cuticle nourishment, soothing hand massage, and flawless application of luxury OPI lacquer.",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "luxury-manicure",
    name: "Luxury Spa Manicure",
    category: "Nails",
    price: 1800,
    priceDisplay: "₹1800",
    duration: "60 min",
    description: "Includes organic sea salt exfoliation, warm paraffin wax mask, and anti-aging hand cream infusion.",
    image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&q=80&w=800",
    popular: true,
  },
  {
    id: "pedicure",
    name: "Classic Pedicure",
    category: "Nails",
    price: 1200,
    priceDisplay: "₹1200",
    duration: "45 min",
    description: "Relaxing hydrotherapy foot bath, callus removal, nail grooming, and therapeutic foot massage.",
    image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "luxury-pedicure",
    name: "Luxury Spa Pedicure",
    category: "Nails",
    price: 2500,
    priceDisplay: "₹2500",
    duration: "75 min",
    description: "Our signature foot ritual featuring rose quartz crystal massage, volcanic clay detox mask, and hot towel wrap.",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=800",
    popular: true,
  },
  {
    id: "gel-nails",
    name: "Gel Extensions & Overlays",
    category: "Nails",
    price: 3000,
    priceDisplay: "₹3000",
    duration: "90 min",
    description: "Long-lasting, lightweight soft gel extensions providing chip-free, high-gloss perfection for up to 4 weeks.",
    image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "nail-art",
    name: "Bespoke Couture Nail Art",
    category: "Nails",
    price: 1500,
    priceDisplay: "₹1500",
    duration: "60 min",
    description: "Intricate hand-painted artistry, Swarovski crystal embellishments, and chrome/metallic gold foil designs.",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=800",
  },

  // MAKEUP ARTISTRY
  {
    id: "party-makeup",
    name: "Glamour Party Makeup",
    category: "Makeup",
    price: 3500,
    priceDisplay: "₹3500",
    duration: "60 min",
    description: "Radiant evening or cocktail look utilizing Dior, MAC, and Charlotte Tilbury cosmetics with false lashes included.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "hd-makeup",
    name: "High-Definition (HD) Makeup",
    category: "Makeup",
    price: 8000,
    priceDisplay: "₹8000",
    duration: "90 min",
    description: "Micro-pigmented complexion formulation that diffuses light, ensuring a flawless, second-skin finish under camera lenses.",
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=800",
    popular: true,
  },
  {
    id: "airbrush-makeup",
    name: "Pro Airbrush Makeup",
    category: "Makeup",
    price: 12000,
    priceDisplay: "₹12000",
    duration: "100 min",
    description: "Ultra-fine silicone mist application creating an imperceptible, waterproof, 24-hour durable luxury veil.",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "bridal-makeup",
    name: "Royal Bridal Makeup Package",
    category: "Makeup",
    price: 25000,
    priceDisplay: "₹25000",
    duration: "180 min",
    description: "The ultimate bridal transformation: personalized hair styling, saree/dupatta draping, luxury skincare prep, and HD/Airbrush mastery.",
    image: "https://images.unsplash.com/photo-1512290900672-1f04e15efad6?auto=format&fit=crop&q=80&w=800",
    popular: true,
  },
  {
    id: "engagement-makeup",
    name: "Engagement / Sangeet Makeup",
    category: "Makeup",
    price: 18000,
    priceDisplay: "₹18000",
    duration: "150 min",
    description: "Exquisite pre-wedding styling focusing on illuminated skin, mesmerizing eye makeup, and elegant hair updos.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "groom-makeup",
    name: "Gentleman Groom Styling & Makeup",
    category: "Makeup",
    price: 3500,
    priceDisplay: "₹3500",
    duration: "60 min",
    description: "Subtle skin evening, blemish concealing, beard perfection, and matte photo-finish touch up for the groom.",
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=800",
  },
];

export const PACKAGES_DATA: PackageItem[] = [
  {
    id: "luxury-glow",
    name: "Luxury Glow Package",
    price: 7999,
    priceDisplay: "₹7,999",
    duration: "2.5 Hours",
    description: "A comprehensive rejuvenation ritual designed to restore luminous vitality to both skin and hair.",
    features: [
      "24K Gold Luminance Facial",
      "Luxury Hair Spa with Argan Infusion",
      "Classic Manicure & Pedicure",
      "Complimentary Herbal Tea & Refreshments",
    ],
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800",
    recommended: true,
  },
  {
    id: "royal-couple-spa",
    name: "Royal Couple Sanctuary Spa",
    price: 11999,
    priceDisplay: "₹11,999",
    duration: "3 Hours",
    description: "Indulge together in our private candle-lit VIP suite with bespoke wellness therapies.",
    features: [
      "90-Min Balinese or Deep Tissue Massage",
      "Full-Body Organic Sea Salt Exfoliation",
      "Private Rose Petal Hydrotherapy Bath",
      "Complimentary Champagne & Belgian Chocolates",
    ],
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800",
    recommended: true,
  },
  {
    id: "bride-to-be",
    name: "Bride to Be Imperial Package",
    price: 39999,
    priceDisplay: "₹39,999",
    duration: "Full Day / 3 Sessions",
    description: "The complete pre-wedding transformation ensuring you radiate absolute perfection on your wedding day.",
    features: [
      "Pre-Wedding Consultation & Skin Trial",
      "3 Sessions of Signature Hydra/Diamond Facial",
      "Full Body Polishing & Brightening Wrap",
      "Luxury Gel Extensions & Nail Art",
      "Royal Wedding Day HD/Airbrush Bridal Makeup",
    ],
    image: "https://images.unsplash.com/photo-1512290900672-1f04e15efad6?auto=format&fit=crop&q=80&w=800",
    recommended: true,
  },
  {
    id: "groom-package",
    name: "Gentleman Royal Groom Package",
    price: 14999,
    priceDisplay: "₹14,999",
    duration: "3.5 Hours",
    description: "Curated grooming and relaxation tailored to make the groom look sharp, refreshed, and confident.",
    features: [
      "Advanced Architectural Hair Cut & Beard Styling",
      "Diamond Micro-Exfoliation Facial",
      "60-Min Swedish or Deep Tissue Massage",
      "Gentleman Groom Wedding Day Styling & Touch-up",
    ],
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "monthly-membership",
    name: "Maison Devam VIP Monthly Membership",
    price: 9999,
    priceDisplay: "₹9,999",
    duration: "Valid for 30 Days",
    description: "Your monthly passport to continuous self-care, priority bookings, and exclusive savings.",
    features: [
      "2 Luxury Hair Spas or Precision Haircuts",
      "1 Signature Hydra or Gold Facial",
      "1 60-Min Balinese / Swedish Massage",
      "Flat 15% Off on All Retail Boutique Products",
    ],
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "annual-membership",
    name: "Annual Elite Luxury Membership",
    price: 69999,
    priceDisplay: "₹69,999",
    duration: "Valid for 365 Days",
    description: "The ultimate luxury entitlement for discerning patrons demanding unlimited beauty and serenity.",
    features: [
      "Unlimited Hair Wash, Blow-Dry & Beard Styling",
      "12 Signature Facials of Your Choice (1 per month)",
      "12 Luxury Massages of Your Choice (1 per month)",
      "Free Birthday & Anniversary Sanctuary Spa Rituals",
      "Dedicated Private Stylist & Priority Lounge Access",
    ],
    image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=800",
    recommended: true,
  },
];

export const TEAM_DATA: TeamMember[] = [
  {
    id: "devam-kumar",
    name: "Devam Kumar",
    role: "Founder & Master Architect",
    specialization: "Haute Coiffure & Brand Vision",
    experience: "16+ Years",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800",
    bio: "Trained in Paris and Milan, Devam envisioned a sanctuary where international luxury salon techniques merge seamlessly with holistic serenity.",
    social: {
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: "elena-rostova",
    name: "Elena Rostova",
    role: "Creative Director",
    specialization: "Color Transformations & Balayage",
    experience: "14+ Years",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
    bio: "Former color educator for L'Oréal Professionnel in Europe, Elena is renowned for creating multi-dimensional, luminous hair palettes.",
    social: {
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
    },
  },
  {
    id: "aarav-singh",
    name: "Aarav Singh",
    role: "Senior Hair Artist",
    specialization: "Precision Sculpting & Hair Botox",
    experience: "10+ Years",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
    bio: "Aarav combines architectural geometry with intuitive flair to craft haircuts that elevate your natural facial symmetry.",
    social: {
      instagram: "https://instagram.com",
    },
  },
  {
    id: "dr-meera-kapoor",
    name: "Dr. Meera Kapoor",
    role: "Chief Skin Specialist",
    specialization: "Aesthetic Dermatology & Facials",
    experience: "12+ Years",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800",
    bio: "Board-certified aesthetic cosmetologist dedicated to non-invasive cellular rejuvenation and medical-grade hydra therapies.",
    social: {
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    },
  },
  {
    id: "putu-saraswati",
    name: "Putu Saraswati",
    role: "Lead Massage Therapist",
    specialization: "Balinese & Reflexology Rituals",
    experience: "15+ Years",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=800",
    bio: "Hailing from Ubud, Bali, Putu possesses an innate therapeutic touch that dissolves tension and recalibrates the nervous system.",
    social: {
      instagram: "https://instagram.com",
    },
  },
  {
    id: "zara-khan",
    name: "Zara Khan",
    role: "Celebrity Bridal Expert",
    specialization: "HD & Airbrush Bridal Makeup",
    experience: "11+ Years",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800",
    bio: "Having styled over 500 royal weddings, Zara is celebrated for creating timeless, camera-ready bridal looks that glow from within.",
    social: {
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
    },
  },
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "rev-1",
    clientName: "Ananya Birla",
    serviceUsed: "Creative Cut & Global Hair Color",
    rating: 5,
    review: "Maison Devam is without a doubt the most luxurious salon experience in Bengaluru. Elena transformed my hair with the most stunning honey balayage. The champagne service and private suite made me feel like royalty!",
    clientImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300",
    date: "2 days ago",
  },
  {
    id: "rev-2",
    clientName: "Vikramaditya Singhania",
    serviceUsed: "Royal Couple Sanctuary Spa",
    rating: 5,
    review: "We celebrated our anniversary with the Royal Couple Spa ritual. From the Balinese massage to the rose petal hydrotherapy, every second was sheer serenity. Worth every rupee!",
    clientImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
    date: "1 week ago",
  },
  {
    id: "rev-3",
    clientName: "Rhea Chakraborty",
    serviceUsed: "Signature Hydra Facial & Gold Mask",
    rating: 5,
    review: "Dr. Meera is a magician! My skin has never looked so clear, dewy, and luminous. The ambience is straight out of a Parisian boutique hotel.",
    clientImage: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=300",
    date: "2 weeks ago",
  },
  {
    id: "rev-4",
    clientName: "Tanvi Jindal",
    serviceUsed: "Royal Bridal Makeup Package",
    rating: 5,
    review: "Zara and the entire Maison Devam team made my wedding morning completely stress-free. My airbrush makeup stayed flawless through 12 hours of dancing and emotion. Truly world-class!",
    clientImage: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=300",
    date: "3 weeks ago",
  },
  {
    id: "rev-5",
    clientName: "Kabir Malhotra",
    serviceUsed: "Hair Botox & Senior Stylist Cut",
    rating: 5,
    review: "The Hair Botox treatment revived my dry, sun-damaged hair instantly. The attention to detail, hygiene, and imported Italian products set them leagues apart from other salons.",
    clientImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300",
    date: "1 month ago",
  },
  {
    id: "rev-6",
    clientName: "Natasha Poonawalla",
    serviceUsed: "Luxury Spa Pedicure & Gel Nails",
    rating: 5,
    review: "The rose quartz crystal massage during the pedicure was heavenly. Immaculate cleanliness, warm gold interiors, and the most attentive staff.",
    clientImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300",
    date: "1 month ago",
  },
  {
    id: "rev-7",
    clientName: "Siddharth Oberoi",
    serviceUsed: "Deep Tissue Massage",
    rating: 5,
    review: "Putu is an incredible therapist. My chronic shoulder tension from long flights disappeared completely after one 60-minute session. Highly recommended.",
    clientImage: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=300",
    date: "2 months ago",
  },
  {
    id: "rev-8",
    clientName: "Meenakshi Sundaram",
    serviceUsed: "Diamond Micro-Exfoliation Facial",
    rating: 5,
    review: "The diamond facial gave me an instant glass-skin look before my red carpet gala. The ambience exudes supreme luxury from the moment you step through the doors.",
    clientImage: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=300",
    date: "2 months ago",
  },
  {
    id: "rev-9",
    clientName: "Arjun Goel",
    serviceUsed: "Gentleman Royal Groom Package",
    rating: 5,
    review: "Booked the groom package before my reception. The precision haircut, relaxing facial, and beard styling gave me a fresh, confident look.",
    clientImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=300",
    date: "2 months ago",
  },
  {
    id: "rev-10",
    clientName: "Sanya Malhotra",
    serviceUsed: "Keratin Treatment",
    rating: 5,
    review: "My hair has remained silky smooth even during the humid monsoon season! Elena took the time to explain every step of the Brazilian Keratin process.",
    clientImage: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300",
    date: "3 months ago",
  },
];

export const OFFERS_DATA: OfferItem[] = [
  {
    id: "first-visit-20",
    title: "Flat 20% Off First Sanctuary Visit",
    subtitle: "Welcome to Maison Devam",
    discount: "FLAT 20%",
    code: "LUXE20",
    validUntil: "Limited Time Privilege",
    description: "Experience any signature hair treatment, facial, or wellness spa ritual with an exclusive 20% welcome privilege on your first booking.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "student-discount",
    title: "Student Luxury Privilege",
    subtitle: "Youth & Elegance",
    discount: "15% OFF",
    code: "STUDENT15",
    validUntil: "Valid Mon - Thu (11 AM - 4 PM)",
    description: "Present your valid student ID at the reception to receive 15% off on precision haircuts, botanical cleanups, and classic manicures.",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "wedding-season",
    title: "Bridal & Groom Season Package",
    subtitle: "Royal Wedding Couturier",
    discount: "COMPLIMENTARY SPA",
    code: "ROYALWEDDING",
    validUntil: "Ongoing Booking Privilege",
    description: "Book our Royal Bridal or Groom Package and receive a complimentary 60-min Balinese Sanctuary Massage for two before your big day.",
    image: "https://images.unsplash.com/photo-1512290900672-1f04e15efad6?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "festival-glow",
    title: "Festive Luminance Rituals",
    subtitle: "Celebration Glow",
    discount: "FLAT ₹2,500 OFF",
    code: "GLOW2500",
    validUntil: "Valid during festive season",
    description: "Combine our 24K Gold Facial with a Luxury Hair Spa and save ₹2,500 instantly on your celebration pampering.",
    image: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "referral-bonus",
    title: "VIP Referral Privilege",
    subtitle: "Share the Serenity",
    discount: "₹1,000 CREDIT",
    code: "REFER1000",
    validUntil: "Always Active",
    description: "Refer a friend or family member to Maison Devam and both of you will receive ₹1,000 credit toward your next luxury treatment.",
    image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=800",
  },
];

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: "caviar-shampoo",
    name: "Imperial Caviar Restorative Shampoo",
    category: "Hair Care",
    price: 3200,
    priceDisplay: "₹3,200",
    rating: 4.9,
    reviewsCount: 142,
    description: "Formulated with Swiss black caviar and silk amino acids to rebuild weakened hair bonds and deliver mirror-like shine.",
    image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&q=80&w=800",
    inStock: true,
  },
  {
    id: "argan-conditioner",
    name: "Moroccan Gold Argan Conditioner",
    category: "Hair Care",
    price: 3400,
    priceDisplay: "₹3,400",
    rating: 4.8,
    reviewsCount: 98,
    description: "Ultra-nourishing conditioner detangles and seals moisture into dry, color-treated hair without weighing it down.",
    image: "https://images.unsplash.com/photo-1608248597359-0e6d526a6a38?auto=format&fit=crop&q=80&w=800",
    inStock: true,
  },
  {
    id: "elixir-hair-oil",
    name: "24K Gold Botanical Hair Elixir Oil",
    category: "Hair Care",
    price: 4500,
    priceDisplay: "₹4,500",
    rating: 5.0,
    reviewsCount: 210,
    description: "An opulent dry oil blend of jojoba, camellia, and suspended 24K gold flakes that instantly tames frizz and adds celestial gloss.",
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&q=80&w=800",
    inStock: true,
  },
  {
    id: "hyaluronic-face-serum",
    name: "Multi-Molecular Hyaluronic Face Serum",
    category: "Skin Care",
    price: 5200,
    priceDisplay: "₹5,200",
    rating: 4.9,
    reviewsCount: 165,
    description: "Plumps fine lines and drenches all skin layers in lasting hydration with triple-weight hyaluronic acid and niacinamide.",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800",
    inStock: true,
  },
  {
    id: "rose-cleanser",
    name: "Damask Rose Gentle Milk Cleanser",
    category: "Skin Care",
    price: 2800,
    priceDisplay: "₹2,800",
    rating: 4.7,
    reviewsCount: 84,
    description: "Gently dissolves waterproof makeup and impurities while respecting the skin’s delicate hydrolipidic barrier.",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=800",
    inStock: true,
  },
  {
    id: "luxury-candle",
    name: "Santab & Oud Serenity Candle",
    category: "Luxury Candle",
    price: 3800,
    priceDisplay: "₹3,800",
    rating: 5.0,
    reviewsCount: 188,
    description: "Hand-poured soy wax infused with rich Mysore sandalwood, smoky agarwood, and amber to recreate our salon sanctuary at home.",
    image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&q=80&w=800",
    inStock: true,
  },
  {
    id: "essential-oils-kit",
    name: "Aromatherapy Organic Essential Oils Trio",
    category: "Essential Oils",
    price: 4200,
    priceDisplay: "₹4,200",
    rating: 4.9,
    reviewsCount: 112,
    description: "Pure organic distillations of French Lavender, Australian Eucalyptus, and Italian Bergamot for diffusing and wellness baths.",
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&q=80&w=800",
    inStock: true,
  },
  {
    id: "home-spa-kit",
    name: "Maison Devam Imperial Home Spa Kit",
    category: "Spa Kits",
    price: 8999,
    priceDisplay: "₹8,999",
    rating: 5.0,
    reviewsCount: 245,
    description: "The complete self-care chest: volcanic body scrub, gold body butter, rose quartz facial roller, and Santab & Oud mini candle.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800",
    inStock: true,
  },
];

export const BLOGS_DATA: BlogPost[] = [
  {
    id: "blog-1",
    slug: "the-secret-to-mirror-shine-hair-botox-vs-keratin",
    title: "The Secret to Mirror-Shine: Hair Botox vs. Keratin Explained",
    category: "Hair Care",
    excerpt: "Discover the vital differences between these two transformative salon treatments and learn which formulation best suits your hair type and lifestyle.",
    content: `
# The Secret to Mirror-Shine: Hair Botox vs. Keratin Explained

When it comes to achieving effortless, sleek, and frizz-free hair, our master artisans at **Maison Devam** are frequently asked: *Should I book a Keratin Treatment or Hair Botox?* While both treatments yield breathtaking, camera-ready results, their mechanisms and long-term benefits differ significantly.

## Understanding Keratin Treatments

Our imported **Brazilian Keratin Treatment (₹8,500)** works by coating the hair shaft with a powerful protective layer of keratin protein, sealed in with precise thermal straightening. 

- **Best For:** Extremely curly, frizzy, or unruly hair seeking lasting straightness.
- **Longevity:** Up to 5 to 6 months with sulfate-free home care (` + "`" + `Imperial Caviar Shampoo` + "`" + `).
- **Finish:** Ultra-sleek, humidity-resistant, and significantly reduced volume.

## The Magic of Hair Botox

Unlike traditional smoothing systems, our **Hair Botox Treatment (₹6,000)** does not actually contain botulinum toxin. Instead, it is an intensive deep-conditioning filler packed with marine collagen, amino acids, vitamins, and hyaluronic acid that penetrates deep into cortex voids.

- **Best For:** Chemically processed, brittle, heat-damaged, or fine hair that desires repair without losing natural volume or waves.
- **Longevity:** Up to 3 to 4 months of deep restoration.
- **Finish:** Velvet softness, plumped fiber density, zero frizz, and radiant mirror-like gloss while maintaining natural movement.

## Which Should You Choose?

During your **free personalized consultation** at Maison Devam, our Creative Directors evaluate your hair elasticity, porosity, and desired maintenance schedule before curating your custom treatment plan. Book your sanctuary session today!
    `,
    author: {
      name: "Elena Rostova",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
    },
    date: "July 12, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "blog-2",
    slug: "why-24k-gold-facials-are-the-ultimate-red-carpet-secret",
    title: "Why 24K Gold Facials Are the Ultimate Red Carpet Secret",
    category: "Skin Care",
    excerpt: "From ancient Egyptian royalty to modern runway icons, explore how colloidal gold stimulates cellular renewal and delivers instant glass-skin radiance.",
    content: `
# Why 24K Gold Facials Are the Ultimate Red Carpet Secret

Since the era of Cleopatra—who famously slept wearing a pure gold mask every night to preserve her youthful visage—colloidal gold has been revered as one of the world's most luxurious skincare ingredients. At **Maison Devam**, our **24K Gold Luminance Facial (₹3,000)** brings this ancient regal ritual into the modern aesthetic age.

## The Science of Pure Gold on Skin

When pure 24K gold foil is gently massaged into the epidermis alongside bio-peptides and hyaluronic acid, several cellular wonders occur simultaneously:

1. **Cellular Turnover Activation:** Gold nanoparticles stimulate basal cells, increasing elasticity and reducing the appearance of fine wrinkles and expression lines.
2. **Enhanced Micro-Circulation:** The warming action boosts oxygen supply to facial tissues, instantly flushing away dullness and creating an ethereal, lit-from-within glow.
3. **Anti-Inflammatory Protection:** Colloidal gold calms redness, neutralizes free radicals from urban pollution, and helps lock in lasting moisture.

## The Maison Devam 60-Minute Ritual

Our 60-minute journey begins with a gentle botanical double-cleanse and ultrasonic exfoliation. Next, our therapists apply medical-grade colloidal gold serum followed by pure 24K gold leaves laid delicately over the face. While the gold absorbs under calming LED light therapy, you enjoy a signature Ayurvedic scalp and shoulder massage.

Step out of our sanctuary ready for your wedding, gala, or special celebration with skin that shines with pure opulence.
    `,
    author: {
      name: "Dr. Meera Kapoor",
      role: "Chief Skin Specialist",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200",
    },
    date: "July 05, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "blog-3",
    slug: "the-art-of-balinese-massage-and-lymphatic-drainage",
    title: "The Holistic Art of Balinese Massage & Lymphatic Drainage",
    category: "Spa Benefits",
    excerpt: "How traditional Indonesian bodywork techniques melt away chronic stress, improve circulation, and re-center your mind and spirit.",
    content: `
# The Holistic Art of Balinese Massage & Lymphatic Drainage

In our high-paced modern lives, physical stress manifests not just as muscular tension, but also as lymphatic stagnation, mental fatigue, and sleep disruption. At **Maison Devam**, our wellness sanctuary is designed to transport you straight to the tranquil rain forests of Ubud through our **Balinese Massage (₹4,200)**.

## What Makes Balinese Massage Unique?

Developed over centuries in Indonesia, Balinese bodywork is an intuitive blend of acupressure, gentle skin rolling, deep tissue manipulation, and warm aromatherapy oil application.

- **Deep Lymphatic Stimulation:** By tracing the body's meridian lines with rhythmic upward strokes, our therapists encourage the drainage of metabolic toxins and reduce fluid retention.
- **Nervous System Reset:** The slow, meditative tempo of the massage triggers the parasympathetic nervous system, lowering cortisol levels and inducing deep restorative calm.

## Pairing with Our Imperial Spa Ritual

For the ultimate restorative experience, we recommend pairing your Balinese massage with our **Maison Devam Imperial Spa Ritual (₹8,500)**, which incorporates volcanic lava stone exfoliation and a private rose petal hydrotherapy soak.
    `,
    author: {
      name: "Putu Saraswati",
      role: "Lead Massage Therapist",
      image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=200",
    },
    date: "June 28, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "blog-4",
    slug: "monsoon-hair-and-skin-care-guide",
    title: "Monsoon Serenity: The Ultimate Luxury Hair & Skin Care Guide",
    category: "Seasonal Care",
    excerpt: "Combat humidity, frizz, and excess sebum with our expert seasonal recommendations for keeping your beauty ritual immaculate.",
    content: `
# Monsoon Serenity: The Ultimate Luxury Hair & Skin Care Guide

As the refreshing monsoon rains sweep across Bengaluru, the surge in atmospheric humidity introduces unique challenges for both hair and skin. Excessive moisture can cause frizz, scalp congestion, and uneven skin texture if not managed with tailored formulations.

## Top Monsoon Hair Essentials

1. **Switch to Sulfate-Free Clarifying:** Use our **Imperial Caviar Shampoo** twice weekly to gently remove rainwater pollutants and excess sebum without stripping natural oils.
2. **Book a Monthly Hair Spa:** Our **Luxury Hair Spa (₹1,800)** restores the lipid barrier of your hair shaft, sealing cuticles against humidity and frizz.
3. **Never Skip Lightweight Elixir:** Apply 2 drops of our **24K Gold Hair Elixir Oil** to damp ends before blow-drying for thermal defense and lasting gloss.

## Monsoon Skin Sanctuary

To prevent clogged pores during humid weather, schedule our **Express Botanical Cleanup (₹1,200)** or **Signature Hydra Facial (₹4,500)** every three to four weeks. Keep your home routine balanced with lightweight gel serums and thorough evening double-cleansing.
    `,
    author: {
      name: "Devam Kumar",
      role: "Founder & Master Architect",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
    },
    date: "June 15, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=800",
  },
];

export const GALLERY_DATA: GalleryItem[] = [
  { id: "gal-1", title: "Haute Coiffure Styling Lounge", category: "Hair Styling", image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800", aspectRatio: "tall" },
  { id: "gal-2", title: "Sanctuary Treatment Room", category: "Luxury Spa", image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800", aspectRatio: "wide" },
  { id: "gal-3", title: "Balinese Massage Therapy", category: "Massage", image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800", aspectRatio: "square" },
  { id: "gal-4", title: "Royal Bridal Transformation Suite", category: "Bridal Makeup", image: "https://images.unsplash.com/photo-1512290900672-1f04e15efad6?auto=format&fit=crop&q=80&w=800", aspectRatio: "tall" },
  { id: "gal-5", title: "Maison Devam Grand Reception & Lounge", category: "Reception", image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=800", aspectRatio: "wide" },
  { id: "gal-6", title: "Champagne Gold & Marble Interiors", category: "Luxury Interiors", image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=800", aspectRatio: "square" },
  { id: "gal-7", title: "Signature 24K Gold Facial Ritual", category: "Facials", image: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&q=80&w=800", aspectRatio: "tall" },
  { id: "gal-8", title: "Imported Italian Hair Washing Stations", category: "Luxury Interiors", image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=800", aspectRatio: "wide" },
  { id: "gal-9", title: "Our Retail Boutique Display", category: "Beauty Products", image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&q=80&w=800", aspectRatio: "square" },
  { id: "gal-10", title: "Radiant Happy Clients", category: "Customers", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800", aspectRatio: "tall" },
  { id: "gal-11", title: "Master Artisans at Work", category: "Team", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800", aspectRatio: "square" },
  { id: "gal-12", title: "Aromatherapy Foot Reflexology Suite", category: "Luxury Spa", image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&q=80&w=800", aspectRatio: "wide" },
];

export const WHY_CHOOSE_US_DATA = [
  {
    title: "Luxury Architectural Interiors",
    description: "Designed with warm Italian marble, champagne gold accents, and private soundproof sanctuary suites.",
    icon: "Building2",
  },
  {
    title: "50+ Certified Master Artisans",
    description: "Internationally trained stylists, dermatologists, and therapists dedicated to bespoke excellence.",
    icon: "Award",
  },
  {
    title: "100% Imported Premium Products",
    description: "We exclusively utilize L'Oréal Professionnel, Kérastase, OPI, Dior, and organic Swiss botanical extracts.",
    icon: "Sparkles",
  },
  {
    title: "10,000+ Happy Patrons",
    description: "Over a decade of celebrated service catering to celebrities, brides, and discerning wellness seekers.",
    icon: "HeartHandshake",
  },
  {
    title: "Hospital-Grade Sanitation",
    description: "Every tool is sterilized in medical autoclaves, with single-use luxury linens and air filtration.",
    icon: "ShieldCheck",
  },
  {
    title: "State-of-the-Art Imported Machines",
    description: "Equipped with genuine HydraFacial MD devices, ozone steamers, and advanced hair diagnostic scanners.",
    icon: "Cpu",
  },
  {
    title: "Complimentary Bespoke Consultation",
    description: "Every visit begins with a detailed scalp, hair, or skin analysis over herbal tea or champagne.",
    icon: "Coffee",
  },
  {
    title: "Tailored Personalized Care",
    description: "We record your exact formula history, preferences, and sensitivities for seamless ongoing perfection.",
    icon: "UserCheck",
  },
];

export const STATS_DATA = [
  { label: "Years of Luxury Heritage", value: "12+" },
  { label: "Happy VIP Patrons", value: "10K+" },
  { label: "Certified Master Artisans", value: "50+" },
  { label: "National Beauty Awards", value: "35+" },
];
