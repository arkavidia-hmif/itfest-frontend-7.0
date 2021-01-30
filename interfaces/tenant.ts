import { LatLngTuple } from "leaflet";

export interface Tenant {
  name: string;
  logo: string;
  slug: string;
  position: LatLngTuple;  /* Posisi di Map */
  aboutUs: string;
  galleryText: string;
  videoUrl: string;
  gallery: string[];
}