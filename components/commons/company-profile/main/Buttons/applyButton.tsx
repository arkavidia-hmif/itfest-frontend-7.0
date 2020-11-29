import * as React from "react";

const ApplyButton: React.FC = () => {
  return (
    <>
      <button className="button">Apply Now</button>
      <style jsx>{`
        .button {
            border-radius: 5px;
            border-color: transparent;
            background-color: #B296FE;
            color: white;
            min-width: 7rem;
            min-height: 2.4rem;
            font-size: 1.2rem;
        }
      `}</style>
    </>
  );
};

export default ApplyButton;