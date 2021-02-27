import { useMemo } from "react";
import { useRouter } from "next/dist/client/router";
import { MapContainer, Marker, ImageOverlay, Tooltip } from "react-leaflet";
import { CRS, icon, LatLngBoundsExpression, LatLngTuple } from "leaflet";
import Tenants from "utils/constants/tenants";
import "leaflet/dist/leaflet.css";

const Map: React.FC = () => {
  const router = useRouter();
  const center: LatLngTuple = [250, 575];
  const bounds: LatLngBoundsExpression = [
    [0, 0],
    [500, 1250],
  ];
  const maxBounds: LatLngBoundsExpression = [
    [-1000, -1000],
    [1000, 2000],
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
          title={tenant.name}
          icon={icon({
            iconUrl: tenant.sponsor ? "/img/marker_sponsor.png" : "/img/marker.png",
            iconSize: [24, 36],
            iconAnchor: [12, 36],
          })}
          eventHandlers={{
            click: () => {
              router.push(`/company-profile/${tenant.slug}`);
            }
          }}
          key={index}
        >
          <Tooltip offset={[0, -20]}>
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
            </div>
          </Tooltip>
        </Marker>
      ))
      }

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
    </MapContainer >
  );
};

export default Map;
