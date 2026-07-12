# Embudo de captura de leads → Interlink CRM

## Objetivo

Conectar la vista pública de producto que ya existe en este repo (Klinmak y
Tecnovap, `src/app/klinmak/[slug]`, `src/app/tecnovap/[slug]`) con el backend
del CRM Interlink, para que un interesado en un producto pueda dejar sus datos
sin salir del sitio y ese Lead aparezca directamente en Interlink → CRM → Leads.

**Regla de oro: nada del diseño, contenido o estilos actuales de ilg-website se
modifica.** Todo lo de este plan es aditivo (archivos nuevos) salvo el `onClick`
de un botón existente, que pasa de navegar a abrir un modal.

## Por qué este enfoque (no el que se intentó primero)

Un primer intento enlazaba el botón de producto hacia la página pública de
catálogo de Interlink (`crm.ilgcleaningsolutions.com/catalogo?sku=...`). Se
descartó: saca al visitante de ilg-website hacia una interfaz con otro diseño.
La vista pública de producto de este repo ya está terminada — lo que faltaba
era conectar su "pedir info" al backend real, no reemplazarla.

## Arquitectura

```
Visitante en /klinmak/joker-2040 (sin cambios de diseño)
   │ clic en el botón existente → abre LeadFunnelDialog (nuevo, modal)
   ▼
Paso 1/3 — interés y urgencia
Paso 2/3 — su operación (tipo de negocio, unidades, ciudad/país, contacto preferido)
Paso 3/3 — sus datos (nombre, email, telefono, comentario) → enviar
   │
   ▼
POST /api/crm-lead              (Next.js API route, mismo dominio → sin CORS)
   │ server-side, ilg-website arma el payload y llama a:
   ▼
POST https://crm.ilgcleaningsolutions.com/api/v1/public/leads
   ▼
Interlink crea el Lead → visible en CRM → Leads (Origen distinguible: "ILG Website")
```

Server-to-server evita depender de que Interlink abra su CORS al dominio de
ilg-website, y da un lugar para validar/mapear antes de mandar el lead.

## Mapeo de campos

| Modal (ilg-website) | Payload a Interlink (`PublicLeadCreate`) |
|---|---|
| Nombre | `contact_name` |
| Email | `email` |
| Teléfono | `phone` |
| Método de contacto preferido | `preferred_contact_method` |
| Producto (de `klinmak-products.ts` / `tecnovap-products.ts`) | `product_interest` |
| Interés + urgencia + tipo de negocio + unidades + ciudad/país + comentario | `notes` (texto armado) |
| — | `source` = `"ILG Website"` (requiere el cambio de backend abajo) |

No se depende de sincronizar IDs de producto entre los dos sistemas — sólo el
nombre del producto como texto, que ya vive en el catálogo local.

## Checklist de implementación

### Backend — Interlink (`/var/www/interlink`)
- [x] Agregar campo opcional `source` a `PublicLeadCreate` (hoy fijo en
      `"Catalogo publico"` en `app/api/catalog.py`), para poder distinguir en
      reportes los leads que vienen del sitio web vs. del catálogo interno.
      → `app/schemas/crm.py` + `app/api/catalog.py`, `interlink-backend.service` reiniciado.

### Frontend — ilg-website
- [x] `src/lib/crm.ts` — reemplazado el helper de URL de redirección (del
      intento anterior) por `submitCrmLead()`, que llama a `POST /api/crm-lead`.
- [x] `src/app/api/crm-lead/route.ts` — nueva ruta API (server-side) que recibe
      el submit del modal, valida, arma `notes` y `source: "ILG Website"`, y
      reenvía a `POST {INTERLINK_API_URL}/public/leads`.
- [x] `src/components/LeadFunnelDialog.tsx` — nuevo modal de 3 pasos, usando
      `src/components/ui/dialog.tsx` (shadcn, ya instalado) y el patrón de
      `styles` object de `ContactForm.tsx` para que se vea "de la casa".
- [x] `src/app/klinmak/[slug]/page.tsx` — el botón existente ("Talk to a
      KlinMak expert") ahora abre el modal en vez de navegar afuera; mismo
      texto, mismo estilo.
- [x] `src/app/tecnovap/[slug]/page.tsx` — agregado el mismo patrón de botón
      ("Talk to a Tecnovap expert", antes no existía ningún CTA), abre el modal.
- [x] `.env.example` — documentado `INTERLINK_API_URL` (server-side only, sin
      `NEXT_PUBLIC_`, porque la llamada la hace el servidor, no el navegador).

### Ronda 2 — mejoras al modal + mismas acciones en carruseles + Contact Us
- [x] `LeadFunnelDialog.tsx` — método de contacto preferido ahora es
      **multi-selección** (chips con check), con validación de "al menos uno"
      antes de avanzar del paso 2. Transición animada entre los 3 pasos
      (framer-motion, consistente con el resto del sitio).
- [x] `src/app/api/crm-lead/route.ts` + `src/lib/crm.ts` — el payload acepta
      `preferred_contact_methods: string[]`; el primero va al campo
      estructurado que Interlink valida, la lista completa queda en `notes`
      (sin perder información, sin migrar el schema de Interlink).
- [x] `ExploreOtherProducts.tsx` ("Explore other [Marca] products", al final
      de cada ficha de producto) — cada tile ahora tiene una acción "Request
      info" que abre el mismo modal para ese producto específico, sin salir
      de la página.
- [x] `ProductCarousel.tsx` (carrusel de marca en `/klinmak` y `/tecnovap`) —
      agregado el mismo botón "Request info" junto a "See more", en la fila
      de escritorio y en el carrusel/caption móvil.
- [x] `ContactForm.tsx` (el "Contact Us" general del home) — además del
      correo por Resend (sin tocar ese flujo), ahora también crea el lead en
      Interlink vía `submitCrmLead()`. Es "best-effort": si Interlink falla,
      el usuario igual ve la confirmación de siempre — el email sigue siendo
      la fuente de verdad, el CRM es aditivo.

### Validación end-to-end
- [x] Probado el flujo completo: `npm run build` limpio (13 páginas de
      producto + `/api/crm-lead` como ruta dinámica), servidor de producción
      levantado localmente, submit real contra el backend de Interlink en
      `127.0.0.1:8010` → Lead creado con `source: "ILG Website"`,
      `product_interest`, contacto y `notes` armadas correctamente desde los
      3 pasos. Lead de prueba borrado después de verificar.
- [x] `npx tsc --noEmit` y `npm run build` sin errores.
- [x] Ronda 2 probada igual de punta a punta contra `127.0.0.1:8010`: método
      de contacto múltiple (queda completo en `notes`, el primero como
      `preferred_contact_method` estructurado) y el `Contact Us` general
      creando lead con `company`/`business_type`/`location`. Ambos leads de
      prueba verificados en base de datos y borrados después.
- [x] Ningún archivo de diseño/estilo existente se modificó — solo el
      `onClick`/destino de un botón y la adición de uno nuevo en Tecnovap.

## Estado

**Implementado y verificado localmente — 2026-07-12.** Pendiente: decidir cómo
subir estos cambios al repo remoto de ilg-website (rama + PR, o entrega de
diff) y configurar `INTERLINK_API_URL` en el entorno de producción del sitio.
