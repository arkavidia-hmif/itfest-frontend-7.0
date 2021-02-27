import Link from 'next/link';
import * as React from 'react';
import { sponsors } from 'utils/constants/sponsors';
import Tenants from 'utils/constants/tenants';


const SponsoredBy: React.SFC = () => {

    return (
        <>
            <div className="d-flex flex-column align-items-center">
                <h3>Sponsored By :</h3>
                <div className="d-flex justify-content-center align-items-center w-100">
                    {
                        sponsors.map((sponsor) => (
                            <div>
                                <Link href={`/company-profile/${sponsor}`}>
                                    <img src={Tenants[sponsor].logo} className="sponsor-logo m-3" />
                                </Link>
                            </div>

                        ))
                    }
                </div>
            </div>
            <style jsx>
                {`
                    .sponsor-logo {
                        width: 10rem;
                    }

                    .sponsor-logo:hover {
                        cursor: pointer;
                    }
                `}
            </style>


        </>
    );
}

export default SponsoredBy;