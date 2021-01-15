import React from "react";
import Chessboard, { Position } from "chessboardjsx";

const Chess: React.FC = () => {
  const position: Position = { e5: "wK", e4: "wP", e7: "bK" };
  return (
    <div className="w-100 merch-store-container">
      <Chessboard position={position} />
    </div>
  );
};

export default Chess;
