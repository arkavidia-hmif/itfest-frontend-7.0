import { LatLngTuple } from "leaflet";

enum PageType {
  MAIN = 0,
  ALT = 1,
}

export interface TenatSocmed {
  email?: string
  linkedin?: string;
  instagram?: string;
}

export interface Tenant {
  id: number;
  name: string;
  logo: string;
  slug: string;
  position: LatLngTuple /* Posisi di Map */;
  pageType: PageType;
  aboutUs: string;
  galleryText: string;
  hiring?: string;
  socialMedia: TenatSocmed
  videoUrl: string;
  gallery: string[];
  contactLink: string;
}

export interface LiveTenant {
  id: number;
  slug: string;
  liveURL: string;
}
