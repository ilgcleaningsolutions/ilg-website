import {
  Battery,
  Zap,
  Gauge,
  Cloud,
  Thermometer,
  Droplets,
  type LucideIcon,
} from "lucide-react";
import { type Localized, localize } from "@/lib/product-i18n";

export interface ProductSpec {
  icon: LucideIcon;
  label: Localized;
  value: string | Localized;
}

export interface SpecRow {
  label: Localized;
  unit?: string;
  value: string | Localized;
  note?: Localized;
}

export interface SpecGroup {
  title: Localized;
  rows: SpecRow[];
}

/** Interactive diagram hotspot — positioned as % of the image bounding box */
export interface ProductPart {
  /** Horizontal position, 0–100 (% from left) */
  x: number;
  /** Vertical position, 0–100 (% from top) */
  y: number;
  /** Short part name */
  label: Localized;
  /** Optional secondary line */
  description?: Localized;
}

export type TecnovapGroup = "products" | "systems" | "belts";

export interface TecnovapProduct {
  slug: string;
  /** Section grouping on the brand page */
  group: TecnovapGroup;
  /** Eyebrow above the title (e.g. "Commercial Steam Cleaner") */
  category: Localized;
  /** Product/model name (e.g. "EVO 304 24/7") */
  name: string;
  /** Short one-line tagline shown in the carousel */
  tagline: Localized;
  /** Power / spec line below the name */
  spec: Localized;
  /** Long description shown on the detail page */
  description: Localized;
  /** Bullet-style feature list */
  features: Localized[];
  /** Product cutout image */
  image: string;
  imageAlt?: Localized;
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
    group: "products",
    category: { en: "Commercial Steam Cleaner", es: "Limpiador de vapor comercial" },
    name: "EVO 304 24/7",
    tagline: {
      en: "Reliable, compact, and always ready for demanding spaces.",
      es: "Confiable, compacto y siempre listo para espacios exigentes.",
    },
    spec: { en: "2.45 kW", es: "2.45 kW" },
    description: {
      en: "Reliable steam cleaning performance for demanding spaces, combining extended runtime, durable construction, and exceptional versatility to handle deep cleaning tasks with confidence, consistency, and long-lasting results. Steam cleaner designed for professional use with stainless-steel body and boiler.",
      es: "Rendimiento confiable de limpieza de vapor para espacios exigentes, que combina un tiempo de funcionamiento prolongado, una construcción duradera y una versatilidad excepcional para realizar tareas de limpieza profunda con confianza, constancia y resultados duraderos. Limpiador de vapor diseñado para uso profesional con cuerpo y caldera de acero inoxidable.",
    },
    features: [
      {
        en: "Able to deliver dry saturated steam at 174°C.",
        es: "Capaz de suministrar vapor seco saturado a 174°C.",
      },
      {
        en: "Ergonomic structure, fully electric operation and compact size for use in any environment.",
        es: "Estructura ergonómica, funcionamiento totalmente eléctrico y tamaño compacto para su uso en cualquier entorno.",
      },
      {
        en: "All steam cleaner functions can be managed on the electronic control panel.",
        es: "Todas las funciones del limpiador de vapor se pueden gestionar desde el panel de control electrónico.",
      },
      {
        en: "Equipped with cable holder and anti-scratch 360° swivel front wheels.",
        es: "Equipado con portacables y ruedas delanteras giratorias 360° antirrayaduras.",
      },
    ],
    image:
      "https://res.cloudinary.com/dxbwqifwn/image/upload/v1780510024/evo-24-7_azjoy4.png",
    imageAlt: {
      en: "Tecnovap EVO 304 24/7 commercial steam cleaner",
      es: "Limpiador de vapor comercial Tecnovap EVO 304 24/7",
    },
    mainFeatures: [
      {
        icon: Battery,
        label: { en: "Boiler Material", es: "Material de la caldera" },
        value: { en: "Stainless-steel AISI 304", es: "Acero inoxidable AISI 304" },
      },
      {
        icon: Zap,
        label: { en: "Power Supply", es: "Alimentación" },
        value: "1~ 230V 50/60Hz",
      },
      {
        icon: Gauge,
        label: { en: "Operating Pressure", es: "Presión de trabajo" },
        value: "8 bar",
      },
      {
        icon: Cloud,
        label: { en: "Steam Production", es: "Producción de vapor" },
        value: "64 g/min · 3.8 kg/h",
      },
      {
        icon: Thermometer,
        label: { en: "Steam Temperature", es: "Temperatura del vapor" },
        value: "174°C",
      },
    ],
    specifications: [
      {
        title: { en: "Steam cleaner", es: "Limpiador de vapor" },
        rows: [
          {
            label: { en: "Boiler", es: "Caldera" },
            value: { en: "Stainless-steel AISI 304", es: "Acero inoxidable AISI 304" },
            note: { en: "with interchangeable heating element", es: "con resistencia intercambiable" },
          },
          {
            label: { en: "Body", es: "Cuerpo" },
            value: { en: "Stainless-steel AISI 304 BA", es: "Acero inoxidable AISI 304 BA" },
          },
          { label: { en: "Power supply", es: "Alimentación" }, unit: "V - Hz", value: "1~ 230 · 50/60" },
          { label: { en: "Boiler output", es: "Potencia de la caldera" }, unit: "kW/h", value: "2.4" },
          { label: { en: "Maximum output", es: "Potencia máxima" }, unit: "kW/h", value: "2.45" },
          { label: { en: "Boiler volume", es: "Volumen de la caldera" }, unit: "L", value: "1.5" },
          { label: { en: "Operating pressure", es: "Presión de trabajo" }, unit: "bar", value: "8" },
          { label: { en: "Water tank", es: "Depósito de agua" }, unit: "L", value: "3" },
          { label: { en: "Detergent tank", es: "Depósito de detergente" }, unit: "L", value: "1" },
          { label: { en: "Steam production", es: "Producción de vapor" }, unit: "g/min", value: "64" },
          { label: { en: "Steam production", es: "Producción de vapor" }, unit: "kg/h", value: "3.8" },
          { label: { en: "Steam temperature", es: "Temperatura del vapor" }, unit: "°C", value: "174" },
        ],
      },
      {
        title: { en: "Various", es: "Varios" },
        rows: [
          { label: { en: "Weight", es: "Peso" }, unit: "kg", value: "16" },
          { label: { en: "Cable", es: "Cable" }, unit: "m", value: "5" },
          { label: { en: "Dimensions (generator)", es: "Dimensiones (generador)" }, unit: "cm", value: "H 32.6 × L 27.8 × W 43.6" },
          { label: { en: "Dimensions (pallet)", es: "Dimensiones (palé)" }, unit: "cm", value: "53 × 40 × 52" },
          { label: { en: "Pallet / unit", es: "Palé / unidad" }, unit: "pz", value: "24" },
        ],
      },
    ],
  },
  {
    slug: "steam-turbo",
    group: "systems",
    category: { en: "Industrial Steam System", es: "Sistema de vapor industrial" },
    name: "STEAM TURBO",
    tagline: {
      en: "Industrial power with integrated wet/dry vacuum. Built to last.",
      es: "Potencia industrial con aspiradora de sólidos y líquidos integrada. Construido para durar.",
    },
    spec: { en: "10.8 kW · 17.4 kW · 21 kW · 21.6 kW · 31.8 kW · 39 kW", es: "10.8 kW · 17.4 kW · 21 kW · 21.6 kW · 31.8 kW · 39 kW" },
    description: {
      en: "Steam cleaner with stainless-steel body and boiler, designed for industrial use and able to deliver dry saturated steam at 183°C.",
      es: "Limpiador de vapor con cuerpo y caldera de acero inoxidable, diseñado para uso industrial y capaz de suministrar vapor seco saturado a 183°C.",
    },
    features: [
      {
        en: "Equipped with a wet/dry vacuum cleaner with an induction turbine and drainage pipe.",
        es: "Equipado con una aspiradora de sólidos y líquidos con turbina de inducción y tubo de drenaje.",
      },
      {
        en: "Sturdy structure, fully electric operation, and compact size for use in any environment — both outdoors (IPX5 watertight protection) and indoors (e.g. production lines).",
        es: "Estructura robusta, funcionamiento totalmente eléctrico y tamaño compacto para su uso en cualquier entorno, tanto en exteriores (protección estanca IPX5) como en interiores (p. ej., líneas de producción).",
      },
      {
        en: "All steam cleaner functions can be managed on the electronic control panel.",
        es: "Todas las funciones del limpiador de vapor se pueden gestionar desde el panel de control electrónico.",
      },
      {
        en: "Equipped with accessories basket, double hose holder, lance holder, cable holder, and front 360° swivel wheels with safety brakes.",
        es: "Equipado con cesta para accesorios, doble portamangueras, portalanzas, portacables y ruedas delanteras giratorias 360° con frenos de seguridad.",
      },
    ],
    image:
      "https://res.cloudinary.com/dxbwqifwn/image/upload/v1780578139/steam-turbo_iv6hsj.png",
    imageAlt: {
      en: "Tecnovap Steam Turbo industrial steam cleaner",
      es: "Limpiador de vapor industrial Tecnovap Steam Turbo",
    },
    mainFeatures: [
      {
        icon: Battery,
        label: { en: "Boiler Material", es: "Material de la caldera" },
        value: { en: "Stainless-steel AISI 304", es: "Acero inoxidable AISI 304" },
      },
      {
        icon: Zap,
        label: { en: "Power Supply", es: "Alimentación" },
        value: "3~ 400V 50/60Hz",
      },
      {
        icon: Gauge,
        label: { en: "Operating Pressure", es: "Presión de trabajo" },
        value: "10 bar",
      },
      {
        icon: Cloud,
        label: { en: "Steam Production", es: "Producción de vapor" },
        value: "291–970 g/min · 17.5–58 kg/h",
      },
      {
        icon: Thermometer,
        label: { en: "Steam Temperature", es: "Temperatura del vapor" },
        value: "183°C",
      },
    ],
    specifications: [
      {
        title: { en: "Steam cleaner", es: "Limpiador de vapor" },
        rows: [
          {
            label: { en: "Boiler", es: "Caldera" },
            value: { en: "Stainless-steel AISI 304", es: "Acero inoxidable AISI 304" },
            note: { en: "with interchangeable heating elements", es: "con resistencias intercambiables" },
          },
          {
            label: { en: "Body", es: "Cuerpo" },
            value: { en: "Stainless-steel AISI 304 BA", es: "Acero inoxidable AISI 304 BA" },
          },
          {
            label: { en: "Power supply", es: "Alimentación" },
            unit: "V - Hz",
            value: "3~ 400 · 50",
            note: { en: "60 Hz on request", es: "60 Hz bajo pedido" },
          },
          { label: { en: "Boiler output", es: "Potencia de la caldera" }, unit: "kW/h", value: "10.8 · 14.4 · 18 · 21.6 · 28.8 · 36" },
          { label: { en: "Maximum output", es: "Potencia máxima" }, unit: "kW/h", value: "10.8 · 17.4 · 21 · 21.6 · 31.8 · 39" },
          { label: { en: "Boiler volume", es: "Volumen de la caldera" }, unit: "L", value: "13" },
          { label: { en: "Operating pressure", es: "Presión de trabajo" }, unit: "bar", value: { en: "from 1 to 10", es: "de 1 a 10" } },
          { label: { en: "Water tank", es: "Depósito de agua" }, unit: "L", value: "14" },
          { label: { en: "Detergent tank", es: "Depósito de detergente" }, unit: "L", value: "14" },
          { label: { en: "Steam production", es: "Producción de vapor" }, unit: "g/min", value: "291 · 388 · 485 · 582 · 776 · 970" },
          { label: { en: "Steam production", es: "Producción de vapor" }, unit: "kg/h", value: "17.5 · 23 · 29.1 · 35 · 46.5 · 58" },
          { label: { en: "Steam temperature", es: "Temperatura del vapor" }, unit: "°C", value: "165 – 183" },
        ],
      },
      {
        title: { en: "Vacuum cleaner", es: "Aspiradora de sólidos y líquidos" },
        rows: [
          { label: { en: "Power output", es: "Potencia" }, unit: "kW/h", value: "3" },
          { label: { en: "Drum capacity", es: "Capacidad del tambor" }, unit: "L", value: "14 | 43" },
          { label: { en: "Air flow", es: "Caudal de aire" }, unit: "m³/h", value: "320" },
          { label: { en: "Depression", es: "Depresión" }, unit: "mm", value: "3200" },
        ],
      },
      {
        title: { en: "Various", es: "Varios" },
        rows: [
          { label: { en: "Weight", es: "Peso" }, unit: "kg", value: "151" },
          { label: { en: "Cable", es: "Cable" }, unit: "m", value: "8" },
          { label: { en: "Dimensions (generator)", es: "Dimensiones (generador)" }, unit: "cm", value: "H 166 × L 69 × W 95.5", note: { en: "drum 43 L", es: "tambor 43 L" } },
          { label: { en: "Dimensions (pallet)", es: "Dimensiones (palé)" }, unit: "cm", value: "120 × 80 × 165" },
          { label: { en: "Pallet / unit", es: "Palé / unidad" }, unit: "pz", value: "1" },
        ],
      },
    ],
  },
  {
    slug: "steam-box-industrial",
    group: "systems",
    category: { en: "Industrial Steam System", es: "Sistema de vapor industrial" },
    name: "STEAM BOX INDUSTRIAL",
    tagline: {
      en: "Heavy-duty steam for demanding industrial environments.",
      es: "Vapor de alto rendimiento para entornos industriales exigentes.",
    },
    spec: { en: "11 kW · 14.6 kW · 21.8 kW · 29 kW · 36.2 kW", es: "11 kW · 14.6 kW · 21.8 kW · 29 kW · 36.2 kW" },
    description: {
      en: "Steam cleaner with stainless-steel body and boiler, designed for industrial use and able to deliver dry saturated steam at 183°C.",
      es: "Limpiador de vapor con cuerpo y caldera de acero inoxidable, diseñado para uso industrial y capaz de suministrar vapor seco saturado a 183°C.",
    },
    features: [
      {
        en: "Sturdy structure, fully electric operation, and compact size for use in any environment — both outdoors (IPX5 watertight protection) and indoors (e.g. production lines).",
        es: "Estructura robusta, funcionamiento totalmente eléctrico y tamaño compacto para su uso en cualquier entorno, tanto en exteriores (protección estanca IPX5) como en interiores (p. ej., líneas de producción).",
      },
      {
        en: "All steam cleaner functions can be managed on the electronic control panel.",
        es: "Todas las funciones del limpiador de vapor se pueden gestionar desde el panel de control electrónico.",
      },
      {
        en: "Equipped with accessories basket, hose holder, cable holder, and front 360° swivel wheels with safety brakes.",
        es: "Equipado con cesta para accesorios, portamangueras, portacables y ruedas delanteras giratorias 360° con frenos de seguridad.",
      },
    ],
    image:
      "https://res.cloudinary.com/dxbwqifwn/image/upload/v1780584000/steam-box-industrial_lmm6nv.png",
    imageAlt: {
      en: "Tecnovap Steam Box Industrial steam cleaner",
      es: "Limpiador de vapor Tecnovap Steam Box Industrial",
    },
    mainFeatures: [
      {
        icon: Battery,
        label: { en: "Boiler Material", es: "Material de la caldera" },
        value: { en: "Stainless-steel AISI 304", es: "Acero inoxidable AISI 304" },
      },
      {
        icon: Zap,
        label: { en: "Power Supply", es: "Alimentación" },
        value: "3~ 400V 50/60Hz",
      },
      {
        icon: Cloud,
        label: { en: "Steam Production", es: "Producción de vapor" },
        value: "291–970 g/min · 17.5–58 kg/h",
      },
      {
        icon: Thermometer,
        label: { en: "Steam Temperature", es: "Temperatura del vapor" },
        value: "183°C",
      },
      {
        icon: Gauge,
        label: { en: "Operating Pressure", es: "Presión de trabajo" },
        value: "10 bar",
      },
    ],
    specifications: [
      {
        title: { en: "Steam cleaner", es: "Limpiador de vapor" },
        rows: [
          {
            label: { en: "Boiler", es: "Caldera" },
            value: { en: "Stainless-steel AISI 304", es: "Acero inoxidable AISI 304" },
            note: { en: "with interchangeable heating elements", es: "con resistencias intercambiables" },
          },
          {
            label: { en: "Body", es: "Cuerpo" },
            value: { en: "Stainless-steel AISI 304 BA", es: "Acero inoxidable AISI 304 BA" },
          },
          { label: { en: "Power supply", es: "Alimentación" }, unit: "V - Hz", value: "3~ 400 · 50/60" },
          { label: { en: "Boiler output", es: "Potencia de la caldera" }, unit: "kW/h", value: "10.8 · 14.4 · 21.6 · 28.8 · 36" },
          { label: { en: "Maximum output", es: "Potencia máxima" }, unit: "kW/h", value: "11 · 14.6 · 21.8 · 29 · 36.2" },
          { label: { en: "Boiler volume", es: "Volumen de la caldera" }, unit: "L", value: "11 · 12 · 13" },
          { label: { en: "Operating pressure", es: "Presión de trabajo" }, unit: "bar", value: "10" },
          { label: { en: "Water tank", es: "Depósito de agua" }, unit: "L", value: "20" },
          { label: { en: "Detergent tank", es: "Depósito de detergente" }, unit: "L", value: "20" },
          { label: { en: "Steam production", es: "Producción de vapor" }, unit: "g/min", value: "291 · 388 · 582 · 776 · 970" },
          { label: { en: "Steam production", es: "Producción de vapor" }, unit: "kg/h", value: "17.5 · 23 · 35 · 46.5 · 58" },
          { label: { en: "Steam temperature", es: "Temperatura del vapor" }, unit: "°C", value: "183" },
        ],
      },
      {
        title: { en: "Various", es: "Varios" },
        rows: [
          { label: { en: "Weight", es: "Peso" }, unit: "kg", value: "96", note: { en: "mod. 36 kW", es: "mod. 36 kW" } },
          { label: { en: "Cable", es: "Cable" }, unit: "m", value: "8" },
          { label: { en: "Dimensions (generator)", es: "Dimensiones (generador)" }, unit: "cm", value: "H 110 × L 53 × W 82.5" },
          { label: { en: "Dimensions (pallet)", es: "Dimensiones (palé)" }, unit: "cm", value: "115 × 65 × 125" },
          { label: { en: "Pallet / unit", es: "Palé / unidad" }, unit: "pz", value: "1" },
        ],
      },
    ],
  },
  {
    slug: "steam-box-mini",
    group: "systems",
    category: { en: "Professional Steam System", es: "Sistema de vapor profesional" },
    name: "STEAM BOX MINI",
    tagline: {
      en: "Compact, versatile, and ready for any professional environment.",
      es: "Compacto, versátil y listo para cualquier entorno profesional.",
    },
    spec: { en: "3.75 kW", es: "3.75 kW" },
    description: {
      en: "Steam cleaner with stainless-steel body and boiler, designed for professional use and able to deliver dry saturated steam at 183°C, 174°C or 165°C based on the model.",
      es: "Limpiador de vapor con cuerpo y caldera de acero inoxidable, diseñado para uso profesional y capaz de suministrar vapor seco saturado a 183°C, 174°C o 165°C según el modelo.",
    },
    features: [
      {
        en: "Sturdy structure, fully electric operation, and compact size for use in any environment — both outdoors (IPX5 watertight protection) and indoors (e.g. production lines).",
        es: "Estructura robusta, funcionamiento totalmente eléctrico y tamaño compacto para su uso en cualquier entorno, tanto en exteriores (protección estanca IPX5) como en interiores (p. ej., líneas de producción).",
      },
      {
        en: "All steam cleaner functions can be managed on the electronic control panel.",
        es: "Todas las funciones del limpiador de vapor se pueden gestionar desde el panel de control electrónico.",
      },
      {
        en: "Equipped with hose holder, accessories basket, cable holder, extension tube holders, and front 360° swivel wheels.",
        es: "Equipado con portamangueras, cesta para accesorios, portacables, soportes para tubos de extensión y ruedas delanteras giratorias 360°.",
      },
    ],
    image:
      "https://res.cloudinary.com/dxbwqifwn/image/upload/v1780584539/steam-box-mini_ngyzyi.png",
    imageAlt: {
      en: "Tecnovap Steam Box Mini professional steam cleaner",
      es: "Limpiador de vapor profesional Tecnovap Steam Box Mini",
    },
    mainFeatures: [
      {
        icon: Battery,
        label: { en: "Boiler Material", es: "Material de la caldera" },
        value: { en: "Stainless-steel AISI 304", es: "Acero inoxidable AISI 304" },
      },
      {
        icon: Zap,
        label: { en: "Power Supply", es: "Alimentación" },
        value: "1~ 230V · 3~ 400V · 50/60Hz",
      },
      {
        icon: Gauge,
        label: { en: "Operating Pressure", es: "Presión de trabajo" },
        value: "6 · 8 · 10 bar",
      },
      {
        icon: Thermometer,
        label: { en: "Steam Temperature", es: "Temperatura del vapor" },
        value: "165 · 174 · 183 °C",
      },
    ],
    specifications: [
      {
        title: { en: "Steam cleaner", es: "Limpiador de vapor" },
        rows: [
          {
            label: { en: "Boiler", es: "Caldera" },
            value: { en: "Stainless-steel AISI 304", es: "Acero inoxidable AISI 304" },
            note: { en: "with interchangeable heating element", es: "con resistencia intercambiable" },
          },
          {
            label: { en: "Body", es: "Cuerpo" },
            value: { en: "Stainless-steel AISI 304 BA", es: "Acero inoxidable AISI 304 BA" },
          },
          { label: { en: "Power supply", es: "Alimentación" }, unit: "V - Hz", value: "1~ 230 · 50/60  |  3~ 400 · 50/60" },
          { label: { en: "Boiler output", es: "Potencia de la caldera" }, unit: "kW/h", value: "3.6" },
          { label: { en: "Maximum output", es: "Potencia máxima" }, unit: "kW/h", value: "3.75" },
          { label: { en: "Boiler volume", es: "Volumen de la caldera" }, unit: "L", value: "5" },
          { label: { en: "Operating pressure", es: "Presión de trabajo" }, unit: "bar", value: "10 · 8 · 6" },
          { label: { en: "Water tank", es: "Depósito de agua" }, unit: "L", value: "7.5" },
          { label: { en: "Detergent tank", es: "Depósito de detergente" }, unit: "L", value: "7.5" },
          { label: { en: "Steam production", es: "Producción de vapor" }, unit: "g/min", value: "97" },
          { label: { en: "Steam production", es: "Producción de vapor" }, unit: "kg/h", value: "5.9" },
          { label: { en: "Steam temperature", es: "Temperatura del vapor" }, unit: "°C", value: "183 · 174 · 165" },
        ],
      },
      {
        title: { en: "Various", es: "Varios" },
        rows: [
          { label: { en: "Weight", es: "Peso" }, unit: "kg", value: "30" },
          { label: { en: "Cable", es: "Cable" }, unit: "m", value: "8" },
          { label: { en: "Dimensions (generator)", es: "Dimensiones (generador)" }, unit: "cm", value: "H 106 × L 41.2 × W 66" },
          { label: { en: "Dimensions (pallet)", es: "Dimensiones (palé)" }, unit: "cm", value: "50 × 40 × 80" },
          { label: { en: "Pallet / unit", es: "Palé / unidad" }, unit: "pz", value: "4 | 8" },
        ],
      },
    ],
  },
  {
    slug: "hydrobox",
    group: "systems",
    category: { en: "High-Pressure Washer", es: "Hidrolimpiadora de alta presión" },
    name: "HYDROBOX",
    tagline: {
      en: "Hot & cold high-pressure precision, up to 150 bar.",
      es: "Precisión de alta presión en frío y caliente, hasta 150 bar.",
    },
    spec: { en: "10.5 kW · 15.9 kW", es: "10.5 kW · 15.9 kW" },
    description: {
      en: "Hot & cold high-pressure washer with stainless-steel body and boiler. Built for industrial-grade washing with configurable pressure and water temperature.",
      es: "Hidrolimpiadora de alta presión en frío y caliente con cuerpo y caldera de acero inoxidable. Diseñada para lavado de nivel industrial con presión y temperatura del agua configurables.",
    },
    features: [
      {
        en: "The water temperature can be set from 20°C to 90°C.",
        es: "La temperatura del agua se puede ajustar de 20°C a 90°C.",
      },
      {
        en: "The water pressure can be set from 1 to 150 bar.",
        es: "La presión del agua se puede ajustar de 1 a 150 bar.",
      },
      {
        en: "Ergonomic structure, fully electric operation, and compact size for use in any environment.",
        es: "Estructura ergonómica, funcionamiento totalmente eléctrico y tamaño compacto para su uso en cualquier entorno.",
      },
      {
        en: "All functions can be managed on the electronic control panel.",
        es: "Todas las funciones se pueden gestionar desde el panel de control electrónico.",
      },
      {
        en: "Equipped with hose holder, cable holder, lance holder, and front 360° swivel wheels.",
        es: "Equipado con portamangueras, portacables, portalanzas y ruedas delanteras giratorias 360°.",
      },
    ],
    image:
      "https://res.cloudinary.com/dxbwqifwn/image/upload/v1780584798/hidrobox_ibcljo.png",
    imageAlt: {
      en: "Tecnovap Hydrobox hot & cold high-pressure washer",
      es: "Hidrolimpiadora de alta presión en frío y caliente Tecnovap Hydrobox",
    },
    mainFeatures: [
      {
        icon: Battery,
        label: { en: "Boiler Material", es: "Material de la caldera" },
        value: { en: "Stainless-steel AISI 304", es: "Acero inoxidable AISI 304" },
      },
      {
        icon: Zap,
        label: { en: "Power Supply", es: "Alimentación" },
        value: "3~N 400V 50/60Hz",
      },
      {
        icon: Gauge,
        label: { en: "Operating Pressure", es: "Presión de trabajo" },
        value: { en: "from 1 to 150 bar", es: "de 1 a 150 bar" },
      },
      {
        icon: Droplets,
        label: { en: "Water Flow", es: "Caudal de agua" },
        value: "2 L · 4 L",
      },
      {
        icon: Thermometer,
        label: { en: "Water Temperature", es: "Temperatura del agua" },
        value: { en: "from 20° to 90°C", es: "de 20° a 90°C" },
      },
    ],
    specifications: [
      {
        title: { en: "High-Pressure Washer", es: "Hidrolimpiadora de alta presión" },
        rows: [
          {
            label: { en: "Boiler", es: "Caldera" },
            value: { en: "Stainless-steel AISI 304", es: "Acero inoxidable AISI 304" },
            note: { en: "with interchangeable heating elements", es: "con resistencias intercambiables" },
          },
          {
            label: { en: "Body", es: "Cuerpo" },
            value: { en: "Stainless-steel AISI 304 BA", es: "Acero inoxidable AISI 304 BA" },
          },
          { label: { en: "Power supply", es: "Alimentación" }, unit: "V - Hz", value: "3~ 400 · 50/60" },
          { label: { en: "Boiler output", es: "Potencia de la caldera" }, unit: "kW/h", value: "9.0 · 14.4" },
          { label: { en: "Maximum output", es: "Potencia máxima" }, unit: "kW/h", value: "10.5 · 15.9" },
          { label: { en: "Boiler volume", es: "Volumen de la caldera" }, unit: "L", value: "5" },
          { label: { en: "Operating pressure", es: "Presión de trabajo" }, unit: "bar", value: { en: "from 1 to 150", es: "de 1 a 150" } },
          { label: { en: "Water flow", es: "Caudal de agua" }, unit: "L/min", value: "2 · 4" },
          { label: { en: "Water temperature", es: "Temperatura del agua" }, unit: "°C", value: { en: "from 20 to 90", es: "de 20 a 90" } },
        ],
      },
      {
        title: { en: "Various", es: "Varios" },
        rows: [
          { label: { en: "Weight", es: "Peso" }, unit: "kg", value: "57" },
          { label: { en: "Cable", es: "Cable" }, unit: "m", value: "8" },
          { label: { en: "Dimensions", es: "Dimensiones" }, unit: "cm", value: "H 99 × L 66 × W 40.8" },
          { label: { en: "Dimensions (pallet)", es: "Dimensiones (palé)" }, unit: "cm", value: "53 × 40 × 52" },
          { label: { en: "Pallet / unit", es: "Palé / unidad" }, unit: "pz", value: "8" },
        ],
      },
    ],
  },
];

tecnovapProducts.push({
  slug: "rtu-pro",
  group: "belts",
  category: { en: "Standard Belt Cleaning Head", es: "Cabezal de limpieza de cintas estándar" },
  name: "RTU Pro",
  tagline: {
    en: "Adjustable, food-grade cleaning head for any conveyor belt — customizable up to 1500 mm.",
    es: "Cabezal de limpieza ajustable y apto para uso alimentario para cualquier cinta transportadora, personalizable hasta 1500 mm.",
  },
  spec: { en: "Customizable up to 1500 mm", es: "Personalizable hasta 1500 mm" },
  description: {
    en: "Standard belt cleaning head built around an AISI 304 stainless-steel structure. The head fixes directly to your conveyor belt frame via bolts, with regulating cranks to fine-tune the tool position. Installs on either the upper or lower side of the belt and is dimensioned to your line.",
    es: "Cabezal de limpieza de cintas estándar construido en torno a una estructura de acero inoxidable AISI 304. El cabezal se fija directamente al bastidor de su cinta transportadora mediante pernos, con manivelas de regulación para ajustar con precisión la posición de la herramienta. Se instala en el lado superior o inferior de la cinta y se dimensiona según su línea.",
  },
  features: [
    { en: "AISI 304 stainless-steel structure.", es: "Estructura de acero inoxidable AISI 304." },
    {
      en: "Fixed to the conveyor belt structure by means of bolts.",
      es: "Fijado a la estructura de la cinta transportadora mediante pernos.",
    },
    {
      en: "Tool position adjustable via regulating cranks.",
      es: "Posición de la herramienta ajustable mediante manivelas de regulación.",
    },
    {
      en: "Two installation options — upper or lower side of the belt.",
      es: "Dos opciones de instalación: lado superior o inferior de la cinta.",
    },
    {
      en: "Customizable dimensions up to 1500 mm.",
      es: "Dimensiones personalizables hasta 1500 mm.",
    },
  ],
  image:
    "https://res.cloudinary.com/dxbwqifwn/image/upload/v1780666178/rto-pro_ctoczo.png",
  imageAlt: {
    en: "Tecnovap RTU Pro standard belt cleaning head",
    es: "Cabezal de limpieza de cintas estándar Tecnovap RTU Pro",
  },
  imageWidth: 2278,
  imageHeight: 2048,
  mainFeatures: [],
  specifications: [],
  parts: [
    { x: 22, y: 16, label: { en: "Regulating crank", es: "Manivela de regulación" } },
    { x: 46, y: 8, label: { en: "Steam hose", es: "Manguera de vapor" } },
    { x: 60, y: 20, label: { en: "Vacuum hose", es: "Manguera de aspiración" } },
    { x: 84, y: 32, label: { en: "Electrical control box", es: "Caja de control eléctrico" } },
    {
      x: 32,
      y: 52,
      label: { en: "Steam & vacuum diffuser", es: "Difusor de vapor y aspiración" },
      description: { en: "Silicone rubber squeegees, food-grade", es: "Labios de goma de silicona, apto para uso alimentario" },
    },
    { x: 52, y: 78, label: { en: "Type of fixing", es: "Tipo de fijación" } },
  ],
  video: "https://www.youtube.com/embed/1qZt4D5jeRE",
});

tecnovapProducts.push({
  slug: "hb-max",
  group: "belts",
  category: { en: "Semi-Automatic Belt Cleaning Head", es: "Cabezal de limpieza de cintas semiautomático" },
  name: "HB Max",
  tagline: {
    en: "Semi-automatic belt head with working/rest position adjustment — up to 1500 mm.",
    es: "Cabezal de cintas semiautomático con ajuste de posición de trabajo/reposo, hasta 1500 mm.",
  },
  spec: { en: "Customizable up to 1500 mm", es: "Personalizable hasta 1500 mm" },
  description: {
    en: "Semi-automatic belt cleaning head built around an AISI 304 stainless-steel structure with working and rest position adjustment. Designed for installation on the lower part of the conveyor belt and customizable to your line.",
    es: "Cabezal de limpieza de cintas semiautomático construido en torno a una estructura de acero inoxidable AISI 304 con ajuste de posición de trabajo y reposo. Diseñado para su instalación en la parte inferior de la cinta transportadora y personalizable según su línea.",
  },
  features: [
    { en: "AISI 304 stainless-steel structure.", es: "Estructura de acero inoxidable AISI 304." },
    {
      en: "Working and rest position adjustment of the cleaning head.",
      es: "Ajuste de posición de trabajo y reposo del cabezal de limpieza.",
    },
    {
      en: "Installation exclusively on the lower part of the belt.",
      es: "Instalación exclusivamente en la parte inferior de la cinta.",
    },
    {
      en: "Customizable dimensions up to 1500 mm.",
      es: "Dimensiones personalizables hasta 1500 mm.",
    },
  ],
  image:
    "https://res.cloudinary.com/dxbwqifwn/image/upload/v1780666395/hb-max-belt_zuwya8.png",
  imageAlt: {
    en: "Tecnovap HB Max semi-automatic belt cleaning head",
    es: "Cabezal de limpieza de cintas semiautomático Tecnovap HB Max",
  },
  imageWidth: 1213,
  imageHeight: 910,
  mainFeatures: [],
  specifications: [],
  parts: [
    {
      x: 26,
      y: 8,
      label: { en: "Steam & vacuum diffuser", es: "Difusor de vapor y aspiración" },
      description: { en: "Silicone rubber squeegees, food-grade", es: "Labios de goma de silicona, apto para uso alimentario" },
    },
    { x: 80, y: 18, label: { en: "Electrical control box", es: "Caja de control eléctrico" } },
    { x: 18, y: 80, label: { en: "Steam & vacuum hose", es: "Manguera de vapor y aspiración" } },
    {
      x: 74,
      y: 75,
      label: { en: "Actuator", es: "Actuador" },
      description: { en: "Cleaning head adjustment", es: "Ajuste del cabezal de limpieza" },
    },
  ],
  video: "https://www.youtube.com/embed/WYrbyJ3wYe0",
});

tecnovapProducts.push({
  slug: "lvc-ultra",
  group: "belts",
  category: { en: "Fully-Automated Cleaning Head", es: "Cabezal de limpieza totalmente automatizado" },
  name: "LVC Ultra",
  tagline: {
    en: "Fully-automated belt head with programmable cycles — up to 2000 mm.",
    es: "Cabezal de cintas totalmente automatizado con ciclos programables, hasta 2000 mm.",
  },
  spec: { en: "Customizable up to 2000 mm", es: "Personalizable hasta 2000 mm" },
  description: {
    en: "Fully-automated belt cleaning head built around an AISI 304 stainless-steel structure. Programmable cleaning-head positions and working cycles, with automatic movement of the steam diffuser — customizable to your line.",
    es: "Cabezal de limpieza de cintas totalmente automatizado construido en torno a una estructura de acero inoxidable AISI 304. Posiciones del cabezal de limpieza y ciclos de trabajo programables, con movimiento automático del difusor de vapor, personalizable según su línea.",
  },
  features: [
    { en: "AISI 304 stainless-steel structure.", es: "Estructura de acero inoxidable AISI 304." },
    {
      en: "Programmable cleaning-head working positions and cycles.",
      es: "Posiciones de trabajo y ciclos del cabezal de limpieza programables.",
    },
    {
      en: "Automatic movement of the steam diffuser.",
      es: "Movimiento automático del difusor de vapor.",
    },
    {
      en: "Customizable dimensions up to 2000 mm.",
      es: "Dimensiones personalizables hasta 2000 mm.",
    },
  ],
  image:
    "https://res.cloudinary.com/dxbwqifwn/image/upload/v1780666931/lvc-ultra_za97jk.png",
  imageAlt: {
    en: "Tecnovap LVC Ultra fully-automated belt cleaning head",
    es: "Cabezal de limpieza de cintas totalmente automatizado Tecnovap LVC Ultra",
  },
  imageWidth: 1100,
  imageHeight: 898,
  mainFeatures: [],
  specifications: [],
  parts: [
    { x: 15, y: 22, label: { en: "Rest position for the steam diffuser", es: "Posición de reposo del difusor de vapor" } },
    { x: 40, y: 22, label: { en: "Actuator chain", es: "Cadena del actuador" } },
    { x: 62, y: 18, label: { en: "Steam hose", es: "Manguera de vapor" } },
    { x: 66, y: 30, label: { en: "Vacuum hose", es: "Manguera de aspiración" } },
    {
      x: 54,
      y: 46,
      label: { en: "Steam & vacuum diffuser", es: "Difusor de vapor y aspiración" },
      description: { en: "Silicone rubber squeegees, food-grade", es: "Labios de goma de silicona, apto para uso alimentario" },
    },
    { x: 72, y: 32, label: { en: "Electrical control box", es: "Caja de control eléctrico" } },
    { x: 80, y: 22, label: { en: "Encoder", es: "Codificador" } },
    { x: 35, y: 62, label: { en: "Safety limit switch", es: "Interruptor de fin de carrera de seguridad" } },
  ],
  video: "https://www.youtube.com/embed/o8yHc8I3DL8",
});

export function getTecnovapProducts(locale: string) {
  return tecnovapProducts.map((p) => localize(p, locale));
}

export function getTecnovapProduct(slug: string, locale: string) {
  const raw = tecnovapProducts.find((p) => p.slug === slug);
  return raw ? localize(raw, locale) : undefined;
}

export function getTecnovapSlugs(): string[] {
  return tecnovapProducts.map((p) => p.slug);
}
