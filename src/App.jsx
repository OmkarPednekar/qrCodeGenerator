import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState();
  const [binary, setBinary] = useState();
  const [matrix, setMatrix] = useState([]);
  const [mark, setMark] = useState([]);

  // Initialize a 25x25 matrix (625 cells)
  var qrMatrix = Array.from({ length: 25 }, () => Array(25).fill([0, "||"]));
  var fixedPos = [
    [0, 0],
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
    [0, 5],
    [0, 6],
    [1, 0],
    [2, 0],
    [3, 0],
    [4, 0],
    [5, 0],
    [6, 0],
    [6, 1],
    [6, 2],
    [6, 3],
    [6, 4],
    [6, 5],
    [6, 6],
    [6, 6],
    [6, 6],
    [5, 6],
    [4, 6],
    [3, 6],
    [2, 6],
    [1, 6],
    [2, 2],
    [2, 3],
    [2, 4],
    [3, 2],
    [3, 3],
    [3, 4],
    [4, 2],
    [4, 3],
    [4, 4],
    [24, 0],
    [24, 1],
    [24, 2],
    [24, 3],
    [24, 4],
    [24, 5],
    [24, 6],
    [23, 0],
    [22, 0],
    [21, 0],
    [20, 0],
    [19, 0],
    [18, 0],
    [18, 1],
    [18, 2],
    [18, 3],
    [18, 4],
    [18, 5],
    [18, 6],
    [22, 6],
    [21, 6],
    [20, 6],
    [19, 6],
    [23, 6],
    [22, 2],
    [22, 3],
    [22, 4],
    [21, 2],
    [21, 3],
    [21, 4],
    [20, 2],
    [20, 3],
    [20, 4],
    [0, 24],
    [1, 24],
    [2, 24],
    [3, 24],
    [4, 24],
    [5, 24],
    [6, 24],
    [6, 23],
    [6, 22],
    [6, 21],
    [6, 20],
    [6, 19],
    [6, 18],
    [5, 18],
    [4, 18],
    [3, 18],
    [2, 18],
    [1, 18],
    [0, 18],
    [0, 19],
    [0, 20],
    [0, 21],
    [0, 22],
    [0, 23],
    [2, 20],
    [2, 21],
    [2, 22],
    [3, 20],
    [3, 21],
    [3, 22],
    [4, 20],
    [4, 21],
    [4, 22],
    [20, 20],
    [20, 19],
    [20, 18],
    [20, 17],
    [20, 16],
    [19, 16],
    [18, 16],
    [17, 16],
    [16, 16],
    [16, 17],
    [16, 18],
    [16, 19],
    [16, 20],
    [17, 20],
    [18, 20],
    [19, 20],
    [18, 18],
    [8, 6],
    [10, 6],
    [12, 6],
    [14, 6],
    [16, 6],
    [6, 8],
    [6, 10],
    [6, 12],
    [6, 14],
    [6, 16],
    [17, 8],
    [8, 0],
    [8, 1],
    [8, 2],
    [8, 3],
    [8, 8],
    [4, 8],
    [3, 8],
    [2, 8],
    [0, 8],
    [24, 8],
    [23, 8],
    [22, 8],
    [21, 8],
    [8, 17],
    [8, 20],
    [8, 21],
    [8, 22],
    [8, 24],
  ];
  var whitePos = [
    [1, 1],
    [1, 2],
    [1, 3],
    [1, 4],
    [1, 5],
    [2, 5],
    [3, 5],
    [4, 5],
    [5, 5],
    [5, 4],
    [5, 3],
    [5, 2],
    [5, 1],
    [4, 1],
    [3, 1],
    [2, 1],
    [7, 0],
    [7, 1],
    [7, 2],
    [7, 3],
    [7, 4],
    [7, 5],
    [7, 6],
    [7, 7],
    [6, 7],
    [5, 7],
    [4, 7],
    [3, 7],
    [2, 7],
    [1, 7],
    [0, 7],
    [1, 19],
    [1, 20],
    [1, 21],
    [1, 22],
    [1, 23],
    [2, 23],
    [3, 23],
    [4, 23],
    [5, 23],
    [5, 22],
    [5, 21],
    [5, 20],
    [5, 19],
    [4, 19],
    [3, 19],
    [2, 19],
    [1, 19],
    [0, 17],
    [1, 17],
    [2, 17],
    [3, 17],
    [4, 17],
    [5, 17],
    [6, 17],
    [7, 17],
    [7, 18],
    [7, 19],
    [7, 20],
    [7, 21],
    [7, 22],
    [7, 23],
    [7, 24],
    [17, 17],
    [17, 18],
    [17, 19],
    [18, 19],
    [19, 19],
    [19, 18],
    [19, 17],
    [18, 17],
    [19, 1],
    [19, 2],
    [19, 3],
    [19, 4],
    [19, 5],
    [20, 5],
    [21, 5],
    [22, 5],
    [23, 5],
    [23, 4],
    [23, 3],
    [23, 2],
    [23, 1],
    [22, 1],
    [21, 1],
    [20, 1],
    [17, 0],
    [17, 1],
    [17, 2],
    [17, 3],
    [17, 4],
    [17, 5],
    [17, 6],
    [17, 7],
    [18, 7],
    [19, 7],
    [20, 7],
    [21, 7],
    [22, 7],
    [23, 7],
    [24, 7],
    [9, 6],
    [11, 6],
    [13, 6],
    [15, 6],
    [6, 9],
    [6, 11],
    [6, 13],
    [6, 15],

    [8, 4],
    [8, 5],
    [8, 7],
    [7, 8],
    [5, 8],
    [1, 8],
    [20, 8],
    [19, 8],
    [18, 8],
    [8, 18],
    [8, 19],
    [8, 23],
  ];

  const getBinary = () => {
    let ascii = [];
    ascii.push("0100");
    ascii.push(input.length.toString(2).padStart(8, "0"));
    for (var i = 0; i < input.length; i++) {
      let asciiVal = input.charCodeAt(i);
      let binary = asciiVal.toString(2).padStart(8, "0");
      ascii.push(binary);
    }
    ascii.push("0000");
    let binaryString = ascii.join("");
    setBinary(binaryString);
    for (var x = 0; x < fixedPos.length; x++) {
      qrMatrix[fixedPos[x][0]][fixedPos[x][1]] = [1, "Y"];
    }
    for (var y = 0; y < whitePos.length; y++) {
      qrMatrix[whitePos[y][0]][whitePos[y][1]] = [0, "Y"];
    }
    // let direction = 1;
    // if (qrMatrix[row][col][1] == "X" && pointer < binaryString.length) {
    //   qrMatrix[row][col][0] = binaryString[pointer];
    //   qrMatrix[row][col][1] = "Y";
    //   pointer++;
    // }
    // let oddPointer = 1;
    // let evenPointer = 0;
    // for (var col = 24; col >= 0; col--) {
    //   for (var row = 24; row >= 0; row--) {
    //     if (
    //       col % 2 == 0 &&
    //       qrMatrix[row][col][1] == "X" &&
    //       evenPointer < binaryString.length
    //     ) {
    //       qrMatrix[row][col][0] = binaryString[evenPointer];
    //       qrMatrix[row][col][1] = "Y";
    //       evenPointer = evenPointer + 2;
    //     } else if (
    //       col % 2 != 0 &&
    //       qrMatrix[row][col][1] == "X" &&
    //       oddPointer < binaryString.length
    //     ) {
    //       console.log(oddPointer);
    //       qrMatrix[row][col][0] = binaryString[oddPointer];
    //       qrMatrix[row][col][1] = "Y";
    //       oddPointer = oddPointer + 2;
    //     }
    //   }
    // }
    // let pointer = 0;
    // let row = 24;
    // let col = 24;
    // let direction = 0;
    // while (pointer < binaryString.length) {
    //   console.log(row, col);

    //   if (row == 0) {
    //     col--;
    //     row = 24;
    //   }
    // }
    setMatrix(qrMatrix);
  };
  const markit = (row, col) => {
    let tmp = mark;
    tmp.push([row, col]);
    setMark(tmp);
    console.log(tmp);
  };
  return (
    <>
      <div>
        <input
          type="text"
          onChange={(e) => {
            setInput(e.target.value);
          }}
        ></input>
        <button onClick={getBinary}>GENERATE QR</button>
        {binary}
      </div>
      {matrix.length < 1 ? (
        <p></p>
      ) : (
        <div style={{ display: "flex" }}>
          <div
            style={{
              width: "500px",
              height: "500px",
              display: "grid",
              gridTemplateColumns: "repeat(25, 1fr)",
              gridTemplateRows: "repeat(25, 1fr)",
              border: "20px solid white",
              boxSizing: "border-box",
            }}
          >
            {matrix.map((data, index) => {
              return data.map((val, i) => {
                return (
                  <div
                    className="divitem"
                    key={i}
                    style={{
                      backgroundColor: val[0] == 1 ? "black" : "white",
                      // border: "1px solid #dce1e8",
                    }}
                  ></div>
                );
              });
            })}
          </div>
          <div
            style={{
              width: "700px",
              height: "700px",
              display: "grid",
              gridTemplateColumns: "repeat(25, 1fr)",
              gridTemplateRows: "repeat(25, 1fr)",
              // border: "20px solid white",
              boxSizing: "border-box",
            }}
          >
            {matrix.map((data, index) => {
              return data.map((val, i) => {
                return (
                  <div
                    key={i}
                    onClick={() => {
                      markit(index, i);
                    }}
                    className="divitem"
                    style={{
                      backgroundColor:
                        val[1] == "Y" ? "lightgray" : "greenyellow",
                      border:
                        val[0] == 1 ? "1px solid black" : "1px solid #dce1e8",
                      color:
                        val[1] == "Y"
                          ? val[0] == 0
                            ? "yellow"
                            : "red"
                          : "blue",
                      textAlign: "center",

                      // transform:
                      //   val[1] == "|" ? `rotate(${(360 % index) + 1}deg)` : "",
                    }}
                  >
                    {val[0]}
                  </div>
                );
              });
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default App;
