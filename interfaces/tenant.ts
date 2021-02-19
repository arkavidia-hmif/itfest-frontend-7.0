import { LatLngTuple } from "leaflet";

enum PageType {
  MAIN = 0,
  ALT = 1
}

export interface Tenant {
  name: string;
  logo: string;
  slug: string;
  position: LatLngTuple;  /* Posisi di Map */
  pageType: PageType; 
  aboutUs: string;
  galleryText: string;
  hiring: string;
  socialMedia: string;
  videoUrl: string;
  gallery: string[];
}