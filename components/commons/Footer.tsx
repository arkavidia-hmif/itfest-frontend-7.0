import * as React from "react";
import Link from "next/link";
import { Theme } from "styles/theme";

const Footer: React.FC = () => {
  return (
    <footer className="container-fluid mt-5">
      <div className="container mx-auto row mb-5">
        <div id="footer-social" className="col-lg-4">
          <img
            id="footer-logo"
            className="mb-3"
            src="https://arkavidia.id/img/logo.jpg"
          ></img>
          <ul id="social-link">
            <li>
              <Link href="https://instagram.com/arkavidia">
                <a>
                  <img src="https://arkavidia.id/img/social/ig.png"></img>
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://twitter.com/arkavidia_hmif">
                <a>
                  <img src="https://arkavidia.id/img/social/twitter.png"></img>
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://linkedin.com/company/arkavidia">
                <a>
                  <img src="https://arkavidia.id/img/social/linkedin.png"></img>
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://facebook.com/arkavidia">
                <a>
                  <img src="/img/social/fb.png"></img>
                </a>
              </Link>
            </li>
            <li>
              <Link href="http://line.me/ti/p/@arkavidia">
                <a>
                  <img src="/img/social/line.png"></img>
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div id="footer-link" className="col-lg-8">
          <ul>
            <li>
              <h3>COMPETITIONS</h3>
              <ul>
                <li>
                  <Link href="https://arkavidia.id/competition/competitive-programming">
                    <a>Competitive Programming</a>
                  </Link>
                </li>
                <li>
                  <Link href="https://arkavidia.id/competition/capture-the-flag">
                    <a>Capture the Flag</a>
                  </Link>
                </li>
                <li>
                  <Link href="https://arkavidia.id/competition/gamejam">
                    <a>Arkav Game Jam</a>
                  </Link>
                </li>
                <li>
                  <Link href="https://arkavidia.id/competition/datavidia">
                    <a>Datavidia</a>
                  </Link>
                </li>
                <li>
                  <Link href="/competition/arkalogica">
                    <a>Arkalogica</a>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <ul>
            <li>
              <h3>PRE-EVENTS</h3>
              <ul>
                <li>
                  <Link href="/preevent/technocamp">
                    <a>Technocamp</a>
                  </Link>
                </li>
                <li>
                  <Link href="/preevent/arkavidia-goes-to-school">
                    <a>Arkavidia Goes To School</a>
                  </Link>
                </li>
                <li>
                  <Link href="/preevent/arkavidia-academy">
                    <a>Arkavidia Academy</a>
                  </Link>
                </li>
                <li>
                  <Link href="/preevent/arkavidia-on-air">
                    <a>Arkavidia On Air</a>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <ul>
            <li>
              <h3>EVENTS</h3>
              <ul>
                <li>
                  <Link href="/event/it-festival">
                    <a>IT Fest</a>
                  </Link>
                </li>
                <li>
                  <Link href="/event/arkavidia-talks">
                    <a>Arkavidia Talks</a>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div id="bottom-footer" className="row p-2">
        ARKAVIDIA 7.0 - 2020
      </div>

      <style jsx>{`
        #bottom-footer {
          font-size: 1rem;
          background-color: black;
          color: white;
          justify-content: center;
          font-family: Viga;
        }
        ul {
          list-style-type: none;
        }
        #footer-logo {
          width: 100%;
          max-width: 400px;
        }
        #social-link {
          justify-content: flex-end;
          display: flex;
          padding: 0px;
          flex-direction: row;
          max-width: 400px;
        }

        #social-link li {
          margin-right: 10px;
        }
        #social-link li img {
          width: 40px;
          transition: filter 0.1s;
        }
        #social-link li img:hover {
          filter: contrast(75%);
        }

        #footer-link {
          display: flex;
          flex-direction: row;
          justify-content: space-around;
        }
        #footer-link ul {
          padding: 0;
        }
        #footer-link ul li {
          padding-top: 0.5rem;
        }
        #footer-link ul li a {
          font-size: 1rem;
          text-decoration: none;
          color: #000000;
        }
        #footer-link ul h3 {
          font-family: Viga;
          font-weight: 500;
          font-size: 1.5rem;
          color: ${Theme.colors.purple.dark};
          margin: 0;
        }
        @media (max-width: 992px) {
          #footer-logo {
            max-width: 250px;
          }
          #social-link {
            justify-content: center;
            max-width: 100%;
          }
          #footer-social {
            text-align: center;
          }
        }
        @media (max-width: 800px) {
          #footer-link {
            flex-direction: column;
          }
          #social-link {
            justify-content: flex-start;
          }
          #footer-social {
            text-align: left;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
