import { MapContainer, Marker, Popup, ImageOverlay } from "react-leaflet";
import { CRS, icon, LatLngBoundsExpression, LatLngTuple } from "leaflet";
import Link from "next/link";
import "leaflet/dist/leaflet.css";

const Map: React.FC = () => {
  const center: LatLngTuple = [125, 312.5];
  const bounds: LatLngBoundsExpression = [
    [0, 0],
    [250, 625],
  ];
  const maxBounds: LatLngBoundsExpression = [
    [-250, -625],
    [500, 1250]
  ];

  return (
    <MapContainer
      touchZoom={true}
      center={center}
      zoom={1}
      maxZoom={3}
      minZoom={-1}
      maxBounds={maxBounds}
      scrollWheelZoom={false}
      style={{ height: "80vh", width: "100%", backgroundColor: "transparent", zIndex: 0 }}
      crs={CRS.Simple}
    >
      <ImageOverlay
        url="img/indonesia.svg"
        bounds={bounds}
      />

      <Marker position={[125, 210]}
        title={"asd"}
        icon={icon({
          iconUrl: "/img/marker.png",
          iconSize: [24, 36],
          iconAnchor: [12, 36]
        })}
      >
        <Popup>
          <div id="popup-body" className="container">
            <div className="row">
              <div className="image col">
                <img src="img/dino.png" alt="Logo" />
              </div>
            </div>
            <div className="row pt-2">
              <div className="name col align-self-center justify-content-center">
                <p>Dino</p>
              </div>
            </div>
            <div className="row">
              <div className="info col">
                <Link href="#"><a><p>more &gt; &gt; &gt;</p></a></Link>
              </div>
            </div>
          </div>
        </Popup>
      </Marker>

      <style jsx>{`
        #popup-body {
          margin: 0;
          width: 100%;
          display: flex; 
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
        }

        img {
          min-width: 30px;
          width: 100%;
        }

        .name {
          text-align: center;
        }

        .name p {
          color: #000000;
          font-size: 1.2rem;
          margin: 0;
        }

        .info {
          cursor: pointer;
          margin-left: auto;
        }
        
        .info a {
          text-decoration: none;
        }
        
        .info p {
          color: #FE5982;
          margin: 0;
        }
      `}</style>
    </MapContainer>
  );
};


export default Map;