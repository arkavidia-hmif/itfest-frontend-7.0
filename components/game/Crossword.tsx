import { useLayoutEffect } from "react";
import Crossword from "react-crossword";

const CrossWord: React.FC = () => {
  const data = {
    id: "new",
    number: 2,
    name: "Crossword Puzzle",
    entries: [
      {
        id: "1-across",
        number: 1,
        humanNumber: "1",
        clue: "Toy on a string (2-2)",
        direction: "across",
        length: 4,
        group: ["1-across"],
        position: { x: 0, y: 0 },
        separatorLocations: {
          "-": [2],
        },
        solution: "YOYO",
      },
      {
        id: "2-across",
        number: 2,
        humanNumber: "2",
        clue: "Have a rest (3,4)",
        direction: "across",
        length: 7,
        group: ["2-across"],
        position: { x: 0, y: 2 },
        separatorLocations: {
          ",": [3],
        },
        solution: "LIEDOWN",
      },
      {
        id: "1-down",
        number: 1,
        humanNumber: "1",
        clue: "Colour (6)",
        direction: "down",
        length: 6,
        group: ["1-down"],
        position: { x: 0, y: 0 },
        separatorLocations: {},
        solution: "YELLOW",
      },
      {
        id: "3-down",
        number: 3,
        humanNumber: "3",
        clue: "Bits and bobs (4,3,4)",
        direction: "down",
        length: 7,
        group: ["3-down", "4-down"],
        position: { x: 3, y: 0 },
        separatorLocations: {
          ",": [4],
        },
        solution: "ODDSAND",
      },
      {
        id: "4-down",
        number: 4,
        humanNumber: "4",
        clue: "See 3 down",
        direction: "down",
        length: 4,
        group: ["3-down", "4-down"],
        position: { x: 6, y: 1 },
        separatorLocations: {},
        solution: "ENDS",
      },
      {
        id: "6-down",
        number: 6,
        humanNumber: "6",
        clue: "Tes",
        direction: "down",
        length: 4,
        group: ["6-down"],
        position: {
          x: 8,
          y: 5,
        },
        separatorLocations: {},
        solution: "test",
      },
    ],
    dimensions: {
      cols: 13,
      rows: 13,
    },
    solutionAvailable: false,
    dateSolutionAvailable: 1,
    crosswordType: "quick",
  };

  useLayoutEffect(() => {
    const className = "crossword__controls ";
    const crossName = "crossword__container__game";
    const items = Array.from(
      document.getElementsByClassName(
        className
      ) as HTMLCollectionOf<HTMLElement>
    );
    const crossword = Array.from(
      document.getElementsByClassName(
        crossName
      ) as HTMLCollectionOf<HTMLElement>
    );
    if (items) {
      for (const item of items) {
        item.style.display = "none";
      }
    }
    if (crossword) {
      for (const item of crossword) {
        item.style.marginBottom = "3rem";
      }
    }
  });

  return (
    <>
      <div className="mb-5">
        <Crossword data={data} />
      </div>

      <style jsx>{`
        .crossword * {
          font-family: Roboto !important;
        }
      `}</style>
    </>
  );
};

export default CrossWord;
