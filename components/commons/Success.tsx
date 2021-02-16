interface Props {
  message: string | null;
}

const Success: React.FC<Props> = ({ message }) => {
  if (!message) {
    return <></>;
  } else {
    return (
      <>
        <div>
          <p>{message}</p>
        </div>
        <style jsx>{`
          div {
            width: 100%;
            background-color: #28a745;
            padding: 1rem;
            border-radius: 5px;
          }
          div p {
            margin: 0;
            color: white;
          }
        `}</style>
      </>
    );
  }
};

export default Success;