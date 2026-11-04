import type { RestaurantConfigInput } from "@restaurant-platform/astro-template/config";

export const restaurantConfig = {
  "contractVersion": 1,
  "restaurantKey": "abretucorazon",
  "site": {
    "url": "https://eduardocr90.github.io/",
    "base": "/abretucorazon-restaurant"
  },
  "sanity": {
    "projectId": "lvtvr3ef",
    "dataset": "production"
  },
  "requiredSlugs": [
    "inicio",
    "carta",
    "restaurante",
    "reservas"
  ],
  "theme": {
    "preset": "elegant"
  },
  "assets": {
    "favicon": "/favicon.svg",
    "socialImage": {
      "path": "/og-default.png",
      "alt": "Abre Tu Corazón · imagen para compartir",
      "type": "image/png",
      "width": 1200,
      "height": 630
    },
    "imageOrigins": []
  },
  "deployment": {
    "provider": "github-pages",
    "reportEndpoint": "https://wanrzgumoamryuybmopa.supabase.co/functions/v1/publications"
  }
} satisfies RestaurantConfigInput;
