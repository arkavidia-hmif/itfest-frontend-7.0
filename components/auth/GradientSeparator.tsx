const GradientSeparator: React.FC = () => {
  return (
    <>
      <hr />
      <style jsx>{`
            hr {
              width: 40%;
              height: 0.4rem;
              background: linear-gradient(90deg, #FE789A 0%, #623FA2 100%);
              float: left;
              margin-top: -0.05rem;
              display: block;
            }
          `}</style>
    </>
  );
};
    
export default GradientSeparator;