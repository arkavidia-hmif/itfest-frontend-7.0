import * as React from "react";

const MeetButton: React.FC = () => {
  return (
    <>
      <button className="button">Meet</button>
      <style jsx>{`
        .button {
            border-radius: 0.6rem;
            border-color: transparent;
            background-color: #FE789A;
            color: white;
            min-width: 7rem;
            min-height: 2.4rem;
            font-size: 1.2rem;
            margin-right: 1.5rem;
        }
      `}</style>
    </>
  );
};

export default MeetButton;