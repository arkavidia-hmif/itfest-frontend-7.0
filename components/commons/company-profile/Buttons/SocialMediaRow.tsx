import Link from "next/link";
import { TenatSocmed } from "interfaces/tenant";

interface Props {
  socmed: TenatSocmed
}

const SocialMediaRow: React.FC<Props> = ({ socmed }) => {




  return (
    <div className="d-flex flex-row">
      {socmed.instagram && <Link href={socmed.instagram}>
        <a>
          <img src="/img/social/ig.png" />
        </a>
      </Link>}
      {socmed.linkedin && <Link href={socmed.linkedin}>
        <a>
          <img src="/img/social/linkedin.png" />
        </a>
      </Link>}
      {socmed.email && <Link href={`mailto:${socmed.email}`}>
        <a>
          <img src="/img/social/mail.png" />
        </a>
      </Link>}
      <style jsx>{`
        a {
          margin: 0 0.25rem;
        }

        img {
          width: 40px;
          transition: filter 0.1s;
        }

        img:hover {
          filter: contrast(75%);
        }
      `}</style>
    </div>
  );
};

export default SocialMediaRow;