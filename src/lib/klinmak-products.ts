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
import { type Localized, localize } from "@/lib/product-i18n";

export interface KlinmakKeyFeature {
  icon: LucideIcon;
  title: Localized;
  description: Localized;
}

/** Alternating image + text feature block on the detail page */
export interface KlinmakFeatureSection {
  title: Localized;
  body: Localized;
  image: string;
  imageAlt: Localized;
}

/** A single row of the multi-variant spec table; `values` aligns with `specVariants`. */
export interface KlinmakSpecRow {
  label: Localized;
  values: string[];
}

export interface KlinmakDetail {
  /** Hero bold subtitle line (sits above the intro paragraph) */
  lede: Localized;
  /** Hero intro paragraph */
  intro: Localized;
  /** Quick-glance highlight bullets */
  highlights: Localized[];
  /** Target industries */
  idealFor: Localized[];
  /** Alternating image/text feature blocks */
  featureSections: KlinmakFeatureSection[];
  /** Six-up key-feature grid */
  keyFeatures: KlinmakKeyFeature[];
  /** Spec-table column headers (machine variants) */
  specVariants: string[];
  /** Spec-table rows */
  specRows: KlinmakSpecRow[];
  /** Sustainability bullet points */
  sustainability?: Localized[];
}

export interface KlinmakProduct {
  slug: string;
  group: "joker" | "mini";
  category: Localized;
  name: string;
  tagline: Localized;
  image: string;
  imageAlt: Localized;
  /** SKU in the Interlink CRM catalog — links this product into the CRM lead funnel */
  sku: string;
  /** Full content for the product detail page (omit until built) */
  detail?: KlinmakDetail;
}

export const klinmakProducts: KlinmakProduct[] = [
  // ====================  JOKER RANGE  ====================
  {
    slug: "joker-2040",
    sku: "KLIN-JOKER2040",
    group: "joker",
    category: {
      en: "Walk-behind floor scrubber",
      es: "Fregadora-secadora de suelos de conductor a pie",
    },
    name: "Joker 2040",
    tagline: {
      en: "Compact 16 in cleaning path — agile and precise in tight, medium-sized spaces.",
      es: "Ancho de trabajo compacto de 16 in: ágil y preciso en espacios reducidos de tamaño medio.",
    },
    image:
      "https://res.cloudinary.com/dxbwqifwn/image/upload/v1781886691/joker-2040_h05oyu.png",
    imageAlt: {
      en: "Klinmak Joker 2040 walk-behind floor scrubber",
      es: "Fregadora-secadora de suelos de conductor a pie Klinmak Joker 2040",
    },
    detail: {
      lede: {
        en: "Compact and high-performing professional floor scrubber-dryer.",
        es: "Fregadora-secadora de suelos profesional compacta y de alto rendimiento.",
      },
      intro: {
        en: "The Joker 2040 is the ideal solution for those looking for high performance, cutting-edge technology and a compact, versatile design for the professional cleaning industry.",
        es: "La Joker 2040 es la solución ideal para quienes buscan alto rendimiento, tecnología de vanguardia y un diseño compacto y versátil para el sector de la limpieza profesional.",
      },
      highlights: [
        { en: "16 in working track", es: "Ancho de trabajo de 16 in" },
        { en: "5.28 gal solution capacity", es: "Capacidad de solución de 5.28 gal" },
        {
          en: "Ideal for environments up to 5,380 sq ft",
          es: "Ideal para entornos de hasta 5,380 ft²",
        },
        { en: "36-month warranty", es: "Garantía de 36 meses" },
      ],
      idealFor: [
        { en: "Retail", es: "Comercio minorista" },
        { en: "Cleaning companies", es: "Empresas de limpieza" },
        {
          en: "Offices & public buildings",
          es: "Oficinas y edificios públicos",
        },
        { en: "Healthcare", es: "Sanidad" },
        { en: "Hospitality", es: "Hostelería" },
      ],
      featureSections: [
        {
          title: { en: "Power & efficiency", es: "Potencia y eficiencia" },
          body: {
            en: "Simple, lightweight and easy to handle, thanks to the lithium battery that guarantees maximum autonomy and high performance. The HEPA H13 filter comes as standard — retaining fine particles to improve air quality and ensure a healthier working environment. An independent turbine is designed for efficient extraction and quick drying of surfaces.",
            es: "Sencilla, ligera y fácil de manejar, gracias a la batería de litio que garantiza la máxima autonomía y un alto rendimiento. El filtro HEPA H13 se incluye de serie, reteniendo las partículas finas para mejorar la calidad del aire y garantizar un entorno de trabajo más saludable. Una turbina independiente está diseñada para una aspiración eficiente y un secado rápido de las superficies.",
          },
          image:
            "https://res.cloudinary.com/dxbwqifwn/image/upload/v1781890080/Joker-2040-power-efficiency_wj6byu.png",
          imageAlt: {
            en: "Klinmak Joker 2040 power and efficiency detail",
            es: "Detalle de potencia y eficiencia de la Klinmak Joker 2040",
          },
        },
        {
          title: { en: "Easy to use", es: "Fácil de usar" },
          body: {
            en: "Handy, compact and lightweight, the Joker 2040 is perfect for cleaning small spaces such as small supermarkets, laboratories, shops, offices and public buildings. Available only without traction, it's built for maximum ease of use — and it's easy to transport in vans or minivans, making it ideal for cleaning and facility-management companies.",
            es: "Práctica, compacta y ligera, la Joker 2040 es perfecta para la limpieza de espacios pequeños como supermercados de proximidad, laboratorios, tiendas, oficinas y edificios públicos. Disponible únicamente sin tracción, está diseñada para ofrecer la máxima facilidad de uso, y es fácil de transportar en furgonetas o monovolúmenes, lo que la hace ideal para empresas de limpieza y de gestión de instalaciones.",
          },
          image:
            "https://res.cloudinary.com/dxbwqifwn/image/upload/v1781890080/Joker-2040-easy-to-use_npgqwg.png",
          imageAlt: {
            en: "Klinmak Joker 2040 ease of use detail",
            es: "Detalle de facilidad de uso de la Klinmak Joker 2040",
          },
        },
        {
          title: { en: "Ergonomic design", es: "Diseño ergonómico" },
          body: {
            en: "Flush-wall cleaning works in both running directions, and the ergonomic, comfortable handle reduces operator fatigue — keeping the machine effortless to maneuver through tight, busy environments.",
            es: "La limpieza al ras de la pared funciona en ambos sentidos de avance, y el mango ergonómico y cómodo reduce la fatiga del operario, manteniendo la máquina fácil de maniobrar en entornos reducidos y concurridos.",
          },
          image:
            "https://res.cloudinary.com/dxbwqifwn/image/upload/v1781890115/klinmak-Joker-2040-ergonomic_e6d44w.png",
          imageAlt: {
            en: "Klinmak Joker 2040 ergonomic design detail",
            es: "Detalle del diseño ergonómico de la Klinmak Joker 2040",
          },
        },
        {
          title: {
            en: "Advanced technology for energy savings",
            es: "Tecnología avanzada para el ahorro de energía",
          },
          body: {
            en: "An innovative electronic board offers 2 levels of washing power to adapt to different dirt conditions, plus 3 levels of suction power for optimal drying and immediately walkable floors. The patented KlinMak system drives 2 brushes from a single motor, drastically reducing energy consumption, while the adjustable solution flow rate enables targeted use and lower consumption. A patented, tool-free brush-release system simplifies maintenance, and durable, high-efficiency components keep running costs low.",
            es: "Una innovadora placa electrónica ofrece 2 niveles de potencia de lavado para adaptarse a diferentes condiciones de suciedad, además de 3 niveles de potencia de aspiración para un secado óptimo y suelos transitables de inmediato. El sistema patentado KlinMak acciona 2 cepillos desde un único motor, reduciendo drásticamente el consumo energético, mientras que el caudal de solución regulable permite un uso específico y un menor consumo. Un sistema patentado de liberación de cepillos sin herramientas simplifica el mantenimiento, y sus componentes duraderos y de alta eficiencia mantienen bajos los costes de funcionamiento.",
          },
          image:
            "https://res.cloudinary.com/dxbwqifwn/image/upload/v1781890081/Joker-2040-advance-tech_slcspo.png",
          imageAlt: {
            en: "Klinmak Joker 2040 advanced technology detail",
            es: "Detalle de la tecnología avanzada de la Klinmak Joker 2040",
          },
        },
      ],
      keyFeatures: [
        {
          icon: Gauge,
          title: {
            en: "High performance, low consumption",
            es: "Alto rendimiento, bajo consumo",
          },
          description: {
            en: "Innovative design delivering high performance with low power consumption for continuous-cycle operation.",
            es: "Diseño innovador que ofrece un alto rendimiento con un bajo consumo energético para el funcionamiento en ciclo continuo.",
          },
        },
        {
          icon: BatteryCharging,
          title: {
            en: "Lithium battery options",
            es: "Opciones de batería de litio",
          },
          description: {
            en: "Available with 2 lithium batteries of your choice, with 1.5h to 3h autonomy in the Plus version.",
            es: "Disponible con 2 baterías de litio a elegir, con una autonomía de 1,5 h a 3 h en la versión Plus.",
          },
        },
        {
          icon: Timer,
          title: {
            en: "Short charging times",
            es: "Tiempos de carga reducidos",
          },
          description: {
            en: "Very short charging times allow almost continuous use, eliminating long Gel/AGM charging cycles.",
            es: "Los tiempos de carga muy reducidos permiten un uso casi continuo, eliminando los largos ciclos de carga de Gel/AGM.",
          },
        },
        {
          icon: Hand,
          title: {
            en: "Compact & easy to use",
            es: "Compacta y fácil de usar",
          },
          description: {
            en: "Lightweight and maneuverable floor scrubber-dryer designed for easy operation in tight spaces.",
            es: "Fregadora-secadora de suelos ligera y maniobrable, diseñada para un manejo sencillo en espacios reducidos.",
          },
        },
        {
          icon: Ruler,
          title: {
            en: "16 in working track",
            es: "Ancho de trabajo de 16 in",
          },
          description: {
            en: "Ideal for environments up to 5,380 square feet with 5.28 gallons solution capacity.",
            es: "Ideal para entornos de hasta 5,380 pies cuadrados con una capacidad de solución de 5.28 galones.",
          },
        },
        {
          icon: ShieldCheck,
          title: { en: "36-month warranty", es: "Garantía de 36 meses" },
          description: {
            en: "Solid warranty coverage indicating the reliability and longevity of this professional model.",
            es: "Una sólida cobertura de garantía que refleja la fiabilidad y la longevidad de este modelo profesional.",
          },
        },
      ],
      specVariants: ["2040 Plus"],
      specRows: [
        {
          label: { en: "Code", es: "Código" },
          values: ["F.501.0"],
        },
        {
          label: {
            en: "Total installed power",
            es: "Potencia total instalada",
          },
          values: ["850 W"],
        },
        {
          label: {
            en: "Tank capacity (sol. / rec.)",
            es: "Capacidad del depósito (sol. / rec.)",
          },
          values: ["5.3 / 5.8 gal"],
        },
        {
          label: {
            en: "Sound pressure level",
            es: "Nivel de presión sonora",
          },
          values: ["63.9 dB(A)"],
        },
        {
          label: {
            en: "Work width / squeegee",
            es: "Ancho de trabajo / boquilla",
          },
          values: ["16.0 in / 19.3 in"],
        },
        {
          label: { en: "Brush speed", es: "Velocidad del cepillo" },
          values: ["220/290 rpm"],
        },
        {
          label: {
            en: "Washing motor power",
            es: "Potencia del motor de lavado",
          },
          values: ["500 W"],
        },
        {
          label: { en: "Weight on head", es: "Peso sobre el cabezal" },
          values: ["66 lb max"],
        },
        {
          label: { en: "Solution flow rate", es: "Caudal de solución" },
          values: ["0–0.53 gal/min"],
        },
        {
          label: {
            en: "Hourly yield at 1.2 mph",
            es: "Rendimiento por hora a 1.2 mph",
          },
          values: ["8,611 sq ft/h"],
        },
        {
          label: {
            en: "Suction turbine motor power",
            es: "Potencia del motor de la turbina de aspiración",
          },
          values: ["350 W"],
        },
        {
          label: {
            en: "Power supply – voltage",
            es: "Alimentación – voltaje",
          },
          values: ["DC – 54.6V"],
        },
        {
          label: { en: "Lithium battery", es: "Batería de litio" },
          values: ["19.2 Ah"],
        },
        {
          label: { en: "Battery charger", es: "Cargador de batería" },
          values: ["5 A"],
        },
        {
          label: {
            en: "Autonomy / charging time",
            es: "Autonomía / tiempo de carga",
          },
          values: ["3h / 4h"],
        },
        {
          label: { en: "Dimensions (closed)", es: "Dimensiones (cerrada)" },
          values: ["31.5×19.3×43.3 in"],
        },
        {
          label: {
            en: "Packaging dimensions",
            es: "Dimensiones del embalaje",
          },
          values: ["38.4×24.6×41.9 in"],
        },
        {
          label: {
            en: "Net weight / with packaging",
            es: "Peso neto / con embalaje",
          },
          values: ["132 / 159 lb"],
        },
      ],
      sustainability: [
        {
          en: "Built with up to 80% recycled plastics in its construction.",
          es: "Fabricada con hasta un 80 % de plásticos reciclados en su construcción.",
        },
        {
          en: "ESG-compliant, energy-efficient design with an adjustable solution flow rate for reduced consumption.",
          es: "Diseño energéticamente eficiente y conforme con los criterios ESG, con un caudal de solución regulable para reducir el consumo.",
        },
      ],
    },
  },
  {
    slug: "joker-5070",
    sku: "KLIN-JOKER5070",
    group: "joker",
    category: {
      en: "Walk-behind floor scrubber",
      es: "Fregadora-secadora de suelos de conductor a pie",
    },
    name: "Joker 5070",
    tagline: {
      en: "Wide 27.6 in cleaning path — fast coverage across larger professional areas.",
      es: "Ancho de trabajo amplio de 27.6 in: cobertura rápida en áreas profesionales de mayor tamaño.",
    },
    image:
      "https://res.cloudinary.com/dxbwqifwn/image/upload/v1781886691/joker-5070_ebe9a4.png",
    imageAlt: {
      en: "Klinmak Joker 5070 walk-behind floor scrubber",
      es: "Fregadora-secadora de suelos de conductor a pie Klinmak Joker 5070",
    },
    detail: {
      lede: {
        en: "Floor scrubber-dryers unique in the world with 4 brushes.",
        es: "Fregadoras-secadoras de suelos únicas en el mundo con 4 cepillos.",
      },
      intro: {
        en: "The ideal solution for those looking for high performance, cutting-edge technology and a compact, versatile design for the professional cleaning industry.",
        es: "La solución ideal para quienes buscan alto rendimiento, tecnología de vanguardia y un diseño compacto y versátil para el sector de la limpieza profesional.",
      },
      highlights: [
        { en: "27.6 in cleaning track", es: "Ancho de trabajo de 27.6 in" },
        {
          en: "~13.2 gal solution capacity",
          es: "Capacidad de solución de ~13.2 gal",
        },
        {
          en: "Ideal for 10,764–16,146 sq ft environments",
          es: "Ideal para entornos de 10,764 a 16,146 ft²",
        },
        { en: "36-month warranty", es: "Garantía de 36 meses" },
      ],
      idealFor: [
        { en: "Retail", es: "Comercio minorista" },
        { en: "Cleaning companies", es: "Empresas de limpieza" },
        {
          en: "Offices & public buildings",
          es: "Oficinas y edificios públicos",
        },
        { en: "Healthcare", es: "Sanidad" },
        { en: "Hospitality", es: "Hostelería" },
      ],
      featureSections: [
        {
          title: { en: "Power & efficiency", es: "Potencia y eficiencia" },
          body: {
            en: "Simple, lightweight and easy to handle, thanks to the lithium battery that guarantees maximum autonomy and high performance. The HEPA H13 filter comes as standard — retaining fine particles to improve air quality and ensure a healthier working environment. An independent turbine is designed for efficient extraction and quick drying of surfaces.",
            es: "Sencilla, ligera y fácil de manejar, gracias a la batería de litio que garantiza la máxima autonomía y un alto rendimiento. El filtro HEPA H13 se incluye de serie, reteniendo las partículas finas para mejorar la calidad del aire y garantizar un entorno de trabajo más saludable. Una turbina independiente está diseñada para una aspiración eficiente y un secado rápido de las superficies.",
          },
          image:
            "https://res.cloudinary.com/dxbwqifwn/image/upload/v1781888778/joker-5070-power-efficency_czppa5.png",
          imageAlt: {
            en: "Klinmak Joker 5070 power and efficiency detail",
            es: "Detalle de potencia y eficiencia de la Klinmak Joker 5070",
          },
        },
        {
          title: {
            en: "Flexible power supply",
            es: "Alimentación flexible",
          },
          body: {
            en: "Available in two variants. A cable version with a dedicated current transformer, and a lithium-battery-powered version offered in two configurations to suit different operational needs.",
            es: "Disponible en dos variantes. Una versión con cable con un transformador de corriente específico, y una versión alimentada por batería de litio ofrecida en dos configuraciones para adaptarse a diferentes necesidades operativas.",
          },
          image:
            "https://res.cloudinary.com/dxbwqifwn/image/upload/v1781888778/oker-5070-maximun-supply_alf37j.jpg",
          imageAlt: {
            en: "Klinmak Joker 5070 flexible power supply options",
            es: "Opciones de alimentación flexible de la Klinmak Joker 5070",
          },
        },
        {
          title: { en: "Ergonomic design", es: "Diseño ergonómico" },
          body: {
            en: "Handy, compact and lightweight — perfect for cleaning medium-sized supermarkets, industries, warehouses, and commercial or public buildings. The Joker 5070 is available with or without traction (forward gear, FT). Flush-wall cleaning works in both running directions, and the ergonomic, comfortable handle reduces operator fatigue. It's easy to transport in vans, making it ideal for cleaning and facility-management companies.",
            es: "Práctica, compacta y ligera, es perfecta para la limpieza de supermercados de tamaño medio, industrias, almacenes y edificios comerciales o públicos. La Joker 5070 está disponible con o sin tracción (marcha hacia delante, FT). La limpieza al ras de la pared funciona en ambos sentidos de avance, y el mango ergonómico y cómodo reduce la fatiga del operario. Es fácil de transportar en furgonetas, lo que la hace ideal para empresas de limpieza y de gestión de instalaciones.",
          },
          image:
            "https://res.cloudinary.com/dxbwqifwn/image/upload/v1781888778/joker-5070-ergonomic-design_ehrh5i.png",
          imageAlt: {
            en: "Klinmak Joker 5070 ergonomic design detail",
            es: "Detalle del diseño ergonómico de la Klinmak Joker 5070",
          },
        },
      ],
      keyFeatures: [
        {
          icon: Brush,
          title: {
            en: "Patented 4-brush system",
            es: "Sistema patentado de 4 cepillos",
          },
          description: {
            en: "KlinMak's patented single-motor system drives four brushes for superior cleaning.",
            es: "El sistema patentado de un solo motor de KlinMak acciona cuatro cepillos para una limpieza superior.",
          },
        },
        {
          icon: BatteryCharging,
          title: {
            en: "Lithium battery power",
            es: "Alimentación por batería de litio",
          },
          description: {
            en: "Minimum 1-hour autonomy, up to 3 hours in the Plus version, with short charging times.",
            es: "Autonomía mínima de 1 hora, hasta 3 horas en la versión Plus, con tiempos de carga reducidos.",
          },
        },
        {
          icon: Filter,
          title: {
            en: "HEPA H13 filter standard",
            es: "Filtro HEPA H13 de serie",
          },
          description: {
            en: "Independent turbine for efficient extraction with standard HEPA H13 filtration.",
            es: "Turbina independiente para una aspiración eficiente con filtración HEPA H13 de serie.",
          },
        },
        {
          icon: Hand,
          title: {
            en: "Compact & ergonomic design",
            es: "Diseño compacto y ergonómico",
          },
          description: {
            en: "Handy, compact and lightweight construction with an ergonomic handle that reduces operator fatigue.",
            es: "Construcción práctica, compacta y ligera con un mango ergonómico que reduce la fatiga del operario.",
          },
        },
        {
          icon: ArrowLeftRight,
          title: {
            en: "Flush-wall cleaning",
            es: "Limpieza al ras de la pared",
          },
          description: {
            en: "Flush-wall cleaning capability in both directions for thorough coverage.",
            es: "Capacidad de limpieza al ras de la pared en ambos sentidos para una cobertura completa.",
          },
        },
        {
          icon: Wrench,
          title: {
            en: "Tool-free maintenance",
            es: "Mantenimiento sin herramientas",
          },
          description: {
            en: "Tool-free brush replacement system for simplified, low-maintenance operation.",
            es: "Sistema de sustitución de cepillos sin herramientas para un funcionamiento simplificado y de bajo mantenimiento.",
          },
        },
      ],
      specVariants: ["5070 FT Plus"],
      specRows: [
        {
          label: { en: "Code", es: "Código" },
          values: ["F.541.0"],
        },
        {
          label: {
            en: "Total installed power",
            es: "Potencia total instalada",
          },
          values: ["950 W"],
        },
        {
          label: {
            en: "Tank capacity (sol. / rec.)",
            es: "Capacidad del depósito (sol. / rec.)",
          },
          values: ["12.4 / 13.2 gal"],
        },
        {
          label: {
            en: "Sound pressure level",
            es: "Nivel de presión sonora",
          },
          values: ["63.9 dB(A)"],
        },
        {
          label: {
            en: "Work width / squeegee",
            es: "Ancho de trabajo / boquilla",
          },
          values: ["28.0 in / 31.5 in"],
        },
        {
          label: { en: "Brush speed", es: "Velocidad del cepillo" },
          values: ["220/290 rpm"],
        },
        {
          label: {
            en: "Washing motor power",
            es: "Potencia del motor de lavado",
          },
          values: ["500 W"],
        },
        {
          label: { en: "Weight on head", es: "Peso sobre el cabezal" },
          values: ["66 lb max"],
        },
        {
          label: { en: "Solution flow rate", es: "Caudal de solución" },
          values: ["0–0.53 gal/min"],
        },
        {
          label: {
            en: "Hourly yield at 1.2 mph",
            es: "Rendimiento por hora a 1.2 mph",
          },
          values: ["15,069 sq ft/h"],
        },
        {
          label: {
            en: "Suction turbine motor power",
            es: "Potencia del motor de la turbina de aspiración",
          },
          values: ["350 W"],
        },
        {
          label: {
            en: "Traction motor power",
            es: "Potencia del motor de tracción",
          },
          values: ["100 W"],
        },
        {
          label: { en: "Maximum slope", es: "Pendiente máxima" },
          values: ["2%"],
        },
        {
          label: {
            en: "Power supply – voltage",
            es: "Alimentación – voltaje",
          },
          values: ["DC – 54.6V"],
        },
        {
          label: { en: "Lithium battery", es: "Batería de litio" },
          values: ["19.2 Ah"],
        },
        {
          label: { en: "Battery charger", es: "Cargador de batería" },
          values: ["5 A"],
        },
        {
          label: {
            en: "Autonomy / charging time",
            es: "Autonomía / tiempo de carga",
          },
          values: ["3h / 4h"],
        },
        {
          label: { en: "Dimensions (closed)", es: "Dimensiones (cerrada)" },
          values: ["35.4×29.5×43.3 in"],
        },
        {
          label: {
            en: "Packaging dimensions",
            es: "Dimensiones del embalaje",
          },
          values: ["38.4×31.7×41.9 in"],
        },
        {
          label: {
            en: "Net weight / with packaging",
            es: "Peso neto / con embalaje",
          },
          values: ["172 / 205 lb"],
        },
      ],
      sustainability: [
        {
          en: "Built with up to 80% recycled plastics in its construction.",
          es: "Fabricada con hasta un 80 % de plásticos reciclados en su construcción.",
        },
        {
          en: "Designed in line with ESG principles for responsible, lower-impact cleaning.",
          es: "Diseñada conforme a los principios ESG para una limpieza responsable y de menor impacto.",
        },
      ],
    },
  },

  // ====================  MINI RANGE  ====================
  {
    slug: "mini-1240",
    sku: "KLIN-MINI1240",
    group: "mini",
    category: {
      en: "Compact walk-behind floor scrubber",
      es: "Fregadora-secadora de suelos compacta de conductor a pie",
    },
    name: "Mini HD 1240",
    tagline: {
      en: "Ultra-compact 3.17 gal tank, 15.7 in path — built for the narrowest, hardest-to-reach spaces.",
      es: "Depósito ultracompacto de 3.17 gal y ancho de trabajo de 15.7 in: diseñada para los espacios más estrechos y de difícil acceso.",
    },
    image:
      "https://res.cloudinary.com/dxbwqifwn/image/upload/e_background_removal/f_png/v1785601182/mini-hd-1240-klinmak_xq81uq.jpg",
    imageAlt: {
      en: "Klinmak Mini HD 1240 compact walk-behind floor scrubber",
      es: "Fregadora-secadora de suelos compacta de conductor a pie Klinmak Mini HD 1240",
    },
    detail: {
      lede: {
        en: "An innovative walk-behind floor scrubber-dryer — the ideal solution for professional cleaning without compromise.",
        es: "Una innovadora fregadora-secadora de suelos de conductor a pie: la solución ideal para la limpieza profesional sin compromisos.",
      },
      intro: {
        en: "Based on Micro-impulse technology, ideal for thorough cleaning on elastic and hard porous surfaces, and maintenance with the appropriate working pads. Micropulse technology (up to 3,000 oscillations/minute) improves cleaning and avoids waste of solution or water — ideal for dewaxing and non-slip surfaces. Despite a contained 3.17 gal tank, the MINI HD 1240 can operate with up to an hour of solution autonomy. Available with 2 lithium batteries of your choice, with a minimum autonomy of 1 hour, up to 2.5 hours in harsh conditions in the Plus version — and very short charging times allow almost continuous use, eliminating the long charging cycles typical of Gel/AGM batteries.",
        es: "Basada en la tecnología Micro-impulse, ideal para una limpieza profunda en superficies elásticas y duras porosas, y para el mantenimiento con los pads de trabajo adecuados. La tecnología Micropulse (hasta 3,000 oscilaciones por minuto) mejora la limpieza y evita el desperdicio de solución o agua, ideal para el decapado y las superficies antideslizantes. A pesar de su compacto depósito de 3.17 gal, la MINI HD 1240 puede operar con hasta una hora de autonomía de solución. Disponible con 2 baterías de litio a elegir, con una autonomía mínima de 1 hora, hasta 2.5 horas en condiciones exigentes en la versión Plus, y sus tiempos de carga muy reducidos permiten un uso casi continuo, eliminando los largos ciclos de carga típicos de las baterías de Gel/AGM.",
      },
      highlights: [
        { en: "15.7 in working track", es: "Ancho de trabajo de 15.7 in" },
        { en: "3.17 gal solution capacity", es: "Capacidad de solución de 3.17 gal" },
        { en: "Lightweight — only 75 lb", es: "Ligera: solo 75 lb" },
        {
          en: "Ideal for environments up to 5,380 sq ft",
          es: "Ideal para entornos de hasta 5,380 ft²",
        },
      ],
      idealFor: [
        { en: "Hospitality", es: "Hostelería" },
        { en: "Food service", es: "Servicio de alimentación" },
        {
          en: "Offices & public buildings",
          es: "Oficinas y edificios públicos",
        },
      ],
      featureSections: [
        {
          title: {
            en: "Oscillating micro-pulses",
            es: "Micropulsos oscilantes",
          },
          body: {
            en: "The eccentric AISI 304 stainless-steel vibrating rectangular head, based on Micro-pulse technology (up to 3,000 oscillations per minute), improves cleaning and avoids waste of solution or water — ideal for thorough cleaning on elastic and hard porous surfaces.",
            es: "El cabezal rectangular vibratorio excéntrico de acero inoxidable AISI 304, basado en la tecnología Micro-pulse (hasta 3,000 oscilaciones por minuto), mejora la limpieza y evita el desperdicio de solución o agua, ideal para una limpieza profunda en superficies elásticas y duras porosas.",
          },
          image:
            "https://res.cloudinary.com/dxbwqifwn/image/upload/v1785601182/mini-hd-1240-2_ahox9m.png",
          imageAlt: {
            en: "Klinmak Mini HD 1240 micro-pulse head detail",
            es: "Detalle del cabezal Micro-pulse de la Klinmak Mini HD 1240",
          },
        },
        {
          title: {
            en: "Ideal for all types of flooring",
            es: "Ideal para todo tipo de suelos",
          },
          body: {
            en: "With the appropriate working pads it handles thorough cleaning and maintenance on any floor — including dewaxing and non-slip surfaces — while the rectangular head makes corners and edges easy to reach.",
            es: "Con los pads de trabajo adecuados realiza una limpieza profunda y el mantenimiento de cualquier suelo, incluido el decapado y las superficies antideslizantes, mientras que el cabezal rectangular facilita el acceso a esquinas y bordes.",
          },
          image:
            "https://res.cloudinary.com/dxbwqifwn/image/upload/e_background_removal/f_png/v1785601181/mini-1240-3_f9sk4z.jpg",
          imageAlt: {
            en: "Klinmak Mini HD 1240 working pad detail",
            es: "Detalle del pad de trabajo de la Klinmak Mini HD 1240",
          },
        },
        {
          title: {
            en: "Ultra-lightweight & compact",
            es: "Ultraligera y compacta",
          },
          body: {
            en: "An ultra-lightweight structure (75 lb) and compact design make it perfect for tight spaces, and the folding handle makes it easy to transport in cars, vans and commercial vehicles — ideal for cleaning and facility-management companies.",
            es: "Una estructura ultraligera (75 lb) y un diseño compacto la hacen perfecta para espacios reducidos, y el mango plegable facilita su transporte en coches, furgonetas y vehículos comerciales, ideal para empresas de limpieza y de gestión de instalaciones.",
          },
          image:
            "https://res.cloudinary.com/dxbwqifwn/image/upload/v1785601182/mini-hd-1240-4_h3biov.png",
          imageAlt: {
            en: "Klinmak Mini HD 1240 compact side profile",
            es: "Perfil lateral compacto de la Klinmak Mini HD 1240",
          },
        },
        {
          title: {
            en: "Smart control, sustainable by design",
            es: "Control inteligente, sostenible por diseño",
          },
          body: {
            en: "Cleaning-solution consumption is reduced (from 0.03 to 0.13 gal/min) and adjustable directly from the control panel. Built with 80% recycled materials and compliant with ESG standards for a reduced environmental impact.",
            es: "El consumo de solución de limpieza es reducido (de 0.03 a 0.13 gal/min) y regulable directamente desde el panel de control. Fabricada con un 80 % de materiales reciclados y conforme con las normas ESG para un menor impacto ambiental.",
          },
          image:
            "https://res.cloudinary.com/dxbwqifwn/image/upload/e_background_removal/f_png/v1785601182/mini-hd-1240-5_xjmjhb.jpg",
          imageAlt: {
            en: "Klinmak Mini HD 1240 control panel detail",
            es: "Detalle del panel de control de la Klinmak Mini HD 1240",
          },
        },
      ],
      keyFeatures: [
        {
          icon: Brush,
          title: {
            en: "Micro-pulse cleaning head",
            es: "Cabezal de limpieza Micro-pulse",
          },
          description: {
            en: "Eccentric AISI 304 stainless-steel vibrating rectangular head with up to 3,000 oscillations per minute.",
            es: "Cabezal rectangular vibratorio excéntrico de acero inoxidable AISI 304 con hasta 3,000 oscilaciones por minuto.",
          },
        },
        {
          icon: Feather,
          title: {
            en: "Lightweight & compact",
            es: "Ligera y compacta",
          },
          description: {
            en: "Just 75 lb with a folding handle — easy to carry in cars, vans and commercial vehicles.",
            es: "Solo 75 lb con un mango plegable: fácil de transportar en coches, furgonetas y vehículos comerciales.",
          },
        },
        {
          icon: BatteryCharging,
          title: {
            en: "Lithium battery power",
            es: "Alimentación por batería de litio",
          },
          description: {
            en: "Lithium battery for extended runtime and fast recharge times.",
            es: "Batería de litio para una autonomía prolongada y tiempos de recarga rápidos.",
          },
        },
        {
          icon: Filter,
          title: {
            en: "HEPA H13 filter standard",
            es: "Filtro HEPA H13 de serie",
          },
          description: {
            en: "Retains fine particles and improves air quality — ideal for sensitive environments.",
            es: "Retiene las partículas finas y mejora la calidad del aire, ideal para entornos sensibles.",
          },
        },
        {
          icon: Gauge,
          title: {
            en: "Adjustable power levels",
            es: "Niveles de potencia regulables",
          },
          description: {
            en: "2 levels of washing power and 3 of suction power to match any job.",
            es: "2 niveles de potencia de lavado y 3 de potencia de aspiración para adaptarse a cualquier tarea.",
          },
        },
        {
          icon: ArrowLeftRight,
          title: {
            en: "Flush-wall cleaning",
            es: "Limpieza al ras de la pared",
          },
          description: {
            en: "Cleans in both directions without leaving residue along the edges.",
            es: "Limpia en ambos sentidos sin dejar residuos en los bordes.",
          },
        },
      ],
      specVariants: ["HD 1240 Plus"],
      specRows: [
        {
          label: { en: "Code", es: "Código" },
          values: ["F.415.0"],
        },
        {
          label: {
            en: "Total installed power",
            es: "Potencia total instalada",
          },
          values: ["450 W"],
        },
        {
          label: {
            en: "Tank capacity (sol. / rec.)",
            es: "Capacidad del depósito (sol. / rec.)",
          },
          values: ["3.2 / 3.7 gal"],
        },
        {
          label: {
            en: "Sound pressure level",
            es: "Nivel de presión sonora",
          },
          values: ["66.7 dB(A)"],
        },
        {
          label: {
            en: "Work width / squeegee",
            es: "Ancho de trabajo / boquilla",
          },
          values: ["15.4×9.1 in / 19.3 in"],
        },
        {
          label: {
            en: "Vibrating head speed",
            es: "Velocidad del cabezal vibratorio",
          },
          values: ["3000/2300 rpm"],
        },
        {
          label: {
            en: "Washing motor power",
            es: "Potencia del motor de lavado",
          },
          values: ["250 W"],
        },
        {
          label: { en: "Weight on head", es: "Peso sobre el cabezal" },
          values: ["51 lb max"],
        },
        {
          label: { en: "Solution flow rate", es: "Caudal de solución" },
          values: ["0–0.13 gal/min"],
        },
        {
          label: {
            en: "Hourly yield at 1.2 mph",
            es: "Rendimiento por hora a 1.2 mph",
          },
          values: ["8,396 sq ft/h"],
        },
        {
          label: {
            en: "Suction turbine motor power",
            es: "Potencia del motor de la turbina de aspiración",
          },
          values: ["200 W"],
        },
        {
          label: {
            en: "Power supply – voltage",
            es: "Alimentación – voltaje",
          },
          values: ["DC – 54.6V"],
        },
        {
          label: { en: "Lithium battery", es: "Batería de litio" },
          values: ["19.2 Ah"],
        },
        {
          label: { en: "Battery charger", es: "Cargador de batería" },
          values: ["5 A"],
        },
        {
          label: {
            en: "Autonomy / charging time",
            es: "Autonomía / tiempo de carga",
          },
          values: ["2.5h / 4h"],
        },
        {
          label: { en: "Dimensions (closed)", es: "Dimensiones (cerrada)" },
          values: ["29.5×19.3×42.1 (28.3) in"],
        },
        {
          label: {
            en: "Packaging dimensions",
            es: "Dimensiones del embalaje",
          },
          values: ["29.7×20.9×32.3 in"],
        },
        {
          label: {
            en: "Net weight / with packaging",
            es: "Peso neto / con embalaje",
          },
          values: ["79–104 lb"],
        },
      ],
      sustainability: [
        {
          en: "Built with 80% recycled materials, compliant with ESG standards.",
          es: "Fabricada con un 80 % de materiales reciclados, conforme con las normas ESG.",
        },
        {
          en: "Reduces water and detergent consumption through optimised solution distribution, while dual-brush technology delivers superior washing quality versus traditional single-brush machines.",
          es: "Reduce el consumo de agua y detergente mediante una distribución optimizada de la solución, mientras que la tecnología de doble cepillo ofrece una calidad de lavado superior frente a las máquinas tradicionales de un solo cepillo.",
        },
      ],
    },
  },
  {
    slug: "mini-3050",
    sku: "KLIN-MINI3050",
    group: "mini",
    category: {
      en: "Compact walk-behind floor scrubber",
      es: "Fregadora-secadora de suelos compacta de conductor a pie",
    },
    name: "Mini HD 3050",
    tagline: {
      en: "7.9 gal tank with a 20 in path — versatile cleaning for confined areas.",
      es: "Depósito de 7.9 gal con un ancho de trabajo de 20 in: limpieza versátil para áreas reducidas.",
    },
    image:
      "https://res.cloudinary.com/dxbwqifwn/image/upload/v1781887842/mini-3050_qn4tsw.png",
    imageAlt: {
      en: "Klinmak Mini HD 3050 compact walk-behind floor scrubber",
      es: "Fregadora-secadora de suelos compacta de conductor a pie Klinmak Mini HD 3050",
    },
    detail: {
      lede: {
        en: "Professional Heavy Duty Floor Scrubber-Dryer — Micropulse Technology for Maximum Efficiency.",
        es: "Fregadora-secadora de suelos profesional de alto rendimiento: tecnología Micropulse para la máxima eficiencia.",
      },
      intro: {
        en: "MINI HD 3050 by KlinMak is an innovative walk-behind floor scrubber-dryer with an eccentric AISI 304 stainless-steel vibrating rectangular head (18.1×11.8 in working track) based on Micro-pulse technology, ideal for thorough cleaning on porous, elastic and hard surfaces, and maintenance with the appropriate working pads. The large 7.9 gal tank guarantees a non-stop solution autonomy of about 2.5h (equal to 39.6 gallons in disc version) and therefore long operations with very high productivity. Available with 2 lithium batteries with a minimum battery life of 1 hour (7.8Ah) up to 2.5h in harsh conditions with 19.2Ah.",
        es: "La MINI HD 3050 de KlinMak es una innovadora fregadora-secadora de suelos de conductor a pie con un cabezal rectangular vibratorio excéntrico de acero inoxidable AISI 304 (ancho de trabajo de 18.1×11.8 in) basado en la tecnología Micro-pulse, ideal para una limpieza profunda en superficies porosas, elásticas y duras, y para el mantenimiento con los pads de trabajo adecuados. El gran depósito de 7.9 gal garantiza una autonomía de solución ininterrumpida de aproximadamente 2.5 h (equivalente a 39.6 galones en la versión de disco) y, por tanto, largas operaciones con una productividad muy alta. Disponible con 2 baterías de litio con una autonomía mínima de 1 hora (7.8 Ah) hasta 2.5 h en condiciones exigentes con 19.2 Ah.",
      },
      highlights: [
        { en: "20.0 in working track", es: "Ancho de trabajo de 20.0 in" },
        { en: "7.9 gal solution capacity", es: "Capacidad de solución de 7.9 gal" },
        {
          en: "Ideal for environments up to 8,073 sq ft",
          es: "Ideal para entornos de hasta 8,073 ft²",
        },
        {
          en: "Available with traction (FT)",
          es: "Disponible con tracción (FT)",
        },
      ],
      idealFor: [
        { en: "Healthcare", es: "Sanidad" },
        { en: "Retail", es: "Comercio minorista" },
        { en: "Cleaning companies", es: "Empresas de limpieza" },
        {
          en: "Offices & public buildings",
          es: "Oficinas y edificios públicos",
        },
        { en: "Food service", es: "Servicio de alimentación" },
        { en: "Hospitality", es: "Hostelería" },
      ],
      featureSections: [
        {
          title: {
            en: "Oscillating micro-pulses",
            es: "Micropulsos oscilantes",
          },
          body: {
            en: "Advanced Micro-pulse technology generates strong turbulence at the head, removing the most stubborn dirt without fatiguing the operator — ideal for thorough cleaning on porous, elastic and hard surfaces, and maintenance with the appropriate working pads.",
            es: "La avanzada tecnología Micro-pulse genera fuertes turbulencias en el cabezal, eliminando la suciedad más persistente sin fatigar al operario, ideal para una limpieza profunda en superficies porosas, elásticas y duras, y para el mantenimiento con los pads de trabajo adecuados.",
          },
          image:
            "https://res.cloudinary.com/dxbwqifwn/image/upload/v1785600846/klinmak-3050_hxqwaz.png",
          imageAlt: {
            en: "Klinmak Mini HD 3050 micro-pulse technology detail",
            es: "Detalle de la tecnología Micro-pulse de la Klinmak Mini HD 3050",
          },
        },
        {
          title: {
            en: "Rectangular head shape",
            es: "Cabezal rectangular",
          },
          body: {
            en: "The rectangular head facilitates cleaning of corners and reduces the need for manual scrubbing, increasing operational efficiency.",
            es: "El cabezal rectangular facilita la limpieza de las esquinas y reduce la necesidad de fregado manual, aumentando la eficiencia operativa.",
          },
          image:
            "https://res.cloudinary.com/dxbwqifwn/image/upload/v1785600846/mini-3050-2_foubzl.png",
          imageAlt: {
            en: "Klinmak Mini HD 3050 rectangular head detail",
            es: "Detalle del cabezal rectangular de la Klinmak Mini HD 3050",
          },
        },
        {
          title: {
            en: "Balanced weight & telescopic handle",
            es: "Peso equilibrado y mango telescópico",
          },
          body: {
            en: "A balanced 165 lb weight and a telescopic, foldable handle — height-adjustable for operators of all heights — make the machine comfortable to use and easy to transport in cars, vans and commercial vehicles.",
            es: "Un peso equilibrado de 165 lb y un mango telescópico y plegable, regulable en altura para operarios de cualquier estatura, hacen que la máquina sea cómoda de usar y fácil de transportar en coches, furgonetas y vehículos comerciales.",
          },
          image:
            "https://res.cloudinary.com/dxbwqifwn/image/upload/v1785600847/mini-3050-3_g6ryzb.png",
          imageAlt: {
            en: "Klinmak Mini HD 3050 telescopic handle detail",
            es: "Detalle del mango telescópico de la Klinmak Mini HD 3050",
          },
        },
        {
          title: {
            en: "Sustainable by design",
            es: "Sostenible por diseño",
          },
          body: {
            en: "Built with 80% recycled plastics, in line with ESG objectives for a reduced environmental impact — while optimised solution distribution reduces water and detergent consumption.",
            es: "Fabricada con un 80 % de plásticos reciclados, en línea con los objetivos ESG para un menor impacto ambiental, mientras que la distribución optimizada de la solución reduce el consumo de agua y detergente.",
          },
          image:
            "https://res.cloudinary.com/dxbwqifwn/image/upload/v1785600846/klinmak-3050_hxqwaz.png",
          imageAlt: {
            en: "Klinmak Mini HD 3050 sustainability detail",
            es: "Detalle de sostenibilidad de la Klinmak Mini HD 3050",
          },
        },
      ],
      keyFeatures: [
        {
          icon: Brush,
          title: {
            en: "Micro-pulse cleaning head",
            es: "Cabezal de limpieza Micro-pulse",
          },
          description: {
            en: "Eccentric AISI 304 stainless-steel vibrating rectangular head removes the most stubborn dirt without fatiguing the operator.",
            es: "El cabezal rectangular vibratorio excéntrico de acero inoxidable AISI 304 elimina la suciedad más persistente sin fatigar al operario.",
          },
        },
        {
          icon: BatteryCharging,
          title: {
            en: "Lithium battery power",
            es: "Alimentación por batería de litio",
          },
          description: {
            en: "Standard lithium battery for extended runtime and fast recharge times.",
            es: "Batería de litio de serie para una autonomía prolongada y tiempos de recarga rápidos.",
          },
        },
        {
          icon: Filter,
          title: {
            en: "HEPA H13 filter standard",
            es: "Filtro HEPA H13 de serie",
          },
          description: {
            en: "Retains fine particles and improves air quality — ideal for sensitive environments.",
            es: "Retiene las partículas finas y mejora la calidad del aire, ideal para entornos sensibles.",
          },
        },
        {
          icon: Gauge,
          title: {
            en: "Adjustable power levels",
            es: "Niveles de potencia regulables",
          },
          description: {
            en: "2 levels of washing power and 3 of suction power to match any job.",
            es: "2 niveles de potencia de lavado y 3 de potencia de aspiración para adaptarse a cualquier tarea.",
          },
        },
        {
          icon: ArrowLeftRight,
          title: {
            en: "Flush-wall cleaning",
            es: "Limpieza al ras de la pared",
          },
          description: {
            en: "Cleans in both directions without leaving residue along the edges.",
            es: "Limpia en ambos sentidos sin dejar residuos en los bordes.",
          },
        },
        {
          icon: Wrench,
          title: {
            en: "Tool-free maintenance",
            es: "Mantenimiento sin herramientas",
          },
          description: {
            en: "Patented quick-release brush system for tool-free replacement in seconds.",
            es: "Sistema patentado de liberación rápida de cepillos para su sustitución sin herramientas en segundos.",
          },
        },
      ],
      specVariants: ["3050 FT Plus"],
      specRows: [
        {
          label: { en: "Code", es: "Código" },
          values: ["F.461.0"],
        },
        {
          label: {
            en: "Total installed power",
            es: "Potencia total instalada",
          },
          values: ["950 W"],
        },
        {
          label: {
            en: "Tank capacity (sol. / rec.)",
            es: "Capacidad del depósito (sol. / rec.)",
          },
          values: ["7.9 / 7.9 gal"],
        },
        {
          label: {
            en: "Sound pressure level",
            es: "Nivel de presión sonora",
          },
          values: ["63.9 dB(A)"],
        },
        {
          label: {
            en: "Work width / squeegee",
            es: "Ancho de trabajo / boquilla",
          },
          values: ["20.0 in / 22.8 in"],
        },
        {
          label: { en: "Brush speed", es: "Velocidad del cepillo" },
          values: ["220/290 rpm"],
        },
        {
          label: {
            en: "Washing motor power",
            es: "Potencia del motor de lavado",
          },
          values: ["500 W"],
        },
        {
          label: { en: "Weight on head", es: "Peso sobre el cabezal" },
          values: ["66 lb max"],
        },
        {
          label: { en: "Solution flow rate", es: "Caudal de solución" },
          values: ["0–0.53 gal/min"],
        },
        {
          label: {
            en: "Hourly yield at 1.2 mph",
            es: "Rendimiento por hora a 1.2 mph",
          },
          values: ["10,764 sq ft/h"],
        },
        {
          label: {
            en: "Suction turbine motor power",
            es: "Potencia del motor de la turbina de aspiración",
          },
          values: ["350 W"],
        },
        {
          label: {
            en: "Traction motor power",
            es: "Potencia del motor de tracción",
          },
          values: ["100 W"],
        },
        {
          label: { en: "Maximum slope", es: "Pendiente máxima" },
          values: ["2%"],
        },
        {
          label: {
            en: "Power supply – voltage",
            es: "Alimentación – voltaje",
          },
          values: ["DC – 54.6V"],
        },
        {
          label: { en: "Lithium battery", es: "Batería de litio" },
          values: ["19.2 Ah"],
        },
        {
          label: { en: "Battery charger", es: "Cargador de batería" },
          values: ["5 A"],
        },
        {
          label: {
            en: "Autonomy / charging time",
            es: "Autonomía / tiempo de carga",
          },
          values: ["2.5h / 4h"],
        },
        {
          label: { en: "Dimensions (closed)", es: "Dimensiones (cerrada)" },
          values: ["37.4×21.7×43.3 (28.3) in"],
        },
        {
          label: {
            en: "Packaging dimensions",
            es: "Dimensiones del embalaje",
          },
          values: ["38.4×24.6×41.9 in"],
        },
        {
          label: {
            en: "Net weight / with packaging",
            es: "Peso neto / con embalaje",
          },
          values: ["174 / 205 lb"],
        },
      ],
      sustainability: [
        {
          en: "Built with 80% recycled materials, compliant with ESG standards.",
          es: "Fabricada con un 80 % de materiales reciclados, conforme con las normas ESG.",
        },
        {
          en: "Reduces water and detergent consumption through optimised solution distribution, while dual-brush technology delivers superior washing quality versus traditional single-brush machines.",
          es: "Reduce el consumo de agua y detergente mediante una distribución optimizada de la solución, mientras que la tecnología de doble cepillo ofrece una calidad de lavado superior frente a las máquinas tradicionales de un solo cepillo.",
        },
      ],
    },
  },
  {
    slug: "mini-3070",
    sku: "KLIN-MINI3070",
    group: "mini",
    category: {
      en: "Compact walk-behind floor scrubber",
      es: "Fregadora-secadora de suelos compacta de conductor a pie",
    },
    name: "Mini 3070",
    tagline: {
      en: "30 L tank with a wide 70 cm path — more coverage in a compact footprint.",
      es: "Depósito de 30 L con un amplio ancho de trabajo de 70 cm: mayor cobertura en un formato compacto.",
    },
    image:
      "https://res.cloudinary.com/dxbwqifwn/image/upload/v1781887842/mini3070_xiiu8r.png",
    imageAlt: {
      en: "Klinmak Mini 3070 compact walk-behind floor scrubber",
      es: "Fregadora-secadora de suelos compacta de conductor a pie Klinmak Mini 3070",
    },
    detail: {
      lede: {
        en: "A unique compact scrubber-dryer with four brushes and a 70 cm cleaning path.",
        es: "Una fregadora-secadora de suelos compacta y única con cuatro cepillos y un ancho de trabajo de 70 cm.",
      },
      intro: {
        en: "The Mini 3070 floor scrubber-dryer — with 4 brushes, a 70 cm cleaning path and a 30-litre solution tank — is a unique model, ideal for continuous maintenance cleaning of areas up to 1,000 m².",
        es: "La fregadora-secadora de suelos Mini 3070, con 4 cepillos, un ancho de trabajo de 70 cm y un depósito de solución de 30 litros, es un modelo único, ideal para la limpieza de mantenimiento continua de áreas de hasta 1.000 m².",
      },
      highlights: [
        {
          en: "70 cm cleaning path (4 brushes)",
          es: "Ancho de trabajo de 70 cm (4 cepillos)",
        },
        { en: "30 L solution capacity", es: "Capacidad de solución de 30 L" },
        {
          en: "Ideal for areas up to 1,000 m²",
          es: "Ideal para áreas de hasta 1.000 m²",
        },
        {
          en: "Up to ~3 h runtime (Lithium Plus)",
          es: "Hasta ~3 h de autonomía (Lithium Plus)",
        },
      ],
      idealFor: [
        {
          en: "Offices & public buildings",
          es: "Oficinas y edificios públicos",
        },
        { en: "Healthcare", es: "Sanidad" },
        { en: "Transport", es: "Transporte" },
        { en: "Food service", es: "Servicio de alimentación" },
        { en: "Retail", es: "Comercio minorista" },
        { en: "Cleaning companies", es: "Empresas de limpieza" },
        { en: "Manufacturing", es: "Fabricación" },
        { en: "Warehouses", es: "Almacenes" },
        { en: "Hospitality", es: "Hostelería" },
      ],
      featureSections: [
        {
          title: {
            en: "High productivity, low operating costs",
            es: "Alta productividad, bajos costes de funcionamiento",
          },
          body: {
            en: "With a 30-litre tank and a 70 cm cleaning path (4×7\"), the Mini 3070 is ideal for areas up to 1,000 m². Light and easy to handle, it's designed for optimal cleaning in small supermarkets and commercial or public spaces — and for extended use, the traction (forward-drive) version is recommended. KlinMak's patented four-brush system drives four counter-rotating toothed brushes from a single motor, ensuring uniform cleaning with reduced energy consumption, while edge-to-edge cleaning works in both directions without leaving residue along the edges.",
            es: "Con un depósito de 30 litros y un ancho de trabajo de 70 cm (4×7\"), la Mini 3070 es ideal para áreas de hasta 1.000 m². Ligera y fácil de manejar, está diseñada para una limpieza óptima en supermercados de proximidad y espacios comerciales o públicos, y para un uso prolongado se recomienda la versión con tracción (marcha hacia delante). El sistema patentado de cuatro cepillos de KlinMak acciona cuatro cepillos dentados contrarrotantes desde un único motor, garantizando una limpieza uniforme con un consumo energético reducido, mientras que la limpieza de borde a borde funciona en ambos sentidos sin dejar residuos en los bordes.",
          },
          image:
            "https://res.cloudinary.com/dxbwqifwn/image/upload/v1781893649/mini3070-high-productivity_nfw3ig.png",
          imageAlt: {
            en: "Klinmak Mini 3070 high productivity detail",
            es: "Detalle de alta productividad de la Klinmak Mini 3070",
          },
        },
        {
          title: {
            en: "Cutting-edge & eco-friendly technology",
            es: "Tecnología de vanguardia y respetuosa con el medioambiente",
          },
          body: {
            en: "A lithium battery delivers extended runtime and quick charging, while the standard HEPA H13 filter captures fine particles and improves air quality — ideal for sensitive environments. The advanced electronic control board offers 2 levels of scrubbing power to adapt to different levels of dirt and 3 levels of suction power for optimised drying. Made from 80% recycled materials and ESG-compliant, it reduces water and detergent usage through optimised solution distribution, and its four-brush technology delivers superior cleaning versus traditional single-brush machines.",
            es: "Una batería de litio ofrece una autonomía prolongada y una carga rápida, mientras que el filtro HEPA H13 de serie captura las partículas finas y mejora la calidad del aire, ideal para entornos sensibles. La avanzada placa electrónica de control ofrece 2 niveles de potencia de fregado para adaptarse a distintos niveles de suciedad y 3 niveles de potencia de aspiración para un secado optimizado. Fabricada con un 80 % de materiales reciclados y conforme con los criterios ESG, reduce el uso de agua y detergente mediante una distribución optimizada de la solución, y su tecnología de cuatro cepillos ofrece una limpieza superior frente a las máquinas tradicionales de un solo cepillo.",
          },
          image:
            "https://res.cloudinary.com/dxbwqifwn/image/upload/v1781893594/mini3070-efficiency_s05lo0.png",
          imageAlt: {
            en: "Klinmak Mini 3070 cutting-edge technology detail",
            es: "Detalle de la tecnología de vanguardia de la Klinmak Mini 3070",
          },
        },
        {
          title: {
            en: "Ergonomics & ease of use",
            es: "Ergonomía y facilidad de uso",
          },
          body: {
            en: "An adjustable, foldable handle makes the machine easy to transport in cars, vans or commercial vehicles — perfect for cleaning contractors and facility managers. The patented quick-release brush system lets you change brushes in seconds with no tools required.",
            es: "Un mango plegable y regulable facilita el transporte de la máquina en coches, furgonetas o vehículos comerciales, perfecto para contratistas de limpieza y responsables de instalaciones. El sistema patentado de liberación rápida de cepillos permite cambiar los cepillos en segundos sin necesidad de herramientas.",
          },
          image:
            "https://res.cloudinary.com/dxbwqifwn/image/upload/v1781893595/mini3070-ergonomics_w61vhg.png",
          imageAlt: {
            en: "Klinmak Mini 3070 ergonomics detail",
            es: "Detalle de la ergonomía de la Klinmak Mini 3070",
          },
        },
      ],
      keyFeatures: [
        {
          icon: Brush,
          title: {
            en: "Patented 4-brush system",
            es: "Sistema patentado de 4 cepillos",
          },
          description: {
            en: "One motor drives four counter-rotating brushes for uniform cleaning and reduced energy consumption.",
            es: "Un motor acciona cuatro cepillos contrarrotantes para una limpieza uniforme y un consumo energético reducido.",
          },
        },
        {
          icon: BatteryCharging,
          title: {
            en: "Lithium battery power",
            es: "Alimentación por batería de litio",
          },
          description: {
            en: "Lithium battery for extended runtime — nearly 3 hours — with quick charging.",
            es: "Batería de litio para una autonomía prolongada, de casi 3 horas, con carga rápida.",
          },
        },
        {
          icon: Filter,
          title: {
            en: "HEPA H13 filter standard",
            es: "Filtro HEPA H13 de serie",
          },
          description: {
            en: "Captures fine particles and improves air quality — ideal for sensitive environments.",
            es: "Captura las partículas finas y mejora la calidad del aire, ideal para entornos sensibles.",
          },
        },
        {
          icon: Gauge,
          title: {
            en: "Adjustable power levels",
            es: "Niveles de potencia regulables",
          },
          description: {
            en: "2 levels of scrubbing power and 3 of suction power to match any job.",
            es: "2 niveles de potencia de fregado y 3 de potencia de aspiración para adaptarse a cualquier tarea.",
          },
        },
        {
          icon: ArrowLeftRight,
          title: {
            en: "Edge-to-edge cleaning",
            es: "Limpieza de borde a borde",
          },
          description: {
            en: "Cleans in both directions without leaving residue along the edges.",
            es: "Limpia en ambos sentidos sin dejar residuos en los bordes.",
          },
        },
        {
          icon: Wrench,
          title: {
            en: "Tool-free maintenance",
            es: "Mantenimiento sin herramientas",
          },
          description: {
            en: "Patented quick-release brush system — change brushes in seconds, no tools required.",
            es: "Sistema patentado de liberación rápida de cepillos: cambie los cepillos en segundos, sin necesidad de herramientas.",
          },
        },
      ],
      specVariants: ["3070 Plus", "3070 FT Plus"],
      specRows: [
        {
          label: { en: "Code", es: "Código" },
          values: ["F.480.0", "F.490.0"],
        },
        {
          label: {
            en: "Total installed power",
            es: "Potencia total instalada",
          },
          values: ["850 W", "950 W"],
        },
        {
          label: {
            en: "Tank capacity (sol. / rec.)",
            es: "Capacidad del depósito (sol. / rec.)",
          },
          values: ["30 / 30 L", "30 / 30 L"],
        },
        {
          label: {
            en: "Sound pressure level",
            es: "Nivel de presión sonora",
          },
          values: ["63.9 dB(A)", "63.9 dB(A)"],
        },
        {
          label: {
            en: "Work width / squeegee",
            es: "Ancho de trabajo / boquilla",
          },
          values: ["712 mm / 800 mm", "712 mm / 800 mm"],
        },
        {
          label: { en: "Brush speed", es: "Velocidad del cepillo" },
          values: ["220/290 rpm", "220/290 rpm"],
        },
        {
          label: {
            en: "Washing motor power",
            es: "Potencia del motor de lavado",
          },
          values: ["500 W", "500 W"],
        },
        {
          label: { en: "Weight on head", es: "Peso sobre el cabezal" },
          values: ["30 kg max", "30 kg max"],
        },
        {
          label: { en: "Solution flow rate", es: "Caudal de solución" },
          values: ["0–2 L/min", "0–2 L/min"],
        },
        {
          label: {
            en: "Hourly yield at 2 km/h",
            es: "Rendimiento por hora a 2 km/h",
          },
          values: ["1,400 m²/h", "1,400 m²/h"],
        },
        {
          label: {
            en: "Suction turbine motor power",
            es: "Potencia del motor de la turbina de aspiración",
          },
          values: ["350 W", "350 W"],
        },
        {
          label: {
            en: "Traction motor power",
            es: "Potencia del motor de tracción",
          },
          values: ["—", "100 W"],
        },
        {
          label: { en: "Maximum slope", es: "Pendiente máxima" },
          values: ["2%", "2%"],
        },
        {
          label: {
            en: "Power supply – voltage",
            es: "Alimentación – voltaje",
          },
          values: ["DC – 54.6V", "DC – 54.6V"],
        },
        {
          label: { en: "Lithium battery", es: "Batería de litio" },
          values: ["19.2 Ah", "19.2 Ah"],
        },
        {
          label: { en: "Battery charger", es: "Cargador de batería" },
          values: ["5 A", "5 A"],
        },
        {
          label: {
            en: "Autonomy / charging time",
            es: "Autonomía / tiempo de carga",
          },
          values: ["2.5h / 4h", "2.5h / 4h"],
        },
        {
          label: { en: "Dimensions (closed)", es: "Dimensiones (cerrada)" },
          values: ["950×550×1,100 (720) mm", "950×550×1,100 (720) mm"],
        },
        {
          label: {
            en: "Packaging dimensions",
            es: "Dimensiones del embalaje",
          },
          values: ["975×804×1,065 mm", "975×804×1,065 mm"],
        },
        {
          label: {
            en: "Net weight / with packaging",
            es: "Peso neto / con embalaje",
          },
          values: ["74 / 88 kg", "79 / 93 kg"],
        },
      ],
      sustainability: [
        {
          en: "Made from 80% recycled materials, ESG-compliant.",
          es: "Fabricada con un 80 % de materiales reciclados, conforme con los criterios ESG.",
        },
        {
          en: "Reduces water and detergent usage through optimised solution distribution, while four-brush technology cuts energy consumption versus single-brush machines.",
          es: "Reduce el uso de agua y detergente mediante una distribución optimizada de la solución, mientras que la tecnología de cuatro cepillos reduce el consumo energético frente a las máquinas de un solo cepillo.",
        },
      ],
    },
  },
];

export const getKlinmakProducts = (locale: string) =>
  klinmakProducts.map((p) => ({ ...localize(p, locale), hasDetail: !!p.detail }));

export const getKlinmakProduct = (slug: string, locale: string) => {
  const raw = klinmakProducts.find((p) => p.slug === slug);
  return raw ? { ...localize(raw, locale), hasDetail: !!raw.detail } : undefined;
};
