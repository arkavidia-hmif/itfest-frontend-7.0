import { LatLngTuple } from "leaflet";

export interface Tenant {
    name: string;
    logo: string;
    point: number;
    position: LatLngTuple;  /* Posisi di Map */
    url: string;
}