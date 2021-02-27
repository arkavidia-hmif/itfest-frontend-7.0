import Link from "next/link";
import * as React from "react";
import { sponsors } from "utils/constants/sponsors";
import Tenants from "utils/constants/tenants";

const SponsoredBy: React.FC = () => {
  return (
    <>
      <div className="d-flex flex-column align-items-center mb-3">
        <h3>Sponsored By :</h3>
        <div className="d-flex justify-content-center align-items-center w-100 flex-wrap">
          {sponsors.map((sponsor, i) => (
            <div key={i}>
              <Link href={`/company-profile/${sponsor}`}>
                <img src={Tenants[sponsor.slug].logo} className={`sponsor-logo m-3 sponsor-${sponsor.size}`} />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <style jsx>
        {`
          .sponsor-1 {
            height: 3rem;
          }

          .sponsor-2 {
            height: 4rem;
          }

          .sponsor-3 {
            height: 8rem;
          }

          .sponsor-logo:hover {
            cursor: pointer;
          }
        `}
      </style>
    </>
  );
};

export default SponsoredBy;
