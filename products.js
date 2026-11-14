// VELORA Luxury Fashion - Product Catalog & Static Data
// Specializing in Designer Jackets for Women

window.VELORA_DATA = {
  categories: [
    { id: 'all', name: 'All Jackets', count: 16 },
    { id: 'leather', name: 'Leather Jackets', count: 4, icon: 'Flame' },
    { id: 'denim', name: 'Denim Jackets', count: 3, icon: 'Sparkles' },
    { id: 'winter', name: 'Winter Jackets', count: 3, icon: 'Snowflake' },
    { id: 'cropped', name: 'Cropped Jackets', count: 3, icon: 'Scissors' },
    { id: 'casual', name: 'Casual Jackets', count: 3, icon: 'Compass' }
  ],

  products: [
    {
      id: 1,
      name: "The Saint-Germain Biker Jacket",
      slug: "saint-germain-biker-jacket",
      category: "Leather Jackets",
      categoryKey: "leather",
      price: 349,
      originalPrice: 420,
      rating: 4.9,
      reviewsCount: 142,
      badge: "Bestseller",
      isFeatured: true,
      isBestSeller: true,
      isNewArrival: false,
      inStock: true,
      images: [
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1000&q=85",
        "https://images.unsplash.com/photo-1543087903-1ac2ec7aa8c5?auto=format&fit=crop&w=1000&q=85",
        "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?auto=format&fit=crop&w=1000&q=85"
      ],
      description: "An iconic silhouette crafted from ultra-supple Italian full-grain lambskin leather. Features polished gold-tone hardware, asymmetrical zipper closure, notched lapels, and an adjustable belted waist. Designed to sculpt the silhouette while delivering effortless French chic.",
      features: [
        "100% Genuine Italian Lambskin Leather",
        "Hand-polished brass zippers & buckle hardware",
        "Signature burgundy silk-satin interior lining",
        "Three zippered exterior pockets & one interior slip pocket",
        "Tailored tailored feminine taper at the waistline"
      ],
      materials: "Outer: 100% Full-Grain Lambskin Leather. Lining: 100% Cupro Silk Satin.",
      care: "Specialist leather dry cleaning only. Store in provided cotton garment bag away from direct sunlight.",
      colors: [
        { name: "Onyx Black", hex: "#111111" },
        { name: "Rich Espresso", hex: "#382823" },
        { name: "Cognac Brown", hex: "#7a4325" }
      ],
      sizes: ["XS", "S", "M", "L", "XL"]
    },
    {
      id: 2,
      name: "Atelier Cropped Moto Suede",
      slug: "atelier-cropped-moto-suede",
      category: "Cropped Jackets",
      categoryKey: "cropped",
      price: 289,
      originalPrice: 340,
      rating: 4.8,
      reviewsCount: 98,
      badge: "Trending",
      isFeatured: true,
      isBestSeller: false,
      isNewArrival: true,
      inStock: true,
      images: [
        "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?auto=format&fit=crop&w=1000&q=85",
        "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=85",
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1000&q=85"
      ],
      description: "A masterclass in modern proportion, this cropped jacket hits gracefully at the natural waist. Cut from velvety goat suede in a warm beige-sand tone, it features minimal hardware and clean, architectural seam lines.",
      features: [
        "Ultra-soft premium kid suede with natural nap",
        "Cropped hemline pairs effortlessly with high-waisted tailoring",
        "Minimalist front zip closure with leather pull tab",
        "Subtle shoulder pads for structured silhouette"
      ],
      materials: "100% European Kid Suede. Acetate stretch lining.",
      care: "Specialist suede clean only. Avoid moisture and rain.",
      colors: [
        { name: "Sandstone Beige", hex: "#d8c5ad" },
        { name: "Onyx Black", hex: "#111111" },
        { name: "Mocha", hex: "#5b4033" }
      ],
      sizes: ["XS", "S", "M", "L"]
    },
    {
      id: 3,
      name: "Venice Vintage Oversized Denim",
      slug: "venice-vintage-oversized-denim",
      category: "Denim Jackets",
      categoryKey: "denim",
      price: 195,
      originalPrice: 230,
      rating: 4.9,
      reviewsCount: 167,
      badge: "Bestseller",
      isFeatured: true,
      isBestSeller: true,
      isNewArrival: false,
      inStock: true,
      images: [
        "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=1000&q=85",
        "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&w=1000&q=85",
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1000&q=85"
      ],
      description: "Crafted from 13.5 oz Japanese selvedge organic cotton denim with an authentic washed vintage indigo finish. Cut with a relaxed dropped shoulder and roomy boyfriend fit, finished with branded antique brass hardware.",
      features: [
        "100% GOTS-Certified Organic Japanese Cotton Denim",
        "Hand-distressed vintage wash with natural fading",
        "Engraved VELORA custom shank buttons",
        "Deep welt hand pockets and flap chest pockets"
      ],
      materials: "100% Organic Selvedge Denim Cotton. Unlined.",
      care: "Machine wash cold inside out with similar colors. Line dry in shade.",
      colors: [
        { name: "Vintage Indigo", hex: "#4b6584" },
        { name: "Washed Black", hex: "#333333" },
        { name: "Raw Ecru", hex: "#f3ede3" }
      ],
      sizes: ["XS", "S", "M", "L", "XL"]
    },
    {
      id: 4,
      name: "St. Moritz Shearling Winter Parka",
      slug: "st-moritz-shearling-winter-parka",
      category: "Winter Jackets",
      categoryKey: "winter",
      price: 495,
      originalPrice: 580,
      rating: 5.0,
      reviewsCount: 84,
      badge: "Luxury Edition",
      isFeatured: true,
      isBestSeller: false,
      isNewArrival: true,
      inStock: true,
      images: [
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=1000&q=85",
        "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=1000&q=85",
        "https://images.unsplash.com/photo-1548624313-0396c75e4b1a?auto=format&fit=crop&w=1000&q=85"
      ],
      description: "Designed for Alpine luxury and sub-zero city elegance. Heavyweight shearling trim collar combined with water-repellent matte technical shell and 800-fill responsible down insulation.",
      features: [
        "800-fill power RDS certified goose down",
        "Plush detachable merino shearling collar",
        "Storm-cuff sleeves with thumbholes",
        "Internal thermal draft tubes and fleece-lined pockets"
      ],
      materials: "Shell: 100% Recycled Technical Poly. Trim: 100% Merino Shearling. Insulation: 90/10 Goose Down.",
      care: "Dry clean only by leather & down specialist.",
      colors: [
        { name: "Champagne Pearl", hex: "#ede6dd" },
        { name: "Velvet Night", hex: "#16161a" },
        { name: "Taupe Stone", hex: "#8c7e73" }
      ],
      sizes: ["XS", "S", "M", "L", "XL"]
    },
    {
      id: 5,
      name: "Kensington Belted Trench Jacket",
      slug: "kensington-belted-trench-jacket",
      category: "Casual Jackets",
      categoryKey: "casual",
      price: 275,
      originalPrice: 320,
      rating: 4.8,
      reviewsCount: 112,
      badge: "Classic",
      isFeatured: true,
      isBestSeller: true,
      isNewArrival: false,
      inStock: true,
      images: [
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=85",
        "https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?auto=format&fit=crop&w=1000&q=85",
        "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1000&q=85"
      ],
      description: "A contemporary mid-length trench jacket inspired by timeless British tailoring. Features double-breasted horn buttons, storm flap, cinching waist belt with gold D-rings, and water-resistant gabardine cotton.",
      features: [
        "Water-resistant compact cotton gabardine",
        "Double-breasted front with real horn buttons",
        "Detachable waist belt with brass eyelets",
        "Classic gun flap and shoulder epaulettes"
      ],
      materials: "100% Compact Cotton Gabardine. Cupro lining.",
      care: "Dry clean only. Warm iron with pressing cloth.",
      colors: [
        { name: "Honey Beige", hex: "#cbab7e" },
        { name: "Midnight Black", hex: "#101010" },
        { name: "Olive Moss", hex: "#4a5342" }
      ],
      sizes: ["XS", "S", "M", "L", "XL"]
    },
    {
      id: 6,
      name: "SoHo Cropped Quilted Bomber",
      slug: "soho-cropped-quilted-bomber",
      category: "Cropped Jackets",
      categoryKey: "cropped",
      price: 220,
      originalPrice: 260,
      rating: 4.7,
      reviewsCount: 76,
      badge: "New Arrival",
      isFeatured: false,
      isBestSeller: false,
      isNewArrival: true,
      inStock: true,
      images: [
        "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=1000&q=85",
        "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?auto=format&fit=crop&w=1000&q=85",
        "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?auto=format&fit=crop&w=1000&q=85"
      ],
      description: "An elevated take on the flight bomber jacket, re-proportioned with a modern cropped waist and tonal diamond quilting. Features ribbed cashmere collar and cuffs with sleek two-way front zipper.",
      features: [
        "Satin-finish recycled nylon shell",
        "Architectural diamond quilting pattern",
        "Cashmere-blend rib knit collar, cuffs, and hem",
        "Utility zip sleeve pocket with leather charm"
      ],
      materials: "Outer: 100% Recycled Polyamide. Trim: 85% Cashmere, 15% Elastane.",
      care: "Dry clean or delicate cold hand wash.",
      colors: [
        { name: "Cream Ivory", hex: "#f8f5ef" },
        { name: "Deep Khaki", hex: "#434839" },
        { name: "Noir", hex: "#0c0c0c" }
      ],
      sizes: ["XS", "S", "M", "L"]
    },
    {
      id: 7,
      name: "Montmartre Leather Blazer Coat",
      slug: "montmartre-leather-blazer-coat",
      category: "Leather Jackets",
      categoryKey: "leather",
      price: 385,
      originalPrice: 450,
      rating: 4.9,
      reviewsCount: 89,
      badge: "Luxury Pick",
      isFeatured: true,
      isBestSeller: true,
      isNewArrival: false,
      inStock: true,
      images: [
        "https://images.unsplash.com/photo-1543087903-1ac2ec7aa8c5?auto=format&fit=crop&w=1000&q=85",
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1000&q=85",
        "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=85"
      ],
      description: "Blurring the line between power blazer and leather luxury. Crafted in butter-soft nappa leather with notched lapels, single-button closure, and clean flap pockets for an effortless 90s supermodel silhouette.",
      features: [
        "100% Nappa sheepskin leather with smooth glazed finish",
        "Tailored silhouette with slight waist tuck",
        "Single mother-of-pearl central button",
        "Interior chest ticket pocket"
      ],
      materials: "100% Premium Nappa Leather. 100% Bemberg Silk lining.",
      care: "Professional leather specialist only.",
      colors: [
        { name: "Pitch Black", hex: "#0f0f10" },
        { name: "Chestnut Brown", hex: "#4f2b18" },
        { name: "Bordeaux Wine", hex: "#441d24" }
      ],
      sizes: ["XS", "S", "M", "L", "XL"]
    },
    {
      id: 8,
      name: "Geneva Cloud Puffer Down Jacket",
      slug: "geneva-cloud-puffer-down-jacket",
      category: "Winter Jackets",
      categoryKey: "winter",
      price: 320,
      originalPrice: 380,
      rating: 4.8,
      reviewsCount: 135,
      badge: "Warmth Pick",
      isFeatured: false,
      isBestSeller: true,
      isNewArrival: false,
      inStock: true,
      images: [
        "https://images.unsplash.com/photo-1548624313-0396c75e4b1a?auto=format&fit=crop&w=1000&q=85",
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=1000&q=85",
        "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=1000&q=85"
      ],
      description: "Cloud-like warmth meets high fashion. Designed with an oversized cocoon collar, water-resistant matte satin shell, and ethically sourced white goose down padding that feels like a warm embrace.",
      features: [
        "750-fill white goose down insulation",
        "Oversized stand collar with hidden hood",
        "Fleece-lined hand-warmer magnetic pockets",
        "Internal cinch bungee cord at hem"
      ],
      materials: "Shell: 100% Matte Water-Resistant Nylon. Filling: 90% Down, 10% Feathers.",
      care: "Machine wash cold delicate in front-load machine with down wash. Tumble dry low with tennis balls.",
      colors: [
        { name: "Caramel Macchiato", hex: "#9b7250" },
        { name: "Alabaster White", hex: "#f3f0e8" },
        { name: "Jet Black", hex: "#111111" }
      ],
      sizes: ["XS", "S", "M", "L", "XL"]
    },
    {
      id: 9,
      name: "Riviera Embroidered Pearl Denim",
      slug: "riviera-embroidered-pearl-denim",
      category: "Denim Jackets",
      categoryKey: "denim",
      price: 245,
      originalPrice: 290,
      rating: 4.9,
      reviewsCount: 64,
      badge: "Artisanal",
      isFeatured: false,
      isBestSeller: false,
      isNewArrival: true,
      inStock: true,
      images: [
        "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&w=1000&q=85",
        "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=1000&q=85",
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1000&q=85"
      ],
      description: "A romantic interpretation of utilitarian denim. Individually hand-embellished across the collar and yoke with shimmering faux pearls and subtle tonal embroidery on stone-washed blue denim.",
      features: [
        "Hand-applied faux pearl embellishments along collar",
        "Medium-wash 100% durable cotton denim",
        "Silver-tone engraved metal shank buttons",
        "Relaxed tailored silhouette"
      ],
      materials: "100% Premium Cotton Denim with resin pearls.",
      care: "Turn inside out. Hand wash cold or gentle bag wash.",
      colors: [
        { name: "Stoned Washed Blue", hex: "#6c89a7" },
        { name: "Pearl White", hex: "#eae4dc" }
      ],
      sizes: ["XS", "S", "M", "L"]
    },
    {
      id: 10,
      name: "Avenue Cashmere Blend Wrap Jacket",
      slug: "avenue-cashmere-blend-wrap-jacket",
      category: "Casual Jackets",
      categoryKey: "casual",
      price: 360,
      originalPrice: 430,
      rating: 5.0,
      reviewsCount: 110,
      badge: "Luxury Pick",
      isFeatured: true,
      isBestSeller: true,
      isNewArrival: false,
      inStock: true,
      images: [
        "https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?auto=format&fit=crop&w=1000&q=85",
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=85",
        "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1000&q=85"
      ],
      description: "Effortlessly elegant wrap silhouette woven from double-faced Australian virgin wool and Mongolian cashmere. Features cascading shawl lapels and a matching tie belt for custom styling.",
      features: [
        "70% Fine Virgin Wool, 30% Mongolian Cashmere",
        "Hand-stitched double-faced construction with no lining needed",
        "Generous draped shawl collar",
        "Self-fabric sash belt and deep side patch pockets"
      ],
      materials: "70% Virgin Wool, 30% Cashmere.",
      care: "Dry clean only. Steam softly to refresh fibers.",
      colors: [
        { name: "Oatmeal Melange", hex: "#d5cbbf" },
        { name: "Camel", hex: "#ad7a50" },
        { name: "Charcoal Heather", hex: "#2f2f33" }
      ],
      sizes: ["XS", "S", "M", "L", "XL"]
    },
    {
      id: 11,
      name: "Brooklyn Distressed Sherpa Denim",
      slug: "brooklyn-distressed-sherpa-denim",
      category: "Denim Jackets",
      categoryKey: "denim",
      price: 230,
      originalPrice: 275,
      rating: 4.8,
      reviewsCount: 151,
      badge: "Bestseller",
      isFeatured: false,
      isBestSeller: true,
      isNewArrival: false,
      inStock: true,
      images: [
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1000&q=85",
        "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=1000&q=85",
        "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&w=1000&q=85"
      ],
      description: "The rugged cool of vintage Americana lined with the cozy warmth of plush ivory sherpa fleece. Perfect for transitional autumn evenings and crisp winter days.",
      features: [
        "Thick plush sherpa fleece lining throughout body and collar",
        "Heavyweight vintage wash denim",
        "Quilted insulated sleeve linings for easy slip-on",
        "Side adjusters at waist hem"
      ],
      materials: "Outer: 100% Cotton Denim. Body Lining: 100% Faux Sherpa Fleece.",
      care: "Machine wash cold gentle. Do not tumble dry.",
      colors: [
        { name: "Vintage Medium Wash", hex: "#527191" },
        { name: "Faded Black", hex: "#2b2b2e" }
      ],
      sizes: ["XS", "S", "M", "L", "XL"]
    },
    {
      id: 12,
      name: "Aspen Shearling Cropped Aviator",
      slug: "aspen-shearling-cropped-aviator",
      category: "Cropped Jackets",
      categoryKey: "cropped",
      price: 375,
      originalPrice: 440,
      rating: 4.9,
      reviewsCount: 88,
      badge: "New Arrival",
      isFeatured: true,
      isBestSeller: false,
      isNewArrival: true,
      inStock: true,
      images: [
        "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=1000&q=85",
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=1000&q=85",
        "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?auto=format&fit=crop&w=1000&q=85"
      ],
      description: "A showstopping winter essential. Cropped aviator flight jacket silhouette with distressed chocolate cracked leather exterior and thick curly shearling wool trim and buckle neck straps.",
      features: [
        "Cracked vintage lambskin with rich patina",
        "Full curly merino wool lining and turn-back cuffs",
        "Twin adjustable throat latch leather buckles",
        "Heavy-duty antiqued brass hardware"
      ],
      materials: "100% Spanish Merino Lambskin Shearling.",
      care: "Specialist leather & fur cleaner only.",
      colors: [
        { name: "Dark Chocolate & Cream", hex: "#3e2723" },
        { name: "Caramel & Honey", hex: "#8d5b4c" },
        { name: "Black & Raven", hex: "#151515" }
      ],
      sizes: ["XS", "S", "M", "L"]
    },
    {
      id: 13,
      name: "Tribeca Minimalist Zip Leather",
      slug: "tribeca-minimalist-zip-leather",
      category: "Leather Jackets",
      categoryKey: "leather",
      price: 330,
      originalPrice: 390,
      rating: 4.7,
      reviewsCount: 73,
      badge: "Modernist",
      isFeatured: false,
      isBestSeller: false,
      isNewArrival: false,
      inStock: true,
      images: [
        "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=85",
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1000&q=85",
        "https://images.unsplash.com/photo-1543087903-1ac2ec7aa8c5?auto=format&fit=crop&w=1000&q=85"
      ],
      description: "Clean Scandinavian lines meet Manhattan edge. Collarless café-racer cut in buttery cowhide with concealed front zip and subtle side seam pockets.",
      features: [
        "Sleek round collarless neckline",
        "Concealed zip placket for seamless look",
        "Darted back paneling for sculpted posture",
        "Internal zip security pocket"
      ],
      materials: "100% Full-Grain Cowhide Leather. Cotton-modal lining.",
      care: "Leather specialist clean only.",
      colors: [
        { name: "Warm Taupe", hex: "#87766a" },
        { name: "Matte Black", hex: "#171717" }
      ],
      sizes: ["XS", "S", "M", "L", "XL"]
    },
    {
      id: 14,
      name: "Vienna Wool Flannel Utility Shacket",
      slug: "vienna-wool-flannel-utility-shacket",
      category: "Casual Jackets",
      categoryKey: "casual",
      price: 210,
      originalPrice: 250,
      rating: 4.8,
      reviewsCount: 92,
      badge: "Staff Favorite",
      isFeatured: false,
      isBestSeller: false,
      isNewArrival: true,
      inStock: true,
      images: [
        "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1000&q=85",
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=85",
        "https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?auto=format&fit=crop&w=1000&q=85"
      ],
      description: "The ultimate layering hybrid between shirt and jacket. Tailored from heavyweight Italian wool flannel in a subtle houndstooth check with tortoiseshell buttons.",
      features: [
        "100% Virgin wool woven in Biella, Italy",
        "Dual oversized cargo chest pockets",
        "Curved shirt-tail hem with side slits",
        "Satin-lined yoke and cuffs for non-scratch comfort"
      ],
      materials: "100% Pure Virgin Wool. Cupro details.",
      care: "Dry clean only.",
      colors: [
        { name: "Ecru & Houndstooth", hex: "#c8bcae" },
        { name: "Dark Walnut", hex: "#4b392b" }
      ],
      sizes: ["XS", "S", "M", "L", "XL"]
    },
    {
      id: 15,
      name: "Zermatt Quilted Puffer Cocoon",
      slug: "zermatt-quilted-puffer-cocoon",
      category: "Winter Jackets",
      categoryKey: "winter",
      price: 365,
      originalPrice: 425,
      rating: 4.9,
      reviewsCount: 114,
      badge: "Cold Rated",
      isFeatured: false,
      isBestSeller: true,
      isNewArrival: false,
      inStock: true,
      images: [
        "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?auto=format&fit=crop&w=1000&q=85",
        "https://images.unsplash.com/photo-1548624313-0396c75e4b1a?auto=format&fit=crop&w=1000&q=85",
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=1000&q=85"
      ],
      description: "Designed for extreme comfort and severe winter temperatures down to -20°C. Long-line cocoon silhouette with insulating ribbed cuffs, fleece storm guard, and deep hood.",
      features: [
        "Rated warm to -20°C / -4°F",
        "Eco-down recycled cluster filling with high thermal retention",
        "Magnetic flap storm closure over two-way YKK zipper",
        "Removable padded thermal hood"
      ],
      materials: "Shell: 100% Recycled Polyester Ripstop with DWR. Filling: PrimaLoft Gold Insulation.",
      care: "Machine wash delicate cold. Tumble dry thoroughly.",
      colors: [
        { name: "Desert Sand", hex: "#c7b79d" },
        { name: "Midnight Navy", hex: "#1e2430" },
        { name: "Graphite", hex: "#3a3a3a" }
      ],
      sizes: ["XS", "S", "M", "L", "XL"]
    },
    {
      id: 16,
      name: "Cannes Cropped Linen Summer Jacket",
      slug: "cannes-cropped-linen-summer-jacket",
      category: "Cropped Jackets",
      categoryKey: "cropped",
      price: 185,
      originalPrice: 220,
      rating: 4.7,
      reviewsCount: 52,
      badge: "Summer Chic",
      isFeatured: false,
      isBestSeller: false,
      isNewArrival: true,
      inStock: true,
      images: [
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=85",
        "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=1000&q=85",
        "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?auto=format&fit=crop&w=1000&q=85"
      ],
      description: "Lightweight and airy cropped jacket tailored from pure French flax linen. Ideal for balmy summer evenings, paired over dresses or high-waisted linen trousers.",
      features: [
        "100% Certified French Normandy Flax Linen",
        "Breathable unlined construction with bound seams",
        "Cropped boxy silhouette with short collar",
        "Natural mother-of-pearl buttons"
      ],
      materials: "100% Pure Flax Linen.",
      care: "Gentle hand wash or delicate cycle cold. Dry flat in shade.",
      colors: [
        { name: "Natural Ecru", hex: "#ded6c7" },
        { name: "Terracotta", hex: "#b4644e" },
        { name: "Soft White", hex: "#f8f7f2" }
      ],
      sizes: ["XS", "S", "M", "L"]
    }
  ],

  collections: [
    {
      id: "heritage-leather",
      name: "The Leather Atelier",
      tagline: "Uncompromising French Craftsmanship",
      description: "Supple lambskins, buttery nappa, and sculpted silhouettes designed to last a lifetime.",
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
      category: "leather"
    },
    {
      id: "alpine-luxury",
      name: "Alpine Winter Sanctuary",
      tagline: "Sub-Zero Warmth Meets Haute Couture",
      description: "800-fill responsible down, plush merino shearling, and technical weather-proof elegance.",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
      category: "winter"
    },
    {
      id: "selvedge-denim",
      name: "Selvedge & Stone Denim",
      tagline: "Timeless Utility Reimagined",
      description: "100% organic Japanese selvedge denim treated with artisanal eco-conscious washes.",
      image: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80",
      category: "denim"
    },
    {
      id: "cropped-modernism",
      name: "The Cropped Edit",
      tagline: "Proportions For The Modern Muse",
      description: "Sharp waist-skimming hems crafted to elongate the feminine form with modern posture.",
      image: "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?auto=format&fit=crop&w=800&q=80",
      category: "cropped"
    }
  ],

  reviews: [
    {
      id: 1,
      author: "Camille Dupont",
      location: "Paris, France",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      product: "The Saint-Germain Biker Jacket",
      rating: 5,
      date: "October 18, 2026",
      title: "The holy grail of leather jackets",
      comment: "The leather is extraordinarily supple, smelling of genuine luxury tanning. It feels custom-tailored around my waist and shoulders. The silk lining slides over sweaters without catching. Worth every euro."
    },
    {
      id: 2,
      author: "Elena Rostova",
      location: "Geneva, Switzerland",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
      product: "St. Moritz Shearling Winter Parka",
      rating: 5,
      date: "November 4, 2026",
      title: "Incredible warmth without bulk",
      comment: "I wore this in Zermatt at -12°C with just a fine cashmere knit underneath and was completely toasty. The shearling collar is heavenly against the skin and frames the face beautifully."
    },
    {
      id: 3,
      author: "Sophia Vance",
      location: "New York, USA",
      avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80",
      product: "Venice Vintage Oversized Denim",
      rating: 5,
      date: "October 29, 2026",
      title: "Effortless, chic, and perfectly draped",
      comment: "I have owned dozens of denim jackets, but VELORA got the drape absolutely right. The organic denim has substantial weight yet feels broken in on day one. I receive compliments every single day."
    },
    {
      id: 4,
      author: "Aria Montgomery",
      location: "London, UK",
      avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=200&q=80",
      product: "Avenue Cashmere Blend Wrap Jacket",
      rating: 5,
      date: "September 30, 2026",
      title: "Pure quiet luxury",
      comment: "The cashmere and virgin wool blend is buttery soft. No itch whatsoever. The way it cinches at the waist is so flattering and feminine. The packaging was like unboxing an Haute Couture gift."
    }
  ],

  faqs: [
    {
      q: "What makes VELORA jackets different from high-street brands?",
      a: "Every VELORA jacket is meticulously drafted in our design studio and crafted by master artisans using premium sustainably sourced Italian leathers, organic Japanese selvedge denim, and European virgin wools. We focus on heirloom longevity, exquisite internal silk linings, and precision tailoring cut specifically for the female form."
    },
    {
      q: "How do I choose the correct size?",
      a: "Our sizing runs true to European and US luxury standards. Each product page features our interactive Size Guide with detailed bust, waist, and hip measurements. If you plan to layer chunky winter knits beneath your jacket, we recommend sizing up one size."
    },
    {
      q: "What is your complimentary shipping and returns policy?",
      a: "We offer complimentary express shipping worldwide on all orders over $150. If you are not completely enchanted with your piece, we provide hassle-free 30-day complimentary returns and exchanges with prepaid return labels."
    },
    {
      q: "Are the down and leathers ethically sourced?",
      a: "Yes. All our down insulation is 100% Responsible Down Standard (RDS) certified, ensuring humane treatment of waterfowl. All leathers are by-products of the food industry tanned in LWG Gold-rated European tanneries using low-impact, eco-conscious processes."
    },
    {
      q: "How should I care for my VELORA leather jacket?",
      a: "Store your jacket on the broad wooden hanger provided in its breathable organic cotton garment bag. Avoid heavy rain. For regular care, wipe gently with a soft dry microfiber cloth and treat with specialized leather conditioner once a year."
    }
  ]
};
