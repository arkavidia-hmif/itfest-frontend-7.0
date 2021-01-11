import { MapContainer, Marker, Popup, ImageOverlay } from "react-leaflet";
import { CRS, LatLngBoundsExpression, LatLngTuple } from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

const Map : React.FC = () => {
  const center : LatLngTuple= [125, 312.5];
  const bounds : LatLngBoundsExpression = [
    [0, 0],
    [250, 625],
  ];

  return (
    <MapContainer
      center={center}
      zoom={1}
      scrollWheelZoom={false}
      style={{ height: "80vh", width: "100%", backgroundColor: "white", zIndex: 0 }}
      crs={CRS.Simple}
      minZoom={1}
    >
      <ImageOverlay
        url="img/indonesia.svg"
        bounds={bounds}
      />
      <Marker position={center}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};


export default Map;