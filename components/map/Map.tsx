import { useMemo } from "react";
import { MapContainer, Marker, Popup, ImageOverlay } from "react-leaflet";
import { CRS, icon, LatLngBoundsExpression, LatLngTuple } from "leaflet";
import Link from "next/link";
import Tenants from "utils/constants/tenants";
import "leaflet/dist/leaflet.css";

const Map: React.FC = () => {
  const center: LatLngTuple = [250, 625];
  const bounds: LatLngBoundsExpression = [
    [0, 0],
    [500, 1250],
  ];
  const maxBounds: LatLngBoundsExpression = [
    [-250, -625],
    [500, 1450],
  ];

  const tenantArray = useMemo(() => Object.values(Tenants), [Tenants]);

  return (
    <MapContainer
      attributionControl={false}
      touchZoom={true}
      center={center}
      zoom={0.1}
      maxZoom={2}
      minZoom={0}
      maxBounds={maxBounds}
      scrollWheelZoom={true}
      style={{
        height: "80vh",
        width: "100%",
        backgroundColor: "transparent",
        zIndex: 0,
      }}
      crs={CRS.Simple}
    >
      <ImageOverlay url="img/map.png" bounds={bounds} />

      {tenantArray.map((tenant, index) => (
        <Marker
          position={tenant.position}
          title={"asd"}
          icon={icon({
            iconUrl: "/img/marker.png",
            iconSize: [24, 36],
            iconAnchor: [12, 36],
          })}
          key={index}
        >
          <Popup>
            <div id="popup-body" className="container">
              <div className="row">
                <div className="image col">
                  <img src={tenant.logo} alt={tenant.name} />
                </div>
              </div>
              <div className="row pt-2">
                <div className="name col align-self-center justify-content-center">
                  <p>{tenant.name}</p>
                </div>
              </div>
              <div className="row">
                <div className="info col">
                  <Link
                    href={{
                      pathname: "/company-profile/[slug]",
                      query: { slug: tenant.slug },
                    }}
                  >
                    <a>
                      <p>more &gt; &gt; &gt;</p>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </Popup>
        </Marker>
      ))}

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
          color: #fe5982;
          margin: 0;
        }
      `}</style>
    </MapContainer>
  );
};

export default Map;
