import {
  ArrowLeftRight,
  BatteryCharging,
  Brush,
  Feather,
  Filter,
  Gauge,
  Hand,
  Ruler,
  ShieldCheck,
  Timer,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import type { CarouselProduct } from "@/components/ProductCarousel";

export interface KlinmakKeyFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

/** Alternating image + text feature block on the detail page */
export interface KlinmakFeatureSection {
  title: string;
  body: string;
  image: string;
  imageAlt: string;
}

/** A single row of the multi-variant spec table; `values` aligns with `specVariants`. */
export interface KlinmakSpecRow {
  label: string;
  values: string[];
}

export interface KlinmakDetail {
  /** Hero bold subtitle line (sits above the intro paragraph) */
  lede: string;
  /** Hero intro paragraph */
  intro: string;
  /** Quick-glance highlight bullets */
  highlights: string[];
  /** Target industries */
  idealFor: string[];
  /** Alternating image/text feature blocks */
  featureSections: KlinmakFeatureSection[];
  /** Six-up key-feature grid */
  keyFeatures: KlinmakKeyFeature[];
  /** Spec-table column headers (machine variants) */
  specVariants: string[];
  /** Spec-table rows */
  specRows: KlinmakSpecRow[];
  /** Sustainability bullet points */
  sustainability?: string[];
}

export interface KlinmakProduct extends CarouselProduct {
  group: "joker" | "mini";
  /** Full content for the product detail page (omit until built) */
  detail?: KlinmakDetail;
}

export const klinmakProducts: KlinmakProduct[] = [
  // ====================  JOKER RANGE  ====================
  {
    slug: "joker-2040",
    group: "joker",
    category: "Walk-behind floor scrubber",
    name: "Joker 2040",
    tagline:
      "Compact 40 cm cleaning path — agile and precise in tight, medium-sized spaces.",
    image:
      "https://res.cloudinary.com/dxbwqifwn/image/upload/v1781886691/joker-2040_h05oyu.png",
    imageAlt: "Klinmak Joker 2040 walk-behind floor scrubber",
    detail: {
      lede: "Compact and high-performing professional floor scrubber-dryer.",
      intro:
        "The Joker 2040 is the ideal solution for those looking for high performance, cutting-edge technology and a compact, versatile design for the professional cleaning industry.",
      highlights: [
        "40 cm working track",
        "20 L solution capacity",
        "Ideal for environments up to 500 m²",
        "36-month warranty",
      ],
      idealFor: [
        "Retail",
        "Cleaning companies",
        "Offices & public buildings",
        "Healthcare",
        "Hospitality",
      ],
      featureSections: [
        {
          title: "Power & efficiency",
          body: "Simple, lightweight and easy to handle, thanks to the lithium battery that guarantees maximum autonomy and high performance. The HEPA H13 filter comes as standard — retaining fine particles to improve air quality and ensure a healthier working environment. An independent turbine is designed for efficient extraction and quick drying of surfaces.",
          image:
            "https://res.cloudinary.com/dxbwqifwn/image/upload/v1781890080/Joker-2040-power-efficiency_wj6byu.png",
          imageAlt: "Klinmak Joker 2040 power and efficiency detail",
        },
        {
          title: "Easy to use",
          body: "Handy, compact and lightweight, the Joker 2040 is perfect for cleaning small spaces such as small supermarkets, laboratories, shops, offices and public buildings. Available only without traction, it's built for maximum ease of use — and it's easy to transport in vans or minivans, making it ideal for cleaning and facility-management companies.",
          image:
            "https://res.cloudinary.com/dxbwqifwn/image/upload/v1781890080/Joker-2040-easy-to-use_npgqwg.png",
          imageAlt: "Klinmak Joker 2040 ease of use detail",
        },
        {
          title: "Ergonomic design",
          body: "Flush-wall cleaning works in both running directions, and the ergonomic, comfortable handle reduces operator fatigue — keeping the machine effortless to maneuver through tight, busy environments.",
          image:
            "https://res.cloudinary.com/dxbwqifwn/image/upload/v1781890115/klinmak-Joker-2040-ergonomic_e6d44w.png",
          imageAlt: "Klinmak Joker 2040 ergonomic design detail",
        },
        {
          title: "Advanced technology for energy savings",
          body: "An innovative electronic board offers 2 levels of washing power to adapt to different dirt conditions, plus 3 levels of suction power for optimal drying and immediately walkable floors. The patented KlinMak system drives 2 brushes from a single motor, drastically reducing energy consumption, while the adjustable solution flow rate enables targeted use and lower consumption. A patented, tool-free brush-release system simplifies maintenance, and durable, high-efficiency components keep running costs low.",
          image:
            "https://res.cloudinary.com/dxbwqifwn/image/upload/v1781890081/Joker-2040-advance-tech_slcspo.png",
          imageAlt: "Klinmak Joker 2040 advanced technology detail",
        },
      ],
      keyFeatures: [
        {
          icon: Gauge,
          title: "High performance, low consumption",
          description:
            "Innovative design delivering high performance with low power consumption for continuous-cycle operation.",
        },
        {
          icon: BatteryCharging,
          title: "Lithium battery options",
          description:
            "Available with 2 lithium batteries of your choice, with 1.5h to 3h autonomy in the Plus version.",
        },
        {
          icon: Timer,
          title: "Short charging times",
          description:
            "Very short charging times allow almost continuous use, eliminating long Gel/AGM charging cycles.",
        },
        {
          icon: Hand,
          title: "Compact & easy to use",
          description:
            "Lightweight and maneuverable floor scrubber-dryer designed for easy operation in tight spaces.",
        },
        {
          icon: Ruler,
          title: "40 cm working track",
          description:
            "Ideal for environments up to 500 square metres with 20 litres solution capacity.",
        },
        {
          icon: ShieldCheck,
          title: "36-month warranty",
          description:
            "Solid warranty coverage indicating the reliability and longevity of this professional model.",
        },
      ],
      specVariants: ["2040-e", "2040", "2040 Plus"],
      specRows: [
        { label: "Code", values: ["F.502.0", "F.500.0", "F.501.0"] },
        { label: "Total installed power", values: ["850 W", "850 W", "850 W"] },
        { label: "Tank capacity (sol. / rec.)", values: ["20 / 22 L", "20 / 22 L", "20 / 22 L"] },
        { label: "Sound pressure level", values: ["63.9 dB(A)", "63.9 dB(A)", "63.9 dB(A)"] },
        { label: "Work width / squeegee", values: ["406 mm / 490 mm", "406 mm / 490 mm", "406 mm / 490 mm"] },
        { label: "Brush speed", values: ["220/290 rpm", "220/290 rpm", "220/290 rpm"] },
        { label: "Washing motor power", values: ["500 W", "500 W", "500 W"] },
        { label: "Weight on head", values: ["30 kg max", "30 kg max", "30 kg max"] },
        { label: "Solution flow rate", values: ["0–2 L/min", "0–2 L/min", "0–2 L/min"] },
        { label: "Hourly yield at 2 km/h", values: ["800 m²/h", "800 m²/h", "800 m²/h"] },
        { label: "Suction turbine motor power", values: ["350 W", "350 W", "350 W"] },
        { label: "Power supply – voltage", values: ["AC – 230V 50Hz", "DC – 54.6V", "DC – 54.6V"] },
        { label: "Lithium battery", values: ["—", "13 Ah", "19.2 Ah"] },
        { label: "Battery charger", values: ["—", "5 A", "5 A"] },
        { label: "Autonomy / charging time", values: ["—", "1.5h / 2.5h", "3h / 4h"] },
        { label: "Dimensions (closed)", values: ["800×490×1,100 mm", "800×490×1,100 mm", "800×490×1,100 mm"] },
        { label: "Packaging dimensions", values: ["975×625×1,065 mm", "975×625×1,065 mm", "975×625×1,065 mm"] },
        { label: "Net weight / with packaging", values: ["57 / 69 kg", "57 / 69 kg", "60 / 72 kg"] },
      ],
      sustainability: [
        "Built with up to 80% recycled plastics in its construction.",
        "ESG-compliant, energy-efficient design with an adjustable solution flow rate for reduced consumption.",
      ],
    },
  },
  {
    slug: "joker-5070",
    group: "joker",
    category: "Walk-behind floor scrubber",
    name: "Joker 5070",
    tagline:
      "Wide 70 cm cleaning path — fast coverage across larger professional areas.",
    image:
      "https://res.cloudinary.com/dxbwqifwn/image/upload/v1781886691/joker-5070_ebe9a4.png",
    imageAlt: "Klinmak Joker 5070 walk-behind floor scrubber",
    detail: {
      lede: "Floor scrubber-dryers unique in the world with 4 brushes.",
      intro:
        "The ideal solution for those looking for high performance, cutting-edge technology and a compact, versatile design for the professional cleaning industry.",
      highlights: [
        "70 cm cleaning track",
        "~50 L solution capacity",
        "Ideal for 1,000–1,500 m² environments",
        "36-month warranty",
      ],
      idealFor: [
        "Retail",
        "Cleaning companies",
        "Offices & public buildings",
        "Healthcare",
        "Hospitality",
      ],
      featureSections: [
        {
          title: "Power & efficiency",
          body: "Simple, lightweight and easy to handle, thanks to the lithium battery that guarantees maximum autonomy and high performance. The HEPA H13 filter comes as standard — retaining fine particles to improve air quality and ensure a healthier working environment. An independent turbine is designed for efficient extraction and quick drying of surfaces.",
          image:
            "https://res.cloudinary.com/dxbwqifwn/image/upload/v1781888778/joker-5070-power-efficency_czppa5.png",
          imageAlt: "Klinmak Joker 5070 power and efficiency detail",
        },
        {
          title: "Flexible power supply",
          body: "Available in two variants. A cable version with a dedicated current transformer, and a lithium-battery-powered version offered in two configurations to suit different operational needs.",
          image:
            "https://res.cloudinary.com/dxbwqifwn/image/upload/v1781888778/oker-5070-maximun-supply_alf37j.jpg",
          imageAlt: "Klinmak Joker 5070 flexible power supply options",
        },
        {
          title: "Ergonomic design",
          body: "Handy, compact and lightweight — perfect for cleaning medium-sized supermarkets, industries, warehouses, and commercial or public buildings. The Joker 5070 is available with or without traction (forward gear, FT). Flush-wall cleaning works in both running directions, and the ergonomic, comfortable handle reduces operator fatigue. It's easy to transport in vans, making it ideal for cleaning and facility-management companies.",
          image:
            "https://res.cloudinary.com/dxbwqifwn/image/upload/v1781888778/joker-5070-ergonomic-design_ehrh5i.png",
          imageAlt: "Klinmak Joker 5070 ergonomic design detail",
        },
      ],
      keyFeatures: [
        {
          icon: Brush,
          title: "Patented 4-brush system",
          description:
            "KlinMak's patented single-motor system drives four brushes for superior cleaning.",
        },
        {
          icon: BatteryCharging,
          title: "Lithium battery power",
          description:
            "Minimum 1-hour autonomy, up to 3 hours in the Plus version, with short charging times.",
        },
        {
          icon: Filter,
          title: "HEPA H13 filter standard",
          description:
            "Independent turbine for efficient extraction with standard HEPA H13 filtration.",
        },
        {
          icon: Hand,
          title: "Compact & ergonomic design",
          description:
            "Handy, compact and lightweight construction with an ergonomic handle that reduces operator fatigue.",
        },
        {
          icon: ArrowLeftRight,
          title: "Flush-wall cleaning",
          description:
            "Flush-wall cleaning capability in both directions for thorough coverage.",
        },
        {
          icon: Wrench,
          title: "Tool-free maintenance",
          description:
            "Tool-free brush replacement system for simplified, low-maintenance operation.",
        },
      ],
      specVariants: [
        "5070-e",
        "5070",
        "5070 Plus",
        "5070 FT",
        "5070 FT Plus",
      ],
      specRows: [
        { label: "Code", values: ["F.532.0", "F.530.0", "F.531.0", "F.540.0", "F.541.0"] },
        { label: "Total installed power", values: ["850 W", "850 W", "850 W", "950 W", "950 W"] },
        { label: "Tank capacity (sol. / rec.)", values: ["47 / 50 L", "47 / 50 L", "47 / 50 L", "47 / 50 L", "47 / 50 L"] },
        { label: "Sound pressure level", values: ["63.9 dB(A)", "63.9 dB(A)", "63.9 dB(A)", "63.9 dB(A)", "63.9 dB(A)"] },
        { label: "Work width / squeegee", values: ["712 mm / 800 mm", "712 mm / 800 mm", "712 mm / 800 mm", "712 mm / 800 mm", "712 mm / 800 mm"] },
        { label: "Brush speed", values: ["220/290 rpm", "220/290 rpm", "220/290 rpm", "220/290 rpm", "220/290 rpm"] },
        { label: "Washing motor power", values: ["500 W", "500 W", "500 W", "500 W", "500 W"] },
        { label: "Weight on head", values: ["30 kg max", "30 kg max", "30 kg max", "30 kg max", "30 kg max"] },
        { label: "Solution flow rate", values: ["0–2 L/min", "0–2 L/min", "0–2 L/min", "0–2 L/min", "0–2 L/min"] },
        { label: "Hourly yield at 2 km/h", values: ["1,400 m²/h", "1,400 m²/h", "1,400 m²/h", "1,400 m²/h", "1,400 m²/h"] },
        { label: "Suction turbine motor power", values: ["350 W", "350 W", "350 W", "350 W", "350 W"] },
        { label: "Traction motor power", values: ["—", "—", "—", "100 W", "100 W"] },
        { label: "Maximum slope", values: ["—", "—", "—", "2%", "2%"] },
        { label: "Power supply – voltage", values: ["AC – 230V 50Hz", "DC – 54.6V", "DC – 54.6V", "DC – 54.6V", "DC – 54.6V"] },
        { label: "Lithium battery", values: ["—", "13 Ah", "19.2 Ah", "13 Ah", "19.2 Ah"] },
        { label: "Battery charger", values: ["—", "5 A", "5 A", "5 A", "5 A"] },
        { label: "Autonomy / charging time", values: ["—", "1.5h / 2.5h", "3h / 4h", "1.5h / 2.5h", "3h / 4h"] },
        { label: "Dimensions (closed)", values: ["900×750×1,100 mm", "900×750×1,100 mm", "900×750×1,100 mm", "900×750×1,100 mm", "900×750×1,100 mm"] },
        { label: "Packaging dimensions", values: ["975×804×1,065 mm", "975×804×1,065 mm", "975×804×1,065 mm", "975×804×1,065 mm", "975×804×1,065 mm"] },
        { label: "Net weight / with packaging", values: ["70 / 85 kg", "70 / 85 kg", "73 / 88 kg", "75 / 90 kg", "78 / 93 kg"] },
      ],
      sustainability: [
        "Built with up to 80% recycled plastics in its construction.",
        "Designed in line with ESG principles for responsible, lower-impact cleaning.",
      ],
    },
  },

  // ====================  MINI RANGE  ====================
  {
    slug: "mini-1240",
    group: "mini",
    category: "Compact walk-behind floor scrubber",
    name: "Mini 1240",
    tagline:
      "Ultra-compact 12 L tank, 40 cm path — built for the narrowest, hardest-to-reach spaces.",
    image:
      "https://res.cloudinary.com/dxbwqifwn/image/upload/v1781887841/mini-1240_mn96sw.png",
    imageAlt: "Klinmak Mini 1240 compact walk-behind floor scrubber",
    detail: {
      lede: "The revolution of cleaning small spaces.",
      intro:
        "Discover the future of professional cleaning with the Mini 1240: efficiency, innovation and sustainability in one solution. Weighing just 34 kg, with a 40 cm working track and 12 litres of solution, it's the ideal floor scrubber-dryer for environments of up to 500 square metres.",
      highlights: [
        "40 cm working track",
        "12 L solution capacity",
        "Lightweight — only 34 kg",
        "Ideal for environments up to 500 m²",
      ],
      idealFor: ["Hospitality", "Food service", "Offices & public buildings"],
      featureSections: [
        {
          title: "Compact design & high performance",
          body: "A 12-litre tank and 40 cm (2×8\") cleaning track make the Mini 1240 ideal for restricted spaces. Handy and lightweight, it's designed for optimal cleaning in shops, restaurants, offices, laboratories and commercial environments.",
          image:
            "https://res.cloudinary.com/dxbwqifwn/image/upload/v1781893030/mini1240-compact-design_jniviy.png",
          imageAlt: "Klinmak Mini 1240 compact design detail",
        },
        {
          title: "Efficiency & innovation",
          body: "The patented KlinMak dual brush uses a single motor to drive two counter-rotating toothed brushes, ensuring uniform cleaning while reducing energy consumption. Flush-with-the-wall technology lets the Mini 1240 clean in both directions without leaving residue along the edges.",
          image:
            "https://res.cloudinary.com/dxbwqifwn/image/upload/v1781893031/mini1240-efficiency_ynpta8.png",
          imageAlt: "Klinmak Mini 1240 efficiency and innovation detail",
        },
        {
          title: "Advanced technology",
          body: "A lithium battery delivers extended runtime and fast recharge times, while the standard HEPA H13 filter retains fine particles and improves air quality — ideal for sensitive environments. An advanced electronic board offers 2 levels of washing power to adapt to different types of dirt and 3 levels of suction power to optimise drying efficiency.",
          image:
            "https://res.cloudinary.com/dxbwqifwn/image/upload/v1781893030/mini1240-advance-tech_hbukce.png",
          imageAlt: "Klinmak Mini 1240 advanced technology detail",
        },
        {
          title: "Ergonomics & reduced environmental impact",
          body: "A folding handle makes the machine easy to transport in cars, vans and commercial vehicles — ideal for cleaning and facility-management companies. The patented quick-release brush system allows tool-free replacement in seconds. Built with 80% recycled materials and compliant with ESG standards, it reduces water and detergent consumption through optimised solution distribution, and its dual-brush technology delivers superior washing quality compared to traditional single-brush machines.",
          image:
            "https://res.cloudinary.com/dxbwqifwn/image/upload/v1781893032/mini1240-ergonomics_nnter4.png",
          imageAlt: "Klinmak Mini 1240 ergonomics detail",
        },
      ],
      keyFeatures: [
        {
          icon: Brush,
          title: "Patented dual-brush system",
          description:
            "A single motor drives two counter-rotating brushes for uniform cleaning and lower energy use.",
        },
        {
          icon: Feather,
          title: "Lightweight & compact",
          description:
            "Just 34 kg with a folding handle — easy to carry in cars, vans and commercial vehicles.",
        },
        {
          icon: BatteryCharging,
          title: "Lithium battery power",
          description:
            "Lithium battery for extended runtime and fast recharge times.",
        },
        {
          icon: Filter,
          title: "HEPA H13 filter standard",
          description:
            "Retains fine particles and improves air quality — ideal for sensitive environments.",
        },
        {
          icon: Gauge,
          title: "Adjustable power levels",
          description:
            "2 levels of washing power and 3 of suction power to match any job.",
        },
        {
          icon: ArrowLeftRight,
          title: "Flush-wall cleaning",
          description:
            "Cleans in both directions without leaving residue along the edges.",
        },
      ],
      specVariants: ["1240", "1240 Plus"],
      specRows: [
        { label: "Code", values: ["F.400.0", "F.402.0"] },
        { label: "Total installed power", values: ["450 W", "450 W"] },
        { label: "Tank capacity (sol. / rec.)", values: ["12 / 14 L", "12 / 14 L"] },
        { label: "Sound pressure level", values: ["66.7 dB(A)", "66.7 dB(A)"] },
        { label: "Work width / squeegee", values: ["406 mm / 490 mm", "406 mm / 490 mm"] },
        { label: "Brush speed", values: ["220/290 rpm", "220/290 rpm"] },
        { label: "Washing motor power", values: ["250 W", "250 W"] },
        { label: "Weight on head", values: ["23 kg max", "23 kg max"] },
        { label: "Solution flow rate", values: ["0–1 L/min", "0–1 L/min"] },
        { label: "Hourly yield at 2 km/h", values: ["800 m²/h", "800 m²/h"] },
        { label: "Suction turbine motor power", values: ["200 W", "200 W"] },
        { label: "Power supply – voltage", values: ["DC – 54.6V", "DC – 54.6V"] },
        { label: "Lithium battery", values: ["7.8 Ah", "19.2 Ah"] },
        { label: "Battery charger", values: ["3 A", "5 A"] },
        { label: "Autonomy / charging time", values: ["1h / 2.5h", "2.5h / 4h"] },
        { label: "Dimensions (closed)", values: ["750×490×1,070 (720) mm", "750×490×1,070 (720) mm"] },
        { label: "Packaging dimensions", values: ["755×530×820 mm", "755×530×820 mm"] },
        { label: "Net weight / with packaging", values: ["34–45 kg", "36–47 kg"] },
      ],
      sustainability: [
        "Built with 80% recycled materials, compliant with ESG standards.",
        "Reduces water and detergent consumption through optimised solution distribution, while dual-brush technology delivers superior washing quality versus traditional single-brush machines.",
      ],
    },
  },
  {
    slug: "mini-3050",
    group: "mini",
    category: "Compact walk-behind floor scrubber",
    name: "Mini 3050",
    tagline:
      "30 L tank with a 50 cm path — versatile cleaning for confined areas.",
    image:
      "https://res.cloudinary.com/dxbwqifwn/image/upload/v1781887842/mini-3050_qn4tsw.png",
    imageAlt: "Klinmak Mini 3050 compact walk-behind floor scrubber",
    detail: {
      lede: "The new compact, handy scrubber-dryer — highly innovative for everyday work.",
      intro:
        "The Mini 3050 brings productivity, innovation and sustainability into a single solution. Lightweight, compact and easy to handle, with a 50 cm work track and 30 litres of solution, it's the ideal floor scrubber-dryer for environments of up to 750 square metres.",
      highlights: [
        "50 cm working track",
        "30 L solution capacity",
        "Ideal for environments up to 750 m²",
        "Available with traction (FT)",
      ],
      idealFor: [
        "Healthcare",
        "Retail",
        "Cleaning companies",
        "Offices & public buildings",
        "Food service",
        "Hospitality",
      ],
      featureSections: [
        {
          title: "Compact design & high performance",
          body: "A 30-litre tank and 50 cm (2×10\") wash track make the Mini 3050 ideal for spaces between 500 and 1,000 square metres. Handy and lightweight, it's designed for optimal cleaning in small supermarkets, hotels, restaurants, laboratories and commercial environments. For prolonged work, the traction (forward-gear) version is recommended.",
          image:
            "https://res.cloudinary.com/dxbwqifwn/image/upload/v1781893147/mini-3050-compact_akai9k.png",
          imageAlt: "Klinmak Mini 3050 compact design detail",
        },
        {
          title: "Efficiency & innovation",
          body: "The patented KlinMak dual brush uses a single motor to drive two counter-rotating toothed brushes, ensuring uniform cleaning while reducing energy consumption. Flush-to-wall cleaning lets the Mini 3050 clean in both directions without leaving residue along the edges.",
          image:
            "https://res.cloudinary.com/dxbwqifwn/image/upload/v1781893148/mini-3050-efficiency_czgszp.png",
          imageAlt: "Klinmak Mini 3050 efficiency and innovation detail",
        },
        {
          title: "Easy to use & multifunctional",
          body: "A standard lithium battery delivers extended runtime and fast recharge times, while the standard HEPA H13 filter retains fine particles and improves air quality — ideal for sensitive environments. An advanced electronic board offers 2 levels of washing power to adapt to different types of dirt and 3 levels of suction power to optimise drying efficiency.",
          image:
            "https://res.cloudinary.com/dxbwqifwn/image/upload/v1781893148/mini-3050-easy-to-use_qrzdcp.png",
          imageAlt: "Klinmak Mini 3050 ease of use detail",
        },
        {
          title: "Ergonomics & sustainability",
          body: "A height-adjustable, foldable handle makes the machine easy to transport in cars, vans and commercial vehicles — ideal for cleaning and facility-management companies. The patented quick-release brush system allows tool-free replacement in seconds. Built with 80% recycled materials and compliant with ESG standards, it reduces water and detergent consumption through optimised solution distribution, and its dual-brush technology delivers superior washing quality compared to traditional single-brush machines.",
          image:
            "https://res.cloudinary.com/dxbwqifwn/image/upload/v1781893148/mini-3050-efficiency_czgszp.png",
          imageAlt: "Klinmak Mini 3050 ergonomics and sustainability detail",
        },
      ],
      keyFeatures: [
        {
          icon: Brush,
          title: "Patented dual-brush system",
          description:
            "A single motor drives two counter-rotating brushes for uniform cleaning and lower energy use.",
        },
        {
          icon: BatteryCharging,
          title: "Lithium battery power",
          description:
            "Standard lithium battery for extended runtime and fast recharge times.",
        },
        {
          icon: Filter,
          title: "HEPA H13 filter standard",
          description:
            "Retains fine particles and improves air quality — ideal for sensitive environments.",
        },
        {
          icon: Gauge,
          title: "Adjustable power levels",
          description:
            "2 levels of washing power and 3 of suction power to match any job.",
        },
        {
          icon: ArrowLeftRight,
          title: "Flush-wall cleaning",
          description:
            "Cleans in both directions without leaving residue along the edges.",
        },
        {
          icon: Wrench,
          title: "Tool-free maintenance",
          description:
            "Patented quick-release brush system for tool-free replacement in seconds.",
        },
      ],
      specVariants: ["3050", "3050 Plus", "3050 FT", "3050 FT Plus"],
      specRows: [
        { label: "Code", values: ["F.450.0", "F.451.0", "F.460.0", "F.461.0"] },
        { label: "Total installed power", values: ["850 W", "850 W", "950 W", "950 W"] },
        { label: "Tank capacity (sol. / rec.)", values: ["30 / 30 L", "30 / 30 L", "30 / 30 L", "30 / 30 L"] },
        { label: "Sound pressure level", values: ["63.9 dB(A)", "63.9 dB(A)", "63.9 dB(A)", "63.9 dB(A)"] },
        { label: "Work width / squeegee", values: ["508 mm / 580 mm", "508 mm / 580 mm", "508 mm / 580 mm", "508 mm / 580 mm"] },
        { label: "Brush speed", values: ["220/290 rpm", "220/290 rpm", "220/290 rpm", "220/290 rpm"] },
        { label: "Washing motor power", values: ["500 W", "500 W", "500 W", "500 W"] },
        { label: "Weight on head", values: ["30 kg max", "30 kg max", "30 kg max", "30 kg max"] },
        { label: "Solution flow rate", values: ["0–2 L/min", "0–2 L/min", "0–2 L/min", "0–2 L/min"] },
        { label: "Hourly yield at 2 km/h", values: ["1,000 m²/h", "1,000 m²/h", "1,000 m²/h", "1,000 m²/h"] },
        { label: "Suction turbine motor power", values: ["350 W", "350 W", "350 W", "350 W"] },
        { label: "Traction motor power", values: ["—", "—", "100 W", "100 W"] },
        { label: "Maximum slope", values: ["2%", "2%", "2%", "2%"] },
        { label: "Power supply – voltage", values: ["DC – 54.6V", "DC – 54.6V", "DC – 54.6V", "DC – 54.6V"] },
        { label: "Lithium battery", values: ["7.8 Ah", "19.2 Ah", "7.8 Ah", "19.2 Ah"] },
        { label: "Battery charger", values: ["3 A", "5 A", "3 A", "5 A"] },
        { label: "Autonomy / charging time", values: ["1h / 2.5h", "2.5h / 4h", "1h / 2.5h", "2.5h / 4h"] },
        { label: "Dimensions (closed)", values: ["950×550×1,100 (720) mm", "950×550×1,100 (720) mm", "950×550×1,100 (720) mm", "950×550×1,100 (720) mm"] },
        { label: "Packaging dimensions", values: ["975×625×1,065 mm", "975×625×1,065 mm", "975×625×1,065 mm", "975×625×1,065 mm"] },
        { label: "Net weight / with packaging", values: ["72 / 86 kg", "74 / 88 kg", "77 / 91 kg", "79 / 93 kg"] },
      ],
      sustainability: [
        "Built with 80% recycled materials, compliant with ESG standards.",
        "Reduces water and detergent consumption through optimised solution distribution, while dual-brush technology delivers superior washing quality versus traditional single-brush machines.",
      ],
    },
  },
  {
    slug: "mini-3070",
    group: "mini",
    category: "Compact walk-behind floor scrubber",
    name: "Mini 3070",
    tagline:
      "30 L tank with a wide 70 cm path — more coverage in a compact footprint.",
    image:
      "https://res.cloudinary.com/dxbwqifwn/image/upload/v1781887842/mini3070_xiiu8r.png",
    imageAlt: "Klinmak Mini 3070 compact walk-behind floor scrubber",
    detail: {
      lede: "A unique compact scrubber-dryer with four brushes and a 70 cm cleaning path.",
      intro:
        "The Mini 3070 floor scrubber-dryer — with 4 brushes, a 70 cm cleaning path and a 30-litre solution tank — is a unique model, ideal for continuous maintenance cleaning of areas up to 1,000 m².",
      highlights: [
        "70 cm cleaning path (4 brushes)",
        "30 L solution capacity",
        "Ideal for areas up to 1,000 m²",
        "Up to ~3 h runtime (Lithium Plus)",
      ],
      idealFor: [
        "Offices & public buildings",
        "Healthcare",
        "Transport",
        "Food service",
        "Retail",
        "Cleaning companies",
        "Manufacturing",
        "Warehouses",
        "Hospitality",
      ],
      featureSections: [
        {
          title: "High productivity, low operating costs",
          body: "With a 30-litre tank and a 70 cm cleaning path (4×7\"), the Mini 3070 is ideal for areas up to 1,000 m². Light and easy to handle, it's designed for optimal cleaning in small supermarkets and commercial or public spaces — and for extended use, the traction (forward-drive) version is recommended. KlinMak's patented four-brush system drives four counter-rotating toothed brushes from a single motor, ensuring uniform cleaning with reduced energy consumption, while edge-to-edge cleaning works in both directions without leaving residue along the edges.",
          image:
            "https://res.cloudinary.com/dxbwqifwn/image/upload/v1781893649/mini3070-high-productivity_nfw3ig.png",
          imageAlt: "Klinmak Mini 3070 high productivity detail",
        },
        {
          title: "Cutting-edge & eco-friendly technology",
          body: "A lithium battery delivers extended runtime and quick charging, while the standard HEPA H13 filter captures fine particles and improves air quality — ideal for sensitive environments. The advanced electronic control board offers 2 levels of scrubbing power to adapt to different levels of dirt and 3 levels of suction power for optimised drying. Made from 80% recycled materials and ESG-compliant, it reduces water and detergent usage through optimised solution distribution, and its four-brush technology delivers superior cleaning versus traditional single-brush machines.",
          image:
            "https://res.cloudinary.com/dxbwqifwn/image/upload/v1781893594/mini3070-efficiency_s05lo0.png",
          imageAlt: "Klinmak Mini 3070 cutting-edge technology detail",
        },
        {
          title: "Ergonomics & ease of use",
          body: "An adjustable, foldable handle makes the machine easy to transport in cars, vans or commercial vehicles — perfect for cleaning contractors and facility managers. The patented quick-release brush system lets you change brushes in seconds with no tools required.",
          image:
            "https://res.cloudinary.com/dxbwqifwn/image/upload/v1781893595/mini3070-ergonomics_w61vhg.png",
          imageAlt: "Klinmak Mini 3070 ergonomics detail",
        },
      ],
      keyFeatures: [
        {
          icon: Brush,
          title: "Patented 4-brush system",
          description:
            "One motor drives four counter-rotating brushes for uniform cleaning and reduced energy consumption.",
        },
        {
          icon: BatteryCharging,
          title: "Lithium battery power",
          description:
            "Lithium battery for extended runtime — nearly 3 hours — with quick charging.",
        },
        {
          icon: Filter,
          title: "HEPA H13 filter standard",
          description:
            "Captures fine particles and improves air quality — ideal for sensitive environments.",
        },
        {
          icon: Gauge,
          title: "Adjustable power levels",
          description:
            "2 levels of scrubbing power and 3 of suction power to match any job.",
        },
        {
          icon: ArrowLeftRight,
          title: "Edge-to-edge cleaning",
          description:
            "Cleans in both directions without leaving residue along the edges.",
        },
        {
          icon: Wrench,
          title: "Tool-free maintenance",
          description:
            "Patented quick-release brush system — change brushes in seconds, no tools required.",
        },
      ],
      specVariants: ["3070 Plus", "3070 FT Plus"],
      specRows: [
        { label: "Code", values: ["F.480.0", "F.490.0"] },
        { label: "Total installed power", values: ["850 W", "950 W"] },
        { label: "Tank capacity (sol. / rec.)", values: ["30 / 30 L", "30 / 30 L"] },
        { label: "Sound pressure level", values: ["63.9 dB(A)", "63.9 dB(A)"] },
        { label: "Work width / squeegee", values: ["712 mm / 800 mm", "712 mm / 800 mm"] },
        { label: "Brush speed", values: ["220/290 rpm", "220/290 rpm"] },
        { label: "Washing motor power", values: ["500 W", "500 W"] },
        { label: "Weight on head", values: ["30 kg max", "30 kg max"] },
        { label: "Solution flow rate", values: ["0–2 L/min", "0–2 L/min"] },
        { label: "Hourly yield at 2 km/h", values: ["1,400 m²/h", "1,400 m²/h"] },
        { label: "Suction turbine motor power", values: ["350 W", "350 W"] },
        { label: "Traction motor power", values: ["—", "100 W"] },
        { label: "Maximum slope", values: ["2%", "2%"] },
        { label: "Power supply – voltage", values: ["DC – 54.6V", "DC – 54.6V"] },
        { label: "Lithium battery", values: ["19.2 Ah", "19.2 Ah"] },
        { label: "Battery charger", values: ["5 A", "5 A"] },
        { label: "Autonomy / charging time", values: ["2.5h / 4h", "2.5h / 4h"] },
        { label: "Dimensions (closed)", values: ["950×550×1,100 (720) mm", "950×550×1,100 (720) mm"] },
        { label: "Packaging dimensions", values: ["975×804×1,065 mm", "975×804×1,065 mm"] },
        { label: "Net weight / with packaging", values: ["74 / 88 kg", "79 / 93 kg"] },
      ],
      sustainability: [
        "Made from 80% recycled materials, ESG-compliant.",
        "Reduces water and detergent usage through optimised solution distribution, while four-brush technology cuts energy consumption versus single-brush machines.",
      ],
    },
  },
];

/** Flag each product with whether a detail page exists, so the carousel can gate the "See more" CTA. */
const withDetailFlag = (p: KlinmakProduct) => ({ ...p, hasDetail: !!p.detail });

export const jokerProducts = klinmakProducts
  .filter((p) => p.group === "joker")
  .map(withDetailFlag);
export const miniProducts = klinmakProducts
  .filter((p) => p.group === "mini")
  .map(withDetailFlag);

export const getKlinmakProduct = (slug: string) =>
  klinmakProducts.find((p) => p.slug === slug);
