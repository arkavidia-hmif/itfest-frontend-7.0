import * as React from "react";

interface Props {
  done: boolean;
}

const ApplyButton: React.FC<Props> = ({done}) => {
  return (
    <>
      {(done) ?
        <button className="button-done">Apply Now</button>
        :
        <button className="button-undone">Apply Now</button>
      }
      <style jsx>{`
        .button-done {
            border-radius: 5px;
            border-color: transparent;
            background-color: #B296FE;
            color: white;
            min-width: 7rem;
            min-height: 2.4rem;
            font-size: 1.2rem;
        }

        .button-undone {
            border-radius: 5px;
            border-color: transparent;
            background-color: rgba(0, 0, 0, 0.5);
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