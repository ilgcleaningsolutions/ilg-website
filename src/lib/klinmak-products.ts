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
  /** Full content for the product detail page (omit until built) */
  detail?: KlinmakDetail;
}

export const klinmakProducts: KlinmakProduct[] = [
  // ====================  JOKER RANGE  ====================
  {
    slug: "joker-2040",
    group: "joker",
    category: {
      en: "Walk-behind floor scrubber",
      es: "Fregadora-secadora de suelos de conductor a pie",
    },
    name: "Joker 2040",
    tagline: {
      en: "Compact 40 cm cleaning path — agile and precise in tight, medium-sized spaces.",
      es: "Ancho de trabajo compacto de 40 cm: ágil y preciso en espacios reducidos de tamaño medio.",
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
        { en: "40 cm working track", es: "Ancho de trabajo de 40 cm" },
        { en: "20 L solution capacity", es: "Capacidad de solución de 20 L" },
        {
          en: "Ideal for environments up to 500 m²",
          es: "Ideal para entornos de hasta 500 m²",
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
            en: "40 cm working track",
            es: "Ancho de trabajo de 40 cm",
          },
          description: {
            en: "Ideal for environments up to 500 square metres with 20 litres solution capacity.",
            es: "Ideal para entornos de hasta 500 metros cuadrados con una capacidad de solución de 20 litros.",
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
      specVariants: ["2040-e", "2040", "2040 Plus"],
      specRows: [
        {
          label: { en: "Code", es: "Código" },
          values: ["F.502.0", "F.500.0", "F.501.0"],
        },
        {
          label: {
            en: "Total installed power",
            es: "Potencia total instalada",
          },
          values: ["850 W", "850 W", "850 W"],
        },
        {
          label: {
            en: "Tank capacity (sol. / rec.)",
            es: "Capacidad del depósito (sol. / rec.)",
          },
          values: ["20 / 22 L", "20 / 22 L", "20 / 22 L"],
        },
        {
          label: {
            en: "Sound pressure level",
            es: "Nivel de presión sonora",
          },
          values: ["63.9 dB(A)", "63.9 dB(A)", "63.9 dB(A)"],
        },
        {
          label: {
            en: "Work width / squeegee",
            es: "Ancho de trabajo / boquilla",
          },
          values: ["406 mm / 490 mm", "406 mm / 490 mm", "406 mm / 490 mm"],
        },
        {
          label: { en: "Brush speed", es: "Velocidad del cepillo" },
          values: ["220/290 rpm", "220/290 rpm", "220/290 rpm"],
        },
        {
          label: {
            en: "Washing motor power",
            es: "Potencia del motor de lavado",
          },
          values: ["500 W", "500 W", "500 W"],
        },
        {
          label: { en: "Weight on head", es: "Peso sobre el cabezal" },
          values: ["30 kg max", "30 kg max", "30 kg max"],
        },
        {
          label: { en: "Solution flow rate", es: "Caudal de solución" },
          values: ["0–2 L/min", "0–2 L/min", "0–2 L/min"],
        },
        {
          label: {
            en: "Hourly yield at 2 km/h",
            es: "Rendimiento por hora a 2 km/h",
          },
          values: ["800 m²/h", "800 m²/h", "800 m²/h"],
        },
        {
          label: {
            en: "Suction turbine motor power",
            es: "Potencia del motor de la turbina de aspiración",
          },
          values: ["350 W", "350 W", "350 W"],
        },
        {
          label: {
            en: "Power supply – voltage",
            es: "Alimentación – voltaje",
          },
          values: ["AC – 230V 50Hz", "DC – 54.6V", "DC – 54.6V"],
        },
        {
          label: { en: "Lithium battery", es: "Batería de litio" },
          values: ["—", "13 Ah", "19.2 Ah"],
        },
        {
          label: { en: "Battery charger", es: "Cargador de batería" },
          values: ["—", "5 A", "5 A"],
        },
        {
          label: {
            en: "Autonomy / charging time",
            es: "Autonomía / tiempo de carga",
          },
          values: ["—", "1.5h / 2.5h", "3h / 4h"],
        },
        {
          label: { en: "Dimensions (closed)", es: "Dimensiones (cerrada)" },
          values: [
            "800×490×1,100 mm",
            "800×490×1,100 mm",
            "800×490×1,100 mm",
          ],
        },
        {
          label: {
            en: "Packaging dimensions",
            es: "Dimensiones del embalaje",
          },
          values: [
            "975×625×1,065 mm",
            "975×625×1,065 mm",
            "975×625×1,065 mm",
          ],
        },
        {
          label: {
            en: "Net weight / with packaging",
            es: "Peso neto / con embalaje",
          },
          values: ["57 / 69 kg", "57 / 69 kg", "60 / 72 kg"],
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
    group: "joker",
    category: {
      en: "Walk-behind floor scrubber",
      es: "Fregadora-secadora de suelos de conductor a pie",
    },
    name: "Joker 5070",
    tagline: {
      en: "Wide 70 cm cleaning path — fast coverage across larger professional areas.",
      es: "Ancho de trabajo amplio de 70 cm: cobertura rápida en áreas profesionales de mayor tamaño.",
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
        { en: "70 cm cleaning track", es: "Ancho de trabajo de 70 cm" },
        {
          en: "~50 L solution capacity",
          es: "Capacidad de solución de ~50 L",
        },
        {
          en: "Ideal for 1,000–1,500 m² environments",
          es: "Ideal para entornos de 1.000 a 1.500 m²",
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
      specVariants: [
        "5070-e",
        "5070",
        "5070 Plus",
        "5070 FT",
        "5070 FT Plus",
      ],
      specRows: [
        {
          label: { en: "Code", es: "Código" },
          values: ["F.532.0", "F.530.0", "F.531.0", "F.540.0", "F.541.0"],
        },
        {
          label: {
            en: "Total installed power",
            es: "Potencia total instalada",
          },
          values: ["850 W", "850 W", "850 W", "950 W", "950 W"],
        },
        {
          label: {
            en: "Tank capacity (sol. / rec.)",
            es: "Capacidad del depósito (sol. / rec.)",
          },
          values: [
            "47 / 50 L",
            "47 / 50 L",
            "47 / 50 L",
            "47 / 50 L",
            "47 / 50 L",
          ],
        },
        {
          label: {
            en: "Sound pressure level",
            es: "Nivel de presión sonora",
          },
          values: [
            "63.9 dB(A)",
            "63.9 dB(A)",
            "63.9 dB(A)",
            "63.9 dB(A)",
            "63.9 dB(A)",
          ],
        },
        {
          label: {
            en: "Work width / squeegee",
            es: "Ancho de trabajo / boquilla",
          },
          values: [
            "712 mm / 800 mm",
            "712 mm / 800 mm",
            "712 mm / 800 mm",
            "712 mm / 800 mm",
            "712 mm / 800 mm",
          ],
        },
        {
          label: { en: "Brush speed", es: "Velocidad del cepillo" },
          values: [
            "220/290 rpm",
            "220/290 rpm",
            "220/290 rpm",
            "220/290 rpm",
            "220/290 rpm",
          ],
        },
        {
          label: {
            en: "Washing motor power",
            es: "Potencia del motor de lavado",
          },
          values: ["500 W", "500 W", "500 W", "500 W", "500 W"],
        },
        {
          label: { en: "Weight on head", es: "Peso sobre el cabezal" },
          values: [
            "30 kg max",
            "30 kg max",
            "30 kg max",
            "30 kg max",
            "30 kg max",
          ],
        },
        {
          label: { en: "Solution flow rate", es: "Caudal de solución" },
          values: [
            "0–2 L/min",
            "0–2 L/min",
            "0–2 L/min",
            "0–2 L/min",
            "0–2 L/min",
          ],
        },
        {
          label: {
            en: "Hourly yield at 2 km/h",
            es: "Rendimiento por hora a 2 km/h",
          },
          values: [
            "1,400 m²/h",
            "1,400 m²/h",
            "1,400 m²/h",
            "1,400 m²/h",
            "1,400 m²/h",
          ],
        },
        {
          label: {
            en: "Suction turbine motor power",
            es: "Potencia del motor de la turbina de aspiración",
          },
          values: ["350 W", "350 W", "350 W", "350 W", "350 W"],
        },
        {
          label: {
            en: "Traction motor power",
            es: "Potencia del motor de tracción",
          },
          values: ["—", "—", "—", "100 W", "100 W"],
        },
        {
          label: { en: "Maximum slope", es: "Pendiente máxima" },
          values: ["—", "—", "—", "2%", "2%"],
        },
        {
          label: {
            en: "Power supply – voltage",
            es: "Alimentación – voltaje",
          },
          values: [
            "AC – 230V 50Hz",
            "DC – 54.6V",
            "DC – 54.6V",
            "DC – 54.6V",
            "DC – 54.6V",
          ],
        },
        {
          label: { en: "Lithium battery", es: "Batería de litio" },
          values: ["—", "13 Ah", "19.2 Ah", "13 Ah", "19.2 Ah"],
        },
        {
          label: { en: "Battery charger", es: "Cargador de batería" },
          values: ["—", "5 A", "5 A", "5 A", "5 A"],
        },
        {
          label: {
            en: "Autonomy / charging time",
            es: "Autonomía / tiempo de carga",
          },
          values: ["—", "1.5h / 2.5h", "3h / 4h", "1.5h / 2.5h", "3h / 4h"],
        },
        {
          label: { en: "Dimensions (closed)", es: "Dimensiones (cerrada)" },
          values: [
            "900×750×1,100 mm",
            "900×750×1,100 mm",
            "900×750×1,100 mm",
            "900×750×1,100 mm",
            "900×750×1,100 mm",
          ],
        },
        {
          label: {
            en: "Packaging dimensions",
            es: "Dimensiones del embalaje",
          },
          values: [
            "975×804×1,065 mm",
            "975×804×1,065 mm",
            "975×804×1,065 mm",
            "975×804×1,065 mm",
            "975×804×1,065 mm",
          ],
        },
        {
          label: {
            en: "Net weight / with packaging",
            es: "Peso neto / con embalaje",
          },
          values: [
            "70 / 85 kg",
            "70 / 85 kg",
            "73 / 88 kg",
            "75 / 90 kg",
            "78 / 93 kg",
          ],
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
    group: "mini",
    category: {
      en: "Compact walk-behind floor scrubber",
      es: "Fregadora-secadora de suelos compacta de conductor a pie",
    },
    name: "Mini 1240",
    tagline: {
      en: "Ultra-compact 12 L tank, 40 cm path — built for the narrowest, hardest-to-reach spaces.",
      es: "Depósito ultracompacto de 12 L y ancho de trabajo de 40 cm: diseñada para los espacios más estrechos y de difícil acceso.",
    },
    image:
      "https://res.cloudinary.com/dxbwqifwn/image/upload/v1781887841/mini-1240_mn96sw.png",
    imageAlt: {
      en: "Klinmak Mini 1240 compact walk-behind floor scrubber",
      es: "Fregadora-secadora de suelos compacta de conductor a pie Klinmak Mini 1240",
    },
    detail: {
      lede: {
        en: "The revolution of cleaning small spaces.",
        es: "La revolución de la limpieza de espacios pequeños.",
      },
      intro: {
        en: "Discover the future of professional cleaning with the Mini 1240: efficiency, innovation and sustainability in one solution. Weighing just 34 kg, with a 40 cm working track and 12 litres of solution, it's the ideal floor scrubber-dryer for environments of up to 500 square metres.",
        es: "Descubra el futuro de la limpieza profesional con la Mini 1240: eficiencia, innovación y sostenibilidad en una única solución. Con un peso de solo 34 kg, un ancho de trabajo de 40 cm y 12 litros de solución, es la fregadora-secadora de suelos ideal para entornos de hasta 500 metros cuadrados.",
      },
      highlights: [
        { en: "40 cm working track", es: "Ancho de trabajo de 40 cm" },
        { en: "12 L solution capacity", es: "Capacidad de solución de 12 L" },
        { en: "Lightweight — only 34 kg", es: "Ligera: solo 34 kg" },
        {
          en: "Ideal for environments up to 500 m²",
          es: "Ideal para entornos de hasta 500 m²",
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
            en: "Compact design & high performance",
            es: "Diseño compacto y alto rendimiento",
          },
          body: {
            en: "A 12-litre tank and 40 cm (2×8\") cleaning track make the Mini 1240 ideal for restricted spaces. Handy and lightweight, it's designed for optimal cleaning in shops, restaurants, offices, laboratories and commercial environments.",
            es: "Un depósito de 12 litros y un ancho de trabajo de 40 cm (2×8\") hacen que la Mini 1240 sea ideal para espacios reducidos. Práctica y ligera, está diseñada para una limpieza óptima en tiendas, restaurantes, oficinas, laboratorios y entornos comerciales.",
          },
          image:
            "https://res.cloudinary.com/dxbwqifwn/image/upload/v1781893030/mini1240-compact-design_jniviy.png",
          imageAlt: {
            en: "Klinmak Mini 1240 compact design detail",
            es: "Detalle del diseño compacto de la Klinmak Mini 1240",
          },
        },
        {
          title: {
            en: "Efficiency & innovation",
            es: "Eficiencia e innovación",
          },
          body: {
            en: "The patented KlinMak dual brush uses a single motor to drive two counter-rotating toothed brushes, ensuring uniform cleaning while reducing energy consumption. Flush-with-the-wall technology lets the Mini 1240 clean in both directions without leaving residue along the edges.",
            es: "El cepillo doble patentado KlinMak utiliza un único motor para accionar dos cepillos dentados contrarrotantes, garantizando una limpieza uniforme al tiempo que reduce el consumo energético. La tecnología de limpieza al ras de la pared permite a la Mini 1240 limpiar en ambos sentidos sin dejar residuos en los bordes.",
          },
          image:
            "https://res.cloudinary.com/dxbwqifwn/image/upload/v1781893031/mini1240-efficiency_ynpta8.png",
          imageAlt: {
            en: "Klinmak Mini 1240 efficiency and innovation detail",
            es: "Detalle de eficiencia e innovación de la Klinmak Mini 1240",
          },
        },
        {
          title: {
            en: "Advanced technology",
            es: "Tecnología avanzada",
          },
          body: {
            en: "A lithium battery delivers extended runtime and fast recharge times, while the standard HEPA H13 filter retains fine particles and improves air quality — ideal for sensitive environments. An advanced electronic board offers 2 levels of washing power to adapt to different types of dirt and 3 levels of suction power to optimise drying efficiency.",
            es: "Una batería de litio ofrece una autonomía prolongada y tiempos de recarga rápidos, mientras que el filtro HEPA H13 de serie retiene las partículas finas y mejora la calidad del aire, ideal para entornos sensibles. Una placa electrónica avanzada ofrece 2 niveles de potencia de lavado para adaptarse a distintos tipos de suciedad y 3 niveles de potencia de aspiración para optimizar la eficiencia del secado.",
          },
          image:
            "https://res.cloudinary.com/dxbwqifwn/image/upload/v1781893030/mini1240-advance-tech_hbukce.png",
          imageAlt: {
            en: "Klinmak Mini 1240 advanced technology detail",
            es: "Detalle de la tecnología avanzada de la Klinmak Mini 1240",
          },
        },
        {
          title: {
            en: "Ergonomics & reduced environmental impact",
            es: "Ergonomía y menor impacto ambiental",
          },
          body: {
            en: "A folding handle makes the machine easy to transport in cars, vans and commercial vehicles — ideal for cleaning and facility-management companies. The patented quick-release brush system allows tool-free replacement in seconds. Built with 80% recycled materials and compliant with ESG standards, it reduces water and detergent consumption through optimised solution distribution, and its dual-brush technology delivers superior washing quality compared to traditional single-brush machines.",
            es: "Un mango plegable facilita el transporte de la máquina en coches, furgonetas y vehículos comerciales, ideal para empresas de limpieza y de gestión de instalaciones. El sistema patentado de liberación rápida de cepillos permite su sustitución sin herramientas en segundos. Fabricada con un 80 % de materiales reciclados y conforme con las normas ESG, reduce el consumo de agua y detergente mediante una distribución optimizada de la solución, y su tecnología de doble cepillo ofrece una calidad de lavado superior en comparación con las máquinas tradicionales de un solo cepillo.",
          },
          image:
            "https://res.cloudinary.com/dxbwqifwn/image/upload/v1781893032/mini1240-ergonomics_nnter4.png",
          imageAlt: {
            en: "Klinmak Mini 1240 ergonomics detail",
            es: "Detalle de la ergonomía de la Klinmak Mini 1240",
          },
        },
      ],
      keyFeatures: [
        {
          icon: Brush,
          title: {
            en: "Patented dual-brush system",
            es: "Sistema patentado de doble cepillo",
          },
          description: {
            en: "A single motor drives two counter-rotating brushes for uniform cleaning and lower energy use.",
            es: "Un único motor acciona dos cepillos contrarrotantes para una limpieza uniforme y un menor consumo de energía.",
          },
        },
        {
          icon: Feather,
          title: {
            en: "Lightweight & compact",
            es: "Ligera y compacta",
          },
          description: {
            en: "Just 34 kg with a folding handle — easy to carry in cars, vans and commercial vehicles.",
            es: "Solo 34 kg con un mango plegable: fácil de transportar en coches, furgonetas y vehículos comerciales.",
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
      specVariants: ["1240", "1240 Plus"],
      specRows: [
        {
          label: { en: "Code", es: "Código" },
          values: ["F.400.0", "F.402.0"],
        },
        {
          label: {
            en: "Total installed power",
            es: "Potencia total instalada",
          },
          values: ["450 W", "450 W"],
        },
        {
          label: {
            en: "Tank capacity (sol. / rec.)",
            es: "Capacidad del depósito (sol. / rec.)",
          },
          values: ["12 / 14 L", "12 / 14 L"],
        },
        {
          label: {
            en: "Sound pressure level",
            es: "Nivel de presión sonora",
          },
          values: ["66.7 dB(A)", "66.7 dB(A)"],
        },
        {
          label: {
            en: "Work width / squeegee",
            es: "Ancho de trabajo / boquilla",
          },
          values: ["406 mm / 490 mm", "406 mm / 490 mm"],
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
          values: ["250 W", "250 W"],
        },
        {
          label: { en: "Weight on head", es: "Peso sobre el cabezal" },
          values: ["23 kg max", "23 kg max"],
        },
        {
          label: { en: "Solution flow rate", es: "Caudal de solución" },
          values: ["0–1 L/min", "0–1 L/min"],
        },
        {
          label: {
            en: "Hourly yield at 2 km/h",
            es: "Rendimiento por hora a 2 km/h",
          },
          values: ["800 m²/h", "800 m²/h"],
        },
        {
          label: {
            en: "Suction turbine motor power",
            es: "Potencia del motor de la turbina de aspiración",
          },
          values: ["200 W", "200 W"],
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
          values: ["7.8 Ah", "19.2 Ah"],
        },
        {
          label: { en: "Battery charger", es: "Cargador de batería" },
          values: ["3 A", "5 A"],
        },
        {
          label: {
            en: "Autonomy / charging time",
            es: "Autonomía / tiempo de carga",
          },
          values: ["1h / 2.5h", "2.5h / 4h"],
        },
        {
          label: { en: "Dimensions (closed)", es: "Dimensiones (cerrada)" },
          values: ["750×490×1,070 (720) mm", "750×490×1,070 (720) mm"],
        },
        {
          label: {
            en: "Packaging dimensions",
            es: "Dimensiones del embalaje",
          },
          values: ["755×530×820 mm", "755×530×820 mm"],
        },
        {
          label: {
            en: "Net weight / with packaging",
            es: "Peso neto / con embalaje",
          },
          values: ["34–45 kg", "36–47 kg"],
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
    group: "mini",
    category: {
      en: "Compact walk-behind floor scrubber",
      es: "Fregadora-secadora de suelos compacta de conductor a pie",
    },
    name: "Mini 3050",
    tagline: {
      en: "30 L tank with a 50 cm path — versatile cleaning for confined areas.",
      es: "Depósito de 30 L con un ancho de trabajo de 50 cm: limpieza versátil para áreas reducidas.",
    },
    image:
      "https://res.cloudinary.com/dxbwqifwn/image/upload/v1781887842/mini-3050_qn4tsw.png",
    imageAlt: {
      en: "Klinmak Mini 3050 compact walk-behind floor scrubber",
      es: "Fregadora-secadora de suelos compacta de conductor a pie Klinmak Mini 3050",
    },
    detail: {
      lede: {
        en: "The new compact, handy scrubber-dryer — highly innovative for everyday work.",
        es: "La nueva fregadora-secadora de suelos compacta y práctica: altamente innovadora para el trabajo diario.",
      },
      intro: {
        en: "The Mini 3050 brings productivity, innovation and sustainability into a single solution. Lightweight, compact and easy to handle, with a 50 cm work track and 30 litres of solution, it's the ideal floor scrubber-dryer for environments of up to 750 square metres.",
        es: "La Mini 3050 reúne productividad, innovación y sostenibilidad en una única solución. Ligera, compacta y fácil de manejar, con un ancho de trabajo de 50 cm y 30 litros de solución, es la fregadora-secadora de suelos ideal para entornos de hasta 750 metros cuadrados.",
      },
      highlights: [
        { en: "50 cm working track", es: "Ancho de trabajo de 50 cm" },
        { en: "30 L solution capacity", es: "Capacidad de solución de 30 L" },
        {
          en: "Ideal for environments up to 750 m²",
          es: "Ideal para entornos de hasta 750 m²",
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
            en: "Compact design & high performance",
            es: "Diseño compacto y alto rendimiento",
          },
          body: {
            en: "A 30-litre tank and 50 cm (2×10\") wash track make the Mini 3050 ideal for spaces between 500 and 1,000 square metres. Handy and lightweight, it's designed for optimal cleaning in small supermarkets, hotels, restaurants, laboratories and commercial environments. For prolonged work, the traction (forward-gear) version is recommended.",
            es: "Un depósito de 30 litros y un ancho de trabajo de 50 cm (2×10\") hacen que la Mini 3050 sea ideal para espacios de entre 500 y 1.000 metros cuadrados. Práctica y ligera, está diseñada para una limpieza óptima en supermercados de proximidad, hoteles, restaurantes, laboratorios y entornos comerciales. Para trabajos prolongados, se recomienda la versión con tracción (marcha hacia delante).",
          },
          image:
            "https://res.cloudinary.com/dxbwqifwn/image/upload/v1781893147/mini-3050-compact_akai9k.png",
          imageAlt: {
            en: "Klinmak Mini 3050 compact design detail",
            es: "Detalle del diseño compacto de la Klinmak Mini 3050",
          },
        },
        {
          title: {
            en: "Efficiency & innovation",
            es: "Eficiencia e innovación",
          },
          body: {
            en: "The patented KlinMak dual brush uses a single motor to drive two counter-rotating toothed brushes, ensuring uniform cleaning while reducing energy consumption. Flush-to-wall cleaning lets the Mini 3050 clean in both directions without leaving residue along the edges.",
            es: "El cepillo doble patentado KlinMak utiliza un único motor para accionar dos cepillos dentados contrarrotantes, garantizando una limpieza uniforme al tiempo que reduce el consumo energético. La limpieza al ras de la pared permite a la Mini 3050 limpiar en ambos sentidos sin dejar residuos en los bordes.",
          },
          image:
            "https://res.cloudinary.com/dxbwqifwn/image/upload/v1781893148/mini-3050-efficiency_czgszp.png",
          imageAlt: {
            en: "Klinmak Mini 3050 efficiency and innovation detail",
            es: "Detalle de eficiencia e innovación de la Klinmak Mini 3050",
          },
        },
        {
          title: {
            en: "Easy to use & multifunctional",
            es: "Fácil de usar y multifuncional",
          },
          body: {
            en: "A standard lithium battery delivers extended runtime and fast recharge times, while the standard HEPA H13 filter retains fine particles and improves air quality — ideal for sensitive environments. An advanced electronic board offers 2 levels of washing power to adapt to different types of dirt and 3 levels of suction power to optimise drying efficiency.",
            es: "Una batería de litio de serie ofrece una autonomía prolongada y tiempos de recarga rápidos, mientras que el filtro HEPA H13 de serie retiene las partículas finas y mejora la calidad del aire, ideal para entornos sensibles. Una placa electrónica avanzada ofrece 2 niveles de potencia de lavado para adaptarse a distintos tipos de suciedad y 3 niveles de potencia de aspiración para optimizar la eficiencia del secado.",
          },
          image:
            "https://res.cloudinary.com/dxbwqifwn/image/upload/v1781893148/mini-3050-easy-to-use_qrzdcp.png",
          imageAlt: {
            en: "Klinmak Mini 3050 ease of use detail",
            es: "Detalle de facilidad de uso de la Klinmak Mini 3050",
          },
        },
        {
          title: {
            en: "Ergonomics & sustainability",
            es: "Ergonomía y sostenibilidad",
          },
          body: {
            en: "A height-adjustable, foldable handle makes the machine easy to transport in cars, vans and commercial vehicles — ideal for cleaning and facility-management companies. The patented quick-release brush system allows tool-free replacement in seconds. Built with 80% recycled materials and compliant with ESG standards, it reduces water and detergent consumption through optimised solution distribution, and its dual-brush technology delivers superior washing quality compared to traditional single-brush machines.",
            es: "Un mango plegable y regulable en altura facilita el transporte de la máquina en coches, furgonetas y vehículos comerciales, ideal para empresas de limpieza y de gestión de instalaciones. El sistema patentado de liberación rápida de cepillos permite su sustitución sin herramientas en segundos. Fabricada con un 80 % de materiales reciclados y conforme con las normas ESG, reduce el consumo de agua y detergente mediante una distribución optimizada de la solución, y su tecnología de doble cepillo ofrece una calidad de lavado superior en comparación con las máquinas tradicionales de un solo cepillo.",
          },
          image:
            "https://res.cloudinary.com/dxbwqifwn/image/upload/v1781893148/mini-3050-efficiency_czgszp.png",
          imageAlt: {
            en: "Klinmak Mini 3050 ergonomics and sustainability detail",
            es: "Detalle de ergonomía y sostenibilidad de la Klinmak Mini 3050",
          },
        },
      ],
      keyFeatures: [
        {
          icon: Brush,
          title: {
            en: "Patented dual-brush system",
            es: "Sistema patentado de doble cepillo",
          },
          description: {
            en: "A single motor drives two counter-rotating brushes for uniform cleaning and lower energy use.",
            es: "Un único motor acciona dos cepillos contrarrotantes para una limpieza uniforme y un menor consumo de energía.",
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
      specVariants: ["3050", "3050 Plus", "3050 FT", "3050 FT Plus"],
      specRows: [
        {
          label: { en: "Code", es: "Código" },
          values: ["F.450.0", "F.451.0", "F.460.0", "F.461.0"],
        },
        {
          label: {
            en: "Total installed power",
            es: "Potencia total instalada",
          },
          values: ["850 W", "850 W", "950 W", "950 W"],
        },
        {
          label: {
            en: "Tank capacity (sol. / rec.)",
            es: "Capacidad del depósito (sol. / rec.)",
          },
          values: ["30 / 30 L", "30 / 30 L", "30 / 30 L", "30 / 30 L"],
        },
        {
          label: {
            en: "Sound pressure level",
            es: "Nivel de presión sonora",
          },
          values: ["63.9 dB(A)", "63.9 dB(A)", "63.9 dB(A)", "63.9 dB(A)"],
        },
        {
          label: {
            en: "Work width / squeegee",
            es: "Ancho de trabajo / boquilla",
          },
          values: [
            "508 mm / 580 mm",
            "508 mm / 580 mm",
            "508 mm / 580 mm",
            "508 mm / 580 mm",
          ],
        },
        {
          label: { en: "Brush speed", es: "Velocidad del cepillo" },
          values: [
            "220/290 rpm",
            "220/290 rpm",
            "220/290 rpm",
            "220/290 rpm",
          ],
        },
        {
          label: {
            en: "Washing motor power",
            es: "Potencia del motor de lavado",
          },
          values: ["500 W", "500 W", "500 W", "500 W"],
        },
        {
          label: { en: "Weight on head", es: "Peso sobre el cabezal" },
          values: ["30 kg max", "30 kg max", "30 kg max", "30 kg max"],
        },
        {
          label: { en: "Solution flow rate", es: "Caudal de solución" },
          values: ["0–2 L/min", "0–2 L/min", "0–2 L/min", "0–2 L/min"],
        },
        {
          label: {
            en: "Hourly yield at 2 km/h",
            es: "Rendimiento por hora a 2 km/h",
          },
          values: ["1,000 m²/h", "1,000 m²/h", "1,000 m²/h", "1,000 m²/h"],
        },
        {
          label: {
            en: "Suction turbine motor power",
            es: "Potencia del motor de la turbina de aspiración",
          },
          values: ["350 W", "350 W", "350 W", "350 W"],
        },
        {
          label: {
            en: "Traction motor power",
            es: "Potencia del motor de tracción",
          },
          values: ["—", "—", "100 W", "100 W"],
        },
        {
          label: { en: "Maximum slope", es: "Pendiente máxima" },
          values: ["2%", "2%", "2%", "2%"],
        },
        {
          label: {
            en: "Power supply – voltage",
            es: "Alimentación – voltaje",
          },
          values: ["DC – 54.6V", "DC – 54.6V", "DC – 54.6V", "DC – 54.6V"],
        },
        {
          label: { en: "Lithium battery", es: "Batería de litio" },
          values: ["7.8 Ah", "19.2 Ah", "7.8 Ah", "19.2 Ah"],
        },
        {
          label: { en: "Battery charger", es: "Cargador de batería" },
          values: ["3 A", "5 A", "3 A", "5 A"],
        },
        {
          label: {
            en: "Autonomy / charging time",
            es: "Autonomía / tiempo de carga",
          },
          values: ["1h / 2.5h", "2.5h / 4h", "1h / 2.5h", "2.5h / 4h"],
        },
        {
          label: { en: "Dimensions (closed)", es: "Dimensiones (cerrada)" },
          values: [
            "950×550×1,100 (720) mm",
            "950×550×1,100 (720) mm",
            "950×550×1,100 (720) mm",
            "950×550×1,100 (720) mm",
          ],
        },
        {
          label: {
            en: "Packaging dimensions",
            es: "Dimensiones del embalaje",
          },
          values: [
            "975×625×1,065 mm",
            "975×625×1,065 mm",
            "975×625×1,065 mm",
            "975×625×1,065 mm",
          ],
        },
        {
          label: {
            en: "Net weight / with packaging",
            es: "Peso neto / con embalaje",
          },
          values: ["72 / 86 kg", "74 / 88 kg", "77 / 91 kg", "79 / 93 kg"],
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
