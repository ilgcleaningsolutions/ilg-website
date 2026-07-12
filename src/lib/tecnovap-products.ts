import {
  Battery,
  Zap,
  Gauge,
  Cloud,
  Thermometer,
  Droplets,
  type LucideIcon,
} from "lucide-react";

export interface ProductSpec {
  icon: LucideIcon;
  label: string;
  value: string;
}

export interface SpecRow {
  label: string;
  unit?: string;
  value: string;
  note?: string;
}

export interface SpecGroup {
  title: string;
  rows: SpecRow[];
}

/** Interactive diagram hotspot — positioned as % of the image bounding box */
export interface ProductPart {
  /** Horizontal position, 0–100 (% from left) */
  x: number;
  /** Vertical position, 0–100 (% from top) */
  y: number;
  /** Short part name */
  label: string;
  /** Optional secondary line */
  description?: string;
}

export type TecnovapGroup = "products" | "systems" | "belts";

export interface TecnovapProduct {
  slug: string;
  /** SKU in the Interlink CRM catalog — links this product into the CRM lead funnel */
  sku: string;
  /** Section grouping on the brand page */
  group: TecnovapGroup;
  /** Eyebrow above the title (e.g. "Commercial Steam Cleaner") */
  category: string;
  /** Product/model name (e.g. "EVO 304 24/7") */
  name: string;
  /** Short one-line tagline shown in the carousel */
  tagline: string;
  /** Power / spec line below the name */
  spec: string;
  /** Long description shown on the detail page */
  description: string;
  /** Bullet-style feature list */
  features: string[];
  /** Product cutout image */
  image: string;
  imageAlt?: string;
  /** Intrinsic image dimensions — used by ProductDiagram to size the container with the real aspect ratio so absolute-positioned hotspots line up. */
  imageWidth?: number;
  imageHeight?: number;
  /** Quick-glance spec chips */
  mainFeatures: ProductSpec[];
  /** Full grouped tech spec table */
  specifications: SpecGroup[];
  /** Optional annotated-image hotspots, shown on the detail page */
  parts?: ProductPart[];
  /** Optional YouTube embed URL — rendered on the detail page */
  video?: string;
}

export const tecnovapProducts: TecnovapProduct[] = [
  {
    slug: "evo-304",
    sku: "TEC-EVO304",
    group: "products",
    category: "Commercial Steam Cleaner",
    name: "EVO 304 24/7",
    tagline: "Reliable, compact, and always ready for demanding spaces.",
    spec: "2.45 kW",
    description:
      "Reliable steam cleaning performance for demanding spaces, combining extended runtime, durable construction, and exceptional versatility to handle deep cleaning tasks with confidence, consistency, and long-lasting results. Steam cleaner designed for professional use with stainless-steel body and boiler.",
    features: [
      "Able to deliver dry saturated steam at 174°C.",
      "Ergonomic structure, fully electric operation and compact size for use in any environment.",
      "All steam cleaner functions can be managed on the electronic control panel.",
      "Equipped with cable holder and anti-scratch 360° swivel front wheels.",
    ],
    image:
      "https://res.cloudinary.com/dxbwqifwn/image/upload/v1780510024/evo-24-7_azjoy4.png",
    imageAlt: "Tecnovap EVO 304 24/7 commercial steam cleaner",
    mainFeatures: [
      { icon: Battery, label: "Boiler Material", value: "Stainless-steel AISI 304" },
      { icon: Zap, label: "Power Supply", value: "1~ 230V 50/60Hz" },
      { icon: Gauge, label: "Operating Pressure", value: "8 bar" },
      { icon: Cloud, label: "Steam Production", value: "64 g/min · 3.8 kg/h" },
      { icon: Thermometer, label: "Steam Temperature", value: "174°C" },
    ],
    specifications: [
      {
        title: "Steam cleaner",
        rows: [
          { label: "Boiler", value: "Stainless-steel AISI 304", note: "with interchangeable heating element" },
          { label: "Body", value: "Stainless-steel AISI 304 BA" },
          { label: "Power supply", unit: "V - Hz", value: "1~ 230 · 50/60" },
          { label: "Boiler output", unit: "kW/h", value: "2.4" },
          { label: "Maximum output", unit: "kW/h", value: "2.45" },
          { label: "Boiler volume", unit: "L", value: "1.5" },
          { label: "Operating pressure", unit: "bar", value: "8" },
          { label: "Water tank", unit: "L", value: "3" },
          { label: "Detergent tank", unit: "L", value: "1" },
          { label: "Steam production", unit: "g/min", value: "64" },
          { label: "Steam production", unit: "kg/h", value: "3.8" },
          { label: "Steam temperature", unit: "°C", value: "174" },
        ],
      },
      {
        title: "Various",
        rows: [
          { label: "Weight", unit: "kg", value: "16" },
          { label: "Cable", unit: "m", value: "5" },
          { label: "Dimensions (generator)", unit: "cm", value: "H 32.6 × L 27.8 × W 43.6" },
          { label: "Dimensions (pallet)", unit: "cm", value: "53 × 40 × 52" },
          { label: "Pallet / unit", unit: "pz", value: "24" },
        ],
      },
    ],
  },
  {
    slug: "steam-turbo",
    sku: "TEC-STEAMTURBO",
    group: "systems",
    category: "Industrial Steam System",
    name: "STEAM TURBO",
    tagline: "Industrial power with integrated wet/dry vacuum. Built to last.",
    spec: "10.8 kW · 17.4 kW · 21 kW · 21.6 kW · 31.8 kW · 39 kW",
    description:
      "Steam cleaner with stainless-steel body and boiler, designed for industrial use and able to deliver dry saturated steam at 183°C.",
    features: [
      "Equipped with a wet/dry vacuum cleaner with an induction turbine and drainage pipe.",
      "Sturdy structure, fully electric operation, and compact size for use in any environment — both outdoors (IPX5 watertight protection) and indoors (e.g. production lines).",
      "All steam cleaner functions can be managed on the electronic control panel.",
      "Equipped with accessories basket, double hose holder, lance holder, cable holder, and front 360° swivel wheels with safety brakes.",
    ],
    image:
      "https://res.cloudinary.com/dxbwqifwn/image/upload/v1780578139/steam-turbo_iv6hsj.png",
    imageAlt: "Tecnovap Steam Turbo industrial steam cleaner",
    mainFeatures: [
      { icon: Battery, label: "Boiler Material", value: "Stainless-steel AISI 304" },
      { icon: Zap, label: "Power Supply", value: "3~ 400V 50/60Hz" },
      { icon: Gauge, label: "Operating Pressure", value: "10 bar" },
      { icon: Cloud, label: "Steam Production", value: "291–970 g/min · 17.5–58 kg/h" },
      { icon: Thermometer, label: "Steam Temperature", value: "183°C" },
    ],
    specifications: [
      {
        title: "Steam cleaner",
        rows: [
          { label: "Boiler", value: "Stainless-steel AISI 304", note: "with interchangeable heating elements" },
          { label: "Body", value: "Stainless-steel AISI 304 BA" },
          { label: "Power supply", unit: "V - Hz", value: "3~ 400 · 50", note: "60 Hz on request" },
          { label: "Boiler output", unit: "kW/h", value: "10.8 · 14.4 · 18 · 21.6 · 28.8 · 36" },
          { label: "Maximum output", unit: "kW/h", value: "10.8 · 17.4 · 21 · 21.6 · 31.8 · 39" },
          { label: "Boiler volume", unit: "L", value: "13" },
          { label: "Operating pressure", unit: "bar", value: "from 1 to 10" },
          { label: "Water tank", unit: "L", value: "14" },
          { label: "Detergent tank", unit: "L", value: "14" },
          { label: "Steam production", unit: "g/min", value: "291 · 388 · 485 · 582 · 776 · 970" },
          { label: "Steam production", unit: "kg/h", value: "17.5 · 23 · 29.1 · 35 · 46.5 · 58" },
          { label: "Steam temperature", unit: "°C", value: "165 – 183" },
        ],
      },
      {
        title: "Vacuum cleaner",
        rows: [
          { label: "Power output", unit: "kW/h", value: "3" },
          { label: "Drum capacity", unit: "L", value: "14 | 43" },
          { label: "Air flow", unit: "m³/h", value: "320" },
          { label: "Depression", unit: "mm", value: "3200" },
        ],
      },
      {
        title: "Various",
        rows: [
          { label: "Weight", unit: "kg", value: "151" },
          { label: "Cable", unit: "m", value: "8" },
          { label: "Dimensions (generator)", unit: "cm", value: "H 166 × L 69 × W 95.5", note: "drum 43 L" },
          { label: "Dimensions (pallet)", unit: "cm", value: "120 × 80 × 165" },
          { label: "Pallet / unit", unit: "pz", value: "1" },
        ],
      },
    ],
  },
  {
    slug: "steam-box-industrial",
    sku: "TEC-STEAMBOX-IND",
    group: "systems",
    category: "Industrial Steam System",
    name: "STEAM BOX INDUSTRIAL",
    tagline: "Heavy-duty steam for demanding industrial environments.",
    spec: "11 kW · 14.6 kW · 21.8 kW · 29 kW · 36.2 kW",
    description:
      "Steam cleaner with stainless-steel body and boiler, designed for industrial use and able to deliver dry saturated steam at 183°C.",
    features: [
      "Sturdy structure, fully electric operation, and compact size for use in any environment — both outdoors (IPX5 watertight protection) and indoors (e.g. production lines).",
      "All steam cleaner functions can be managed on the electronic control panel.",
      "Equipped with accessories basket, hose holder, cable holder, and front 360° swivel wheels with safety brakes.",
    ],
    image:
      "https://res.cloudinary.com/dxbwqifwn/image/upload/v1780584000/steam-box-industrial_lmm6nv.png",
    imageAlt: "Tecnovap Steam Box Industrial steam cleaner",
    mainFeatures: [
      { icon: Battery, label: "Boiler Material", value: "Stainless-steel AISI 304" },
      { icon: Zap, label: "Power Supply", value: "3~ 400V 50/60Hz" },
      { icon: Cloud, label: "Steam Production", value: "291–970 g/min · 17.5–58 kg/h" },
      { icon: Thermometer, label: "Steam Temperature", value: "183°C" },
      { icon: Gauge, label: "Operating Pressure", value: "10 bar" },
    ],
    specifications: [
      {
        title: "Steam cleaner",
        rows: [
          { label: "Boiler", value: "Stainless-steel AISI 304", note: "with interchangeable heating elements" },
          { label: "Body", value: "Stainless-steel AISI 304 BA" },
          { label: "Power supply", unit: "V - Hz", value: "3~ 400 · 50/60" },
          { label: "Boiler output", unit: "kW/h", value: "10.8 · 14.4 · 21.6 · 28.8 · 36" },
          { label: "Maximum output", unit: "kW/h", value: "11 · 14.6 · 21.8 · 29 · 36.2" },
          { label: "Boiler volume", unit: "L", value: "11 · 12 · 13" },
          { label: "Operating pressure", unit: "bar", value: "10" },
          { label: "Water tank", unit: "L", value: "20" },
          { label: "Detergent tank", unit: "L", value: "20" },
          { label: "Steam production", unit: "g/min", value: "291 · 388 · 582 · 776 · 970" },
          { label: "Steam production", unit: "kg/h", value: "17.5 · 23 · 35 · 46.5 · 58" },
          { label: "Steam temperature", unit: "°C", value: "183" },
        ],
      },
      {
        title: "Various",
        rows: [
          { label: "Weight", unit: "kg", value: "96", note: "mod. 36 kW" },
          { label: "Cable", unit: "m", value: "8" },
          { label: "Dimensions (generator)", unit: "cm", value: "H 110 × L 53 × W 82.5" },
          { label: "Dimensions (pallet)", unit: "cm", value: "115 × 65 × 125" },
          { label: "Pallet / unit", unit: "pz", value: "1" },
        ],
      },
    ],
  },
  {
    slug: "steam-box-mini",
    sku: "TEC-STEAMBOX-MINI",
    group: "systems",
    category: "Professional Steam System",
    name: "STEAM BOX MINI",
    tagline: "Compact, versatile, and ready for any professional environment.",
    spec: "3.75 kW",
    description:
      "Steam cleaner with stainless-steel body and boiler, designed for professional use and able to deliver dry saturated steam at 183°C, 174°C or 165°C based on the model.",
    features: [
      "Sturdy structure, fully electric operation, and compact size for use in any environment — both outdoors (IPX5 watertight protection) and indoors (e.g. production lines).",
      "All steam cleaner functions can be managed on the electronic control panel.",
      "Equipped with hose holder, accessories basket, cable holder, extension tube holders, and front 360° swivel wheels.",
    ],
    image:
      "https://res.cloudinary.com/dxbwqifwn/image/upload/v1780584539/steam-box-mini_ngyzyi.png",
    imageAlt: "Tecnovap Steam Box Mini professional steam cleaner",
    mainFeatures: [
      { icon: Battery, label: "Boiler Material", value: "Stainless-steel AISI 304" },
      { icon: Zap, label: "Power Supply", value: "1~ 230V · 3~ 400V · 50/60Hz" },
      { icon: Gauge, label: "Operating Pressure", value: "6 · 8 · 10 bar" },
      { icon: Thermometer, label: "Steam Temperature", value: "165 · 174 · 183 °C" },
    ],
    specifications: [
      {
        title: "Steam cleaner",
        rows: [
          { label: "Boiler", value: "Stainless-steel AISI 304", note: "with interchangeable heating element" },
          { label: "Body", value: "Stainless-steel AISI 304 BA" },
          { label: "Power supply", unit: "V - Hz", value: "1~ 230 · 50/60  |  3~ 400 · 50/60" },
          { label: "Boiler output", unit: "kW/h", value: "3.6" },
          { label: "Maximum output", unit: "kW/h", value: "3.75" },
          { label: "Boiler volume", unit: "L", value: "5" },
          { label: "Operating pressure", unit: "bar", value: "10 · 8 · 6" },
          { label: "Water tank", unit: "L", value: "7.5" },
          { label: "Detergent tank", unit: "L", value: "7.5" },
          { label: "Steam production", unit: "g/min", value: "97" },
          { label: "Steam production", unit: "kg/h", value: "5.9" },
          { label: "Steam temperature", unit: "°C", value: "183 · 174 · 165" },
        ],
      },
      {
        title: "Various",
        rows: [
          { label: "Weight", unit: "kg", value: "30" },
          { label: "Cable", unit: "m", value: "8" },
          { label: "Dimensions (generator)", unit: "cm", value: "H 106 × L 41.2 × W 66" },
          { label: "Dimensions (pallet)", unit: "cm", value: "50 × 40 × 80" },
          { label: "Pallet / unit", unit: "pz", value: "4 | 8" },
        ],
      },
    ],
  },
  {
    slug: "hydrobox",
    sku: "TEC-HYDROBOX",
    group: "systems",
    category: "High-Pressure Washer",
    name: "HYDROBOX",
    tagline: "Hot & cold high-pressure precision, up to 150 bar.",
    spec: "10.5 kW · 15.9 kW",
    description:
      "Hot & cold high-pressure washer with stainless-steel body and boiler. Built for industrial-grade washing with configurable pressure and water temperature.",
    features: [
      "The water temperature can be set from 20°C to 90°C.",
      "The water pressure can be set from 1 to 150 bar.",
      "Ergonomic structure, fully electric operation, and compact size for use in any environment.",
      "All functions can be managed on the electronic control panel.",
      "Equipped with hose holder, cable holder, lance holder, and front 360° swivel wheels.",
    ],
    image:
      "https://res.cloudinary.com/dxbwqifwn/image/upload/v1780584798/hidrobox_ibcljo.png",
    imageAlt: "Tecnovap Hydrobox hot & cold high-pressure washer",
    mainFeatures: [
      { icon: Battery, label: "Boiler Material", value: "Stainless-steel AISI 304" },
      { icon: Zap, label: "Power Supply", value: "3~N 400V 50/60Hz" },
      { icon: Gauge, label: "Operating Pressure", value: "from 1 to 150 bar" },
      { icon: Droplets, label: "Water Flow", value: "2 L · 4 L" },
      { icon: Thermometer, label: "Water Temperature", value: "from 20° to 90°C" },
    ],
    specifications: [
      {
        title: "High-Pressure Washer",
        rows: [
          { label: "Boiler", value: "Stainless-steel AISI 304", note: "with interchangeable heating elements" },
          { label: "Body", value: "Stainless-steel AISI 304 BA" },
          { label: "Power supply", unit: "V - Hz", value: "3~ 400 · 50/60" },
          { label: "Boiler output", unit: "kW/h", value: "9.0 · 14.4" },
          { label: "Maximum output", unit: "kW/h", value: "10.5 · 15.9" },
          { label: "Boiler volume", unit: "L", value: "5" },
          { label: "Operating pressure", unit: "bar", value: "from 1 to 150" },
          { label: "Water flow", unit: "L/min", value: "2 · 4" },
          { label: "Water temperature", unit: "°C", value: "from 20 to 90" },
        ],
      },
      {
        title: "Various",
        rows: [
          { label: "Weight", unit: "kg", value: "57" },
          { label: "Cable", unit: "m", value: "8" },
          { label: "Dimensions", unit: "cm", value: "H 99 × L 66 × W 40.8" },
          { label: "Dimensions (pallet)", unit: "cm", value: "53 × 40 × 52" },
          { label: "Pallet / unit", unit: "pz", value: "8" },
        ],
      },
    ],
  },
];

tecnovapProducts.push({
  slug: "rtu-pro",
  sku: "TEC-RTUPRO",
  group: "belts",
  category: "Standard Belt Cleaning Head",
  name: "RTU Pro",
  tagline:
    "Adjustable, food-grade cleaning head for any conveyor belt — customizable up to 1500 mm.",
  spec: "Customizable up to 1500 mm",
  description:
    "Standard belt cleaning head built around an AISI 304 stainless-steel structure. The head fixes directly to your conveyor belt frame via bolts, with regulating cranks to fine-tune the tool position. Installs on either the upper or lower side of the belt and is dimensioned to your line.",
  features: [
    "AISI 304 stainless-steel structure.",
    "Fixed to the conveyor belt structure by means of bolts.",
    "Tool position adjustable via regulating cranks.",
    "Two installation options — upper or lower side of the belt.",
    "Customizable dimensions up to 1500 mm.",
  ],
  image:
    "https://res.cloudinary.com/dxbwqifwn/image/upload/v1780666178/rto-pro_ctoczo.png",
  imageAlt: "Tecnovap RTU Pro standard belt cleaning head",
  imageWidth: 2278,
  imageHeight: 2048,
  mainFeatures: [],
  specifications: [],
  parts: [
    { x: 22, y: 16, label: "Regulating crank" },
    { x: 46, y: 8, label: "Steam hose" },
    { x: 60, y: 20, label: "Vacuum hose" },
    { x: 84, y: 32, label: "Electrical control box" },
    {
      x: 32,
      y: 52,
      label: "Steam & vacuum diffuser",
      description: "Silicone rubber squeegees, food-grade",
    },
    { x: 52, y: 78, label: "Type of fixing" },
  ],
  video: "https://www.youtube.com/embed/1qZt4D5jeRE",
});

tecnovapProducts.push({
  slug: "hb-max",
  sku: "TEC-HBMAX",
  group: "belts",
  category: "Semi-Automatic Belt Cleaning Head",
  name: "HB Max",
  tagline:
    "Semi-automatic belt head with working/rest position adjustment — up to 1500 mm.",
  spec: "Customizable up to 1500 mm",
  description:
    "Semi-automatic belt cleaning head built around an AISI 304 stainless-steel structure with working and rest position adjustment. Designed for installation on the lower part of the conveyor belt and customizable to your line.",
  features: [
    "AISI 304 stainless-steel structure.",
    "Working and rest position adjustment of the cleaning head.",
    "Installation exclusively on the lower part of the belt.",
    "Customizable dimensions up to 1500 mm.",
  ],
  image:
    "https://res.cloudinary.com/dxbwqifwn/image/upload/v1780666395/hb-max-belt_zuwya8.png",
  imageAlt: "Tecnovap HB Max semi-automatic belt cleaning head",
  imageWidth: 1213,
  imageHeight: 910,
  mainFeatures: [],
  specifications: [],
  parts: [
    {
      x: 26,
      y: 8,
      label: "Steam & vacuum diffuser",
      description: "Silicone rubber squeegees, food-grade",
    },
    { x: 80, y: 18, label: "Electrical control box" },
    { x: 18, y: 80, label: "Steam & vacuum hose" },
    {
      x: 74,
      y: 75,
      label: "Actuator",
      description: "Cleaning head adjustment",
    },
  ],
  video: "https://www.youtube.com/embed/WYrbyJ3wYe0",
});

tecnovapProducts.push({
  slug: "lvc-ultra",
  sku: "TEC-LVCULTRA",
  group: "belts",
  category: "Fully-Automated Cleaning Head",
  name: "LVC Ultra",
  tagline:
    "Fully-automated belt head with programmable cycles — up to 2000 mm.",
  spec: "Customizable up to 2000 mm",
  description:
    "Fully-automated belt cleaning head built around an AISI 304 stainless-steel structure. Programmable cleaning-head positions and working cycles, with automatic movement of the steam diffuser — customizable to your line.",
  features: [
    "AISI 304 stainless-steel structure.",
    "Programmable cleaning-head working positions and cycles.",
    "Automatic movement of the steam diffuser.",
    "Customizable dimensions up to 2000 mm.",
  ],
  image:
    "https://res.cloudinary.com/dxbwqifwn/image/upload/v1780666931/lvc-ultra_za97jk.png",
  imageAlt: "Tecnovap LVC Ultra fully-automated belt cleaning head",
  imageWidth: 1100,
  imageHeight: 898,
  mainFeatures: [],
  specifications: [],
  parts: [
    { x: 15, y: 22, label: "Rest position for the steam diffuser" },
    { x: 40, y: 22, label: "Actuator chain" },
    { x: 62, y: 18, label: "Steam hose" },
    { x: 66, y: 30, label: "Vacuum hose" },
    {
      x: 54,
      y: 46,
      label: "Steam & vacuum diffuser",
      description: "Silicone rubber squeegees, food-grade",
    },
    { x: 72, y: 32, label: "Electrical control box" },
    { x: 80, y: 22, label: "Encoder" },
    { x: 35, y: 62, label: "Safety limit switch" },
  ],
  video: "https://www.youtube.com/embed/o8yHc8I3DL8",
});

export function getTecnovapProduct(slug: string): TecnovapProduct | undefined {
  return tecnovapProducts.find((p) => p.slug === slug);
}

export function getTecnovapSlugs(): string[] {
  return tecnovapProducts.map((p) => p.slug);
}
